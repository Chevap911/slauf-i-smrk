---
tags: [web, seo, plan]
updated: 2026-10-31
---
# SEO, radovi i kalkulator: plan provedbe

Cilj: provjeriti Gemini preporuke i pripremiti lokalnu verziju weba za Markov pregled. Povezano: [[2026-10-31-gemini-provjera]].

Marko je 31.10. delegirao odluku o kalkulatoru. Odabir: odmah vidljiva okvirna cijena, zatim dobrovoljan upit za točnu ponudu. Grobovi ostaju lista interesa. Bez objave.

Arhitektura: lib/cjenik.ts ostaje jedino mjesto cijena. lib/quote.ts računa procjenu i priprema tekst za oba prikaza. QuoteForm dijeli logiku za hero i modal. Native dialog daje fokus, Escape i inertnu pozadinu. data/completedJobs.ts sadrži stvarne poslove; odvojeni inventar u docs navodi duplikate i slike bez potvrđenog izvora. CompletedJobsFeed prikazuje prvih šest u SSR-u i dopušta daljnje učitavanje.

Tehnologije: postojeći Next 16, React 19, TypeScript, CSS modules, next/image. Bez novih runtime paketa.

- [x] 1. Napisati tests/quote.test.cjs: 120 m² okućnice = 480 do 720, minimum za terasu/okućnicu, decimalni zarez, nevaljani unos, namještaj, grob na čekanju, kontekst usluge. Pokrenuti npm test; testovi koriste lokalni TypeScript transpiler i Node test runner.
- [x] 2. lib/cjenik.ts: strukturirano polje minimuma umjesto dupliciranih brojeva u formi. lib/quote.ts: izračun, odabiri, sigurni rasponi, poruka. lib/contact.ts: validacija mobitela ili e-maila. API zadržava bazu i isti mail kanal.
- [x] 3. QuoteForm: odmah cijena, unos m², vizualni odabir usluge i slider u modalu, izbor komada namještaja, WhatsApp s istim podacima. Proširivi kontakt, ime/lokacija/poruka, telefon ili e-mail. Bez upload backenda, slike se šalju WhatsAppom. Hero kratak, bez dodatnih polja prije izračuna.
- [x] 4. QuoteFab i QuoteLink: jedan FAB, bez StickyCtaBanner, native dialog, predodabir sa stranice i kartice posla, povrat fokusa, scroll lock, bez pulsiranja, bez preklapanja cookie bannera. Landing stranice zadržavaju vlastiti CTA.
- [x] 5. Deduplicirati postojeće slike prema hash-u i sadržaju. Jedan grob s tri pogleda, Leggiero jedan posao. Ne navoditi datum, površinu, točnu lokaciju ili metodu ako nema dokaza. Ne tvrditi da je Samobor Zagreb ili Leggiero Zaprešić. Ne stavljati pločice u tlakavce. Ugraditi feed u usluge, područja i galeriju.
- [x] 6. SEO: kratki naslovi s namjerom pretrage, cijene i sidrene iz cjenika u opisima, grobovi bez obećanja termina, jedinstveni business @id. Dodati offers gdje postoji javna cijena. JsonLd komponenta escapira '<'. Provjeriti canonicale svih stranica. www 308 već postoji na Vercelu, dodati isti host uvjet u repo radi prenosivosti.
- [x] 7. Node testovi, TypeScript, npm run build s lokalnim dummy ključevima, npm run gate protiv produkcijskog builda na 3108. Browser pregled desktopa i mobitela, kalkulatora, kontakta, cookie bannera i radova. Nema pravog slanja upita.
- [x] 8. Zapis provjere, uputa za dodavanje posla, isporuka i lokalni preview. Produkcija se ne mijenja bez Markova odobrenja.

## Dizajn

Primarna referenca ostaje postojeća stranica https://slaufismrk.com i ranije odabrani HomeAdvisor vodič https://www.homeadvisor.com/cost/cleaning-services/pressure-wash-driveway/ (docs/design-decisions-cjenik-i-upit.md). Komponentni uzor: https://21st.dev/@shadcn/components/dialog, iz Five Shelves galerije.
Outfit naslovi + Inter tekst; postojeći navy, žuta i bijela, bez novog fonta ili palete. Naslovi 1.4 do 2.5rem, tijelo 1rem, radius 0.7/1.25rem, tanki navy rub. Fotografije široke, zadržavaju puni sadržaj, oznake Prije/Poslije. Razmak sekcija 3 do 4rem, širina prema postojećem containeru. Kalkulator: kompaktna bijela kartica, žuta procjena, tamnozelena WhatsApp akcija, native dialog do 620px, bottom sheet na mobitelu, samo kratki fade uz reduced-motion.
UI/UX skill preporučuje generički Cinzel/narančastu paletu, odbijeno jer korisnik traži očuvanje postojećeg identiteta. Preuzeti pristupačnost, 44px kontrole, vidljiv fokus i progresivno otvaranje kontaktnih polja.
