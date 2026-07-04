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

1. **Hero standard (svi naši webovi):** tekst lijevo (H1 s ključnim riječima + lokacijom, npr. "Visokotlačno pranje fasada, okućnica i terasa u Zagrebu"), bijela form kartica desno vidljiva BEZ scrollanja, maskota suptilno (chip na formi, ne preko slike), nikad prazan prostor. Referentni webovi: dynamic-powerwash-woodruff i clean-savannah-preview u `BudemAI/US-Pressure-Washing/`. **Iznimka za OVAJ web (Markova odluka 2026-07-04):** NEMA pozadinske fotografije (na punoj širini se razvuče i prije/poslije se ne vidi). Umjesto toga: kompaktni prije/poslije strip (dvije kartice s oznakama PRIJE i POSLIJE) ispod teksta u lijevoj koloni, pozadina heroa čisti navy gradient. Cijeli hero mora stati iznad folda na 1440x900, provjeriti mjerenjem (getBoundingClientRect), ne samo okom. Ne vraćati full-bleed ni foto iza teksta.
2. **QuoteForm: cijena je namjerno skrivena do NAKON slanja forme** (capture-first). Ne vraćati instant prikaz cijene. Ovo je svjesna odluka, različito od US PW klijenata.
3. **SEO:** H1/H2 uvijek nose uslugu + lokaciju. Meta title/description postoje u `app/layout.tsx`. Schema: `HomeAndConstructionBusiness` (NE `CleaningService`, nije validan schema.org tip).
4. **Perf:** GTM/FB/Clarity idu preko `lazyOnload`. Hero H1 pun opacity iz SSR-a (LCP).
5. Bez lažnog social proofa. Stvarne brojke: ~40 Google recenzija, ocjena 5,0 (stanje 6/2026).

## Dev

- `npm run dev` (preview config `slauf-web`, port 3107 u root `.claude/launch.json`)
- Commit poruke na hrvatskom, kratki imperativ (vidi `git log`)
