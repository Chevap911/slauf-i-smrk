/**
 * Obavijest o novom upitu: jedini put kojim web javlja da je netko ostavio broj.
 *
 * 12. 10. 2026. Markov testni upit Resend je isporučio na slauf.i.smrk@gmail.com, a u
 * inboxu ga nije bilo nigdje. Upit je bio u bazi, ali nitko ne bi znao da je stigao.
 * Zato pravila (vrijede za svaki web s ovom formom, vidi docs/upiti-dostava.md):
 *
 *   1. Upit se prvo sprema u bazu (app/api/contact).
 *   2. Obavijest ide kroz dva neovisna kanala: mail i Telegram. Pad jednog ne skriva upit.
 *   3. Svako slanje provjerava rezultat. Resend SDK ne baca iznimku kad API odbije mail,
 *      nego vraća { error }; zato se resend.emails.send ne zove nigdje osim ovdje.
 *   4. Svako jutro kontrolna poruka kroz oba kanala (app/api/keepalive). Ako ne stigne,
 *      kanal je pukao i treba ga popraviti prije nego propadne pravi upit.
 *
 * Postavke (Vercel → Settings → Environment Variables):
 *   RESEND_API_KEY      obavezno
 *   LEAD_EMAIL_TO       primatelji maila, zarezom odvojeni (bez nje: ZADANI_PRIMATELJI)
 *   TELEGRAM_BOT_TOKEN  token bota od @BotFather
 *   TELEGRAM_CHAT_ID    chat id jednog ili više ljudi, zarezom odvojeni (svatko prvo botu pošalje /start)
 */
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export type Poruka = Parameters<typeof resend.emails.send>[0];

const ZADANI_PRIMATELJI = ['slauf.i.smrk@gmail.com'];

const popis = (vrijednost: string | undefined) =>
    (vrijednost ?? '').split(',').map((s) => s.trim()).filter(Boolean);

export const primatelji = () => {
    const izEnv = popis(process.env.LEAD_EMAIL_TO);
    return izEnv.length ? izEnv : ZADANI_PRIMATELJI;
};

export const telegramPostavljen = () =>
    Boolean(process.env.TELEGRAM_BOT_TOKEN) && popis(process.env.TELEGRAM_CHAT_ID).length > 0;

/** Pošalje mail i vrati je li ga Resend prihvatio. Grešku zapiše s razlogom. */
export async function posaljiMail(oznaka: string, poruka: Poruka): Promise<boolean> {
    try {
        const { data, error } = await resend.emails.send(poruka);
        if (error) {
            console.error(`${oznaka}: Resend je odbio mail`, JSON.stringify(error));
            return false;
        }
        console.log(`${oznaka}: poslano, Resend id ${data?.id}`);
        return true;
    } catch (e) {
        console.error(`${oznaka}: iznimka pri slanju maila`, e);
        return false;
    }
}

/**
 * Pošalje tekst svim chatovima iz TELEGRAM_CHAT_ID. Vraća null kad Telegram nije postavljen,
 * true kad je poruka stigla barem do jednog chata, inače false.
 */
export async function posaljiTelegram(oznaka: string, tekst: string): Promise<boolean | null> {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatovi = popis(process.env.TELEGRAM_CHAT_ID);
    if (!token || !chatovi.length) return null;

    const rezultati = await Promise.all(
        chatovi.map(async (chat) => {
            try {
                const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ chat_id: chat, text: tekst.slice(0, 4000), disable_web_page_preview: true }),
                    signal: AbortSignal.timeout(5000),
                });
                const json = (await res.json().catch(() => null)) as { ok?: boolean; description?: string } | null;
                if (!res.ok || !json?.ok) {
                    console.error(`${oznaka}: Telegram je odbio poruku za chat ${chat}`, res.status, json?.description);
                    return false;
                }
                return true;
            } catch (e) {
                console.error(`${oznaka}: iznimka pri slanju na Telegram (chat ${chat})`, e);
                return false;
            }
        }),
    );
    const ok = rezultati.some(Boolean);
    if (ok) console.log(`${oznaka}: Telegram poslan (${rezultati.filter(Boolean).length}/${chatovi.length})`);
    return ok;
}

export type Ishod = { mail: boolean; telegram: boolean | null };

/** Mail i Telegram paralelno. Kad oba padnu, log nosi UPIT_BEZ_OBAVIJESTI, da se nađe pretragom. */
export async function javiSvima(oznaka: string, mail: Poruka, tekst: string): Promise<Ishod> {
    const [mailOk, telegramOk] = await Promise.all([posaljiMail(oznaka, mail), posaljiTelegram(oznaka, tekst)]);
    const ishod = { mail: mailOk, telegram: telegramOk };
    const opis = `mail=${mailOk ? 'da' : 'NE'} telegram=${telegramOk === null ? 'nije postavljen' : telegramOk ? 'da' : 'NE'}`;
    if (!mailOk && !telegramOk) console.error(`UPIT_BEZ_OBAVIJESTI ${oznaka}: ${opis}`);
    else console.log(`UPIT_OBAVIJEST ${oznaka}: ${opis}`);
    return ishod;
}
