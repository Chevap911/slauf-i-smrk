import type { Metadata } from 'next';
import Link from 'next/link';
import { ClipboardList, Camera, EyeOff, Wallet, Sprout, Droplets, Layers, Landmark, Home, TreeDeciduous } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { OG_IMAGE } from '@/lib/seo';

// 16.11.2026.: stranica je lista interesa (odluka 25.10.2026., grobovi se trenutno ne rade).
// Bez cijena, predujma, rezervacije i termina. Opisuje jedan stvarni posao: grob očišćen i
// prekriven bijelim kulirom. Imena na spomeniku na fotografijama ostaju zamućena.
export const metadata: Metadata = {
    title: 'Čišćenje grobnih mjesta Zagreb, lista interesa',
    description: 'Grobna mjesta trenutačno ne čistimo. Pogledajte grob koji smo očistili i prekrili bijelim kulirom i ostavite kontakt. Javimo se kad opet krenemo.',
    alternates: { canonical: '/usluge/odrzavanje-grobnih-mjesta' },
    openGraph: {
        title: 'Čišćenje grobnih mjesta Zagreb, lista interesa | Šlauf i Šmrk',
        description: 'Nove grobove zasad ne primamo. Ostavite kontakt i naziv groblja, bez predujma i bez rezervacije.',
        url: 'https://slaufismrk.com/usluge/odrzavanje-grobnih-mjesta',
        images: [OG_IMAGE],
    },
};

export default function OdrzavanjeGrobnihMjestaPage() {
    return (
        <ServicePage
            title="Održavanje grobnih mjesta u Zagrebu"
            titleHighlight="grobnih mjesta"
            quoteService="grave"
            quoteTitle="Prijavite interes za čišćenje groba"
            canonicalPath="/usluge/odrzavanje-grobnih-mjesta"
            description="Ispod je grob koji smo očistili i prekrili bijelim kulirom. Nove grobove zasad ne primamo. Ostavite kontakt i naziv groblja, javimo se kad opet krenemo."
            heroImage="/grob/grob-poslije-ciscenja-bijeli-kulir.jpg"
            heroImageAlt="Očišćen grob s tamnim granitnim okvirom i bijelim kulirom umjesto zemlje i korova"
            notice="Grobna mjesta trenutačno ne čistimo. Primamo prijave na listu interesa, bez rezervacije termina."
            heroHighlights={['Lista interesa', 'Bez predujma', 'Bez rezervacije termina']}
            processSteps={[
                {
                    title: 'Pošaljite prijavu',
                    description: 'U formu upišite ime, broj mobitela i naziv groblja. Fotografiju groba možete poslati na WhatsApp.',
                },
                {
                    title: 'Upisujemo vas na listu',
                    description: 'Prijava vas ni na što ne obvezuje. Ne plaćate ništa i ne rezervirate termin.',
                },
                {
                    title: 'Javimo se kad opet krenemo',
                    description: 'Zovemo redom kojim su prijave stigle. Datum danas ne znamo, pa ga ne obećavamo.',
                },
                {
                    title: 'Tek tada cijena i termin',
                    description: 'Cijenu dobivate nakon što vidimo fotografiju groba, prije bilo kakvog dogovora.',
                },
            ]}
            detailedContent={
                <>
                    <h2>Zašto trenutačno ne čistimo grobna mjesta</h2>
                    <p>
                        Ivan je na terenu sam, a strojno pranje fasada, okućnica i površina za tvrtke popunilo je
                        raspored. Radije kažemo da grobove zasad ne radimo nego da uzmemo predujam pa kasnimo.
                        Zato je ova stranica lista interesa, a ne narudžba.
                    </p>

                    <h2>Što smo napravili na grobu s fotografija</h2>
                    <p>
                        Grobno mjesto bilo je prekriveno korovom, a bočna baza i stražnja strana spomenika imale su
                        tamne i zelene naslage. Posao je išao ovim redom:
                    </p>
                    <ul>
                        <li><strong>Korov:</strong> uklonili smo ga s cijelog grobnog mjesta, zajedno s korijenom.</li>
                        <li><strong>Kamen:</strong> oprali smo okvir, bočnu bazu i stražnju stranu spomenika.</li>
                        <li><strong>Kulir:</strong> umjesto zemlje stavili smo bijeli kulir, sitni ukrasni kamen kroz koji korov teže raste.</li>
                    </ul>
                    <p>
                        Sve tri usporedbe prije i poslije u odrađenim poslovima na vrhu stranice prikazuju taj isti grob.
                        Imena na spomeniku smo zamutili.
                    </p>

                    <h2>Kako radi lista interesa za čišćenje groba</h2>
                    <p>
                        Ostavite ime, broj mobitela i naziv groblja (Mirogoj, Miroševac, Markovo Polje ili neko drugo
                        u Zagrebu i okolici). Kad opet krenemo, javimo se redom kojim su prijave stigle. Do tada ne
                        tražimo predujam i ne rezerviramo termin.
                    </p>

                    <h2>Trebate oprati kamen koji nije na groblju?</h2>
                    <p>
                        Kamene klupe, stolove, staze i ploče i dalje peremo. Pogledajte{' '}
                        <Link href="/usluge/ciscenje-kamenih-povrsina">čišćenje kamenih površina</Link>.
                    </p>
                </>
            }
            features={[
                {
                    icon: <ClipboardList size={24} />,
                    title: 'Prijava bez obveze',
                    description: 'Upis na listu ne znači narudžbu. Kad vas nazovemo, slobodno kažete da više ne trebate.',
                },
                {
                    icon: <Wallet size={24} />,
                    title: 'Bez predujma',
                    description: 'Dok ne radimo, ne uzimamo novac. Cijenu čujete tek kad opet krenemo.',
                },
                {
                    icon: <Camera size={24} />,
                    title: 'Stvaran posao',
                    description: 'Fotografije na stranici su s groba koji smo sami očistili i prekrili kulirom.',
                },
                {
                    icon: <EyeOff size={24} />,
                    title: 'Imena su zamućena',
                    description: 'Fotografije groba ne objavljujemo s čitljivim imenima na spomeniku.',
                },
            ]}
            commonProblems={[
                {
                    icon: <Sprout size={32} />,
                    title: 'Korov preko grobnog mjesta',
                    description: 'Na grobu s fotografija korov je prekrio cijelu površinu unutar okvira.',
                },
                {
                    icon: <Droplets size={32} />,
                    title: 'Tamne i zelene naslage',
                    description: 'Bočna baza i stražnja strana spomenika potamnjele su od vlage i algi.',
                },
                {
                    icon: <Layers size={32} />,
                    title: 'Zemlja unutar okvira',
                    description: 'Gola zemlja se nakon kiše pretvori u blato. Zato je na nju došao bijeli kulir.',
                },
            ]}
            faq={[
                {
                    question: 'Čistite li trenutačno grobna mjesta?',
                    answer: 'Ne. Nove grobove zasad ne primamo. Možete se upisati na listu interesa i javimo se kad opet krenemo.',
                },
                {
                    question: 'Plaćam li nešto kod prijave na listu?',
                    answer: 'Ne. Ne tražimo predujam i ne rezerviramo termin. Prijava vas ni na što ne obvezuje.',
                },
                {
                    question: 'Kada ćete opet čistiti grobove?',
                    answer: 'Datum danas ne znamo, pa ga ne obećavamo. Kad krenemo, zovemo redom kojim su prijave stigle.',
                },
                {
                    question: 'Koliko će koštati čišćenje groba?',
                    answer: 'Cijenu dobivate nakon što vidimo fotografiju groba, prije bilo kakvog dogovora. Ovisi o veličini groba i o tome treba li novi kulir.',
                },
                {
                    question: 'Što je kulir?',
                    answer: 'Sitni ukrasni kamen kojim se prekrije zemlja unutar okvira groba. Na grobu s fotografija stavili smo bijeli kulir umjesto zemlje i korova.',
                },
                {
                    question: 'Za koja se groblja mogu prijaviti?',
                    answer: 'Za groblja u Zagrebu i okolici, na primjer Mirogoj, Miroševac i Markovo Polje. Naziv groblja upišite u prijavu.',
                },
            ]}
            relatedServices={[
                { title: 'Kamene površine', href: '/usluge/ciscenje-kamenih-povrsina', icon: <Landmark size={24} /> },
                { title: 'Pranje okućnice', href: '/usluge/pranje-okucnice', icon: <Home size={24} /> },
                { title: 'Drvene površine', href: '/usluge/ciscenje-drvenih-povrsina', icon: <TreeDeciduous size={24} /> },
            ]}
        />
    );
}
