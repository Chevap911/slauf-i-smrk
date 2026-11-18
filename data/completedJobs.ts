/**
 * Jedan zapis = jedan stvarni posao. Više kadrova ide u photos, nikad novi izmišljeni posao.
 * Novi posao dodaj na POČETAK niza. Kopiraj zapis i promijeni id, opis i fotografije.
 * Datum, m² i lokacija samo ako su poznati; inače ih izostavi. areaSlugs opisuje mjesto rada,
 * ne sve gradove koje tvrtka pokriva. Slike u public moraju biti optimizirane i bez GPS-a.
 * Predložak:
 * { id: 'jedinstveni-naziv', title: 'Naziv posla', serviceSlugs: ['pranje-fasade'],
 *   areaSlugs: ['zagreb'], location: 'Zagreb', date: '2026-10-31', surfaceSize: '120 m²',
 *   material: 'Žbuka', problemDescription: 'Stvarno zatečeno stanje.',
 *   solutionDescription: 'Stvarno izvedeni rad.',
 *   photos: [{ beforeImage: '/projekti/ime-prije.jpg', afterImage: '/projekti/ime-poslije.jpg',
 *     beforeAlt: 'Opis prije', afterAlt: 'Opis poslije' }] }
 */
export type JobPhoto = ({ beforeImage: string; afterImage: string; beforeAlt: string; afterAlt: string; singleImage?: never; singleAlt?: never }
    | { singleImage: string; singleAlt: string; beforeImage?: never; afterImage?: never; beforeAlt?: never; afterAlt?: never }) & { aspectRatio?: '3 / 4' | '4 / 3' | '1 / 1'; width?: number; height?: number };
export type CompletedJob = {
    id: string; title: string; serviceSlugs: string[]; areaSlugs: string[];
    location?: string | null; date?: string; surfaceSize?: string; material?: string;
    problemDescription?: string | null; solutionDescription: string; photos: JobPhoto[];
};
export const COMPLETED_JOBS: CompletedJob[] = [
  {
    "id": "tlakavci-staza",
    "title": "Pranje staze od tlakavaca",
    "serviceSlugs": [
      "pranje-tlakavaca",
      "pranje-okucnice",
      "pranje-prilaza"
    ],
    "areaSlugs": [],
    "material": "Betonski tlakavci",
    "problemDescription": "Tlakavci su potamnjeli, a u fugama su rasli mahovina i korov.",
    "solutionDescription": "Oprali smo cijelu stazu. Među dodatnim fotografijama je i kadar usred posla, s granicom opranog i neopranog dijela.",
    "photos": [
      {
        "beforeImage": "/projekti/tlakavci/tlakavci-staza-prije-pranja.webp",
        "afterImage": "/projekti/tlakavci/tlakavci-staza-poslije-pranja.webp",
        "beforeAlt": "Staza od tlakavaca prije pranja, tamna i s mahovinom u fugama",
        "afterAlt": "Ista staza od tlakavaca nakon pranja",
        "aspectRatio": "3 / 4"
      },
      {
        "singleImage": "/projekti/tlakavci/tlakavci-staza-pola-oprano.webp",
        "singleAlt": "Tlakavci tijekom pranja, pola staze oprano",
        "width": 1050,
        "height": 1400
      },
      {
        "singleImage": "/projekti/tlakavci/tlakavci-izbliza-prije-pranja.webp",
        "singleAlt": "Tlakavci izbliza prije pranja, mahovina u fugama",
        "width": 1050,
        "height": 1400
      },
      {
        "singleImage": "/projekti/tlakavci/tlakavci-staza-oprana-sjena.webp",
        "singleAlt": "Oprana staza od tlakavaca",
        "width": 1050,
        "height": 1400
      }
    ]
  },
  {
    "id": "kolodvor-samobor",
    "title": "Pod autobusnog kolodvora u Samoboru",
    "serviceSlugs": [
      "poslovni-objekti",
      "ciscenje-kamenih-povrsina"
    ],
    "areaSlugs": [
      "samobor"
    ],
    "location": "Samobor",
    "material": "Podne ploče",
    "problemDescription": "Pod ispod nadstrešnice bio je taman od godina prometa, s mrljama oko klupa i stupova.",
    "solutionDescription": "Prali smo noću, vrućom vodom i rotacijskim čistačem, strojem do 500 bara. U rujnu probni dio, u listopadu cijeli pod. Uz par prije i poslije su fotografije s rada i stroja.",
    "photos": [
      {
        "beforeImage": "/projekti/samobor/kolodvor-samobor-klupa-prije.webp",
        "afterImage": "/projekti/samobor/kolodvor-samobor-klupa-poslije.webp",
        "beforeAlt": "Pod oko klupe na kolodvoru u Samoboru prije pranja",
        "afterAlt": "Isti pod oko klupe na kolodvoru u Samoboru nakon pranja",
        "aspectRatio": "3 / 4"
      },
      {
        "singleImage": "/projekti/samobor/kolodvor-samobor-rotacijski-cistac-para.webp",
        "singleAlt": "Rotacijski čistač i para tijekom pranja poda vrućom vodom",
        "width": 1200,
        "height": 1600
      },
      {
        "singleImage": "/projekti/samobor/kolodvor-samobor-pranje-ispred-ureda.webp",
        "singleAlt": "Pranje poda ispred ureda prometnika na kolodvoru u Samoboru",
        "width": 1200,
        "height": 1600
      },
      {
        "singleImage": "/projekti/samobor/kolodvor-samobor-granica-oprano-neoprano.webp",
        "singleAlt": "Granica opranog i neopranog poda tijekom rada",
        "width": 1050,
        "height": 1400
      },
      {
        "singleImage": "/projekti/samobor/kolodvor-samobor-opran-pod.webp",
        "singleAlt": "Opran pod kolodvora u Samoboru",
        "width": 1600,
        "height": 1200
      },
      {
        "singleImage": "/projekti/samobor/kolodvor-samobor-stroj-falch-500-bar.webp",
        "singleAlt": "Stroj na prikolici, do 500 bara, kojim smo prali kolodvor",
        "width": 1050,
        "height": 1400
      }
    ]
  },
  {
    "id": "zid-uz-parking",
    "title": "Pranje ogradnog zida u Dugom Selu",
    "serviceSlugs": [
      "pranje-okucnice",
      "ciscenje-kamenih-povrsina"
    ],
    "areaSlugs": [
      "dugo-selo"
    ],
    "material": "Kulir na ogradnom zidu",
    "problemDescription": "Tamne naslage prekrivale su ogradni zid uz ulicu i parkirna mjesta.",
    "solutionDescription": "Oprali smo više dijelova zida. Fotografije istog dana prikazuju stanje uz ulicu i parkiralište prije i nakon pranja.",
    "photos": [
      {
        "beforeImage": "/projekti/radovi/dugo-selo-zid-prije.webp",
        "afterImage": "/projekti/radovi/dugo-selo-zid-poslije.webp",
        "beforeAlt": "Ogradni zid u Dugom Selu prije pranja",
        "afterAlt": "Isti dio ogradnog zida nakon pranja",
        "aspectRatio": "4 / 3"
      },
      {
        "beforeImage": "/projekti/radovi/dugo-selo-zid-ulica-prije.webp",
        "afterImage": "/projekti/radovi/dugo-selo-zid-ulica-poslije.webp",
        "beforeAlt": "Zid uz ulicu prije uklanjanja naslaga",
        "afterAlt": "Zid uz ulicu nakon čišćenja",
        "aspectRatio": "4 / 3"
      },
      {
        "beforeImage": "/prije-poslje/zid-parking-prije.jpeg",
        "afterImage": "/prije-poslje/zid-parking-poslje.jpeg",
        "beforeAlt": "Zid uz parkiralište prije pranja",
        "afterAlt": "Zid uz parkiralište nakon pranja"
      }
    ],
    "location": "Dugo Selo",
    "date": "2026-06-30"
  },
  {
    "id": "bijela-fasada-zagreb",
    "title": "Bijela fasada obiteljske kuće",
    "serviceSlugs": [
      "pranje-fasade"
    ],
    "areaSlugs": [
      "zagreb"
    ],
    "location": "Zagreb",
    "material": "Fasadna žbuka",
    "problemDescription": "Sive naslage bile su vidljive na svijetloj fasadi, posebno uz balkon.",
    "solutionDescription": "Oprali smo zaprljanu fasadu. Par fotografija prikazuje istu stranu kuće prije i nakon pranja.",
    "photos": [
      {
        "beforeImage": "/prije-poslje/fasada-prije.jpeg",
        "afterImage": "/prije-poslje/fasada-poslje.png",
        "beforeAlt": "Bijela fasada prije pranja, Zagreb",
        "afterAlt": "Bijela fasada nakon pranja, Zagreb"
      }
    ]
  },
  {
    "id": "leggiero-family-mall",
    "title": "Terasa kafića Leggiero uz Family Mall",
    "serviceSlugs": [
      "pranje-terasa",
      "poslovni-objekti",
      "pranje-okucnice"
    ],
    "areaSlugs": [
      "zagreb"
    ],
    "location": "Family Mall, Zagreb",
    "material": "Pločice",
    "problemDescription": "Tamne naslage zadržavale su se na pločicama i uz rubove žardinjera.",
    "solutionDescription": "Oprali smo pod terase i spojeve uz žardinjere. Uz detalje pločica prikazan je i cijeli prolaz pod tendom prije i nakon pranja.",
    "photos": [
      {
        "beforeImage": "/prije-poslje/terasa-leggiero-prije-1.jpeg",
        "afterImage": "/prije-poslje/terasa-leggiero-poslje-1.jpeg",
        "beforeAlt": "Terasa Leggiera prije pranja",
        "afterAlt": "Terasa Leggiera nakon pranja"
      },
      {
        "beforeImage": "/projekti/radovi/leggiero-family-siri-prije.webp",
        "afterImage": "/projekti/radovi/leggiero-family-siri-poslije.webp",
        "beforeAlt": "Širi pogled na terasu Leggiera uz Family Mall prije pranja",
        "afterAlt": "Isti prolaz terase nakon pranja",
        "aspectRatio": "3 / 4"
      },
      {
        "beforeImage": "/prije-poslje/terasa-leggiero-prije-2.jpeg",
        "afterImage": "/prije-poslje/terasa-leggiero-poslje-2.jpeg",
        "beforeAlt": "Naslage uz žardinjeru prije pranja",
        "afterAlt": "Očišćene pločice uz žardinjeru"
      },
      {
        "singleImage": "/projekti/projekt-1.jpeg",
        "singleAlt": "Terasa Leggiera nakon pranja pločica"
      },
      {
        "singleImage": "/assets/gallery-6.jpg",
        "singleAlt": "Pranje terase kafića Leggiero u tijeku"
      },
      {
        "singleImage": "/projekti/projekt-9.jpeg",
        "singleAlt": "Pranje pločica uz stolice na terasi Leggiera"
      }
    ]
  },
  {
    "id": "kavana-ravnice",
    "title": "Pranje terase kavane Ravnice",
    "serviceSlugs": [
      "pranje-terasa",
      "pranje-okucnice",
      "poslovni-objekti"
    ],
    "areaSlugs": [],
    "location": null,
    "material": "Pločice",
    "problemDescription": null,
    "solutionDescription": "Oprali smo pločice terase i rub uz travnjak. Uz šire kadrove tijekom rada je detalj opranog poda.",
    "photos": [
      {
        "singleImage": "/projekti/radovi/ravnice-terasa-plocice.webp",
        "singleAlt": "Pranje pločica na terasi kavane Ravnice",
        "width": 1600,
        "height": 901
      },
      {
        "singleImage": "/projekti/radovi/ravnice-terasa-pranje.webp",
        "singleAlt": "Terasa kavane Ravnice tijekom pranja",
        "width": 901,
        "height": 1600
      },
      {
        "singleImage": "/projekti/radovi/ravnice-terasa-rad.webp",
        "singleAlt": "Čišćenje ruba terase uz travnjak",
        "width": 1600,
        "height": 901
      },
      {
        "singleImage": "/projekti/projekt-2.jpeg",
        "singleAlt": "Oprane pločice terase kavane Ravnice"
      }
    ],
    "date": "2026-03-30"
  },
  {
    "id": "leggiero-avenue-mall",
    "title": "Noćno pranje terase Leggiera u Avenue Mallu",
    "serviceSlugs": [
      "pranje-terasa",
      "poslovni-objekti",
      "pranje-okucnice"
    ],
    "areaSlugs": [
      "zagreb"
    ],
    "location": "Avenue Mall, Zagreb",
    "material": "Pod terase",
    "solutionDescription": "Terasa je oprana navečer. Fotografije prikazuju rad uz staklenu stijenu i detalje poda nakon pranja.",
    "photos": [
      {
        "singleImage": "/projekti/radovi/avenue-terasa-poslije.webp",
        "singleAlt": "Pod terase Leggiera u Avenue Mallu nakon noćnog pranja",
        "width": 1600,
        "height": 900
      },
      {
        "singleImage": "/projekti/radovi/avenue-terasa-detalj.webp",
        "singleAlt": "Detalj poda terase nakon pranja",
        "width": 900,
        "height": 1600
      },
      {
        "singleImage": "/projekti/radovi/avenue-terasa-pranje.webp",
        "singleAlt": "Noćno pranje terase uz staklenu stijenu",
        "width": 900,
        "height": 1600
      }
    ]
  },
  {
    "id": "kameni-zid-mlinovi",
    "title": "Čišćenje kamenog zida u Mlinovima",
    "serviceSlugs": [
      "ciscenje-kamenih-povrsina"
    ],
    "areaSlugs": [
      "zagreb"
    ],
    "location": "Mlinovi, Zagreb",
    "material": "Kamena obloga",
    "problemDescription": "Na oblozi i spojevima zida bile su vidljive bijele mineralne naslage.",
    "solutionDescription": "Radili smo na uklanjanju naslaga s kamene obloge. Ovdje su detalji zida i spojeva dokumentirani tijekom radova.",
    "photos": [
      {
        "singleImage": "/projekti/radovi/mlinovi-kamen-naslage.webp",
        "singleAlt": "Bijele naslage na kamenoj oblozi zida u Mlinovima",
        "width": 1200,
        "height": 1600
      },
      {
        "singleImage": "/projekti/radovi/mlinovi-kamen-pogled.webp",
        "singleAlt": "Kameni zid u Mlinovima, fotografija tijekom radova",
        "width": 1200,
        "height": 1600
      },
      {
        "singleImage": "/projekti/radovi/mlinovi-kamen-detalj.webp",
        "singleAlt": "Detalj kamene obloge i spojeva zida",
        "width": 1200,
        "height": 1600
      }
    ]
  },
  {
    "id": "strojno-pranje-lokala",
    "title": "Strojno pranje poda ugostiteljskog prostora",
    "serviceSlugs": [
      "poslovni-objekti"
    ],
    "areaSlugs": [],
    "material": "Unutarnji pod lokala",
    "solutionDescription": "Pod lokala čistili smo strojem. Fotografije prikazuju opremu i rad između stolova i sjedećih mjesta.",
    "photos": [
      {
        "singleImage": "/projekti/radovi/lokal-pod-stroj.webp",
        "singleAlt": "Stroj za pranje poda u ugostiteljskom prostoru",
        "width": 1600,
        "height": 900
      },
      {
        "singleImage": "/projekti/radovi/lokal-pod-rad.webp",
        "singleAlt": "Djelatnik Šlaufa i Šmrka tijekom čišćenja poda lokala",
        "width": 1600,
        "height": 900
      },
      {
        "singleImage": "/projekti/radovi/lokal-oprema.webp",
        "singleAlt": "Oprema za strojno čišćenje unutarnjeg poda",
        "width": 1600,
        "height": 900
      }
    ]
  },
  {
    "id": "fasada-hrasce",
    "title": "Pranje fasade kuće u Hrašću",
    "serviceSlugs": [
      "pranje-fasade"
    ],
    "areaSlugs": [
      "zagreb"
    ],
    "location": "Hrašće, Zagreb",
    "material": "Fasadna žbuka",
    "problemDescription": "Na obojenoj fasadi vidjeli su se tamni tragovi i naslage.",
    "solutionDescription": "Oprali smo fasadu kuće. Uz usporedbu su fotografije rada teleskopskom lancom i očišćene žbuke.",
    "photos": [
      {
        "beforeImage": "/prije-poslje/fasada-narancasta-prije.jpeg",
        "afterImage": "/prije-poslje/fasada-narancasta-poslje.jpeg",
        "beforeAlt": "Fasada kuće prije pranja",
        "afterAlt": "Fasada iste kuće nakon pranja"
      },
      {
        "singleImage": "/projekti/fasada-djelatnik-teleskopska-lanca-zagreb.jpeg",
        "singleAlt": "Pranje fasade teleskopskom lancom u Hrašću"
      },
      {
        "singleImage": "/projekti/pranje-fasade-prije-poslije-zagreb.jpeg",
        "singleAlt": "Detalj žbuke prije i nakon pranja"
      },
      {
        "singleImage": "/projekti/oprana-fasada-obiteljske-kuce-zagreb.jpeg",
        "singleAlt": "Oprana fasada kuće u Hrašću"
      }
    ]
  },
  {
    "id": "pod-terase-zagreb",
    "title": "Čišćenje poda i zida terase",
    "serviceSlugs": [
      "pranje-terasa",
      "pranje-okucnice"
    ],
    "areaSlugs": [
      "zagreb"
    ],
    "location": "Zagreb",
    "material": "Pločice",
    "problemDescription": "Na svijetlim pločicama bile su tamne naslage, najizraženije uz rub terase.",
    "solutionDescription": "Oprali smo pod terase i niski zid uz rub. Fotografije prikazuju pločice i zid prije i nakon čišćenja.",
    "photos": [
      {
        "beforeImage": "/prije-poslje/ciscenje-poda-terase-zagreb-prije.jpeg",
        "afterImage": "/prije-poslje/ciscenje-poda-terase-zagreb-poslje.jpeg",
        "beforeAlt": "Pod terase prije čišćenja, Zagreb",
        "afterAlt": "Pod terase nakon čišćenja, Zagreb"
      },
      {
        "beforeImage": "/prije-poslje/pranje-zida-terase-zagreb-prije.jpeg",
        "afterImage": "/prije-poslje/pranje-zida-terase-zagreb-poslje.jpeg",
        "beforeAlt": "Niski zid terase prije pranja",
        "afterAlt": "Niski zid terase nakon pranja"
      }
    ]
  },
  {
    "id": "grob-kulir",
    "title": "Čišćenje groba i postavljanje bijelog kulira",
    "serviceSlugs": [
      "odrzavanje-grobnih-mjesta",
      "ciscenje-kamenih-povrsina"
    ],
    "areaSlugs": [],
    "location": null,
    "material": "Kameni okvir i teraco",
    "problemDescription": "Korov je prekrivao grobno mjesto. Bočna baza i stražnja strana spomenika imale su tamne i zelene tragove.",
    "solutionDescription": "Uklonili smo korov, postavili bijeli kulir i očistili kamene dijelove. Sve tri usporedbe prikazuju isti grob.",
    "photos": [
      {
        "beforeImage": "/grob/grob-prije-ciscenja-korov-i-prljav-okvir.jpg",
        "afterImage": "/grob/grob-poslije-ciscenja-bijeli-kulir.jpg",
        "beforeAlt": "Grob prije uklanjanja korova i čišćenja",
        "afterAlt": "Isti grob nakon čišćenja i postavljanja kulira"
      },
      {
        "beforeImage": "/grob/grob-bocna-strana-prije-ciscenja.jpg",
        "afterImage": "/grob/grob-bocna-strana-poslije-ciscenja.jpg",
        "beforeAlt": "Bočna strana groba prije čišćenja",
        "afterAlt": "Bočna strana istog groba nakon čišćenja"
      },
      {
        "beforeImage": "/grob/spomenik-straznja-strana-prije-ciscenja.jpg",
        "afterImage": "/grob/spomenik-straznja-strana-poslije-ciscenja.jpg",
        "beforeAlt": "Stražnja strana spomenika prije čišćenja",
        "afterAlt": "Stražnja strana istog spomenika nakon čišćenja"
      }
    ]
  },
  {
    "id": "namjestaj-sjedalo",
    "title": "Čišćenje sjedala namještaja",
    "serviceSlugs": [
      "kemijsko-ciscenje-namjestaja"
    ],
    "areaSlugs": [],
    "location": null,
    "material": "Tapecirano sjedalo",
    "problemDescription": "Na sjedećem dijelu bile su vidljive neujednačene tamne naslage.",
    "solutionDescription": "Očistili smo sjedeći dio namještaja. Fotografije prikazuju površinu prije i nakon čišćenja.",
    "photos": [
      {
        "beforeImage": "/seo-results/kemijsko-ciscenje-namjestaja/prije.jpeg",
        "afterImage": "/seo-results/kemijsko-ciscenje-namjestaja/poslije.jpeg",
        "beforeAlt": "Sjedalo prije čišćenja",
        "afterAlt": "Sjedalo nakon čišćenja"
      }
    ]
  },
  {
    "id": "plocice-dvoriste",
    "title": "Pranje pločica u dvorištu",
    "serviceSlugs": [
      "pranje-okucnice",
      "pranje-terasa"
    ],
    "areaSlugs": [],
    "location": null,
    "material": "Pločice",
    "problemDescription": null,
    "solutionDescription": "Fotografija s pranja pločica u dvorištu. Razlika između opranog dijela i naslaga vidi se na samoj površini.",
    "photos": [
      {
        "singleImage": "/projekti/projekt-6.jpeg",
        "singleAlt": "Pločice u dvorištu tijekom pranja"
      }
    ]
  }
];
export function jobsFor({ serviceSlug, areaSlug }: { serviceSlug?: string; areaSlug?: string } = {}): CompletedJob[] {
    return COMPLETED_JOBS.filter(job => (!serviceSlug || job.serviceSlugs.includes(serviceSlug)) && (!areaSlug || job.areaSlugs.includes(areaSlug)));
}

/** Odabir naslovnice: iste fotografije i opisi kao u galeriji, bez zasebne kopije podataka. */
const FEATURED_JOB_IDS = ["kolodvor-samobor", "tlakavci-staza", "zid-uz-parking", "bijela-fasada-zagreb", "leggiero-family-mall", "kavana-ravnice"];
export function featuredJobs(): CompletedJob[] {
    return FEATURED_JOB_IDS.flatMap(id => COMPLETED_JOBS.filter(job => job.id === id));
}
