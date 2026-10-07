# Šlauf i Šmrk — web (slaufismrk.com)

Next.js web za pressure washing biznis u Zagrebu (Markov biznis, 50/50 s partnerom Ivanom). Live na Vercelu, push na `main` = production deploy.

## Kontekst i memorija

Ovaj repo je dio Markovog workspacea `~/Desktop/Claude assistant`. Prije većeg posla pročitaj:

- `../../About Me/about-me.md` — tko je Marko, kako surađujemo
- `../../About Me/writing-rules.md` — pravila pisanja (em dash zabranjen, bez AI fraza)
- `../overview.md` — biznis kontekst Šlauf i Šmrk
- `../SEO-battle-plan.md` + `../web-audit-2026-06.md` — SEO stanje i plan

Komunikacija s Markom: hrvatski. Sav sadržaj na webu: hrvatski.

## Tvrda pravila za ovaj web

1. **Hero standard (svi naši webovi):** tekst lijevo (H1 s ključnim riječima + lokacijom, npr. "Visokotlačno pranje fasada, okućnica i terasa u Zagrebu"), bijela form kartica desno vidljiva BEZ scrollanja, maskota suptilno (chip na formi, ne preko slike), nikad prazan prostor. Referentni webovi: dynamic-powerwash-woodruff i clean-savannah-preview u `BudemAI/US-Pressure-Washing/`. **Finalna verzija heroa (Markova odluka 2026-07-08, četvrta iteracija):** pozadina je JEDNA akcijska fotka (Ivan s leđa u brendiranoj majici pere terasu noću, `public/hero-foto/ivan-pranje-terase-nocu.jpg`), usidrena desno na 67% širine, mekani mask fade ulijevo u navy iza H1. Overlay je lagan preko fotke (da fenjeri i mokri pod prodišu), jači lijevo za čitljivost teksta. Na mobitelu fotka je full-width tekstura pod tamnijim overlayem. Prije/poslije dokaz NIJE u herou nego u dvije WashReveal scroll sekcije odmah ispod (fasada pa terasa, iste se fotke ne smiju ponavljati u herou). Nav traka je prozirna preko heroa na vrhu naslovnice (bijeli linkovi, žuti logo kvadrat), postane bijela glass na scroll; visina nava je fiksna `--nav-h` (59px, globals.css), hero se podvlači pod nju negativnim marginom. QuoteFab na mobitelu je vezan na `--nav-h`, a mobilni hero i WashReveal sticky računaju sigurne zone za QuoteFab (gore) i StickyCtaBanner (dolje, 98px). Prethodna verzija (prije/poslije split na 32%) zamijenjena jer su se iste fasada fotke ponavljale u herou i sekciji ispod. Hero mora stati iznad folda na 1440x900, provjeriti mjerenjem (getBoundingClientRect), ne samo okom.
2. **QuoteForm: cijena je namjerno skrivena do NAKON slanja forme** (capture-first). Ne vraćati instant prikaz cijene. Ovo je svjesna odluka, različito od US PW klijenata.
3. **SEO:** H1/H2 uvijek nose uslugu + lokaciju. Meta title/description postoje u `app/layout.tsx`. Schema: `HomeAndConstructionBusiness` (NE `CleaningService`, nije validan schema.org tip). Tvrtka je jedan čvor, `@id` `https://slaufismrk.com/#business` u `app/layout.tsx`; usluge, područja i "O nama" je referenciraju (`provider: { '@id': ... }`), nikad novi `LocalBusiness` po stranici (do 7. 10. 2026. je 19 stranica imalo 22 dodatne tvrtke bez `@id`). FAQPage schema sadrži samo pitanja i odgovore koji doslovno stoje na stranici: ServicePage ih radi iz `faq` propa, na blogu mijenjaš oba mjesta ili crtaš vidljivi FAQ iz `faqSchema`. Razliku hvata `npm run site-check`.
4. **Perf:** GTM i Clarity se učitavaju na prvi dodir, scroll ili tipku, najkasnije 4 s nakon učitavanja (inline skripta u `app/layout.tsx`, posjet s gclid/fbclid/utm odmah). CSS je inline (`experimental.inlineCss`) i fontovi su bez preloada: samo zajedno, inače Chrome 153 drži prvo iscrtavanje (Skills/web-performance fix #7). Cookie banner dolazi iz SSR-a. Hero H1 pun opacity iz SSR-a (LCP), ulazna animacija samo CSS.
5. Bez lažnog social proofa. Stvarne brojke: ~40 Google recenzija, ocjena 5,0 (stanje 6/2026).
6. **Sidrena cijena i CSV cjenik (obveza od 1. 10. 2026., NN 101/2026, kazna za obrt 1.000 do 20.000 € po prekršaju).** Uz svaku cijenu na webu stoji i cijena na 10. 9. 2026., na istom mjestu, i kad je jednaka. Izvor cijena je `lib/cjenik.ts`, stranica `/cjenik`, CSV-ovi u `public/cjenik/`. Kad se cijena mijenja: promijeni `cijena`, nikad `sidrena`; `npm run cjenik` (nova datoteka, stare se nikad ne brišu, moraju biti dostupne 30+ dana); ažuriraj tekstove (`grep -rn "10. 9. 2026." app components`); deploy najkasnije do 8:00 na dan kad nova cijena vrijedi. Nova cijena ili nova usluga na webu bez sidrene = prekršaj. Akcija/popust traži tri cijene: akcijska, najniža u zadnjih 30 dana i sidrena.
7. **Telefon i WhatsApp: jedan broj, jedan zapis (Marko 2026-09-28).** Na ekranu uvijek `+385 95 844 2806`, u linkovima `tel:+385958442806` i `https://wa.me/385958442806`, u schemi `+385958442806`. Nikad `095 844 2806`, `(095) 844-2806` ni drugi oblik. Prije deploya: `grep -rInE "844[ -]?28|8442806" app components lib public | grep -v "+385 95 844 2806\|385958442806"` mora biti prazan. Razlog: landing za grobove je od 29. 4. do 28. 9. 2026. zvao +385 95 444 2806, a na webu su bila četiri različita zapisa broja. Jezici: hrvatski i engleski (njemački ne).

## Dev

- `npm run dev` (preview config `slauf-web`, port 3107 u root `.claude/launch.json`)
- Commit poruke na hrvatskom, kratki imperativ (vidi `git log`)

## Gate i deploy (od 7. 10. 2026.)

- `npm run gate` prije svakog deploya: lint, `audit` (izvorni kod: pravila iz `config/copy-rules.json`, AI fraze, placeholderi, GPS u fotkama iz `public/`), `slop` (SlopMonster na svim stranicama iz sitemapa, prolaz 5/5) i `site-check` (ono što Google dobije: zabranjene tvrdnje, kartice za dijeljenje, FAQ u HTML-u, jedna tvrtka u schemi, breadcrumbovi). Bez `SITE_BASE` gleda dev server na 3107. Za produkcijski build: `npm run build`, preview `slauf-web-prod` (port 3108), pa `SITE_BASE=http://localhost:3108 npm run gate`. Lokalni build traži bilo kakav `RESEND_API_KEY` (npr. `re_lokalni_build`); pravi ključ je samo na Vercelu i ne treba ga lokalno.
- Deploy isključivo `npm run deploy`: odbija prljavo stablo i granu iza origina, pusti audit i pusha, a Vercel deploya main iz GitHuba. Nikad ručni `vercel --prod`: ovaj folder nije vezan na Vercel projekt i napravio bi novi.
- Novo pravilo za tekst (zabranjena tvrdnja, broj recenzija, cijena) ide u `config/copy-rules.json` s razlogom i datumom, ne samo u ovu datoteku. Recenzije kupaca u `reviewFiles` su izuzete jer se doslovni citati ne uređuju.
- `Blog/` drži sirove nacrte postova i nije dio weba; nedovršeni nacrt stavi u `.git/info/exclude`, ne commitaj ga da bi deploy prošao.
