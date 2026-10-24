# Analiza i poboljšanje slaufismrk.com (Claude, 24. 10. 2026.)

**Dokument:** neovisna provjera zajedničke analize Antigravity + Codex, GSC izvoza, koda i živog weba, plus izvedene promjene  
**Datum:** 24. listopada 2026.  
**Izvor podataka:** GSC izvoz od 24. 10. 2026. (23. 4. do 22. 10. 2026., 183 dana, Web): Chart, Pages, Queries, Devices, Countries, Search appearance; kod na grani `claude/festive-meitner-mb304q`; produkcijski HTML (isti build kao slaufismrk.com); Vercel postavke domene; Pregled URL-a iz GSC-a (Marko); audit od 10. 10. 2026.  
**Stanje:** promjene su na preview grani. Ništa nije na produkciji dok Marko ne odobri.

---

## 1. Sažetak

1. **Zbirne brojke iz izvještaja Antigravity + Codex su točne.** Zaključci izvedeni iz njih dijelom nisu.
2. **www je u redu.** Redirect radi od veljače, Google kao kanonski bira `https://slaufismrk.com/`. Prikazi na www vjerojatno su došli s Google Business Profilea; URL je tamo promijenjen 24. 10.
3. **Zvjezdice iz vlastite scheme ne dolaze.** U 6 mjeseci nijedan rich rezultat, iako tvrtka cijelo vrijeme ima ocjenu 5,0 / 40 u schemi. Isto vrijedi i za Service.
4. **Kanibalizacija nije dokazana.** Izvozi Queries i Pages su odvojeni; za dokaz treba izvoz upit + stranica.
5. **Upiti pokrivaju samo 17 % klikova.** Svaki zaključak po upitu je uzorak.
6. **Pranje fasade je ogledna stranica:** stvarni radovi odmah ispod forme, jasno što je uključeno, bez internih rečenica, povezana s člancima i s uslugama za tvrtke.
7. **Kemijsko čišćenje ostaje kakvo je.** Ne gura se. Za tvrtke prijedlog u točki 8.

---

## 2. GSC: provjerene brojke

| Pokazatelj | Vrijednost | Provjera |
|---|---:|---|
| Klikovi (183 dana) | 1.030 | točno |
| Prikazi | 29.130 | točno |
| CTR | 3,54 % | točno |
| Prosječna pozicija | 8,45 | točno |
| Mobitel | 791 klik (76,8 %) | točno |
| Hrvatska | 898 klikova (87,2 %) | točno |
| Blog | 559 klikova (54 %) | točno |
| Grobovi | 176 klikova (usluga 90 + članak 86) | točno |
| Zadnjih 28 prema prethodnih 28 dana | 156 prema 152 klika | točno |

### Po mjesecima

| Mjesec | Klikovi | Prikazi | CTR | Pozicija | Klikova dnevno |
|---|---:|---:|---:|---:|---:|
| travanj (od 23.) | 34 | 417 | 8,2 % | 7,0 | 4,2 |
| svibanj | 115 | 2.212 | 5,2 % | 8,1 | 3,7 |
| lipanj | 150 | 5.284 | 2,8 % | 7,8 | 5,0 |
| srpanj | 239 | 5.815 | 4,1 % | 8,1 | 7,7 |
| kolovoz | 198 | 6.029 | 3,3 % | 8,4 | 6,4 |
| rujan | 167 | 5.297 | 3,2 % | 8,7 | 5,6 |
| listopad (do 22.) | 127 | 4.076 | 3,1 % | 9,9 | 5,8 |

### Što izvještaj ne kaže

- **Upiti pokrivaju 170 od 1.030 klikova (17 %).** Ostalo Google skriva.
- **Pozicija pada, klikovi ne.** Zadnjih 28 dana pozicija 9,6 prema 8,8. Zadnji tjedan (16. do 22. 10.) pozicija 11,6, a klikova 46, najviše u 8 tjedana, uz više prikaza. To izgleda kao novi prikazi na slabim pozicijama (vjerojatno grobovi uoči Svih svetih), ne gubitak postojećih. Prosječna pozicija nije mjera rangiranja.
- **Fasade:** 79 upita, 43 klika, 2.985 prikaza, prosječna pozicija 14,2. Usluga `/usluge/pranje-fasade` 10 klikova na 1.392 prikaza (12,5). Članak o cijeni 51 klik na 2.701 (9,0).
- **Upiti koji izgledaju kao razgovor**, njih 26: "može slika kako bi izgledalo", "imaš li sliku", "trebam sliku", "koliko bi to koštalo", "zanima me cijena.", "da", "oboje". Vjerojatno nastavci u Googleovom AI načinu, koji se broje u web pretragu. Ljudi traže fotke rezultata i cijenu.
- **Potražnja izvan područja:** kemijsko čišćenje 853 prikaza na poziciji 31 i 1 klik, velik dio iz Rijeke i okolice (Viškovo, Lovran, Opatija, Krk, Ilirska Bistrica). SAD 1.631 prikaz i 2 klika (engleski upiti).
- **Drvo:** 615 prikaza, pozicija 19,4, 0 klikova. Upiti su brušenje, uljenje, popravak i sanacija, posao koji web sad ne nudi.
- **Search appearance je prazan:** nijedan rich rezultat u 6 mjeseci.

---

## 3. Provjera izvještaja Antigravity + Codex

### Prihvaćeno

| Nalaz | Provjera | Što je napravljeno |
|---|---|---|
| Interne autorske rečenice (Codex) | Potvrđeno i šire: tlakavci ("Na ovoj usluzi imaš gotovu prije i poslije kompoziciju"), drvo, kamen, namještaj; 3 u zajedničkoj komponenti stranica usluga; 4 na fasadi ("Naši klijenti primjećuju", "jak prije/poslije rezultat", "isplativosti posla", "Projekt: Problem: Metoda: Rezultat:") | Zamijenjeno opisom onoga što je na fotki ili obrisano |
| Kontrast WhatsApp gumba (Codex) | Bijelo na #25d366 = 1,98:1, WCAG traži 4,5:1 | Forma i stranica usluge: #0f7a3f, 5,4:1 |
| Softwash i ETICS razlikovati | Članak postoji, usluga ga nije linkala | Link u odlomku o ETICS fasadi |
| www u Pages.csv vrijedi provjeriti | 1.723 prikaza u razdoblju kad je redirect već radio | Provjereno, vidi točku 7 |

### Odbačeno

| Prijedlog | Razlog |
|---|---|
| 301 redirect www u `next.config.ts` | Vercel radi 308 www → slaufismrk.com od 27. 2. 2026. Redirect u Next.js-u ne bi ni dobio zahtjev. Pregled URL-a: www nije indeksiran ("Page with redirect"), kanonski URL je non-www. |
| `aggregateRating` u Service schemi | Service nije na Googleovom popisu tipova za ocjene. Ocjena vlastite tvrtke na vlastitom webu ne daje zvjezdice od 2019. Search appearance: 0 rich rezultata u 6 mjeseci uz ocjenu u schemi. |
| Kanibalizacija fasade | Odvojeni izvozi ne pokazuju koji URL rangira za koji upit. Primjeri iz izvještaja ("cijena" → članak, "zagreb" → usluga) bili bi ispravna podjela namjere. Isti propust ima tablica 4.1 u našem auditu od 10. 10. |
| Cijena u titleu ("od 5 €/m²") | Pravilo 6: uz cijenu stoji sidrena, na istom mjestu. U 60 znakova ne stane. Meta opis već nosi obje. |
| Kalkulator kvadrature | Postoji: brzi izbor veličine u formi, cijena nakon slanja (capture-first). |
| Link silo iz 6 članaka | Svih 6 fasadnih članaka već linka na uslugu (2 do 3 puta). Nedostajao je smjer usluga → članci, dodan. |
| Novi H1 | Bez podatka da bi pomogao. "Pranje fasade u Zagrebu" nosi uslugu i lokaciju. |
| "Izvor broj 1" u AI Overviews, "skok na #1 = 200+ posjeta", CTR 6 do 10 %, +20 do 30 % od zvjezdica | Bez dokaza. |
| FAQ "ukinut u svibnju 2026." | Datum nije provjeren. Google je FAQ rich rezultate za obične tvrtke ograničio 2023., zaključak vrijedi. Vidljivi FAQ ostaje jer koristi kupcu. |
| Grobovi: ublažiti uvjet od 10 grobova | Uvjet rezervacije (10 grobova po groblju, 1 do 3 tjedna, predujam 30 %). Mijenja se samo Markovom odlukom. |

---

## 4. Napravljeno: pranje fasade kao ogledna stranica

- **Hero:** kraći opis: što peremo, za koga, tlak prema vrsti fasade, cijena potvrđena prije rada.
- **"Fasade koje smo oprali":** dva stvarna para prije i poslije odmah ispod forme, statično, bez klizača.
  - bijela obiteljska kuća, Zagreb (prije se ista fotka na stranici ponavljala dvaput);
  - narančasta obiteljska kuća, snimljena 10. 7. 2026., ista kuća kao tri fotke iz galerije; prvi put na stranici usluge.
- **"Što je uključeno":** cijena po m² potvrđena prije rada, zaštita prozora, vrata i biljaka, tlak i sredstvo prema fasadi, ispiranje, obiteljska kuća najčešće u jednom danu, fotke prije i poslije, voda i struja s lokacije, "ne odlazimo dok niste zadovoljni". Sve iz postojećeg teksta stranice.
- **Članci:** novi linkovi na softwash, 5 znakova da fasadi treba pranje, posivjelu bijelu fasadu, održavanje fasade, salitru. Blok "Cijene i savjeti" ostaje.
- **Put do upita:** link "Pošaljite upit za svoju fasadu" ispod tablice cijena.
- **Tvrtke:** odlomak o poslovnim objektima linka na poslovne objekte i javne prostore, s referencom kolodvora u Samoboru. Povezane usluge: okućnica, kamen, poslovni objekti, javni prostori, kemijsko čišćenje.
- **Tekst:** dva H2 o poslovnim objektima spojena u jedan; maknuto "jednako učinkovito kao agresivna kemija"; "odgovaramo u najkraćem roku" → "u roku od sat vremena" (potvrđeno 10. 10.).
- **Schema:** jedan Service čvor s cijenom umjesto dva.

**Ostale stranice:** interne rečenice maknute na tlakavcima, drvu, kamenu i namještaju; tamniji WhatsApp gumb u svakoj formi; footer dobio "Poslovni objekti" i "Javni prostori". Ništa nije maknuto iz navigacije ni s naslovnice.

**Nije dirano:** cijene, cjenik, sidrene cijene, uvjeti rezervacije, popis usluga, URL-ovi, capture-first (cijena se vidi tek nakon slanja).

### Mjerenje (Playwright)

| | Prije | Poslije |
|---|---:|---:|
| Mobitel 390x844: prvi dokaz radova | 2.240 px | 1.329 px |
| Mobitel: polje za broj / gumb za slanje | 746 / 1.020 px | 746 / 1.020 px |
| Mobitel: visina stranice | 18.486 px | 18.180 px |
| Desktop 1440x900: gumb forme | 743 px (iznad folda) | 743 px (iznad folda) |
| Desktop: visina stranice | 12.638 px | 11.406 px |
| Horizontalni scroll | ne | ne |

### Mjerenje konverzija

Postoji i radi, novi događaji nisu dodani: `form_submit` (na fasadi `form_location: usluga-facade`), `call_click`, `whatsapp_click`, `quote_cta_click`, `lead_form_submit` na landingima. Test sa simuliranim slanjem: upit ide kao `facade`, 200 m², događaj se šalje, cijena se pokazuje nakon slanja. Koji event je konverzija u Google Adsu i GA4, vidi se samo u GTM-u.

---

## 5. Provjere

| Provjera | Rezultat |
|---|---|
| `tsc` | 0 grešaka |
| `npm run lint` | 0 grešaka, 8 upozorenja (prije 10) |
| `npm run audit` | 0 fail, 0 warn |
| `npm run site-check` | 48 / 48 stranica, dev i produkcijski build |
| `npm run build` | prolazi (lokalno traži lažne Supabase varijable, okolina, ne kod) |
| Grep telefona (pravilo 7) i em dash | čisto |
| `npm run slop` | nije pušten, SlopMonster je samo na Markovom Macu |

---

## 6. Što se nije moglo provjeriti

- Live SERP i AI Overviews (nema pristupa iz okruženja).
- Koji URL rangira za koji upit (treba izvoz upit + stranica).
- Konfiguracija GTM-a, Google Adsa i GBP-a.
- Lighthouse rezultati iz Codexovog izvještaja (PageSpeed 98, Accessibility 93).

---

## 7. Odluke Marka (24. 10. 2026.)

- **www zatvoreno.** Pregled URL-a: `https://www.slaufismrk.com/` nije indeksiran, "Page with redirect", Google-selected canonical = `https://slaufismrk.com/`. URL na GBP-u promijenjen na non-www. Provjera za oko 4 tjedna: GSC, Pages, filtar `www.`. Prikazi bi trebali padati.
- **Kemijsko čišćenje ostaje na webu kakvo je, ali se ne gura.** Pojedinačni kauči i garniture se ne isplate. Cilj su velike površine i tvrtke; poslovi kao autobusni kolodvor i Messer su idealni.
- **Za tvrtke nema cijena na webu:** "po dogovoru", javite se.

---

## 8. Prijedlog: kemijsko čišćenje za tvrtke (čeka odluku)

Stanje: `/usluge/kemijsko-ciscenje-namjestaja` je za privatne kupce s cijenama (garnitura od 80 €). Za tvrtke postoje `/usluge/poslovni-objekti` (vanjsko: fasade, parkirališta, hale; "po dogovoru"; pozicija 4,8, 10 klikova) i `/usluge/komercijalno-ciscenje` (kolodvori, trgovi, garaže; "po ponudi nakon procjene"; referenca kolodvor Samobor).

| Opcija | Što | Za | Protiv |
|---|---|---|---|
| **A. Nova stranica** `/usluge/kemijsko-ciscenje-za-tvrtke` | Uredi, hoteli, restorani, tepisoni, uredske stolice, garniture u poslovnim prostorima. "Cijena po dogovoru", forma za tvrtke, bez cijena na stranici | Čista namjera, ne dira postojeće stranice ni cijene, privatna stranica ostaje | Novi URL treba vremena da se pozicionira; potražnja u GSC-u za to je mala |
| **B. Sve za tvrtke na jednu stranicu** | Spojiti poslovne objekte, javne prostore i kemijsko za tvrtke | Jedno mjesto za B2B kupca | Spajanje URL-ova bez podataka koji to opravdavaju, rizik za poslovne objekte (pozicija 4,8) i kolodvor |
| **C. Sekcija na poslovnim objektima** | "Unutra: kemijsko čišćenje tepisona i namještaja", po dogovoru | Najbrže, nula novih URL-ova, stranica već dobro stoji | Stranica je o vanjskom čišćenju, miješa namjere |

**Preporuka: A.** Nova stranica bez cijena, linkovi s poslovnih objekata, javnih prostora i kemijskog za privatne. Postojeći URL-ovi i cijene ostaju. Opseg: oko 1,5 sata (stranica, forma bez prikaza cijene kao na javnim prostorima, sitemap, linkovi, gate). Ako Messer smije javno kao referenca, ide na ovu stranicu i na poslovne objekte.

---

## 9. Otvoreno: treba odluku Marka ili Ivana

1. Kemijsko čišćenje za tvrtke: opcija A, B ili C (točka 8).
2. Messer: smije li se javno navesti kao referenca i ima li fotki.
3. Grobovi: uvjet od 10 grobova po groblju, 1 do 3 tjedna, predujam 30 %. Do Svih svetih je tjedan.
4. Narančasta fasada: potpis "Zagreb, srpanj 2026.". Commit od 13. 7. fotke te kuće veže uz Hrašće; ako je točno, potpis može nositi kvart.
5. "Isključivo biorazgradiva sredstva, sigurna za djecu i ljubimce" (fasada, Ekološki pristup): potvrditi ili ublažiti.
6. Tablica cijena fasade je na pola stranice. Podizanje na vrh dira capture-first odluku, nije dirano.
7. Drvo (brušenje, uljenje, popravak) i salitra: nove sekcije znače novu ponudu. Prvo potvrda nudite li to.

---

## 10. Plan dalje (bez obećanja pozicija)

1. **Objava ove grane** nakon pregleda previewa i `npm run gate` na Macu.
2. **Kemijsko za tvrtke** po odluci iz točke 8.
3. **Fasada po namjeri:** GSC izvoz upit + stranica za "pranje fasade*" (Performance, filtar upita, kartica Stranice; ili API s dimenzijama query i page). Tek onda odluka o titleovima i sadržaju između usluge i članka o cijeni.
4. **Isti predložak na okućnici i grobovima:** stvarni parovi s opisom, "što je uključeno", linkovi na članke. Grobovi imaju najviše klikova (17 %).
5. **Fotke sa svakog posla:** 2 para prije i poslije (isti kut, isto svjetlo) i opis: što, gdje, kad. To je najjači sadržaj koji web može dobiti, a ljudi ga traže i u AI pretrazi ("može slika kako bi izgledalo").
6. **Provjera za 4 tjedna:** www prikazi, klikovi na fasadi, upiti s forme po `form_location`.

---

## 11. Preview i grana

- Grana: `claude/festive-meitner-mb304q` (Vercel preview, ne produkcija; produkcija ide samo s `main` kroz `npm run deploy`).
- Preview fasade: https://slauf-i-smrk-kmntki73d-budemai.vercel.app/usluge/pranje-fasade (zadnji build grane; novi commit dobiva novi preview).
