---
tags: [predaja, claude, slauf, web]
updated: 2026-11-01
---
# Predaja Claudeu: pregled Šlauf web nadogradnje

Povezano: [[2026-11-01-cijene-seo-provjera]], [[2026-11-01-dodatni-radovi]], [[2026-10-31-gemini-provjera]], [[ODLUKE]].

## Gdje je kod

Repo: `/Users/marko/Desktop/Claude assistant/07 Šlauf i Šmrk/web-repo`.
Grana: `codex/seo-radovi-kalkulator-20261031`.
Lokalni produkcijski pregled: http://localhost:3108 (Next start session 64922, dummy Resend/Supabase ključevi).

Sve izmjene su u radnom stablu, nisu commitane, pushane ni objavljene. Pregledaj `git diff` I nove nepraćene datoteke iz `git status`, jer diff ne prikazuje sadržaj novih komponenti, testova i registra. Postojeća dva lokalna commita ispred origina nisu dirana. Ne odbacivati tuđi ili raniji rad. Ne pokretati paralelnu sesiju koja piše u isti repo.

## Najnovije Markove odluke, imaju prednost nad starim CLAUDE.md

1. Cijenu pokazati odmah, prije kontakta. Marko je izbor delegirao Codexu 31.10.; stara capture-first uputa više ne vrijedi za ovu nadogradnju.
2. Dana 1.11. zatražio je uklanjanje sidrenih cijena iz aktivnog prikaza i početne cijene „od”, bez maksimuma. Povijesne cijene/CSV ostaju sačuvani. Upozoren je na službeno navedeni početak obveze 17.11.2026. Ne tretirati uklanjanje kao trajno pravno izuzeće; vidi najnoviji izvještaj i izvore.
3. NOVE FOTOGRAFIJE NISU ODOBRENE. Marko kaže da izbor nije dobar i sam bira konačne. Trenutačne 23 nove WebP slike i šest primjera na naslovnici su privremeni lokalni izbor. Ne birati ponovno samostalno. Media izvornici su netaknuti.
4. Grobovi ostaju lista interesa prema odluci 25.10.2026.
5. Nema odobrenja za deploy, push ili slanje poruka Ivanu/klijentima.

## Što je implementirano

- Zajednički kalkulator hero/modal, odmah početna cijena, kontekst usluge, WhatsApp s izračunom, kontakt mobitel ili e-mail.
- API zadržava spremanje prije maila i fallback dostave; za novu početnu cijenu nema lažnog maksimuma. Stari upiti s rasponom ostaju podržani.
- Registar 13 privremenih zapisa, feed usluga/područja/galerije, prvih šest u HTML-u, daljnje učitavanje; naslovnica čita šest primjera iz registra.
- SEO title/description, canonicali, host redirect, sigurna JsonLd komponenta, po jedna Service schema, početne ponude bez high/maxPrice, datumi sadržaja i /gallery redirect.
- Cijene „od” kroz stranice, blogove, FAQ, cjenik, metapodatke i landing forme. lib/cjenik.ts jedini izvor računanja. Novi CSV 004_01.11.2026_17-27.
- Popravci kontrasta WhatsApp gumba i ARIA oznake zvjezdica.

## Dokazi

Najnoviji detaljan izvještaj: `docs/2026-11-01-cijene-seo-provjera.md`.
19/19 testova, build prolazi, gate 53/53 bez grešaka/upozorenja, slop 48/48, zaseban HTML audit bez nalaza na 53 rute i 58 internih ciljeva. `git diff --check` čist.
PageSpeed javne naslovnice i fasade: mobilni Performance 100 i osnovni SEO 100. To nije mjerenje neobjavljene verzije ni jamstvo rangiranja. GSC koji je korišten završava 10.10.2026. Nije provjeren novi GSC račun, GBP ili novi backlink podaci.

## Što pregledati i što je još otvoreno

- Napravi code review: API/forma, minimumi i izračuni, zatvaranje/fokus modala, kontekst CTA-a, schema i usklađenost teksta. Ne vraćati stare cjenovne raspone ili sidreni prikaz zbog zastarjelog lokalnog pravila bez čitanja nove odluke.
- Završni vizualni pregled nove cijene/cjenika na desktopu i mobitelu. Najnovija fasada potvrđena na 673 px; ranije 1440/390 provjere odnose se na prethodnu verziju prije uklanjanja sidrenih cijena.
- Markov odabir slika, zamjena i vizualna provjera. Nemoj ovo proglasiti dovršenim.
- U WhatsApp tekstu usluge ima redundantnog pozdrava/opisa zbog custom whatsappText + quoteSummary; funkcionalno nosi točne podatke, može se urediti u reviewu.
- Prava dostava u inbox nije testirana; nema stvarnog slanja iz lokalnog pregleda. Nakon eventualno odobrene objave provjeriti stvarni inbox, ne samo status API-ja.
- Nakon objave ponoviti PSI i pogledati gtag 404 zabilježen na jednom javnom testu, bez nasumične promjene analitičkih ID-jeva.

Sljedeći korak: Claude radi pregled lokalnih izmjena i vraća nalaze Marku; objavu odobrava Marko zasebno.
