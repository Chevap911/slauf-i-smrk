---
tags: [slauf, seo, cijene, provjera]
updated: 2026-11-01
---
# Početne cijene i završna tehnička SEO provjera

Povezano: [[2026-10-31-gemini-provjera]], [[2026-11-01-dodatni-radovi]], [[2026-11-01-predaja-claude]], [[ODLUKE]].

## Markova odluka i provedba

Na zahtjev od 1.11.2026. sidrene cijene maknute su iz aktivnog prikaza stranica, formi, FAQ-a, SEO opisa i mail teksta. Povijesni podaci u `lib/cjenik.ts` i CSV arhivi nisu brisani. Novi CSV zadržava povijesne stupce radi evidencije; aktualni iznosi nemaju gornju granicu.

Sve aktualne cijene sada su početne, s oznakom „od”. Stope nisu smanjene: fasada od 5 €/m², okućnica i terasa od 4 €/m², kamen od 5 €/m², drvo od 6 €/m². Postojeći minimumi ostaju. Kalkulator za 120 m² okućnice daje od 480 €, bez maksimuma. Tako se priprema i WhatsApp tekst. Novi upit sprema gornju procjenu kao null, ne kao izmišljenu fiksnu granicu; stari upiti s rasponom ostaju podržani.

Tekst uz procjenu: početni iznos nije konačna ponuda; cijena ovisi o zaprljanosti, pristupu i opsegu posla, a potvrđuje se prije rada. Rasponi u usporedbama s tuđim uslugama (npr. sanacija fasade) nisu naša prodajna cijena i nisu proizvoljno pretvarani u naš cjenik.

Kampanjske forme sada računaju iz zajedničkog cjenika. Uklonjeni su njihovi zasebni hardkodirani maksimumi. `npm run cjenik` dobio je Node flag za TypeScript jer postojeći poziv nije radio na Node 22.15.0.

## Sidrena cijena: provjeren datum, nije ukidanje obveze

Službena objava Vlade od 15.10.2026. navodi 17.11.2026. kao početak primjene novih pravilnika. Današnje uklanjanje ne znači da je potvrđeno trajno izuzeće ovog obrta. Marku je datum naveden tijekom rada. Prije objave koja bi ostala aktivna od 17.11. nadalje treba ponovno provjeriti primjenjiva pravila. Nije uvedeno automatsko vraćanje niti zakazana automatizacija.

Izvor: https://www.vlada.gov.hr/ministar-susnjar-kroz-dijalog-s-gospodarstvenicima-do-provedivih-pravila-i-vece-zastite-potrosaca/47439
Temeljna odluka: https://narodne-novine.nn.hr/clanci/sluzbeni/2026_09_101_1212.html

## SEO nalazi i ispravci

- Četiri usluge imale su dodatnu Service schemu uz zajedničku: fasada, okućnica, poslovni objekti i komercijalno čišćenje. Uklonjeni duplikati. Svaka usluga ima jedan identificirani Service čvor; cjenovne usluge imaju minPrice iz cjenika, bez highPrice/maxPrice. Katalog usluga globalne tvrtke ostaje.
- Sitemap lastmod i dateModified izmijenjenih članaka usklađeni sa stvarnom sadržajnom promjenom 1.11.2026. Nisu postavljeni na dinamični datum svakog builda. Datumi objave članaka ostaju izvorni.
- Stara ruta /gallery sada vodi na /galerija, umjesto na naslovnicu.
- Usklađen FAQ odgovor o cijeni u članku o znakovima zaprljane fasade s vidljivim odgovorom.
- Novi gate otkriva duple identificirane Service čvorove i gornje granice koje bi proturječile početnim cijenama. Uključene su i četiri kampanjske stranice, ukupno 53 provjerene rute.
- Popravljen kontrast dodatnog WhatsApp gumba u ServicePage, po uzoru na već popravljeni QuoteForm. Zvjezdice recenzija dobile su role=img uz postojeći aria-label; sadržaj recenzija nije mijenjan.

## Mjerenja i provjere

- `npm test`: 19/19 prolazi.
- `npm run build`: prolazi, uključujući TypeScript, s dummy ključevima.
- `SITE_BASE=http://localhost:3108 npm run gate`: lint i audit bez grešaka; slop 48/48 s ocjenom 5/5; site-check 53/53 bez grešaka i upozorenja.
- Dodatni HTML audit: 53 rute, 48 URL-ova iz sitemapa, 58 internih ciljeva. Nema prijavljenih neispravnih poveznica, duplih title/description vrijednosti, nedostajućih H1/altova, pogrešnih canonicala, stranica bez dolaznih internih poveznica ili sidrenih cijena u vidljivom tekstu. Rezultati i ponovljiva skripta su u `docs/qa-2026-11-01/seo-audit.*`. Naziv `indexedPages` u JSON-u znači stranice iz sitemapa namijenjene indeksiranju, ne potvrdu Googleova indeksa.
- `git diff --check`: prolazi.
- Browser: fasada prikazuje od 5 €/m² i od 500 € za 100 m², bez povijesnog retka; jedan Service čvor, bez horizontalnog prelijevanja na stvarnoj širini preglednika 673 px. Snimka `cijene-fasada.png`. Ranije desktop/mobilne provjere prethodne verzije opisane su u starijim izvještajima; nije ispravno tvrditi da su nova cijena i sve tablice upravo ponovno pregledane na svim breakpointima.

### Google PageSpeed, javna verzija 1.11.2026.

Ovo su mjerenja već objavljene verzije, ne lokalne nadogradnje.

| Mobilni test | Performance | Accessibility | Best Practices | SEO | LCP | TBT | CLS |
|---|---:|---:|---:|---:|---:|---:|---:|
| Naslovnica | 100 | 93 | 100 | 100 | 1,0 s | 0 ms | 0,006 |
| Pranje fasade | 100 | 97 | 96 | 100 | 1,0 s | 0 ms | 0,001 |

Izvještaji: https://pagespeed.web.dev/analysis/https-slaufismrk-com/jtsidx7e0x?form_factor=mobile i https://pagespeed.web.dev/analysis/https-slaufismrk-com-usluge-pranje-fasade/p3bikk1sja?form_factor=mobile . Tekst mjerenja sačuvan u `docs/qa-2026-11-01/pagespeed-*.txt`.

CrUX pokazuje origin podatke posljednjih 28 dana: Passed, LCP 1 s, CLS 0, INP N/A. To nije izmjeren INP nove verzije. Fasada je imala i 404 za Googleov gtag resurs tijekom jednog testa; uzrok nije potvrđen, nije proizvoljno mijenjan GA/GTM ID. Kontrast i ARIA nalazi javne verzije lokalno su popravljeni, ali nove bodove treba ponovno izmjeriti nakon objave.

## Što se može zaključiti o rangiranju

Tehnički pregled je dobar. Nije dokaz da je sve „maksimalno” niti jamstvo izvrsne pozicije. Lighthouse SEO 100 pokriva osnovne provjere, ne konkurenciju, autoritet, kvalitetu svake tvrdnje ni Google Business Profile.

Najnoviji lokalno korišteni GSC izvoz je od 10.10.2026., raspon zadnjih šest mjeseci. U njemu: „pranje fasade Zagreb” prosječna pozicija 7,41 (225 impresija, 2 klika), „pranje fasade” 14,59 (234/3), „pranje fasade cijena” 10,25 (624/10), „pranje tlakavaca” 6,70 (157/8). To su povijesni prosjeci, ne današnje pozicije i ne mjera učinka neobjavljenih izmjena.

Za sljedeću procjenu trebaju svježi GSC podaci o indeksiranju i upitima, Markov konačan izbor stvarnih fotografija te provjera aktualnog Google profila, recenzija i relevantnih lokalnih poveznica. Ne izrađivati seriju tankih stranica po usluga × grad kombinacijama. Ne obećavati rast iz samog tehničkog scorea.

Googleovi izvori: https://developers.google.com/search/docs/fundamentals/seo-starter-guide i https://developers.google.com/search/docs/appearance/core-web-vitals .

Sljedeći korak: Claudeov pregled ove grane i završni vizualni pregled nakon Markova odabira fotografija. Nema pusha ni deploya.
