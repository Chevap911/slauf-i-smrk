# Homepage Mascots Design

Date: 2026-04-21

## Goal

Vratiti maskote na web tako da budu prepoznatljiv i zabavan dio brenda, ali bez vraćanja naslovnice u smjer koji smanjuje povjerenje. Stvarna fotografija rezultata ostaje glavni dokaz kvalitete, a maskote postaju vodiči brenda koji povezuju web s video oglasima.

## Scope

Ovaj zahvat pokriva samo naslovnicu.

U opsegu su:
- hero sekcija
- 2 do 3 dodatna “mascot moments” na naslovnici
- priprema web-optimiziranih maskota iz postojećih PNG asseta

Izvan opsega za ovu iteraciju:
- servisne stranice
- promjene copy strategije izvan manjih prilagodbi uz maskote
- nove ilustracije ili regeneriranje maskota

## Recommended Approach

Koristimo pristup “Hero Wingmen”.

- glavna before/after ili rezultat fotografija ostaje primarni hero vizual
- maskote ulaze uz rubove hero vizuala kao sekundarni elementi
- njihova uloga je usmjeravati pažnju na rezultat, CTA i ključne trust poruke
- kroz ostatak naslovnice maskote se pojavljuju još 2 do 3 puta u manjim veličinama kao brand pečat

Ovaj pristup najbolje zadržava SEO/trust dobitke s nove naslovnice i istovremeno vraća identitet koji korisnik već koristi u oglasima.

## Hero Design

Hero ostaje strukturiran kao:
- lijevo: naslov, opis, CTA i trust kartice
- desno: stvarna fotografija rezultata čišćenja

Maskote se dodaju ovako:
- jedna maskota u pozi `presenting` ili `pointing` ide uz donji lijevi rub hero vizuala
- druga maskota u pozi `thumbs_up`, `waving` ili `celebrating` ide uz gornji ili desni rub hero vizuala
- maskote ne smiju prelaziti preko glavnog naslova, opisa ili CTA gumba
- maskote trebaju izgledati kao da “ulaze” u kadar, a ne kao zaseban centralni poster

Vizualni prioritet:
1. naslov i CTA
2. stvarni rezultat čišćenja
3. maskote kao vodiči brenda

## Additional Homepage Placements

Maskote se ponavljaju još maksimalno 3 puta na naslovnici.

Preporučena mjesta:
- sekcija `Zašto odabrati nas?`
  - jedna manja maskota uz naslov ili uz desni rub sekcije, kao brand akcent
- sekcija `Naše Usluge`
  - jedna maskota u pozi `pointing` ili `presenting` može vizualno “uvesti” kartice usluga
- završni CTA ili kontakt sekcija
  - jedna manja maskota u pozitivnoj pozi (`thumbs_up` ili `waving`) može pojačati završni poziv na akciju

Pravilo je da maskote ne budu u svakoj sekciji. Cilj je ritam i prepoznatljivost, ne prenatrpanost.

## Asset Strategy

Za web koristimo pojedinačne PNG datoteke iz:

`Media/characters/Slauf_i_Smrk_Character_Sheets`

Odabrane poze će se pripremiti kao web-accessible asseti u `public`, u zasebnom podfolderu za naslovnicu. Koristit će se samo manji podskup poza potrebnih za ovu iteraciju.

Prednost ovog pristupa:
- ne koristimo veliku kompozitnu sliku s maskotama
- lakše je pozicioniranje po sekcijama
- lakše je optimizirati performanse

## Responsive Rules

Na desktopu:
- obje hero maskote mogu biti vidljive
- dodatne maskote u sekcijama mogu biti slobodnije raspoređene

Na tabletu:
- zadržava se hero maskota nižeg prioriteta u manjoj veličini
- jedna od dvije hero maskote može se sakriti ako guši raspored

Na mobitelu:
- hero ostaje čitljiv iznad svega
- najviše jedna maskota u hero sekciji
- ostale maskote se ili smanjuju ili sele niže, ovisno o prostoru

## Motion and Styling

Maskote smiju imati samo vrlo suptilan motion:
- lagani float
- blagi tilt
- ne smije biti stalnog skakanja, vrtnje ili agresivne animacije

Stilski cilj:
- izgledaju kao dio dizajn sustava
- ne izgledaju kao nasumično nalijepljeni stickeri

## Accessibility and Performance

- maskote koje su čisto dekorativne imaju prazni `alt`
- maskote se renderiraju preko `next/image`
- samo glavni hero rezultat ostaje visoki prioritet
- maskote se ne preloadaju kao LCP asseti
- ne uvodimo teške slike ili dodatne skripte radi maskota

## Verification

Promjenu treba potvrditi kroz:
- desktop pregled naslovnice
- mobilni pregled naslovnice
- provjeru da hero tekst i CTA ostaju jasni
- provjeru da maskote ne prekrivaju važne elemente
- `eslint` za app/components
- production build

## Success Criteria

Promjena je uspješna ako:
- maskote su odmah prepoznatljive na naslovnici
- naslovnica i dalje izgleda profesionalno i uvjerljivo
- rezultat čišćenja ostaje glavni vizualni dokaz
- maskote pojačavaju identitet brenda bez narušavanja konverzije
