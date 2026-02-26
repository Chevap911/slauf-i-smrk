# Cleaning Service Form - WordPress Plugin

Interaktivna forma za usluge čišćenja s kalkulatorom cijene i automatskim email notifikacijama.

## Značajke

- 🎨 **Moderni dizajn** - 3D elementi, animacije i gradijenti
- 💰 **Automatski kalkulator cijene** - Računa cijene na temelju unesenih podataka
- 📧 **Email notifikacije** - Automatski šalje emailove vlasniku i korisniku
- 📱 **Responsive dizajn** - Prilagođen svim uređajima
- 🔒 **Sigurnost** - Rate limiting i sanitizacija podataka
- 💾 **Baza podataka** - Sprema sve submissione za pregled

## Instalacija

### Metoda 1: Upload preko WordPress Admin

1. Preuzmite `cleaning-service-form.zip` file
2. Idite u WordPress Admin → Plugins → Add New → Upload Plugin
3. Odaberite zip file i kliknite "Install Now"
4. Aktivirajte plugin

### Metoda 2: FTP Upload

1. Ekstraktirajte `cleaning-service-form.zip`
2. Uploadajte `cleaning-service-form` folder u `/wp-content/plugins/` direktorij
3. Aktivirajte plugin kroz 'Plugins' menu u WordPress Admin

## Korištenje

Dodajte shortcode na bilo koju stranicu ili post:

\`\`\`
[cleaning_form]
\`\`\`

## Konfiguracija

### Promjena email adrese

Email adresa vlasnika se može promijeniti u datoteci:
`/includes/email-handler.php` na liniji 10:

\`\`\`php
private $owner_email = 'vas-email@example.com';
\`\`\`

### SMTP podrška

Za bolje email delivery preporučujemo korištenje SMTP plugin-a poput:
- WP Mail SMTP
- Post SMTP
- Easy WP SMTP

## Struktura foldera

\`\`\`
cleaning-service-form/
├── assets/
│   ├── css/
│   │   └── cleaning-form.css
│   └── js/
│       └── cleaning-form.js
├── includes/
│   └── email-handler.php
├── templates/
│   ├── email-owner.php
│   └── email-user.php
├── cleaning-service-form.php
├── readme.txt
├── README.md
└── index.php
\`\`\`

## Tehnički detalji

### Korištene tehnologije

- **React 18** - Za interaktivnu formu
- **Framer Motion** - Za animacije
- **React Confetti** - Za konfete efekt
- **WordPress REST API** - Za komunikaciju s backendom
- **Custom CSS** - Za Tailwind-like stilove

### Sigurnosne mjere

- Rate limiting (max 5 submissiona po satu po IP adresi)
- Sanitizacija svih input podataka
- Nonce verifikacija za REST API pozive
- SQL injection prevencija kroz WordPress prepared statements

### Baza podataka

Plugin kreira tablicu `wp_cleaning_form_submissions` sa sljedećim poljima:
- `id` - Jedinstveni ID
- `email` - Email korisnika
- `form_data` - JSON sa svim podacima forme
- `submitted_at` - Datum i vrijeme slanja
- `ip_address` - IP adresa korisnika

## Podržane usluge

1. **Čišćenje fasade**
   - Kalkulator na temelju površine, stanja i broja strana
   - Podrška za prozore i balkone

2. **Pranje bazena**
   - Tri veličine: mali, srednji, veliki
   - Različiti tipovi: standardni, slani, infinity

3. **Čišćenje okućnice**
   - Kalkulator na temelju površine i stanja
   - Dodatni faktori za biljke i drveće

4. **Kompletna usluga**
   - Kombinacija svih usluga
   - Dodatne opcije kao pranje automobila

## Troubleshooting

### Forma se ne prikazuje

1. Provjerite je li plugin aktiviran
2. Provjerite je li shortcode ispravno dodan
3. Pogledajte browser konzolu za JavaScript greške
4. Provjerite jesu li svi fileovi uploadani

### Emailovi se ne šalju

1. Provjerite email adresu u `email-handler.php`
2. Instalirajte SMTP plugin
3. Provjerite spam folder
4. Testirajte sa `wp_mail()` funkcijom

### JavaScript greške

1. Provjerite konflikt s drugim pluginovima
2. Provjerite učitavaju li se React i ostale biblioteke
3. Pogledajte Network tab za 404 greške

## Podrška

Za podršku kontaktirajte: support@yourwebsite.com

## Changelog

### 1.0.0
- Početna verzija
- React forma s kalkulatorom cijene
- Email notifikacije
- Responsive dizajn
- Sigurnosne mjere
- Baza podataka za spremanje

## Licenca

GPL v2 or later

## Credits

Razvio: Cleaning Service Team
