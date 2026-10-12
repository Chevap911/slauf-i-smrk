import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabase/client';
import { AdminNotificationEmail } from '@/components/emails/InquiryEmail';
import { posaljiMail, primatelji, type Poruka } from '@/lib/upiti/obavijest';

// Spremanje u bazu i mail moraju stati u jedan poziv i kad Resend sporo odgovara
export const maxDuration = 30;

// Slanje i provjera rezultata su u lib/upiti/obavijest.ts (vidi docs/upiti-dostava.md).
// Mail o upitu nama ide s posebne adrese, odvojeno od info@ (12. 10. 2026.).
const OD_UPIT = 'Web upit Šlauf i Šmrk <upiti@slaufismrk.com>';

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
    // Landinzi za oglase šalju svoje oznake
    grave_maintenance: 'Održavanje grobnih mjesta',
    b2b_commercial: 'Poslovni objekti',
    other: 'Ostalo / nije odabrano',
};

// Samo jednostavne vrijednosti, skraćene. Ruta je javna, pa ne sprema ni ne šalje što god stigne.
const MAX_ZNAKOVA = 2000;
function ocisti(ulaz: unknown): Record<string, string | number | boolean | null> {
    const van: Record<string, string | number | boolean | null> = {};
    if (!ulaz || typeof ulaz !== 'object') return van;
    for (const [k, v] of Object.entries(ulaz as Record<string, unknown>).slice(0, 40)) {
        if (typeof v === 'string') van[k] = v.slice(0, MAX_ZNAKOVA);
        else if (typeof v === 'number' || typeof v === 'boolean' || v === null) van[k] = v;
    }
    return van;
}

const iznos = (v: unknown) => (typeof v === 'number' && v > 0 && v < 1_000_000 ? Math.round(v) : null);
const tekstPolja = (v: unknown) => (typeof v === 'string' ? v.trim() : '');

export async function POST(req: Request) {
    let body: { mode?: unknown; formData?: unknown; estimatedPrice?: { min?: unknown; max?: unknown } };
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: 'Neispravan zahtjev' }, { status: 400 });
    }

    // Sve forme na webu šalju samo završni upit. Stari načini (hotlead_email, partial, step2) više
    // ne postoje: nijedna forma ih ne zove, a hotlead je slao mail bez traga u bazi.
    if ((body.mode ?? 'final') !== 'final') {
        return NextResponse.json({ error: 'Nepodržan način' }, { status: 400 });
    }

    const formData = ocisti(body.formData);

    // Skriveno polje koje popune samo botovi: tiho prihvati, ništa ne spremaj ni ne šalji
    if (tekstPolja(formData.honeypot)) return NextResponse.json({ success: true });

    const phone = tekstPolja(formData.phone);
    if (phone.replace(/\D/g, '').length < 6) {
        return NextResponse.json({ error: 'Neispravan broj mobitela' }, { status: 400 });
    }

    const serviceNameReadable = serviceNames[tekstPolja(formData.service)] || 'Ostalo / nije odabrano';
    const minPrice = iznos(body.estimatedPrice?.min);
    const maxPrice = iznos(body.estimatedPrice?.max) ?? minPrice;
    const name = tekstPolja(formData.name);
    const city = tekstPolja(formData.city);
    const message = tekstPolja(formData.message);

    const details = {
        ...formData,
        _meta: { mode: 'final', marketingConsent: Boolean(formData.marketingConsent), savedAt: new Date().toISOString() },
    };

    // 1. Baza prvo: upit postoji i kad mail ne prođe
    let inquiryId: string | null = null;
    let dbOk = false;
    try {
        const { data, error } = await supabase
            .from('inquiries')
            .insert([{
                name,
                email: tekstPolja(formData.email),
                phone,
                city,
                service: serviceNameReadable,
                details,
                message,
                estimated_price_min: minPrice,
                estimated_price_max: maxPrice,
            }])
            .select('id')
            .single();
        if (error) throw error;
        inquiryId = data?.id ?? null;
        dbOk = true;
    } catch (dbError) {
        console.error('Upit nije spremljen u bazu (šaljem mail svejedno):', dbError);
    }

    // 2. Mail nama, s HTML-om i tekstualnom verzijom
    const naslov = `NOVI UPIT: ${serviceNameReadable}, ${phone}${name && name !== 'Brzi upit (web)' && name !== 'N/A' ? `, ${name}` : ''}`;
    const tekst = [
        naslov,
        formData.surfaceSize ? `Veličina: ${formData.surfaceSize} m²` : null,
        minPrice ? `Prikazana cijena: ${minPrice === maxPrice ? `od ${minPrice}` : `${minPrice} - ${maxPrice}`} €` : null,
        city && city !== 'N/A' ? `Mjesto: ${city}` : null,
        message ? `Poruka: ${message}` : null,
        formData.landing_page ? `Stranica: ${formData.landing_page}` : null,
        dbOk ? null : 'PAŽNJA: upit NIJE spremljen u bazu, zapiši broj odmah.',
    ].filter(Boolean).join('\n');

    const adminPoruka: Poruka = {
        from: OD_UPIT,
        to: primatelji(),
        // Broj u naslovu: vidi se već u obavijesti na mobitelu, bez otvaranja maila (brzina odgovora)
        subject: naslov,
        text: tekst,
    };
    try {
        adminPoruka.react = AdminNotificationEmail({
            name: name || 'N/A',
            email: tekstPolja(formData.email) || 'N/A',
            phone,
            city,
            address: tekstPolja(formData.address),
            serviceName: serviceNameReadable,
            estimatedPriceMin: minPrice ?? 0,
            estimatedPriceMax: maxPrice ?? 0,
            message,
            details: formData,
        }) as React.ReactElement;
    } catch (e) {
        // Pokvaren HTML predložak ne smije zaustaviti mail: ide samo tekstualna verzija
        console.error('HTML predložak maila o upitu pao, šaljem samo tekst:', e);
    }

    let mailOk = await posaljiMail('Novi upit', adminPoruka);
    if (!mailOk) {
        // Rezerva ako Resend odbije domenu slaufismrk.com (DNS ili verifikacija). Resendova
        // testna adresa smije slati samo na e-mail vlasnika Resend računa (slauf.i.smrk).
        mailOk = await posaljiMail('Novi upit (rezervni pošiljatelj)', {
            ...adminPoruka,
            from: 'Šlauf i Šmrk <onboarding@resend.dev>',
            to: 'slauf.i.smrk@gmail.com',
        });
    }
    if (!mailOk) console.error(`UPIT_BEZ_OBAVIJESTI ${naslov} (u bazi: ${dbOk ? 'da' : 'NE'})`);

    // 3. Je li mail prošao, uz upit u bazi, da se vidi koji upit možda nitko nije vidio
    if (dbOk && inquiryId) {
        const { error: metaError } = await supabase
            .from('inquiries')
            .update({ details: { ...details, _meta: { ...details._meta, obavijest: { mail: mailOk } } } })
            .eq('id', inquiryId);
        if (metaError) console.error('Ishod maila nije zapisan u bazu:', metaError.message);
    }

    // Potvrda kupcu mailom više se ne šalje: nijedna forma ne pita za e-mail, a javna ruta koja
    // šalje brendirani mail na bilo koju upisanu adresu bila bi relej za spam s naše domene.

    // Greška samo ako upit nije nigdje: ni u bazi ni u mailu. Tada forma kaže korisniku da
    // nazove ili pošalje WhatsApp, umjesto da lažno javi "zaprimljeno".
    if (!dbOk && !mailOk) {
        return NextResponse.json({ error: 'Submission failed' }, { status: 500 });
    }
    return NextResponse.json({ success: true, leadId: inquiryId });
}
