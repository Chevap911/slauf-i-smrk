=== Cleaning Service Form ===
Contributors: cleaningservice
Donate link: https://yourwebsite.com/donate
Tags: cleaning, form, calculator, email, contact, facade, pool, yard
Requires at least: 5.0
Tested up to: 6.4
Requires PHP: 7.4
Stable tag: 1.0.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Interaktivna forma za usluge čišćenja s kalkulatorom cijene i automatskim email notifikacijama.

== Description ==

Cleaning Service Form je WordPress plugin koji omogućava kreiranje interaktivne forme za usluge čišćenja fasada, bazena i okućnica. Plugin uključuje:

* Interaktivnu React formu s kalkulatorom cijene
* Automatsko slanje emailova vlasniku i korisniku
* Responsive dizajn prilagođen svim uređajima
* Sigurnosne mjere protiv spam-a
* Spremanje podataka u bazu

= Značajke =

* **Kalkulator cijene** - Automatski računa cijene na temelju unesenih podataka
* **Email notifikacije** - Šalje emailove vlasniku i korisniku
* **Responsive dizajn** - Prilagođen svim uređajima
* **Sigurnost** - Rate limiting i sanitizacija podataka
* **Baza podataka** - Sprema sve submissione za pregled

= Podržane usluge =

* Čišćenje fasade
* Pranje bazena
* Čišćenje okućnice
* Kompletna usluga

== Installation ==

1. Upload plugin folder u `/wp-content/plugins/` direktorij
2. Aktiviraj plugin kroz 'Plugins' menu u WordPress Admin
3. Koristi shortcode `[cleaning_form]` na bilo kojoj stranici ili postu

= Ručna instalacija =

1. Download plugin zip file
2. Idi u WordPress Admin → Plugins → Add New → Upload Plugin
3. Upload zip file i aktiviraj plugin
4. Dodaj shortcode `[cleaning_form]` na stranicu

== Frequently Asked Questions ==

= Kako koristiti formu? =

Jednostavno dodaj shortcode `[cleaning_form]` na bilo koju stranicu ili post gdje želiš prikazati formu.

= Mogu li promijeniti email adresu? =

Da, možeš promijeniti email adresu u datoteci `includes/email-handler.php` na liniji 6.

= Podržava li plugin SMTP? =

Plugin koristi WordPress wp_mail() funkciju. Za bolje email delivery preporučujemo korištenje SMTP plugin-a poput "WP Mail SMTP".

= Je li plugin siguran? =

Da, plugin uključuje rate limiting, sanitizaciju podataka i druge sigurnosne mjere.

= Mogu li vidjeti poslane forme? =

Da, svi podaci se spremaju u bazu podataka u tablicu `wp_cleaning_form_submissions`.

== Screenshots ==

1. Korak 1 - Kontakt podaci
2. Korak 2 - Dimenzije objekta
3. Korak 3 - Pregled i potvrda
4. Korak 4 - Uspješno poslano

== Changelog ==

= 1.0.0 =
* Početna verzija
* React forma s kalkulatorom cijene
* Email notifikacije
* Responsive dizajn
* Sigurnosne mjere
* Baza podataka za spremanje

== Upgrade Notice ==

= 1.0.0 =
Početna verzija plugin-a. Uključuje sve osnovne funkcionalnosti.

== Support ==

Za podršku kontaktirajte nas na: support@yourwebsite.com

== Privacy Policy ==

Ovaj plugin sprema podatke korisnika u bazu podataka radi funkcionalnosti forme. Podaci se koriste isključivo za poslovne svrhe i neće se dijeliti s trećim stranama.
