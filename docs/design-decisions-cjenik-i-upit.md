# Cjenik i upit u članku (2026-09-27)

Design gate (Skills/anti-slop-design) za `/cjenik` i `components/ArticleQuote`.

- **Gold standard:** HomeAdvisor vodiči o cijenama, npr. https://www.homeadvisor.com/cost/cleaning-services/pressure-wash-driveway/
- **Sekundarni:** Angi, https://www.angi.com/articles/how-much-does-it-cost-pressure-wash-house.htm
- **Mehanizam koji je preuzet:** odgovor na "koliko košta" i polje za upit stoje zajedno i rano na stranici, ne na dnu članka. Kod njih ZIP + gumb uz raspon cijene, kod nas kratka forma (usluga, mobitel, kvadratura) s cijenom nakon slanja, plus WhatsApp s unaprijed napisanom porukom po temi.
- **Sustav:** bez novog vizualnog jezika. Kartica je ista kao hero forma (tamno plavo zaglavlje, žuti eyebrow, bijelo tijelo, radius 1.5rem), fontovi Outfit + Inter kao ostatak weba.
- **Razlog:** GSC 3 mj do 26. 9. 2026.: 594 klika, većina na blog, a upit je bio samo na dnu članka i vodio na dugu formu na naslovnici.

Judge rubrika: 8/8 za komponente (emoji maknut iz chipa s cijenom, telefonski link u formi podignut na 44 px). H1 3,5x pravilo ne vrijedi za predložak članka, nije mijenjan.
