import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { supabase } from '@/utils/supabase/client';
import { javiSvima, primatelji } from '@/lib/upiti/obavijest';

export const dynamic = 'force-dynamic';

// Besplatni Supabase projekt se pauzira nakon tjedan dana bez prometa, a upita je
// nekoliko mjesečno. Kad je pauziran, upiti s weba ne ulaze u bazu ni u CRM.
// Vercel cron (vercel.json) zove ovo svaki dan.
//
// Od 12. 10. 2026. isti poziv šalje i jutarnju kontrolnu poruku kroz oba kanala obavijesti
// (mail i Telegram). Ako jedno jutro ne stigne, kanal je pukao: popravi ga prije nego propadne
// pravi upit. Uz SUPABASE_SERVICE_ROLE_KEY poruka ponavlja i upite iz zadnja 24 sata, pa se
// vidi i upit čija obavijest nije prošla.

type Upit = { created_at: string; service: string | null; phone: string | null; details: { _meta?: { obavijest?: { mail?: boolean; telegram?: boolean | null } } } | null };

// Samo Vercel cron smije slati kontrolnu poruku, inače bi je svatko mogao okidati
function odCrona(req: Request) {
    const tajna = process.env.CRON_SECRET;
    if (tajna) return req.headers.get('authorization') === `Bearer ${tajna}`;
    return (req.headers.get('user-agent') ?? '').startsWith('vercel-cron/');
}

async function upitiZadnjih24h(): Promise<Upit[] | null> {
    const kljuc = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!kljuc || !url) return null;
    const admin = createClient(url, kljuc, { auth: { persistSession: false } });
    const od = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const { data, error } = await admin
        .from('inquiries')
        .select('created_at, service, phone, details')
        .gte('created_at', od)
        .order('created_at', { ascending: true });
    if (error) {
        console.error('Kontrolna poruka: upiti se ne mogu pročitati', error.message);
        return null;
    }
    return data as Upit[];
}

const sat = (iso: string) =>
    new Date(iso).toLocaleTimeString('hr-HR', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Zagreb' });

export async function GET(req: Request) {
    const { error } = await supabase.from('inquiries').select('id', { count: 'exact', head: true });
    const bazaOk = !error;

    if (!odCrona(req)) return NextResponse.json({ ok: bazaOk, at: new Date().toISOString() });

    const upiti = await upitiZadnjih24h();
    const redovi = upiti?.map((u) => {
        const o = u.details?._meta?.obavijest;
        const bez = o && !o.mail && o.telegram !== true ? ' (OBAVIJEST NIJE PROŠLA)' : '';
        return `${sat(u.created_at)} ${u.service ?? 'upit'}, ${u.phone ?? 'bez broja'}${bez}`;
    });
    const tekst = [
        'Jutarnja provjera obavijesti, Šlauf i Šmrk: ova poruka je stigla, kanal radi.',
        'Ako je jedno jutro ne dobiješ, obavijesti o upitima ne stižu.',
        upiti === null
            ? 'Popis upita: Supabase, tablica inquiries.'
            : redovi && redovi.length
              ? `Upiti u zadnja 24 h (${redovi.length}):\n${redovi.join('\n')}`
              : 'Upita u zadnja 24 h nije bilo.',
        bazaOk ? null : 'PAŽNJA: baza upita ne odgovara. Upiti se možda ne spremaju.',
    ].filter(Boolean).join('\n\n');

    const ishod = await javiSvima(
        'Jutarnja provjera',
        {
            from: 'Šlauf i Šmrk <info@slaufismrk.com>',
            to: primatelji(),
            subject: `Provjera obavijesti: radi${upiti ? `, ${upiti.length} upita u 24 h` : ''}`,
            text: tekst,
        },
        tekst,
    );

    return NextResponse.json({ ok: bazaOk, provjera: ishod, upita: upiti?.length ?? null, at: new Date().toISOString() });
}
