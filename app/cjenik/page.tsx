import type { Metadata } from 'next';
import Link from 'next/link';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ArrowRight, Phone } from 'lucide-react';
import styles from './cjenik.module.css';
import { OG_IMAGE } from '@/lib/seo';
import { CJENIK, SIDRENI_DATUM, formatIznos } from '@/lib/cjenik';
import ArticleQuote from '@/components/ArticleQuote/ArticleQuote';

export const metadata: Metadata = {
    title: 'Cjenik pranja fasade i okućnice, Zagreb | Šlauf i Šmrk',
    description:
        'Početne cijene pranja fasade, okućnice, terasa i kemijskog čišćenja u Zagrebu, po m² i po komadu, uz cijene na dan 10. 9. 2026. i cjenik u CSV formatu.',
    alternates: { canonical: '/cjenik' },
    openGraph: {
        title: 'Cjenik pranja fasade i okućnice u Zagrebu',
        description: 'Početne cijene po m² i po usluzi, uz cijene na dan 10. 9. 2026. Konačna ponuda nakon besplatne procjene.',
        url: 'https://slaufismrk.com/cjenik',
        type: 'website',
        images: [OG_IMAGE],
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://slaufismrk.com/' },
        { '@type': 'ListItem', position: 2, name: 'Cjenik', item: 'https://slaufismrk.com/cjenik' },
    ],
};

type Objava = { datoteka: string; objavljeno: string };
type Zapis = { datoteka: string; broj: number; objavljen: string };

// "2026-11-18T09:30" iz manifesta u "18. 11. 2026. u 09:30".
const datum = (iso: string) => {
    const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
    return m ? `${Number(m[3])}. ${Number(m[2])}. ${m[1]}. u ${m[4]}:${m[5]}` : '';
};

// CSV-ove i public/cjenik/manifest.json piše `npm run cjenik` (NN 132/2026-1584).
// Važeći je i na stalnom URL-u /cjenik.csv (next.config.ts), prethodni ostaju kao
// arhiva: pravilnik traži najmanje 15 dana, mi ih ne brišemo.
function objave(): { vazeci: Objava | null; arhiva: Objava[] } {
    const f = join(process.cwd(), 'public', 'cjenik', 'manifest.json');
    if (!existsSync(f)) return { vazeci: null, arhiva: [] };
    const m = JSON.parse(readFileSync(f, 'utf8')) as { vazeci: Zapis | null; arhiva: Zapis[] };
    const u = (z: Zapis): Objava => ({ datoteka: z.datoteka, objavljeno: datum(z.objavljen) });
    return { vazeci: m.vazeci ? u(m.vazeci) : null, arhiva: m.arhiva.map(u) };
}

export default function CjenikPage() {
    const { vazeci, arhiva } = objave();

    return (
        <div className={styles.page}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <article className={styles.article}>
                <div className="container">
                    <header className={styles.header}>
                        <span className={styles.category}>Cjenik</span>
                        <h1>Cjenik pranja fasade, okućnice i terasa u Zagrebu</h1>
                        {vazeci && <p className={styles.meta}>Objavljeno {vazeci.objavljeno} • Šlauf i Šmrk</p>}
                    </header>

                    <div className={styles.content}>
                        <p>
                            Vanjske površine naplaćujemo po kvadratu, ostale usluge imaju početnu cijenu ili idu po dogovoru. Točan iznos za
                            vaš objekt dobijete nakon besplatne procjene na lokaciji, prije nego krenemo s radom.
                        </p>
                        <p>Sve navedene cijene su početne. Konačan iznos ovisi o zaprljanosti, materijalu, pristupu i opsegu posla. Ponudu potvrđujemo prije početka rada.</p>
                        <p>
                            Uz svaku cijenu piše i cijena koja je vrijedila {SIDRENI_DATUM} Tako od 17. studenoga 2026.
                            propisuje Pravilnik o isticanju bazne cijene (NN 132/2026). Usluge po dogovoru nemaju
                            istaknutu cijenu, iznos dobijete u ponudi.
                        </p>

                        {CJENIK.map((kategorija, i) => (
                            <section key={kategorija.naziv}>
                                <h2>{kategorija.naziv}</h2>
                                <div className={styles.tableWrap}>
                                    <table className={styles.table}>
                                        <thead>
                                            <tr>
                                                <th scope="col">Usluga</th>
                                                <th scope="col">Cijena</th>
                                                <th scope="col">Cijena na {SIDRENI_DATUM}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {kategorija.stavke.map((s) => (
                                                <tr key={s.naziv}>
                                                    <td>
                                                        {s.naziv}
                                                        {s.napomena && (
                                                            <span className={styles.note}>
                                                                {s.napomena}
                                                                {/* Cijena u napomeni također treba sidrenu na istom mjestu (NN 132/2026-1583) */}
                                                                {s.napomenaSidrena && ` (cijena na ${SIDRENI_DATUM}: ${s.napomenaSidrena})`}
                                                            </span>
                                                        )}
                                                    </td>
                                                    <td className={styles.price}>{formatIznos(s.cijena, s.jedinica)}</td>
                                                    <td className={styles.anchor}>
                                                        <span className={styles.anchorLabel}>Cijena na {SIDRENI_DATUM}: </span>
                                                        {formatIznos(s.sidrena, s.jedinica)}
                                                    </td>
                                                </tr>
                                            ))}
                                            {kategorija.poDogovoru?.map((s) => (
                                                <tr key={s.naziv}>
                                                    <td>
                                                        {s.naziv}
                                                        {s.napomena && <span className={styles.note}>{s.napomena}</span>}
                                                    </td>
                                                    <td className={styles.price} colSpan={2}>po dogovoru</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                {i === 0 && (
                                    <ArticleQuote
                                        location="cjenik"
                                        service="facade"
                                        title="Izračunajte cijenu za svoju površinu"
                                        whatsappText="Pozdrav, zanima me cijena pranja. Šaljem slike za procjenu."
                                    />
                                )}
                            </section>
                        ))}

                        <h2>Kako nastaje konačna cijena</h2>
                        <ul>
                            <li>
                                Fasade, okućnice, terase i prilazi naplaćuju se po m². Na konačan iznos utječu
                                zaprljanost, visina objekta i pristup vodi i struji.
                            </li>
                            <li>Kad u istom dolasku radimo i drugu uslugu, na tu dodatnu uslugu dajemo 10% popusta.</li>
                            <li>Termin rezerviramo uz predujam od 30%.</li>
                            <li>
                                Zgrade i <Link href="/usluge/poslovni-objekti">poslovne objekte</Link> radimo po ponudi, nakon
                                procjene na lokaciji.
                            </li>
                        </ul>
                        <p>
                            Primjere izračuna za kuću i dvorište imate u vodičima{' '}
                            <Link href="/blog/koliko-kosta-pranje-fasade">koliko košta pranje fasade</Link> i{' '}
                            <Link href="/blog/koliko-kosta-pranje-okucnice-tlakavaca-zagreb">
                                koliko košta pranje okućnice
                            </Link>
                            .
                        </p>

                        <h2>Cjenik u CSV formatu</h2>
                        <p>
                            Isti cjenik objavljujemo i kao CSV datoteku za strojno čitanje, kako traži Pravilnik o načinu
                            objave cjenika (NN 132/2026). Važeći je uvijek na adresi{' '}
                            <a href="/cjenik.csv">slaufismrk.com/cjenik.csv</a>. Starije objave čuvamo kao arhivu, ne kao važeću ponudu.
                        </p>
                        {vazeci && (
                            <ul className={styles.files}>
                                <li>
                                    Važeći cjenik:{' '}
                                    <a href={`/cjenik/${vazeci.datoteka}`} download>
                                        {vazeci.datoteka}
                                    </a>
                                </li>
                            </ul>
                        )}
                        {arhiva.length > 0 && (
                            <>
                                <p>Prethodni cjenici:</p>
                                <ul className={styles.files}>
                                    {arhiva.map((o) => (
                                        <li key={o.datoteka}>
                                            <a href={`/cjenik/${o.datoteka}`} download>
                                                {o.datoteka}
                                            </a>{' '}
                                            (objavljen {o.objavljeno})
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}

                        <div className={styles.ctaBox}>
                            <h3>Zatražite besplatnu procjenu</h3>
                            <p>Pošaljite nam kvadraturu ili slike, javimo vam točnu cijenu za vaš objekt.</p>
                            <div className={styles.ctaButtons}>
                                <a href="tel:+385958442806" className={styles.ctaBtn}>
                                    <Phone size={18} /> +385 95 844 2806
                                </a>
                                <Link href="#procjena" className={styles.ctaBtnSecondary}>
                                    Ispunite formu <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
