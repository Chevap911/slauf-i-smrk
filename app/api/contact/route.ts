import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabase/client';
import { Resend } from 'resend';
import { AdminNotificationEmail, ClientInquiryEmail, HotLeadEmail } from '@/components/emails/InquiryEmail';

const resend = new Resend(process.env.RESEND_API_KEY!);

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
            try {
                await resend.emails.send({
                    from: 'Šlauf i Šmrk <info@slaufismrk.com>',
                    to: 'slauf.i.smrk@gmail.com',
                    subject: `🔥 HOT LEAD (Korak ${step}): ${formData.name} — ${step === 1 ? (formData.city || 'Nepoznat grad') : serviceNameReadable}`,
                    react: HotLeadEmail({
                        step,
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        city: formData.city,
                        serviceName: step === 2 ? serviceNameReadable : undefined,
                    }) as React.ReactElement,
                });
            } catch (emailError) {
                console.error(`Hot lead email (step ${step}) failed:`, emailError);
            }
            return NextResponse.json({ success: true });
        }

        // ─── Mode: partial | step2 | final — DB save ─────────────────────────
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
                ? `Nedovršeni lead — ${isPartial ? 'Korak 1' : 'Korak 2'}.`
                : formData.message,
            estimated_price_min: minPrice,
            estimated_price_max: maxPrice,
        };

        let inquiryId = leadId ?? null;

        if (inquiryId) {
            const { data, error: updateError } = await supabase
                .from('inquiries')
                .update(inquiryPayload)
                .eq('id', inquiryId)
                .select('id')
                .single();

            if (updateError) {
                console.error('Database Update Error:', updateError);
                throw updateError;
            }

            inquiryId = data?.id ?? inquiryId;
        } else {
            const { data, error: insertError } = await supabase
                .from('inquiries')
                .insert([inquiryPayload])
                .select('id')
                .single();

            if (insertError) {
                console.error('Database Insert Error:', insertError);
                throw insertError;
            }

            inquiryId = data?.id ?? null;
        }

        // Partial i step2 završavaju ovdje — email šalje frontend nakon timera
        if (isPartial || isStep2) {
            return NextResponse.json({ success: true, leadId: inquiryId });
        }

        // ─── Final submit: šalji email administratoru i klijentu ─────────────
        if (isFinal) {
            try {
                await resend.emails.send({
                    from: 'Šlauf i Šmrk <info@slaufismrk.com>',
                    to: 'slauf.i.smrk@gmail.com',
                    subject: `NOVI UPIT: ${formData.name} - ${serviceNameReadable}`,
                    react: AdminNotificationEmail({
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        city: formData.city,
                        address: formData.address,
                        serviceName: serviceNameReadable,
                        estimatedPriceMin: estimatedPrice.min,
                        estimatedPriceMax: estimatedPrice.max,
                        message: formData.message,
                        details: formData,
                    }) as React.ReactElement,
                });

                await resend.emails.send({
                    from: 'Šlauf i Šmrk <info@slaufismrk.com>',
                    to: formData.email,
                    subject: 'Vaš upit je zaprimljen - Šlauf i Šmrk',
                    react: ClientInquiryEmail({
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        city: formData.city,
                        address: formData.address,
                        serviceName: serviceNameReadable,
                        estimatedPriceMin: estimatedPrice.min,
                        estimatedPriceMax: estimatedPrice.max,
                        message: formData.message,
                        details: formData,
                    }) as React.ReactElement,
                });

                console.log('Emails sent successfully via Resend');
            } catch (emailError) {
                console.error('Failed to send emails via Resend:', emailError);
            }
        }

        return NextResponse.json({ success: true, leadId: inquiryId });
    } catch (error) {
        console.error('Server error handling contact submission:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
