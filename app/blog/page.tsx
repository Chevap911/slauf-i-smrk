import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import styles from './blog.module.css';

export const metadata: Metadata = {
    title: 'Blog, Savjeti za Čišćenje | Šlauf i Šmrk',
    description: 'Savjeti, vodiči kroz cijene i korisne informacije o pranju fasade, čišćenju okućnice, terasa, tlakavaca i održavanju doma. Blog Šlauf i Šmrk.',
    alternates: { canonical: '/blog' },
    openGraph: {
        title: 'Blog, Savjeti za Čišćenje | Šlauf i Šmrk',
        description: 'Savjeti, vodiči kroz cijene i korisne informacije o pranju fasade, čišćenju okućnice, terasa i tlakavaca.',
        url: 'https://slaufismrk.com/blog',
    },
};

const articles = [
    {
        title: 'Koliko košta čišćenje grobnog mjesta? Cijene održavanja spomenika Zagreb 2026',
        excerpt: 'Jednostruki grob od 250 €, dvostruki od 300 €. Konkretne cijene čišćenja nadgrobnih spomenika u Zagrebu, kako funkcionira rezervacija i zašto koristimo niski tlak.',
        slug: '/blog/koliko-kosta-ciscenje-grobnog-mjesta',
        date: '2026-07-08',
        category: 'Cijene',
    },
    {
        title: 'Koliko košta kemijsko čišćenje namještaja? Cijene garniture, trosjeda i madraca',
        excerpt: 'Garnitura od 80 €, trosjed od 40 €, madrac od 30 €, tepih od 5 €/m². Realne cijene dubinskog čišćenja namještaja u Zagrebu, koliko traje sušenje i što je realno s mrljama.',
        slug: '/blog/koliko-kosta-kemijsko-ciscenje-namjestaja',
        date: '2026-07-06',
        category: 'Cijene',
    },
    {
        title: 'Uklanjanje grafita u Zagrebu: zašto se isplati i kako to radimo',
        excerpt: 'Zagreb je pun grafita po fasadama i izlozima. Zašto ispisan zid privlači nove tagove, kako se boja skida bez oštećenja podloge i zašto antigrafitna zaštita štedi novac.',
        slug: '/blog/uklanjanje-grafita-zagreb',
        date: '2026-06-16',
        category: 'Savjeti',
    },
    {
        title: 'Zašto neredovito održavanje fasade na kraju košta puno više',
        excerpt: 'Zelena mrlja koju ignorirate godinama postane sanacija žbuke za nekoliko tisuća eura. Kako mali problem poskupi i koliko košta da do toga ne dođe.',
        slug: '/blog/odrzavanje-fasade-stedi-novac',
        date: '2026-06-16',
        category: 'Savjeti',
    },
    {
        title: 'Crne fleke na fasadi: kako smo ih skinuli na kući na Jarunu',
        excerpt: 'Crne fleke nisu prljavština nego gljivice i biofilm. Na stvarnom poslu u Zagrebu pokazujemo kako ih skidamo do korijena da se ne vrate i koliko to košta.',
        slug: '/blog/crne-fleke-na-fasadi',
        date: '2026-06-01',
        category: 'Naš posao',
    },
    {
        title: 'Korov između kocki i tlakavaca: kako smo očistili dvorište u Velikoj Gorici',
        excerpt: 'Korov se vraća svake sezone ako se samo počupa. Pokazujemo kako čistimo fuge do dna i čime usporavamo ponovni rast na stvarnom poslu.',
        slug: '/blog/korov-izmedju-tlakavaca',
        date: '2026-06-01',
        category: 'Naš posao',
    },
    {
        title: 'Salitra na fasadi: bijele naslage na kući u Španskom i kako smo ih riješili',
        excerpt: 'Bijele praškaste naslage nisu plijesan nego salitra. Na stvarnom poslu objašnjavamo odakle dolazi, kako je skidamo i zašto se vraća ako se ne riješi vlaga.',
        slug: '/blog/salitra-na-fasadi',
        date: '2026-06-01',
        category: 'Naš posao',
    },
    {
        title: 'Bijela fasada na kući posivjela: kako smo je vratili na Maksimiru',
        excerpt: 'Posivjela bijela fasada najčešće ne treba bojanje nego pranje. Na stvarnom poslu pokazujemo kako vraćamo boju za djelić cijene bojanja.',
        slug: '/blog/bijela-fasada-posivjela',
        date: '2026-06-01',
        category: 'Naš posao',
    },
    {
        title: 'Kako oprati fasadu: vodič korak po korak i kada zvati profesionalce',
        excerpt: 'Koji tlak za koju fasadu, koje sredstvo i zašto kućni perač griješi na stiropor fasadi. Postupak korak po korak, najčešće greške i cijena pranja fasade u Zagrebu.',
        slug: '/blog/kako-oprati-fasadu',
        date: '2026-06-01',
        category: 'Savjeti',
    },
    {
        title: 'Pranje fasade stiropor i ETICS: što smijete, što ne i cijena',
        excerpt: 'Stiropor fasada (ETICS sustav) ima završni sloj debljine 1,5 do 3 mm. Visoki tlak ga probije. Vodič o jedino sigurnoj metodi čišćenja, cijeni i tome kako prepoznati koji tip fasade imate.',
        slug: '/blog/pranje-fasade-stiropor-etics',
        date: '2026-05-26',
        category: 'Savjeti',
    },
    {
        title: 'Čišćenje fasade od algi i gljivica, uzroci, metode i cijena',
        excerpt: 'Zelene ili crne mrlje na fasadi? Vodič za trajno uklanjanje algi, gljivica i mahovine, razlika između softwash i visokotlačnog pranja, cijena i što ne raditi sami.',
        slug: '/blog/ciscenje-fasade-od-algi-i-gljivica',
        date: '2026-05-25',
        category: 'Savjeti',
    },
    {
        title: 'Softwash ili visokotlačno pranje fasade? Što je pravo za vaš dom',
        excerpt: 'Stiropor fasada i kameni zid traže potpuno drugačiji pristup. Saznajte razliku između softwash i visokotlačnog pranja i koji je pravi za vašu fasadu.',
        slug: '/blog/softwash-ili-visokotlacno-pranje-fasade',
        date: '2026-05-22',
        category: 'Savjeti',
    },
    {
        title: 'Čišćenje terasa u Zagrebu: alge, mahovina i crne naslage (2026.)',
        excerpt: 'Što se skuplja na terasama, zašto kućni perač nije dovoljan i kako izgleda profesionalno čišćenje terasa. Vodič za vlasnike kuća u Zagrebu.',
        slug: '/blog/ciscenje-terasa-zagreb',
        date: '2026-05-18',
        category: 'Savjeti',
    },
    {
        title: 'Koliko košta pranje terase u Zagrebu? Čišćenje terase cijena 2026.',
        excerpt: 'Konkretne cifre za pranje betonskih, keramičkih i drvenih terasa u Zagrebu. Bez zaokruživanja prema gore i bez skrivenih stavki u ponudi.',
        slug: '/blog/koliko-kosta-pranje-terase-zagreb',
        date: '2026-05-15',
        category: 'Cijene',
    },
    {
        title: 'Koliko košta pranje okućnice i tlakavaca? Čišćenje okućnice cijena 2026.',
        excerpt: 'Transparentan vodič kroz cijene pranja dvorišta, tlakavaca i betonskih kocki u Zagrebu. Pokriva i upite poput čišćenje okućnice cijena i pranje tlakavaca cijena.',
        slug: '/blog/koliko-kosta-pranje-okucnice-tlakavaca-zagreb',
        date: '2026-04-17',
        category: 'Cijene',
    },
    {
        title: '5 znakova da vašoj fasadi hitno treba dubinsko pranje',
        excerpt: 'Zelene mrlje, tamne pruge, bijeli praškasti sloj, fasada vam govori nešto. Otkrijte 5 jasnih znakova da je vrijeme za profesionalno pranje.',
        slug: '/blog/znakovi-da-fasadi-treba-pranje',
        date: '2026-04-13',
        category: 'Savjeti',
    },
    {
        title: 'Koliko košta pranje fasade? Čišćenje fasade cijena 2026.',
        excerpt: 'Sve o cijenama pranja fasade u Zagrebu, uključujući upite pranje fasade cijena i čišćenje fasade cijena, faktore ponude i što usluga uključuje.',
        slug: '/blog/koliko-kosta-pranje-fasade',
        date: '2026-02-26',
        category: 'Cijene',
    },
];

export default function BlogIndex() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className="container">
                    <h1>Blog</h1>
                    <p>Savjeti, upute i korisne informacije o čišćenju i održavanju vašeg doma</p>
                </div>
            </section>

            <section className={styles.articles}>
                <div className="container">
                    <div className={styles.grid}>
                        {articles.map((article, i) => (
                            <Link key={i} href={article.slug} className={styles.card}>
                                <span className={styles.category}>{article.category}</span>
                                <h2>{article.title}</h2>
                                <p>{article.excerpt}</p>
                                <div className={styles.cardFooter}>
                                    <span className={styles.date}>
                                        <Calendar size={14} /> {new Date(article.date).toLocaleDateString('hr-HR')}
                                    </span>
                                    <span className={styles.readMore}>
                                        Pročitajte <ArrowRight size={14} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
