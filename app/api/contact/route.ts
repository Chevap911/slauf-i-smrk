import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabase/client';
import { Resend } from 'resend';
import { AdminNotificationEmail } from '@/components/emails/InquiryEmail';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Destructure data from frontend
        const { formData, estimatedPrice } = body;

        // 1. Save to Supabase CRM
        const { error: dbError } = await supabase
            .from('inquiries')
            .insert([
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    city: formData.city,
                    service: formData.service,
                    details: formData, // the entire JSON of service-specific configs
                    message: formData.message,
                    estimated_price_min: estimatedPrice.min,
                    estimated_price_max: estimatedPrice.max,
                }
            ]);

        if (dbError) {
            console.error('Database Error:', dbError);
            return NextResponse.json({ error: 'Failed to save inquiry to database' }, { status: 500 });
        }

        const serviceNames: Record<string, string> = {
            yard: 'Čišćenje okućnice',
            carpet: 'Tepisi i garniture',
            facade: 'Čišćenje fasade',
            pool: 'Pranje bazena',
            car: 'Pranje automobila'
        };

        const serviceNameReadable = serviceNames[formData.service] || formData.service;

        // 2. Send Emails via Resend
        try {
            // First, send notification to admin
            await resend.emails.send({
                from: 'Šlauf i Šmrk <onboarding@resend.dev>', // MUST BE verified domain in Resend
                to: 'slauf.i.smrk@gmail.com', // Where you want to receive new lead notifications
                subject: `NOVI UPIT: ${formData.name} - ${serviceNameReadable}`,
                react: AdminNotificationEmail({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    city: formData.city,
                    serviceName: serviceNameReadable,
                    estimatedPriceMin: estimatedPrice.min,
                    estimatedPriceMax: estimatedPrice.max,
                    message: formData.message,
                    details: formData
                }) as React.ReactElement,
            });

            // Second, send confirmation to client
            // NOTE: Resend test keys (onboarding@resend.dev) CANNOT send to arbitrary emails (like the client's email)
            // unless you have a verified custom domain. If you do verify a domain later, change the `from` below 
            // to something like info@slaufismrk.com, and uncomment this block.
            /*
            await resend.emails.send({
                from: 'Šlauf i Šmrk <onboarding@resend.dev>',
                to: formData.email,
                subject: `Vaš upit je zaprimljen - Šlauf i Šmrk`,
                react: ClientInquiryEmail({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    serviceName: serviceNameReadable,
                    estimatedPriceMin: estimatedPrice.min,
                    estimatedPriceMax: estimatedPrice.max,
                    message: formData.message
                }) as React.ReactElement,
            });
            */
            console.log("Emails sent successfully via Resend");
        } catch (emailError) {
            // We catch email errors so we don't return 500 to the client if only emails fail
            // since the DB part already succeeded.
            console.error('Failed to send emails via Resend:', emailError);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Server error handling contact submission:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
