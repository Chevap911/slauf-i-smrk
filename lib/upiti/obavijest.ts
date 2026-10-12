/**
 * Mail o novom upitu: jedini put kojim web javlja da je netko ostavio broj.
 *
 * 12. 10. 2026. Markov testni upit je bio u bazi, Resend ga je označio "Delivered" na
 * slauf.i.smrk@gmail.com, a u inboxu ga nije bilo. Pravila (docs/upiti-dostava.md):
 *
 *   1. Upit se prvo sprema u bazu (app/api/contact), mail je drugi.
 *   2. Svako slanje provjerava rezultat. Resend SDK ne baca iznimku kad API odbije mail,
 *      nego vraća { error }; zato se resend.emails.send ne zove nigdje osim ovdje. Upit bez
 *      maila ruta zapiše s oznakom UPIT_BEZ_OBAVIJESTI (pretraga u Vercel logu).
 *   3. Svako jutro kontrolni mail (app/api/keepalive). Ako ne stigne, mail o upitima ne
 *      stiže i treba ga popraviti prije nego propadne pravi upit.
 *
 * Postavke (Vercel → Settings → Environment Variables):
 *   RESEND_API_KEY   obavezno (samo na Vercelu, nikad u repou: repo je javan)
 *   LEAD_EMAIL_TO    primatelji, zarezom odvojeni (bez nje: ZADANI_PRIMATELJI)
 *   CRON_SECRET      bez njega nema jutarnjeg kontrolnog maila
 */
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export type Poruka = Parameters<typeof resend.emails.send>[0];

const ZADANI_PRIMATELJI = ['slauf.i.smrk@gmail.com'];

export const primatelji = () => {
    const izEnv = (process.env.LEAD_EMAIL_TO ?? '').split(',').map((s) => s.trim()).filter(Boolean);
    return izEnv.length ? izEnv : ZADANI_PRIMATELJI;
};

/** Pošalje mail i vrati je li ga Resend prihvatio (najviše 8 s). Grešku zapiše s razlogom. */
export async function posaljiMail(oznaka: string, poruka: Poruka): Promise<boolean> {
    let sat: ReturnType<typeof setTimeout> | undefined;
    try {
        const odgovor = await Promise.race([
            resend.emails.send(poruka),
            new Promise<null>((resolve) => { sat = setTimeout(() => resolve(null), 8000); }),
        ]);
        if (!odgovor) {
            console.error(`${oznaka}: Resend nije odgovorio u 8 s`);
            return false;
        }
        if (odgovor.error) {
            console.error(`${oznaka}: Resend je odbio mail`, JSON.stringify(odgovor.error));
            return false;
        }
        console.log(`${oznaka}: poslano, Resend id ${odgovor.data?.id}`);
        return true;
    } catch (e) {
        console.error(`${oznaka}: iznimka pri slanju maila`, e);
        return false;
    } finally {
        clearTimeout(sat);
    }
}
