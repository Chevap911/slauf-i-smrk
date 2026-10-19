# Blog skill: Šlauf i Šmrk (slaufismrk.com)

Upute za svaki blog post. Čita ih rutina `blog-tjedni` (utorak 10:00) i svaka sesija koja piše post. Zadnje ažurirano 19. 10. 2026. Stara verzija (15. 5. 2026.) imala je popust od 15 %, krivi zapis broja i FAQ rich results kao cilj, sve to više ne vrijedi.

## 0. Što post mora napraviti

Jedan post postoji zato da netko iz Zagreba i okolice koji ima problem (prljava fasada, ulje na betonu, zeleni tlakavci, prljav pod kolodvora) dobije odgovor i ostavi broj u formi ili pošalje fotku na WhatsApp. Pozicija na Googleu je put do toga, a ne cilj.

Što Google traži, iz njegove dokumentacije ([Creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)):

- **Iskustvo iz prve ruke.** Mi peremo, imamo fotke, znamo što ne ide. To je prednost koju agencijski tekstovi nemaju i mora se vidjeti u svakom postu.
- **Tko, kako i zašto.** Jasno je tko je pisao (Šlauf i Šmrk, Ivan i Marko), na čemu se temelji (naš posao, naše fotke) i da je post tu za čitatelja.
- **Nema idealne duljine.** Google kaže da nema preferirani broj riječi. Pišemo dok ima korisnog, ni riječ više.
- **Znakovi teksta za tražilicu**, koje izbjegavamo: puno tema u nadi da će nešto rangirati, prepričavanje tuđih članaka, tema koju ne radimo, datum promijenjen da post izgleda svježe.
- **Masovni AI tekst bez ljudske provjere** je po Googleu spam. Zato: jedan jako dobar post tjedno, ne pet osrednjih.

AI Overviews i AI Mode ne traže posebnu optimizaciju ni posebne datoteke ([AI features](https://developers.google.com/search/docs/appearance/ai-features)). Citiraju stranice koje jasno, u tekstu, odgovaraju na pitanje i čija se schema poklapa s vidljivim tekstom. To je isto što pomaže i čovjeku.

## 1. Odabir teme (prije pisanja)

1. **Iz potražnje, ne iz glave.** Izvor je GSC izvoz (upiti s pojavljivanjima, a bez stranice koja na njih odgovara), stvarna pitanja kupaca (WhatsApp, pozivi, CRM bilješke) i sezona (Svi sveti, proljeće, jesensko lišće).
2. **Prvi utorak u mjesecu je B2B tema** za motor A1 (kolodvori, komunalci, garaže, trgovački centri). Ti postovi linkaju na `/usluge/komercijalno-ciscenje` ili `/usluge/poslovni-objekti`.
3. **Tip posta** (bira se jedan):
   - **Koliko košta** (`koliko-kosta-...`): najjači za upit. Raspon, o čemu ovisi, primjer. Cijene samo iz `lib/cjenik.ts` i uz svaku sidrena cijena (vidi 6).
   - **Problem i rješenje** (crne fleke, salitra, korov, ulje): što je to, zašto nastaje, može li sam, kad treba stroj.
   - **Naš posao** (case study): jedan stvarni projekt s fotkama prije i poslije, što smo radili i što nije išlo. Najteži za kopirati, zato najvrjedniji.
   - **Usporedba** (softwash ili visokotlačno, pranje ili brušenje): tablica i jasna preporuka po situaciji.
4. **Kanibalizacija.** Prije pisanja `ls app/blog` i `grep -ril "<ključna riječ>" app/blog app/usluge`. Ako već postoji stranica za istu namjeru, nadopuni nju (i tada pošteno promijeni `dateModified`), ne piši novi post.
5. **Bez materijala nema posta.** Treba nam bar jedna naša fotka ili konkretna činjenica s terena. Ako je nema, rutina bira drugu temu ili u izlazu traži fotku od Marka.

## 2. Struktura posta (redom)

1. **H1** s uslugom ili problemom i, gdje ima smisla, lokacijom. 50 do 70 znakova. Primjer: "Pranje vrućom vodom pod visokim tlakom: ulje i žvakaće s betona".
2. **Datum i autor ispod H1:** "Objavljeno 5. listopada 2026. · Šlauf i Šmrk", a kod izmjene i "Ažurirano ...". Vidljivi datum i `datePublished`/`dateModified` u schemi moraju biti isti ([Google: datumi](https://developers.google.com/search/docs/appearance/publication-dates)).
3. **Odgovor odmah, 40 do 60 riječi.** Prvi odlomak odgovara na pitanje iz naslova: cijena, da ili ne, uzrok. Tek onda priča. Ovaj odlomak je ono što Google i AI citiraju.
4. **Forma iznad prve slike** (`ArticleQuote`, `id="procjena"`, jedna po stranici) s uslugom koja odgovara temi.
5. **Glavni dio, 3 do 6 H2.** Svaki H2 je pitanje ili jasna tvrdnja koju čitatelj traži ("Zašto hladna voda ne skida ulje"), a prva rečenica ispod odgovara na njega. Tko samo preleti naslove, mora dobiti bit.
6. **Bar jedna lista ili tablica** (koraci, usporedba, o čemu ovisi cijena). Tablica je najlakša za citat.
7. **Naše fotke**, najmanje dvije: prije i poslije, i rad u tijeku. Opis ispod fotke kaže što se vidi i gdje, ako lokacija smije javno.
8. **Što ne možemo.** Jedan iskren odlomak (stare mrlje ulja ostanu kao sjena, meki kamen ne podnosi pun tlak). Gradi povjerenje i razlikuje nas od reklame.
9. **FAQ, 3 do 5 pitanja**, vidljivo na stranici, ista pitanja i odgovori u `FAQPage` schemi (vidi 5).
10. **Završetak i CTA:** dvije rečenice zaključka bez naslova "Zaključak", pa poziv: fotka na WhatsApp ili forma, broj `+385 95 844 2806`.

## 3. Ton i jezik

- Pišemo kao majstor koji objašnjava susjedu: "mi" za ekipu, "vi" za čitatelja, kratke rečenice, aktivno.
- Konkretno umjesto općenito: bar, °C, m², broj noći, kvart. "Stroj od 500 bara grije vodu do 130 °C", ne "profesionalna oprema".
- Bez psiholoških okidača i straha ("za 2 godine košta 4.000 €"), bez superlativa, bez obećanja trajnosti i bez povrata novca. Pravila su u `config/copy-rules.json`, audit ih hvata.
- Em dash (duga crtica) je zabranjen. Kratka crtica samo u rasponima i složenicama.
- "doslovno", ne "bukvalno". Bez srbizama, pazi č/ć i ije/je.
- Bez AI fraza ("u današnjem svijetu", "ključno je napomenuti", "zaronimo"). Slop gate (5/5) ih hvata, ali ih ne piši uopće.
- Recenzije: "5,0 na Googleu, 40 recenzija". Ništa više, ništa izmišljeno.

## 4. Interni linkovi

U tekstu, gdje se tema prirodno spominje, ne kao popis na kraju. Najmanje 2 na usluge, 1 na srodan post. Novi post se dodaje i u `components/ServicePage/serviceGuides.ts` pod uslugu na koju se odnosi (pa ga stranica usluge linka natrag).

| Usluga | URL |
|---|---|
| Pranje fasade | `/usluge/pranje-fasade` |
| Pranje terasa | `/usluge/pranje-terasa` |
| Pranje tlakavaca | `/usluge/pranje-tlakavaca` |
| Pranje okućnice | `/usluge/pranje-okucnice` |
| Pranje prilaza | `/usluge/pranje-prilaza` |
| Kamene površine | `/usluge/ciscenje-kamenih-povrsina` |
| Drvene površine | `/usluge/ciscenje-drvenih-povrsina` |
| Kemijsko čišćenje namještaja | `/usluge/kemijsko-ciscenje-namjestaja` |
| Detailing automobila | `/usluge/detailing-automobila` |
| Pranje bazena | `/usluge/pranje-bazena` |
| Grobna mjesta | `/usluge/odrzavanje-grobnih-mjesta` |
| Poslovni objekti (fasade, rampe, skladišta) | `/usluge/poslovni-objekti` |
| Veliki i javni prostori (kolodvori, trgovi, garaže) | `/usluge/komercijalno-ciscenje` |
| Cjenik | `/cjenik` |
| Područja | `/podrucje/zagreb` i ostala u `app/podrucje` |

## 5. Tehnički dio (u repou)

- **Mjesto:** `app/blog/<slug>/page.tsx` + `article.module.css`, kopiraj strukturu `app/blog/pranje-vrucom-vodom-ulje-zvakace/` (najnoviji predložak). Dodaj post na vrh liste u `app/blog/page.tsx`.
- **Slug:** kratak, hrvatski bez dijakritika, ključna riječ, bez godine (da se post može ažurirati).
- **Meta:** `title` do 60 znakova, `description` do 160, `alternates.canonical`, `openGraph` s `type: 'article'` i OG slikom 1200x630 iz naših fotki.
- **Schema:** `Article` (headline, description, `datePublished`, `dateModified`, author i publisher Šlauf i Šmrk), `BreadcrumbList`, `FAQPage` generiran iz istog `faq` niza koji crta vidljivi FAQ. Nikad nova tvrtka (`LocalBusiness`) u postu, tvrtka je samo `#business` iz layouta.
- **FAQ i Google:** FAQ rich results Google od 7. 5. 2026. više ne prikazuje nikome ([Search Engine Journal](https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/), najavljeno [2023.](https://developers.google.com/search/blog/2023/08/howto-faq-changes)). `FAQPage` ostaje jer je valjan i ne smeta, ali vrijednost je vidljivi FAQ koji odgovara na stvarna pitanja, ne zvjezdice u rezultatima.
- **Fotke:** sirovi materijal nikad u `public/`. Okreni po EXIF-u (`ImageOps.exif_transpose`), smanji na 1500 px, spremi bez EXIF-a (GPS), u `public/blog/<tema>/`. Bez lica bez pristanka, bez tuđih natpisa i registracija. Alt opisuje što se vidi, normalna rečenica na hrvatskom, ne kebab-case.
- **Telefon:** na ekranu samo `+385 95 844 2806`, linkovi `tel:+385958442806` i `https://wa.me/385958442806`.
- **Datum izmjene** mijenjaš samo kad je sadržaj stvarno promijenjen (nova sekcija, nova cijena, nove fotke). Google izričito navodi lažno osvježavanje datuma kao znak teksta za tražilicu.

## 6. Cijene u postu

- Izvor je samo `lib/cjenik.ts`. Nikad cijena napamet.
- Uz svaku cijenu, na istom mjestu: "Cijena na 10. 9. 2026.: X €" (NN 101/2026, kazna 1.000 do 20.000 € po prekršaju). I kad je ista.
- Bez popusta. Akcija traži tri cijene i Markovu odluku.
- Bez PDV-a i R1 napomena.
- B2B i javni prostori: bez cijene, "po ponudi nakon procjene i probnog dijela". Ugovorne cijene (npr. kolodvor) nikad javno.

## 7. Gate i objava

1. `npm run dev` (preview `slauf-web`, port 3107), otvori post na 1440x900 i 390 px: forma vidljiva, nema vodoravnog scrolla, fotke se učitaju.
2. `npm run gate`: lint, audit, slop 5/5 na svim stranicama, site-check 0 grešaka (FAQ u HTML-u = FAQ u schemi, jedna tvrtka, breadcrumbovi).
3. Lokalni commit na hrvatskom, kratki imperativ. Nedovršen nacrt ide u `.git/info/exclude`, ne u commit.
4. **Objava samo na Markovo "objavi"**, isključivo `npm run deploy`. Nikad `vercel --prod`.
5. Rutina zapiše izlaz u `Outputs/Blog tjedni/odobri-<datum>.md`: naslov, URL, prvih 60 riječi, popis fotki, rezultat gatea.

## 8. Checklist prije commita

```
[ ] Tema iz GSC-a, pitanja kupca ili sezone, nema postojeće stranice za istu namjeru
[ ] Bar jedna naša fotka ili činjenica s terena
[ ] H1 s uslugom/problemom (i lokacijom gdje ima smisla)
[ ] Vidljivi datum i autor = datePublished/dateModified u schemi
[ ] Prvi odlomak (40 do 60 riječi) odgovara na pitanje iz naslova
[ ] Forma (ArticleQuote) s točnom uslugom, jedan #procjena
[ ] H2 kao pitanja ili jasne tvrdnje, bar jedna lista ili tablica
[ ] Odlomak "što ne možemo"
[ ] Najmanje 2 linka na usluge, 1 na srodan post, post dodan u serviceGuides.ts
[ ] FAQ 3 do 5 pitanja, vidljiv i isti u FAQPage schemi
[ ] Svaka cijena iz lib/cjenik.ts uz sidrenu cijenu na 10. 9. 2026.
[ ] Broj samo kao +385 95 844 2806, bez popusta, bez PDV-a
[ ] Fotke bez GPS-a, okrenute, bez lica i tuđih natpisa, alt rečenicom
[ ] Bez em dasha, bez "bukvalno", bez AI fraza
[ ] npm run gate prošao, lokalni commit, objava tek na "objavi"
```

## 9. Objavljeni postovi (19. 10. 2026.)

Pravi popis je `ls app/blog` i lista u `app/blog/page.tsx`. Ukupno 22 posta. Najnoviji: čišćenje nadgrobnog spomenika (Svi sveti), pranje vrućom vodom (ulje i žvakaće), čišćenje drvene terase, obnova kamene terase. Postovi s cijenama: fasada, okućnica i tlakavci, terasa, grobno mjesto, kemijsko čišćenje namještaja.

## Izvori

- Google, [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- Google, [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- Google, [Publication dates](https://developers.google.com/search/docs/appearance/publication-dates)
- Google, [Changes to HowTo and FAQ rich results (2023.)](https://developers.google.com/search/blog/2023/08/howto-faq-changes)
- Search Engine Journal, [Google drops FAQ rich results from Search (2026.)](https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/)
