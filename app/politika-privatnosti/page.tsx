import { Metadata } from 'next';
import styles from './PolitikaPrivatnosti.module.css';

export const metadata: Metadata = {
    title: 'Politika privatnosti | Šlauf i Šmrk',
    description: 'Pravila privatnosti i uvjeti obrade osobnih podataka obrta Šlauf i Šmrk.',
    robots: {
        index: false,
        follow: false,
    }
};

export default function PolitikaPrivatnosti() {
    return (
        <main className={styles.wrapper}>
            <div className={`container ${styles.content}`}>
                <h1>Politika privatnosti</h1>
                <p className={styles.updateDate}>Zadnje ažuriranje: 22. travnja 2026.</p>

                <p>
                    Vaša privatnost nam je važna. Ova Politika privatnosti objašnjava kako <strong>Šlauf i Šmrk, obrt za čišćenje</strong> prikuplja, koristi, održava i objavljuje podatke prikupljene od korisnika web stranice <a href="https://slaufismrk.com">slaufismrk.com</a>.
                </p>

                <h2>1. Voditelj obrade podataka</h2>
                <p>Voditelj obrade vaših osobnih podataka je:</p>
                <ul>
                    <li><strong>Naziv:</strong> Šlauf i Šmrk, obrt za čišćenje, vl. Ivan Karlović</li>
                    <li><strong>Adresa:</strong> Primoštenska ulica 11, 10000 Zagreb, Hrvatska</li>
                    <li><strong>OIB:</strong> 17217483925</li>
                    <li><strong>MBS:</strong> 99112752</li>
                    <li><strong>Email:</strong> <a href="mailto:slauf.i.smrk@gmail.com">slauf.i.smrk@gmail.com</a></li>
                    <li><strong>Telefon:</strong> <a href="tel:+385958442806">+385 95 844 2806</a></li>
                </ul>

                <h2>2. Koje podatke prikupljamo?</h2>
                <p>Osobne podatke prikupljamo samo kada nam ih dobrovoljno dostavite, primjerice putem kontakt forme za upit o procjeni cijene. Ti podaci mogu uključivati:</p>
                <ul>
                    <li>Ime i prezime</li>
                    <li>Email adresu</li>
                    <li>Broj telefona</li>
                    <li>Adresu i grad lokacije na kojoj se izvode radovi</li>
                    <li>Ostale podatke koje dobrovoljno navedete u napomeni</li>
                </ul>
                <p>Također, automatski prikupljamo neosobne identifikacijske podatke (poput IP adrese, tipa preglednika i načina na koji koristite našu stranicu) putem analitičkih alata, isključivo u svrhu poboljšanja korisničkog iskustva, uz vašu izričitu privolu putem Cookie bannera.</p>

                <h2>3. Kako koristimo prikupljene podatke?</h2>
                <p>Prikupljene podatke koristimo isključivo u sljedeće svrhe:</p>
                <ul>
                    <li>Za odgovor na vaše upite, izradu informativnih procjena i organizaciju dolaska na lokaciju.</li>
                    <li>Za slanje povremenih ponuda i obavijesti (samo ako ste za to dali izričit pristanak odznačavanjem opcije u kontakt formi).</li>
                    <li>Za poboljšanje naše web stranice i mjerenje učinkovitosti oglašavanja (analitika).</li>
                </ul>

                <h2>4. Kako štitimo vaše podatke?</h2>
                <p>
                    Primjenjujemo odgovarajuće prakse prikupljanja, pohrane i obrade podataka te sigurnosne mjere za zaštitu od neovlaštenog pristupa, izmjene, otkrivanja ili uništavanja vaših osobnih podataka.
                </p>

                <h2>5. Dijeljenje osobnih podataka</h2>
                <p>
                    Ne prodajemo, ne trgujemo i ne iznajmljujemo osobne podatke korisnika trećim stranama. Vaše podatke možemo podijeliti s pouzdanim davateljima usluga koji nam pomažu u poslovanju (npr. Google Analytics za analizu posjećenosti), ali oni podatke smiju koristiti samo u skladu s našim uputama i EU zakonodavstvom.
                </p>

                <h2>6. Prava korisnika (Prava ispitanika)</h2>
                <p>U skladu s Općom uredbom o zaštiti podataka (GDPR), u svakom trenutku imate pravo:</p>
                <ul>
                    <li>Zatražiti pristup vašim osobnim podacima koje posjedujemo.</li>
                    <li>Zatražiti ispravak netočnih podataka.</li>
                    <li>Zatražiti brisanje vaših podataka ("pravo na zaborav").</li>
                    <li>Povući privolu za obradu podataka i primanje marketinških poruka.</li>
                </ul>
                <p>Za ostvarivanje svojih prava, kontaktirajte nas putem emaila: <a href="mailto:slauf.i.smrk@gmail.com">slauf.i.smrk@gmail.com</a>.</p>

                <h2>7. Pravila o kolačićima (Cookie Policy)</h2>
                <p>
                    Naša web stranica koristi "kolačiće" (eng. cookies) za poboljšanje korisničkog iskustva, analizu posjećenosti i optimizaciju oglasa. Prilikom prvog posjeta stranici, putem skočnog prozora (bannera) tražimo vašu privolu za korištenje kolačića koji nisu neophodni za osnovno funkcioniranje weba.
                </p>
                <p>
                    Kroz funkcionalnost <strong>Google Consent Mode v2</strong> osiguravamo da se podaci za Google Analytics i Google Ads prikupljaju u potpunosti samo ako ste odabrali opciju "Prihvaćam sve". Ako ste odabrali opciju "Samo nužni", analitika se vrši anonimno bez spremanja identifikacijskih kolačića na vaš uređaj.
                </p>

                <h2>8. Promjene Politike privatnosti</h2>
                <p>
                    Šlauf i Šmrk, obrt za čišćenje zadržava pravo ažuriranja ove Politike privatnosti u bilo kojem trenutku. Kada to učinimo, revidirat ćemo ažurirani datum na dnu ove stranice. Potičemo korisnike da često provjeravaju ovu stranicu kako bi bili informirani o načinu zaštite podataka koje prikupljamo.
                </p>

                <h2>9. Prihvaćanje ovih uvjeta</h2>
                <p>
                    Korištenjem ove web stranice potvrđujete da prihvaćate ovu politiku. Ako se ne slažete, molimo da ne koristite našu web stranicu. Vaše daljnje korištenje stranice nakon objavljivanja promjena na ovoj politici smatrat će se prihvaćanjem tih promjena.
                </p>
            </div>
        </main>
    );
}
