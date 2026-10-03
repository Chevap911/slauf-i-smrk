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

1. **Hero standard (svi naši webovi):** tekst lijevo (H1 s ključnim riječima + lokacijom, npr. "Visokotlačno pranje fasada, okućnica i terasa u Zagrebu"), bijela form kartica desno vidljiva BEZ scrollanja, maskota suptilno (chip na formi, ne preko slike), nikad prazan prostor. Referentni webovi: dynamic-powerwash-woodruff i clean-savannah-preview u `BudemAI/US-Pressure-Washing/`. **Finalna verzija heroa (Markova odluka 2026-07-08, četvrta iteracija):** pozadina je JEDNA akcijska fotka (Ivan s leđa u brendiranoj majici pere terasu noću, `public/hero-foto/ivan-pranje-terase-nocu.jpg`), usidrena desno na 67% širine, mekani mask fade ulijevo u navy iza H1. Overlay je lagan preko fotke (da fenjeri i mokri pod prodišu), jači lijevo za čitljivost teksta. Na mobitelu fotka je full-width tekstura pod tamnijim overlayem. Prije/poslije dokaz NIJE u herou nego u statičnoj sekciji odmah ispod (`components/HomeSections/ProofPairs`, iste se fotke ne smiju ponavljati u herou). Nav traka je prozirna preko heroa na vrhu naslovnice (bijeli linkovi, žuti logo kvadrat), postane bijela glass na scroll; visina nava je fiksna `--nav-h` (59px, globals.css), hero se podvlači pod nju negativnim marginom. StickyCtaBanner (dolje) je jedini stalni CTA; plutajući QuoteFab gumb je maknut 4. 10. 2026. (ostao je samo njegov modal s formom). Prethodna verzija (prije/poslije split na 32%) zamijenjena jer su se iste fasada fotke ponavljale u herou i sekciji ispod. Hero mora stati iznad folda na 1440x900, provjeriti mjerenjem (getBoundingClientRect), ne samo okom.
2. **QuoteForm: cijena je namjerno skrivena do NAKON slanja forme** (capture-first). Ne vraćati instant prikaz cijene. Ovo je svjesna odluka, različito od US PW klijenata.
3. **SEO:** H1/H2 uvijek nose uslugu + lokaciju. Meta title/description postoje u `app/layout.tsx`. Schema: `HomeAndConstructionBusiness` (NE `CleaningService`, nije validan schema.org tip).
4. **Perf:** GTM i Clarity se učitavaju na prvi dodir, scroll ili tipku, najkasnije 4 s nakon učitavanja (inline skripta u `app/layout.tsx`, posjet s gclid/fbclid/utm odmah). CSS je inline (`experimental.inlineCss`) i fontovi su bez preloada: samo zajedno, inače Chrome 153 drži prvo iscrtavanje (Skills/web-performance fix #7). Cookie banner dolazi iz SSR-a. Hero H1 pun opacity iz SSR-a (LCP), ulazna animacija samo CSS.
5. Bez lažnog social proofa. Stvarne brojke: ~40 Google recenzija, ocjena 5,0 (stanje 6/2026).
6. **Sidrena cijena i CSV cjenik (obveza od 1. 10. 2026., NN 101/2026, kazna za obrt 1.000 do 20.000 € po prekršaju).** Uz svaku cijenu na webu stoji i cijena na 10. 9. 2026., na istom mjestu, i kad je jednaka. Izvor cijena je `lib/cjenik.ts`, stranica `/cjenik`, CSV-ovi u `public/cjenik/`. Kad se cijena mijenja: promijeni `cijena`, nikad `sidrena`; `npm run cjenik` (nova datoteka, stare se nikad ne brišu, moraju biti dostupne 30+ dana); ažuriraj tekstove (`grep -rn "10. 9. 2026." app components`); deploy najkasnije do 8:00 na dan kad nova cijena vrijedi. Nova cijena ili nova usluga na webu bez sidrene = prekršaj. Akcija/popust traži tri cijene: akcijska, najniža u zadnjih 30 dana i sidrena.
7. **Telefon i WhatsApp: jedan broj, jedan zapis (Marko 2026-09-28).** Na ekranu uvijek `+385 95 844 2806`, u linkovima `tel:+385958442806` i `https://wa.me/385958442806`, u schemi `+385958442806`. Nikad `095 844 2806`, `(095) 844-2806` ni drugi oblik. Prije deploya: `grep -rInE "844[ -]?28|8442806" app components lib public | grep -v "+385 95 844 2806\|385958442806"` mora biti prazan. Razlog: landing za grobove je od 29. 4. do 28. 9. 2026. zvao +385 95 444 2806, a na webu su bila četiri različita zapisa broja. Jezici: hrvatski i engleski (njemački ne).
8. **Naslovna je čista i usmjerena na upit (Marko 2026-10-04).** Ispod heroja pet mirnih sekcija (`components/HomeSections`): prije i poslije, kako radimo, usluge, recenzije, kontakt s istom kratkom formom kao hero. Bez scroll animacija, klizača, pulsirajućih gumba i drugih funkcija koje odvlače od upita. Maknuto: WashReveal, klizač prije/poslije, "Zašto mi", banner za preporuke, forma u tri koraka, QuoteFab gumb. Prije nego dodaš sekciju ili animaciju: što ona radi za upit?

## Dev

- `npm run dev` (preview config `slauf-web`, port 3107 u root `.claude/launch.json`)
- Commit poruke na hrvatskom, kratki imperativ (vidi `git log`)
