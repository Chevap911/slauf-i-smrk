import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabase/client';
import { Resend } from 'resend';
// Note: We'll import the React Email template later once we design it.

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Destructure data from frontend
        const { formData, estimatedPrice } = body;

        // 1. Save to Supabase CRM
        const { data: dbData, error: dbError } = await supabase
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
            ])
            .select()
            .single();

        if (dbError) {
            console.error('Database Error:', dbError);
            return NextResponse.json({ error: 'Failed to save inquiry to database' }, { status: 500 });
        }

        // 2. We'll add Resend email logic here once we have the API key!

        return NextResponse.json({ success: true, inquiryId: dbData.id });
    } catch (error) {
        console.error('Server error handling contact submission:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
