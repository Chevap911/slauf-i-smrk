# Standard: dostava upita s forme (svi webovi s ovom formom)

Vrijedi od 12. 10. 2026. za Šlauf i Šmrk i za svaki web (BudemAI klijenti, Budem) koji koristi istu kratku formu i `/api/contact`.

## Zašto

12. 10. 2026. Marko je poslao dva testna upita sa slaufismrk.com. Oba su bila u bazi, Resend je oba označio "Delivered" na slauf.i.smrk@gmail.com, a u inboxu ih nije bilo nigdje (ni Spam, ni Otpad). Mail je bio jedini kanal obavijesti, pa bi pravi upit tiho propao. Uz to:

- Resend SDK ne baca iznimku kad API odbije mail, nego vraća `{ error }`. Kod je hvatao samo iznimke, pa je log pisao "sent" i kad mail nije otišao.
- Landing forme su kao e-mail kupca slale izmišljenu adresu (`lp-upit@slaufismrk.com`). Server je na nju slao potvrdu, a takvi mailovi odbijaju i kvare ugled domene u Resendu.

## Pravila

1. **Upit se prvo sprema u bazu.** Obavijest je druga, nikad jedino mjesto gdje upit postoji.
2. **Dva neovisna kanala obavijesti:** mail (Resend) i Telegram. Pad jednog kanala ne smije sakriti upit.
3. **Svako slanje provjerava rezultat.** `resend.emails.send` se zove samo u `lib/upiti/obavijest.ts`, koji čita `{ error }` i zapisuje razlog. U logu se upit bez ijedne obavijesti traži s `UPIT_BEZ_OBAVIJESTI`.
4. **Ishod obavijesti stoji uz upit u bazi** (`details._meta.obavijest`), da se vidi koji upit možda nitko nije vidio.
5. **Jutarnja kontrolna poruka.** Dnevni cron (`/api/keepalive`) šalje kroz oba kanala poruku "kanal radi". Ako jedno jutro ne stigne, kanal je pukao. Uz `SUPABASE_SERVICE_ROLE_KEY` poruka ponavlja i upite iz zadnja 24 sata.
6. **Potvrda kupcu ide samo na pravu adresu** koju je kupac upisao. Forma nikad ne podmeće izmišljenu adresu.
7. **Gate to provjerava:** `npm run audit` pada ako se mail šalje mimo `lib/upiti/obavijest.ts` ili ako forma šalje adresu na našoj domeni kao e-mail kupca.
8. **Nakon svake promjene forme ili deploya pravi test:** pošalji upit s produkcije i potvrdi da je stigao i na mail i na Telegram. Ne "log kaže poslano", nego "vidio sam ga na mobitelu".

## Postavljanje (Vercel → Settings → Environment Variables, pa Redeploy)

| Varijabla | Obavezno | Što je |
|---|---|---|
| `RESEND_API_KEY` | da | Ključ iz Resenda |
| `LEAD_EMAIL_TO` | preporučeno | Primatelji maila o upitu, zarezom odvojeni. Barem dvije adrese, na dva različita računa. Bez nje ide samo na zadanu adresu u `lib/upiti/obavijest.ts` |
| `TELEGRAM_BOT_TOKEN` | da, za drugi kanal | Token bota od @BotFather |
| `TELEGRAM_CHAT_ID` | da, za drugi kanal | Chat id svake osobe koja prima upite, zarezom odvojeni |
| `SUPABASE_SERVICE_ROLE_KEY` | preporučeno | Da jutarnja poruka može ponoviti upite iz zadnja 24 sata. Samo na serveru, nikad s `NEXT_PUBLIC_` |
| `CRON_SECRET` | preporučeno | Vercel ga šalje cronu; bez njega se kontrolna poruka prepoznaje po user-agentu `vercel-cron` |

**Telegram u 3 minute:**
1. U Telegramu otvori @BotFather, pošalji `/newbot`, daj ime (npr. "Slauf upiti") i spremi token.
2. Otvori svog novog bota i pritisni **Start**. Isto neka napravi i Ivan.
3. Otvori @userinfobot i pritisni Start: odgovori s tvojim id-jem (broj). Isto za Ivana.
4. U Vercel upiši `TELEGRAM_BOT_TOKEN` i `TELEGRAM_CHAT_ID` (npr. `123456789,987654321`) i napravi Redeploy.
5. Pošalji testni upit s weba. Poruka mora stići na Telegram u par sekundi.

## Prenošenje na drugi web

1. Kopiraj `lib/upiti/obavijest.ts`, promijeni `ZADANI_PRIMATELJI` i adresu pošiljatelja u ruti.
2. U `/api/contact` obavijest ide kroz `javiSvima`, potvrda kupcu kroz `posaljiMail`, uz istu provjeru adrese.
3. Kopiraj kontrolnu poruku iz `app/api/keepalive/route.ts` i dodaj cron u `vercel.json`.
4. Kopiraj blok "Obavijest o upitu" iz `tools/audit-copy.mjs` (prilagodi domenu).
5. Postavi varijable iz tablice i napravi pravi test iz pravila 8.
