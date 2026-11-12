import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { supabase } from '@/utils/supabase/client';
import { posaljiMail, primatelji } from '@/lib/upiti/obavijest';

export const dynamic = 'force-dynamic';

// Besplatni Supabase projekt se pauzira nakon tjedan dana bez prometa, a upita je
// nekoliko mjesečno. Kad je pauziran, upiti s weba ne ulaze u bazu ni u CRM.
// Vercel cron (vercel.json) zove ovo svaki dan.
//
// Od 12. 10. 2026. isti poziv šalje i kontrolni mail istim putem kao mail o upitu.
// Od 12. 11. 2026. (Marko: zatrpava inbox) mail stiže samo ponedjeljkom, a poziv svaki dan
// ostaje zbog baze. Ako ponedjeljkom ne stigne, mailovi o upitima ne stižu: popravi to prije
// nego propadne pravi upit. Uz SUPABASE_SERVICE_ROLE_KEY mail ponavlja i upite iz zadnjih 7 dana.

type Upit = { created_at: string; service: string | null; phone: string | null; details: { _meta?: { obavijest?: { mail?: boolean } } } | null };

// Samo Vercel cron smije slati kontrolni mail (Vercel šalje CRON_SECRET kao Bearer). Bez tajne
// nema maila: user-agent se može lažirati, a petlja bi potrošila Resend kvotu za prave upite.
function odCrona(req: Request) {
    const tajna = process.env.CRON_SECRET;
    if (!tajna) {
        console.error('CRON_SECRET nije postavljen na Vercelu: jutarnji kontrolni mail se ne šalje');
        return false;
    }
    return req.headers.get('authorization') === `Bearer ${tajna}`;
}

async function upitiZadnjih7Dana(): Promise<Upit[] | null> {
    const kljuc = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!kljuc || !url) return null;
    const admin = createClient(url, kljuc, { auth: { persistSession: false } });
    const od = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
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
    new Date(iso).toLocaleString('hr-HR', { day: 'numeric', month: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Zagreb' });

const jePonedjeljak = () =>
    new Intl.DateTimeFormat('en-US', { weekday: 'short', timeZone: 'Europe/Zagreb' }).format(new Date()) === 'Mon';

export async function GET(req: Request) {
    const { error } = await supabase.from('inquiries').select('id', { count: 'exact', head: true });
    const bazaOk = !error;

    if (!odCrona(req)) return NextResponse.json({ ok: bazaOk, at: new Date().toISOString() });

    // Baza je dirnuta, a mail ide samo ponedjeljkom. Ako je baza pala, javi odmah svaki dan.
    if (bazaOk && !jePonedjeljak()) return NextResponse.json({ ok: true, mail: false, at: new Date().toISOString() });

    const upiti = await upitiZadnjih7Dana();
    const redovi = upiti?.map((u) => {
        const o = u.details?._meta?.obavijest;
        // Broj samo uz upit čiji mail nije prošao; za ostale je već u mailu o upitu
        return o && !o.mail
            ? `${sat(u.created_at)} ${u.service ?? 'upit'}, ${u.phone ?? 'bez broja'} (MAIL O UPITU NIJE PROŠAO, nazovi)`
            : `${sat(u.created_at)} ${u.service ?? 'upit'}`;
    });
    const tekst = [
        bazaOk ? null : 'PAŽNJA: baza upita ne odgovara. Upiti se možda ne spremaju.',
        'Tjedna provjera, Šlauf i Šmrk: ovaj mail je stigao, znači da i mailovi o upitima s weba stižu.',
        'Ako ga ponedjeljkom ne dobiješ, mailovi o upitima ne stižu. Upiti su i dalje u bazi.',
        upiti === null
            ? 'Popis upita: Supabase, tablica inquiries.'
            : redovi && redovi.length
              ? `Upiti u zadnjih 7 dana (${redovi.length}):\n${redovi.join('\n')}`
              : 'Upita u zadnjih 7 dana nije bilo.',
    ].filter(Boolean).join('\n\n');

    const mailOk = await posaljiMail('Tjedna provjera', {
        from: 'Web upit Šlauf i Šmrk <upiti@slaufismrk.com>',
        to: primatelji(),
        subject: bazaOk
            ? `Provjera upita s weba: radi${upiti ? `, ${upiti.length} upita u 7 dana` : ''}`
            : 'PAŽNJA: baza upita s weba ne radi',
        text: tekst,
    });

    return NextResponse.json({ ok: bazaOk, mail: mailOk, at: new Date().toISOString() });
}
