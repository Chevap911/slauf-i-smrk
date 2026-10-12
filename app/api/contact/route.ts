import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabase/client';
import { Resend } from 'resend';
import { AdminNotificationEmail, ClientInquiryEmail, HotLeadEmail } from '@/components/emails/InquiryEmail';

const resend = new Resend(process.env.RESEND_API_KEY!);

type Poruka = Parameters<typeof resend.emails.send>[0];

// Resend SDK ne baca grešku kad API odbije mail, nego vraća { data, error }. Do 12. 10. 2026.
// kod je hvatao samo iznimke, pa je u logu pisalo "sent" i za mail koji nikad nije otišao.
async function posalji(oznaka: string, poruka: Poruka): Promise<boolean> {
    try {
        const { data, error } = await resend.emails.send(poruka);
        if (error) {
            console.error(`${oznaka}: Resend je odbio mail`, JSON.stringify(error));
            return false;
        }
        console.log(`${oznaka}: poslano, Resend id ${data?.id}`);
        return true;
    } catch (e) {
        console.error(`${oznaka}: iznimka pri slanju`, e);
        return false;
    }
}

const serviceNames: Record<string, string> = {
    facade: 'Pranje fasade',
    yard: 'Pranje okućnice',
    terrace: 'Pranje terasa',
    pavers: 'Pranje tlakavaca',
    driveway: 'Pranje prilaza',
    stone: 'Čišćenje kamenih površina',
    wood: 'Čišćenje drvenih površina',
    chemical: 'Kemijsko čišćenje namještaja',
    car: 'Detailing automobila',
    pool: 'Pranje bazena',
    grave: 'Održavanje grobnih mjesta',
    other: 'Ostalo / nije odabrano',
};

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { formData, estimatedPrice, mode = 'final', leadId } = body;

        const serviceNameReadable = serviceNames[formData.service] || 'Lead u tijeku';
        const minPrice = estimatedPrice?.min && estimatedPrice.min > 0 ? estimatedPrice.min : null;
        const maxPrice = estimatedPrice?.max && estimatedPrice.max > 0 ? estimatedPrice.max : null;

        // ─── Mode: hotlead_email ──────────────────────────────────────────────
        // Šalje samo email, bez DB operacija.
        // Poziva se s frontenda nakon isteka timera.
        if (mode === 'hotlead_email') {
            const step = body.step as 1 | 2;
            await posalji(`Hot lead mail (korak ${step})`, {
                from: 'Šlauf i Šmrk <info@slaufismrk.com>',
                to: 'slauf.i.smrk@gmail.com',
                subject: `🔥 HOT LEAD (Korak ${step}): ${formData.name}, ${formData.phone ? `${formData.phone}, ` : ''}${step === 1 ? (formData.city || 'Nepoznat grad') : serviceNameReadable}`,
                react: HotLeadEmail({
                    step,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    city: formData.city,
                    serviceName: step === 2 ? serviceNameReadable : undefined,
                }) as React.ReactElement,
            });
            return NextResponse.json({ success: true });
        }

        // ─── Mode: partial | step2 | final, DB save ─────────────────────────
        const isPartial = mode === 'partial';
        const isStep2 = mode === 'step2';
        const isFinal = mode === 'final';

        const inquiryPayload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            city: formData.city,
            service: serviceNameReadable,
            details: {
                ...formData,
                _meta: {
                    mode,
                    marketingConsent: Boolean(formData.marketingConsent),
                    savedAt: new Date().toISOString(),
                },
            },
            message: (isPartial || isStep2)
                ? `Nedovršeni lead, ${isPartial ? 'Korak 1' : 'Korak 2'}.`
                : formData.message,
            estimated_price_min: minPrice,
            estimated_price_max: maxPrice,
        };

        let inquiryId = leadId ?? null;
        let dbOk = false;

        // DB spremanje NIJE fatalno: ako padne (RLS/schema/env), svejedno šaljemo email da lead ne propadne
        try {
            if (inquiryId) {
                const { data, error: updateError } = await supabase
                    .from('inquiries')
                    .update(inquiryPayload)
                    .eq('id', inquiryId)
                    .select('id')
                    .single();
                if (updateError) throw updateError;
                inquiryId = data?.id ?? inquiryId;
            } else {
                const { data, error: insertError } = await supabase
                    .from('inquiries')
                    .insert([inquiryPayload])
                    .select('id')
                    .single();
                if (insertError) throw insertError;
                inquiryId = data?.id ?? null;
            }
            dbOk = true;
        } catch (dbError) {
            console.error('Database error (non-fatal, nastavljam na email):', dbError);
        }

        // Partial i step2 završavaju ovdje, email šalje frontend nakon timera
        if (isPartial || isStep2) {
            return NextResponse.json({ success: true, leadId: inquiryId });
        }

        // ─── Final submit: šalji email administratoru i klijentu ─────────────
        let adminOk = false;
        if (isFinal) {
            // 1. Email administratoru
            const adminPoruka: Poruka = {
                from: 'Šlauf i Šmrk <info@slaufismrk.com>',
                to: 'slauf.i.smrk@gmail.com',
                // Broj u naslovu: vidi se već u obavijesti na mobitelu, bez otvaranja maila (brzina odgovora)
                subject: `NOVI UPIT: ${serviceNameReadable}, ${formData.phone || 'bez broja'}${formData.name && formData.name !== 'Brzi upit (web)' ? `, ${formData.name}` : ''}`,
                react: AdminNotificationEmail({
                    name: formData.name || 'N/A',
                    email: formData.email || 'N/A',
                    phone: formData.phone || 'N/A',
                    city: formData.city || '',
                    address: formData.address || '',
                    serviceName: serviceNameReadable,
                    estimatedPriceMin: estimatedPrice?.min ?? 0,
                    estimatedPriceMax: estimatedPrice?.max ?? 0,
                    message: formData.message || '',
                    details: formData,
                }) as React.ReactElement,
            };
            adminOk = await posalji('Admin mail', adminPoruka);
            if (!adminOk) {
                // Rezerva ako Resend odbije domenu slaufismrk.com (DNS ili verifikacija). Resendova
                // testna adresa smije slati samo na e-mail vlasnika Resend računa; ako to nije ova
                // adresa, i rezerva padne, ali upit je i dalje spremljen u bazi (tablica inquiries).
                adminOk = await posalji('Admin mail (rezerva)', { ...adminPoruka, from: 'Šlauf i Šmrk <onboarding@resend.dev>' });
            }

            // 2. Email klijentu (potvrda)
            if (formData.email && formData.email.includes('@')) {
                await posalji('Potvrda klijentu', {
                    from: 'Šlauf i Šmrk <info@slaufismrk.com>',
                    to: formData.email,
                    subject: 'Vaš upit je zaprimljen - Šlauf i Šmrk',
                    react: ClientInquiryEmail({
                        name: formData.name || 'Klijent',
                        email: formData.email,
                        phone: formData.phone || '',
                        city: formData.city || '',
                        address: formData.address || '',
                        serviceName: serviceNameReadable,
                        estimatedPriceMin: estimatedPrice?.min ?? 0,
                        estimatedPriceMax: estimatedPrice?.max ?? 0,
                        message: formData.message || '',
                        details: formData,
                    }) as React.ReactElement,
                });
            }
        }

        // Vrati grešku samo ako baš ništa nije uspjelo (ni DB ni email)
        if (isFinal && !dbOk && !adminOk) {
            return NextResponse.json({ error: 'Submission failed' }, { status: 500 });
        }

        return NextResponse.json({ success: true, leadId: inquiryId });
    } catch (error) {
        console.error('Server error handling contact submission:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
