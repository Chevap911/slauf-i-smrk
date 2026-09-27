import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabase/client';

export const dynamic = 'force-dynamic';

// Besplatni Supabase projekt se pauzira nakon tjedan dana bez prometa, a upita je
// nekoliko mjesečno. Kad je pauziran, upiti s weba ne ulaze u bazu ni u CRM.
// Vercel cron (vercel.json) zove ovo svaki dan.
export async function GET() {
    const { error } = await supabase.from('inquiries').select('id', { count: 'exact', head: true });
    return NextResponse.json({ ok: !error, at: new Date().toISOString() });
}
