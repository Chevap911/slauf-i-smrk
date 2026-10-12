# Standard: dostava upita s forme (svi webovi s ovom formom)

Vrijedi od 12. 10. 2026. za Šlauf i Šmrk i za svaki web koji koristi istu kratku formu i `/api/contact`. Cilj: **svaki upit stiže na mail** (za Šlauf: slauf.i.smrk@gmail.com).

## Zašto

12. 10. 2026. Marko je poslao dva testna upita sa slaufismrk.com. Oba su bila u bazi, Resend je oba označio "Delivered" na slauf.i.smrk@gmail.com, a u inboxu ih nije bilo. Uz to:

- Resend SDK ne baca iznimku kad API odbije mail, nego vraća `{ error }`. Kod je hvatao samo iznimke, pa bi log pisao "sent" i kad mail nije otišao.
- Landing forme su kao e-mail kupca slale izmišljenu adresu (`lp-upit@slaufismrk.com`). Server je na nju slao potvrdu, a takvi mailovi odbijaju i kvare ugled domene u Resendu.

## Pravila

1. **Upit se prvo sprema u bazu.** Mail je drugi, nikad jedino mjesto gdje upit postoji.
2. **Svako slanje provjerava rezultat.** `resend.emails.send` se zove samo u `lib/upiti/obavijest.ts`, koji čita `{ error }` i zapisuje razlog. Upit bez maila se u Vercel logu traži s `UPIT_BEZ_OBAVIJESTI`.
3. **Mail o upitu ide s posebne adrese** (`upiti@slaufismrk.com`), odvojeno od potvrda kupcima (`info@`), s HTML-om i tekstualnom verzijom.
4. **Rezervni pošiljatelj:** ako Resend odbije domenu, isti mail ide s Resendove adrese `onboarding@resend.dev` na adresu vlasnika Resend računa.
5. **Ishod maila stoji uz upit u bazi** (`details._meta.obavijest.mail`).
6. **Jutarnji kontrolni mail.** Dnevni cron (`/api/keepalive`) šalje mail istim putem kao mail o upitu, samo uz `CRON_SECRET`. Ako jedno jutro ne stigne, mailovi o upitima ne stižu. Uz `SUPABASE_SERVICE_ROLE_KEY` mail navodi i upite iz zadnja 24 sata, a broj samo uz upit čiji mail nije prošao.
7. **Ruta je javna, pa se brani:** prima samo završni upit, traži broj s barem 6 znamenki, tiho odbacuje upit s popunjenim skrivenim poljem (`honeypot`) i skraćuje polja. Potvrda kupcu mailom se ne šalje: nijedna forma ne pita za e-mail, a slanje na bilo koju upisanu adresu bio bi relej za spam s naše domene.
8. **Ključevi nikad u repou** (repo je javan). `RESEND_API_KEY` i ostali stoje samo u Vercelu. 9. 6. do 12. 10. 2026. pravi Resend ključ bio je u `test-resend.js` na javnom GitHubu.
9. **Gate to provjerava:** `npm run audit` pada ako se mail šalje mimo `lib/upiti/obavijest.ts`, ako forma šalje adresu na našoj domeni kao e-mail kupca i ako je u bilo kojoj praćenoj datoteci ključ (Resend, JWT, Stripe, Telegram, AWS).
10. **Nakon svake promjene forme ili deploya pravi test:** pošalji upit s produkcije i potvrdi da je **u inboxu**. "Delivered" u Resendu nije dovoljan: znači samo da ga je Gmail primio, ne da ga vidiš.

## Postavljanje (Vercel → Settings → Environment Variables, pa Redeploy)

| Varijabla | Obavezno | Što je |
|---|---|---|
| `RESEND_API_KEY` | da | Ključ iz Resenda |
| `LEAD_EMAIL_TO` | ne | Primatelji maila o upitu, zarezom odvojeni. Bez nje: zadana adresa u `lib/upiti/obavijest.ts` |
| `SUPABASE_SERVICE_ROLE_KEY` | preporučeno | Da jutarnji mail može ponoviti upite iz zadnja 24 sata. Samo na serveru, nikad s `NEXT_PUBLIC_` |
| `CRON_SECRET` | da | Nasumičan niz od 32+ znakova. Vercel ga sam šalje cronu; bez njega nema jutarnjeg kontrolnog maila |

## Ako mail ima status "Delivered", a nije u inboxu

Web je svoje napravio, mail je zapeo u Gmail računu. Provjeri redom:
1. Gmail pretraga: `in:anywhere "NOVI UPIT"` (uključuje Spam i Otpad).
2. Postavke → **Filtri i blokirane adrese**: filtar ili blokada za `slaufismrk.com`, `upiti@`, `info@` ili "NOVI UPIT".
3. Postavke → **Prosljeđivanje i POP/IMAP**: prosljeđivanje ili POP s "izbriši Gmailovu kopiju". Postavi "zadrži Gmailovu kopiju u pristigloj pošti".
4. Postavke → **Računi i uvoz**: koji drugi programi ili uređaji povlače poštu s ovog računa.
5. U Resendu klikni mail i pogledaj događaj "Delivered" (odgovor Gmailovog servera).

## Prenošenje na drugi web

1. Kopiraj `lib/upiti/obavijest.ts` i promijeni `ZADANI_PRIMATELJI`, a u ruti adrese pošiljatelja.
2. U `/api/contact` mail o upitu ide kroz `posaljiMail`, uz istu obranu rute (pravilo 7).
3. Kopiraj kontrolni mail iz `app/api/keepalive/route.ts` i dodaj cron u `vercel.json`.
4. Kopiraj blok "Obavijest o upitu" iz `tools/audit-copy.mjs` (prilagodi domenu).
5. Postavi `RESEND_API_KEY` i `CRON_SECRET` u Vercelu i napravi pravi test iz pravila 10.
