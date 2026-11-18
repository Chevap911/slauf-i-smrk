---
tags: [slauf, web, seo, isporuka]
updated: 2026-10-31
---
# Gemini report: provjera i provedena nadogradnja

Lokalna verzija za Markov pregled: http://localhost:3108. Galerija: http://localhost:3108/galerija.
Grana: `codex/seo-radovi-kalkulator-20261031`. Nema pusha ni objave. Postojeća dva lokalna commita nisu mijenjana.
Povezano: [[2026-10-31-seo-radovi-kalkulator]], [[2026-10-31-inventar-fotografija]], [[ODLUKE]].

## Zaključak analize

Report je koristan kao popis poboljšanja, ali nekoliko dijagnoza nije točno ili nije dokazano. Provedeni su kalkulator s odmah vidljivom cijenom, dnevnik stvarnih radova, relevantni SEO naslovi i opisi te tehničke provjere. Nisu preuzete izmišljene lokacije, rokovi ni tvrdnje o Googleovim zvjezdicama.

Marko je odluku o prikazu cijene prepustio agentu. Odabir je odmah prikazana okvirna cijena, a nakon nje dobrovoljan kontakt za točnu ponudu. To smanjuje potrebu da posjetitelj ostavi broj samo da bi doznao osnovni raspon. To je hipoteza za bolju konverziju, ne dokazani rast upita; nakon objave treba usporediti stvarne upite i WhatsApp kontakte.

| Preporuka / tvrdnja iz reporta | Provjera i odluka |
|---|---|
| www stvara duplikate, nedostaje redirect | Produkcija već vraća 308 na non-www, uz očuvanje putanje i queryja. Dodan isti host uvjet u Next config da pravilo bude u kodu. GSC povijesni podaci sami ne dokazuju da redirect danas nedostaje. |
| Nedostaju LocalBusiness, FAQ i breadcrumbs | Već su postojali. Zadržan jedan `HomeAndConstructionBusiness` s `#business`; usluge i gradovi referenciraju isti čvor. Dodana zajednička sigurna JsonLd komponenta i offers iz cjenika za usluge s određenom cijenom. |
| Schema će dati rich snippets i zvjezdice | Nema takvog jamstva. Google FAQ prikaze ograničava prvenstveno na poznate državne i zdravstvene stranice. Ocjene tvrtke na vlastitoj stranici nisu podobne za self-serving review zvjezdice. |
| Nizak CTR je zbog izostanka cijene u naslovu | Brojke odgovaraju GSC izvozu od 10.10.2026., ali uzrok nije dokazan. Na CTR utječu i pozicija, upit i namjera pretrage. Dodani su relevantni sinonimi i cijene, uz kraće naslove umjesto dugih predložaka iz reporta. |
| Referentna cijena se svugdje lijepi uz glavnu | Postojeća `.sidrena` klasa već daje novi red. U novom kalkulatoru referentna cijena je zaseban red uz isti izračun i istu kvadraturu. Cijene nisu promijenjene. |
| Samobor označiti i Zagrebom, Leggiero Zaprešićem | Odbijeno: područje rada firme nije lokacija konkretnog posla. Samobor je Samobor, Leggiero je Zagreb. |
| Svaki par slika je poseban projekt | Odbijeno: tri serije groba su jedan grob, a više kadrova Leggiera jedan posao. Datumi i m² nisu izmišljeni. |
| Pokazati aktivnu ponudu za grobove | Odbijeno zbog odluke od 25.10.2026. Grobna mjesta ostaju lista interesa, bez rezervacije termina i bez izračuna ponude. |
| Minimum 200 € za sve okućnice/tlakavce/terase/prilaze | Minimum se primjenjuje samo na okućnicu i terasu, kako piše u postojećem cjeniku. Ne proširuje se proizvoljno na tlakavce i prilaz. |
| Pulsirajući FAB | Jedan miran gumb zamjenjuje staru donju traku. Nema pulsiranja. Ne prekriva otvoren cookie banner; kampanjski landinzi zadržavaju vlastite forme. |

## Što radi nova verzija

- Hero i modal koriste isti cjenik i isti izračun. Primjer: 120 m² okućnice daje 480–720 €, odmah i bez kontakta. Unos prihvaća decimalni zarez, a neispravne vrijednosti ne računa.
- Modal nudi odabir usluge, unos površine i klizač 20–500 m². Ručni unos može biti izvan raspona klizača. Za namještaj bira se konkretan komad; poslovni objekti i detailing idu po ponudi.
- WhatsApp poruka nosi odabranu uslugu, kvadraturu i prikazanu procjenu. Kontaktna forma prihvaća mobitel ili e-mail te neobavezno ime, lokaciju i poruku.
- Isti postojeći backend sprema upit u bazu prije maila. Nema izmišljene e-mail adrese, novih kanala ni javnog uploada fotografija. Fotografije se šalju WhatsAppom.
- Modal se zatvara tipkom Escape, gumbom ili klikom na pozadinu. Fokus se vraća na pokretač, a pozadina se ne skrola dok je otvoren. Gumb za zatvaranje ostaje dostupan pri skrolanju forme.
- Centralni registar sadrži 10 zapisa. Galerija daje prvih šest u početnom HTML-u i gumb za preostala četiri. Stranice usluga i područja filtriraju iste podatke. Na mjestu bez dokumentiranog rada nema izmišljene lokalne reference.
- Na kartici su fotografije prije/poslije, opis i CTA s odgovarajućom uslugom. Grobna kartica i na stranici kamena otvara listu interesa.
- SEO tekstovi ažurirani su na naslovnoj, sedam traženih usluga i članku o cijeni fasade. Cijene u novim metapodacima dolaze iz `lib/cjenik.ts`. Nije obećana besplatna impregnacija, obnova drva ili besplatan dolazak za namještaj bez potvrde.
- Canonicali vode na non-www. Dodatno ispravljen naslijeđeni canonical politike privatnosti. Gate sada izričito provjerava canonical svake indeksabilne stranice.

## Fotografije i ograničenja

Pregledane su 52 slikovne datoteke iz `prije-poslje`, `seo-results`, `projekti` i `grob`, uz akcijsku sliku Leggiera iz stare galerije. Inventar bilježi svaku datoteku i bajtno jednake duplikate.

U registar nisu pretvorene sve nepoznate SEO ilustracije: drvena terasa, kamena vrtna garnitura, crveno popločanje, staza uz kuću i siva fasada trebaju potvrdu izvora prije nego ih proglasimo zasebnim našim poslovima. Fotografija `projekt-5` treba potvrdu pripada li već postojećoj terasi, a tamni `projekt-8` izostavljen je prema prethodnoj kuraciji. Ništa nije obrisano. Detaljan popis je u [[2026-10-31-inventar-fotografija]].

## Provjere

- `npm test`: 15/15 prolazi. Izračuni, minimumi, decimalni unos, namještaj, grobovi, kontekst rute, WhatsApp tekst, validacija kontakta, postojeće slike i duplikati. Testovi API-ja pokrivaju e-mail/telefon, honeypot, bazu i oba pokušaja dostave maila.
- `npm run build`: prolazi, uključujući TypeScript. Koriste se isključivo lažni lokalni Resend/Supabase ključevi.
- `SITE_BASE=http://localhost:3108 npm run gate`: prolazi. Lint bez grešaka/upozorenja; audit bez grešaka/upozorenja; SlopMonster 5/5 na svih 48 stranica iz sitemapa; site-check 0 grešaka i 0 upozorenja na 49 stranica.
- Dodatna provjera početnog HTML-a: galerija ima šest članaka prije JavaScripta; svi provjereni javni telefonski linkovi su `tel:+385958442806`.
- Pregled u browseru: desktop 1440 × 900 i mobitel 390 × 844. Hero na desktopu završava na približno 822 px. Nema horizontalnog prelijevanja. Mobilni modal je visok 820 px, a njegov gumb za zatvaranje 44 × 44 px ostaje unutar prikaza.
- Ručno provjereni odabir usluge prema ruti, 120 m², namještaj, lista interesa, neispravan kontakt, Escape, povrat fokusa, učitavanje 6 → 10 radova i kontekst kartice groba.
- Dizajnerska provjera: zadržani Outfit/Inter, navy/žuta/bijela i stvarne fotografije Šlaufa; cijena uz kontakt, bez novih dekorativnih sekcija i animacija. Kontrole mobitela ostaju čitljive i dodirljive. Forma na mobitelu počinje u prvom ekranu, a cijeli kalkulator po potrebi skrola. Rubrika prilagođena postojećem potvrđenom identitetu: 8/8.
- `git diff --check`: prolazi.

Prava dostava u inbox nije testirana: testovi koriste zamjene za bazu i Resend, a pregled ne šalje stvarne upite. Nakon odobrene objave potreban je jedan stvarni test i potvrda primitka u `slauf.i.smrk@gmail.com`. To nije zamijenjeno provjerom statusa “Delivered”. Nisu mjereni novi produkcijski Core Web Vitals niti je obećan rast pozicije ili CTR-a.

## Izmijenjene datoteke

| Skup | Datoteke |
|---|---|
| Kalkulator i kontakt | `lib/quote.ts`, `lib/contact.ts`, `lib/cjenik.ts`, `components/QuoteForm/*`, `components/QuoteFab/*`, `components/QuoteLink/QuoteLink.tsx`, `app/api/contact/route.ts`, `components/emails/InquiryEmail.tsx` |
| Dnevnik radova | `data/completedJobs.ts`, `components/CompletedJobsFeed/*`, `app/galerija/page.tsx`, `components/ServicePage/ServicePage.tsx`, `components/AreaPage/AreaPage.tsx`, `app/podrucje/zagreb/page.tsx` |
| SEO i globalni prikaz | `components/JsonLd/JsonLd.tsx`, `lib/seo.ts`, `next.config.ts`, `app/layout.tsx`, `app/page.tsx`, `app/politika-privatnosti/page.tsx` |
| Sadržaj i metapodaci | `app/usluge/{pranje-fasade,pranje-okucnice,pranje-tlakavaca,ciscenje-drvenih-povrsina,ciscenje-kamenih-povrsina,kemijsko-ciscenje-namjestaja,odrzavanje-grobnih-mjesta}/page.tsx`, `app/blog/koliko-kosta-pranje-fasade/page.tsx` |
| Usklađeni tekstovi forme | `components/Hero/Hero.tsx`, `components/QuoteCard/QuoteCard.tsx`, `components/ArticleQuote/ArticleQuote.tsx`, `components/HomeSections/ContactCta.tsx`, `components/CookieBanner/CookieBanner.tsx` |
| Provjere | `tests/quote.test.cjs`, `tests/contact.test.cjs`, `package.json`, `tools/site-check.mjs` |
| Postojeća lint upozorenja | Neiskorišteni importi i catch varijable u `app/lp/{pranje-fasade,pranje-okucnice,pranje-terasa}/{LandingPageClient.tsx,components/LeadForm.tsx}` |
| Dokumentacija | Ovaj zapis, inventar fotografija, plan u `docs/superpowers/plans/`, screenshotovi u `docs/qa-2026-10-31/` |

## Kako dodati sljedeći posao

Optimizirane slike bez GPS podataka spremiti u `public/projekti/`, a zapis staviti na početak niza `COMPLETED_JOBS` u `data/completedJobs.ts`. Polja datum, lokacija i m² izostaviti ako nisu poznata. Više kadrova istog posla dodati u njegov `photos`.

```ts
{
  id: 'jedinstveni-naziv-posla',
  title: 'Pranje fasade obiteljske kuće',
  serviceSlugs: ['pranje-fasade'],
  areaSlugs: ['zagreb'], // samo stvarno mjesto rada
  location: 'Zagreb',
  // date: '2026-11-05',       // samo ako je potvrđeno
  // surfaceSize: '120 m²',   // samo ako je izmjereno
  material: 'Fasadna žbuka',
  problemDescription: 'Ovdje opis stvarnog stanja prije rada.',
  solutionDescription: 'Ovdje opis stvarno izvedenog čišćenja.',
  photos: [{
    beforeImage: '/projekti/naziv-prije.jpg',
    afterImage: '/projekti/naziv-poslije.jpg',
    beforeAlt: 'Fasada prije pranja',
    afterAlt: 'Ista fasada nakon pranja',
  }],
},
```

Nakon unosa: `npm test`, build i `npm run gate` protiv lokalnog pregleda. Objavljivanje ide tek nakon Markova pregleda, uobičajenim postupkom `npm run deploy`.

## Izvori provjere

- Lokalni GSC izvoz: `../slaufismrk.com-Performance-on-Search-2026-10-10/Pages.csv` i `Queries.csv`.
- Google: [trajna preusmjeravanja](https://developers.google.com/search/docs/crawling-indexing/301-redirects), [canonical i duplikati](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).
- Google: [ograničenja FAQ rich results](https://developers.google.com/search/blog/2023/08/howto-faq-changes), [self-serving recenzije](https://developers.google.com/search/blog/2019/09/making-review-rich-results-more-helpful), [LocalBusiness podaci](https://developers.google.com/search/docs/appearance/structured-data/local-business).
- Stvarni odgovor produkcije: `www.slaufismrk.com/usluge/pranje-fasade?audit=canonical` vraća 308 na non-www uz istu putanju i query; cilj vraća 200.

Sljedeći korak: Marko pregleda lokalni kalkulator i galeriju, zatim odlučuje o objavi. Nakon objave provjeriti stvarni inbox i pratiti klikove/upite u usporedivim razdobljima, uz sezonalnost.
