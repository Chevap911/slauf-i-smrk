import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabase/client';
import { AdminNotificationEmail, ClientInquiryEmail, HotLeadEmail } from '@/components/emails/InquiryEmail';
import { javiSvima, posaljiMail, primatelji, type Poruka } from '@/lib/upiti/obavijest';

// Slanje i provjera rezultata su u lib/upiti/obavijest.ts (mail + Telegram, vidi docs/upiti-dostava.md)
const OD = 'Šlauf i Šmrk <info@slaufismrk.com>';

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
            const naslov = `🔥 HOT LEAD (Korak ${step}): ${formData.name}, ${formData.phone ? `${formData.phone}, ` : ''}${step === 1 ? (formData.city || 'Nepoznat grad') : serviceNameReadable}`;
            await javiSvima(`Hot lead (korak ${step})`, {
                from: OD,
                to: primatelji(),
                subject: naslov,
                react: HotLeadEmail({
                    step,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    city: formData.city,
                    serviceName: step === 2 ? serviceNameReadable : undefined,
                }) as React.ReactElement,
            }, naslov);
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

        // ─── Final submit: obavijest nama (mail + Telegram) i potvrda klijentu ──
        let obavijestOk = false;
        if (isFinal) {
            const naslov = `NOVI UPIT: ${serviceNameReadable}, ${formData.phone || 'bez broja'}${formData.name && formData.name !== 'Brzi upit (web)' && formData.name !== 'N/A' ? `, ${formData.name}` : ''}`;
            const adminPoruka: Poruka = {
                from: OD,
                to: primatelji(),
                // Broj u naslovu: vidi se već u obavijesti na mobitelu, bez otvaranja maila (brzina odgovora)
                subject: naslov,
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
            // Telegram: sve što treba za poziv, bez otvaranja maila
            const tekst = [
                naslov,
                formData.surfaceSize ? `Veličina: ${formData.surfaceSize} m²` : null,
                minPrice ? `Prikazana cijena: ${minPrice === maxPrice ? `od ${minPrice}` : `${minPrice} - ${maxPrice}`} €` : null,
                formData.city && formData.city !== 'N/A' ? `Mjesto: ${formData.city}` : null,
                formData.message ? `Poruka: ${formData.message}` : null,
                formData.landing_page ? `Stranica: ${formData.landing_page}` : null,
                dbOk ? null : 'PAŽNJA: upit NIJE spremljen u bazu, zapiši broj odmah.',
            ].filter(Boolean).join('\n');

            const ishod = await javiSvima('Novi upit', adminPoruka, tekst);
            if (!ishod.mail) {
                // Rezerva ako Resend odbije domenu slaufismrk.com (DNS ili verifikacija). Resendova
                // testna adresa smije slati samo na e-mail vlasnika Resend računa (slauf.i.smrk).
                ishod.mail = await posaljiMail('Novi upit (rezervni pošiljatelj)', {
                    ...adminPoruka,
                    from: 'Šlauf i Šmrk <onboarding@resend.dev>',
                    to: 'slauf.i.smrk@gmail.com',
                });
            }
            obavijestOk = ishod.mail || ishod.telegram === true;

            // Ishod obavijesti uz upit u bazi, da se vidi koji upit možda nitko nije vidio
            if (dbOk && inquiryId) {
                const { error: metaError } = await supabase
                    .from('inquiries')
                    .update({ details: { ...inquiryPayload.details, _meta: { ...inquiryPayload.details._meta, obavijest: ishod } } })
                    .eq('id', inquiryId);
                if (metaError) console.error('Ishod obavijesti nije zapisan u bazu:', metaError.message);
            }

            // Potvrda klijentu, samo na pravu adresu. Landing forme su do 12. 10. 2026. slale
            // lp-upit@slaufismrk.com kao "email kupca", pa bi potvrda odbijala na našoj domeni.
            const email = typeof formData.email === 'string' ? formData.email.trim() : '';
            if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) && !email.toLowerCase().endsWith('@slaufismrk.com')) {
                await posaljiMail('Potvrda klijentu', {
                    from: OD,
                    to: email,
                    subject: 'Vaš upit je zaprimljen - Šlauf i Šmrk',
                    react: ClientInquiryEmail({
                        name: formData.name || 'Klijent',
                        email,
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

        // Greška samo ako upit nije nigdje: ni u bazi ni u jednoj obavijesti. Tada forma kaže
        // korisniku da nazove ili pošalje WhatsApp, umjesto da lažno javi "zaprimljeno".
        if (isFinal && !dbOk && !obavijestOk) {
            return NextResponse.json({ error: 'Submission failed' }, { status: 500 });
        }

        return NextResponse.json({ success: true, leadId: inquiryId });
    } catch (error) {
        console.error('Server error handling contact submission:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
