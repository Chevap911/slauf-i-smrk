---
tags: [slauf, web, provjera, fotografije]
updated: 2026-11-01
---
# Nadogradnja weba: tehnički dio završen, izbor fotografija otvoren

Povezano: [[2026-10-31-gemini-provjera]], [[2026-11-01-dodatne-fotografije]], [[ODLUKE]].

Lokalni pregled: http://localhost:3108. Grana `codex/seo-radovi-kalkulator-20261031`. Nema commita, pusha ni objave.

## Što čeka Markov izbor

Marko je tijekom pregleda rekao da fotografije nisu dobro odabrane i da će ih sam odabrati. Sadašnje fotografije u lokalnoj verziji isključivo su privremeni izbor. Dodavanje slika nije završeno ni odobreno za produkciju. Ne birati nove kadrove bez Markova odabira.

Pripremljen je prikaz šest poslova na naslovnici iz istog registra koji koriste galerija, usluge i područja. Registar privremeno sadrži 13 poslova. Slike podržavaju različite omjere i dimenzije, a pojedinačne fotografije tijekom rada nemaju lažne oznake prije/poslije.

Iz Media je pripremljeno 23 WebP izvedenica, najveće dimenzije 1600 px, ukupno oko 4,8 MiB, bez EXIF/GPS podataka. Izvornici nisu mijenjani. Privatni trag izvora nalazi se u `../Media/2026-11-01-web-izbor.md`. Kontekst Dugo Selo, Ravnice, Avenue Mall i Mlinovi provjeren je ciljanim čitanjem Ivanova WhatsApp razgovora u aplikaciji. Nije slana poruka niti su privatni razgovori, klijentski kontakti ili adrese preslikani u javni sadržaj.

## Ostale stavke iz reporta

Završene su ranije opisane izmjene kalkulatora, kontakta, SEO metapodataka, JSON-LD, canonicala i host preusmjeravanja. Cjenik ostaje zajednički izvor; grobovi ostaju lista interesa. Pogrešne pretpostavke iz reporta i razlozi odstupanja dokumentirani su u [[2026-10-31-gemini-provjera]].

## Svježe provjere 1.11.2026.

- `npm test`: 17/17 prolazi. Uključeni su integritet fotografija, šest poveznica naslovnice dostupnih u početnoj galeriji te usluge i stvarne lokacije novih zapisa.
- `npm run build`: prolazi, uključujući TypeScript, s lažnim lokalnim ključevima.
- `SITE_BASE=http://localhost:3108 npm run gate`: lint i audit bez grešaka; SlopMonster 48/48, 5/5; site-check svih 49 stranica bez grešaka i upozorenja.
- `git diff --check`: prolazi.
- U browseru potvrđeno šest kartica na desktopu, bez horizontalnog prelijevanja i bez neuspjelo učitanih fotografija u sekciji.
- Ponovno provjeren mobilni kalkulator na 390 × 844: 120 m² okućnice daje 480–720 €, referentna cijena u zasebnom retku, WhatsApp poveznica s istom uslugom, kvadraturom i iznosom. Poveznica nije poslana i kontakt forma nije slala stvarni upit.
- Dokaz mobilnog prikaza: `docs/qa-2026-11-01/kalkulator-mobitel.png`.

Tehnički prolaz testova ne potvrđuje kvalitetu odabira fotografija. Konačan vizualni pregled radova slijedi nakon Markova izbora. Prava dostava u inbox i produkcijska mjerenja ostaju za razdoblje nakon odobrene objave.

Sljedeći korak: Marko odabire fotografije; agent ih zamjenjuje u registru i provjerava naslovnicu, galeriju i pripadajuće stranice na mobitelu i računalu.
