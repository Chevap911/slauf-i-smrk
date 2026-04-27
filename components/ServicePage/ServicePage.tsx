'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowRight, ChevronRight } from 'lucide-react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider/BeforeAfterSlider';
import styles from './ServicePage.module.css';

export interface ServiceFaq {
    question: string;
    answer: string;
}

export interface ServiceFeature {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export interface RelatedService {
    title: string;
    href: string;
    icon: React.ReactNode;
}

export interface ProcessStep {
    title: string;
    description: string;
}

export interface CommonProblem {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export interface ContentSection {
    title: string;
    text: string;
}

export interface ServiceResultsShowcase {
    beforeSrc?: string;
    afterSrc?: string;
    combinedSrc?: string;
    beforeAlt?: string;
    afterAlt?: string;
    combinedAlt?: string;
    eyebrow?: string;
    title?: string;
    description?: string;
}

export interface ServicePageProps {
    title: string;
    titleHighlight?: string;
    description: string;
    canonicalPath?: string;
    priceHint?: string;
    features: ServiceFeature[];
    faq: ServiceFaq[];
    relatedServices: RelatedService[];
    heroImage?: string;
    heroImageAlt?: string;
    heroHighlights?: string[];
    processSteps?: ProcessStep[];
    contentSections?: ContentSection[];
    commonProblems?: CommonProblem[];
    serviceAreas?: string[];
    detailedContent?: React.ReactNode;
    resultsShowcase?: ServiceResultsShowcase;
}

export default function ServicePage({
    title,
    titleHighlight,
    description,
    canonicalPath,
    priceHint,
    features,
    faq,
    relatedServices,
    heroImage,
    heroImageAlt,
    heroHighlights,
    processSteps,
    contentSections,
    commonProblems,
    serviceAreas,
    detailedContent,
    resultsShowcase,
}: ServicePageProps) {
    const baseUrl = 'https://slaufismrk.com';
    const serviceUrl = canonicalPath ? `${baseUrl}${canonicalPath}` : undefined;
    const fallbackHeroHighlights = features.slice(0, 3).map((feature) => feature.title);
    const heroPills = heroHighlights?.length ? heroHighlights : fallbackHeroHighlights;
    const titleParts = titleHighlight ? title.split(titleHighlight) : [title];
    const beforeHighlight = titleParts[0] ?? title;
    const afterHighlight = titleHighlight ? titleParts.slice(1).join(titleHighlight) : '';
    const serviceImages = Array.from(new Set(
        [heroImage, resultsShowcase?.afterSrc, resultsShowcase?.combinedSrc].filter(Boolean),
    )) as string[];
    const hasResultsPair = Boolean(resultsShowcase?.beforeSrc && resultsShowcase?.afterSrc);

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };

    const breadcrumbSchema = canonicalPath ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Početna',
                item: baseUrl,
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Usluge',
                item: `${baseUrl}/#usluge`,
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: title,
                item: serviceUrl,
            },
        ],
    } : null;

    const serviceSchema = serviceUrl ? {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${serviceUrl}#service`,
        name: title,
        description,
        serviceType: title,
        url: serviceUrl,
        image: serviceImages.length ? serviceImages.map((imagePath) => `${baseUrl}${imagePath}`) : undefined,
        areaServed: (serviceAreas?.length ? serviceAreas : ['Zagreb', 'Zagrebačka županija']).map((area) => ({
            '@type': 'Place',
            name: area,
        })),
        provider: {
            '@type': 'LocalBusiness',
            name: 'Šlauf i Šmrk',
            url: baseUrl,
            telephone: '+385958442806',
            areaServed: ['Zagreb', 'Zagrebačka županija'],
        },
    } : null;

    return (
        <div className={styles.servicePage}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {breadcrumbSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                />
            )}
            {serviceSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
                />
            )}

            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.breadcrumb}>
                        <Link href="/">Početna</Link>
                        <ChevronRight size={14} />
                        <Link href="/#usluge">Usluge</Link>
                        <ChevronRight size={14} />
                        <span>{title}</span>
                    </div>

                    <div className={styles.heroContent}>
                        <div className={styles.heroText}>
                            <h1>
                                {titleHighlight ? (
                                    <>
                                        {beforeHighlight}
                                        <span>{titleHighlight}</span>
                                        {afterHighlight}
                                    </>
                                ) : (
                                    title
                                )}
                            </h1>
                            <p className={styles.heroSubtitle}>{description}</p>

                            {priceHint && (
                                <div className={styles.heroPrice}>💰 {priceHint}</div>
                            )}

                            <div className={styles.heroHighlights}>
                                {heroPills.map((highlight) => (
                                    <span key={highlight} className={styles.heroHighlightTag}>
                                        {highlight}
                                    </span>
                                ))}
                            </div>

                            <div className={styles.heroBtns}>
                                <Link href="/#kontakt" className={styles.heroCta}>
                                    <Phone size={18} />
                                    Zatražite besplatnu procjenu
                                </Link>
                                <a 
                                    href="tel:+385958442806" 
                                    className={styles.heroCtaSecondary}
                                    onClick={() => {
                                        // @ts-ignore
                                        window.dataLayer?.push({ event: 'call_click', cta_location: 'service_page_hero' });
                                    }}
                                >
                                    +385 95 844 2806
                                </a>
                            </div>
                        </div>

                        <div className={styles.heroVisual}>
                            <div className={styles.heroImage}>
                                {heroImage ? (
                                    <>
                                        <Image
                                            src={heroImage}
                                            alt={heroImageAlt ?? title}
                                            fill
                                            className={styles.heroImg}
                                            sizes="(max-width: 992px) 100vw, 42vw"
                                        />
                                        <div className={styles.heroImageBadge}>
                                            <span>Stvarni projekt</span>
                                            <strong>Rezultat nakon čišćenja</strong>
                                        </div>
                                    </>
                                ) : (
                                    <div className={styles.heroImagePlaceholder}>
                                        <strong>Profesionalni pristup</strong>
                                        <p>
                                            Na svakoj lokaciji prvo provjeravamo materijal, stupanj
                                            zaprljanosti i pristup vodi prije nego krenemo s pranjem.
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className={styles.heroAsideCard}>
                                <span className={styles.heroAsideLabel}>Što dobivate</span>
                                <ul>
                                    <li>Jasnu procjenu prije početka radova</li>
                                    <li>Prilagođen tlak za tip površine</li>
                                    <li>Brz dolazak po Zagrebu i okolici</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {resultsShowcase && (
                <section className={styles.results}>
                    <div className="container">
                        <div className={styles.resultsIntro}>
                            <span className={styles.resultsEyebrow}>
                                {resultsShowcase.eyebrow ?? 'Stvarni rezultat'}
                            </span>
                            <h2 className={styles.sectionTitle}>
                                {resultsShowcase.title ?? 'Prije i poslije čišćenja'}
                            </h2>
                            <p className={styles.sectionSubtitle}>
                                {resultsShowcase.description ?? `Na ovoj usluzi pokazujemo stvarni prije i poslije rezultat za ${title.toLowerCase()}.`}
                            </p>
                        </div>

                        <div className={styles.resultsCard}>
                            {hasResultsPair ? (
                                <>
                                    <BeforeAfterSlider
                                        beforeSrc={resultsShowcase.beforeSrc!}
                                        afterSrc={resultsShowcase.afterSrc!}
                                        beforeAlt={resultsShowcase.beforeAlt}
                                        afterAlt={resultsShowcase.afterAlt}
                                        label="Povucite klizač lijevo-desno"
                                    />
                                    <p className={styles.resultsNote}>
                                        Ovo je stvarni projekt iz naše izvedbe, prikazan u formatu prije i poslije.
                                    </p>
                                </>
                            ) : resultsShowcase.combinedSrc ? (
                                <div className={styles.resultsCombined}>
                                    <Image
                                        src={resultsShowcase.combinedSrc}
                                        alt={resultsShowcase.combinedAlt ?? `Prije i poslije rezultat za ${title.toLowerCase()}`}
                                        width={1600}
                                        height={1200}
                                        className={styles.resultsCombinedImage}
                                        sizes="(max-width: 992px) 100vw, 900px"
                                    />
                                    <p className={styles.resultsNote}>
                                        Prikaz stvarnog prije i poslije rezultata na jednom kadru.
                                    </p>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </section>
            )}

            {processSteps && processSteps.length > 0 && (
                <section className={styles.process}>
                    <div className="container">
                        <h2 className={styles.sectionTitle}>Kako radimo?</h2>
                        <p className={styles.sectionSubtitle}>Jednostavan postupak od poziva do blistavog rezultata</p>
                        <div className={styles.processGrid}>
                            {processSteps.map((step, i) => (
                                <div key={i} className={styles.processStep}>
                                    <div className={styles.processNumber}>{i + 1}</div>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {contentSections && contentSections.length > 0 && (
                <section className={styles.longContent}>
                    <div className="container">
                        <div className={styles.contentWrap}>
                            {contentSections.map((section, i) => (
                                <div key={i} className={styles.contentBlock}>
                                    <h2>{section.title}</h2>
                                    <div dangerouslySetInnerHTML={{ __html: section.text }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {detailedContent && (
                <section className={styles.longContent}>
                    <div className="container">
                        <div className={styles.contentWrap}>
                            {detailedContent}
                        </div>
                    </div>
                </section>
            )}

            <section className={styles.features}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Što uključuje ova usluga?</h2>
                    <p className={styles.sectionSubtitle}>Profesionalni pristup svakom projektu</p>

                    <div className={styles.featuresGrid}>
                        {features.map((feature, i) => (
                            <div key={i} className={styles.featureCard}>
                                <div className={styles.featureIcon}>{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {commonProblems && commonProblems.length > 0 && (
                <section className={styles.problems}>
                    <div className="container">
                        <h2 className={styles.sectionTitle}>Prepoznajete li ove probleme?</h2>
                        <p className={styles.sectionSubtitle}>Situacije s kojima se naši klijenti najčešće susreću</p>
                        <div className={styles.problemsGrid}>
                            {commonProblems.map((problem, i) => (
                                <div key={i} className={styles.problemCard}>
                                    <div className={styles.problemIcon}>{problem.icon}</div>
                                    <h3>{problem.title}</h3>
                                    <p>{problem.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {faq.length > 0 && (
                <section className={styles.faq}>
                    <div className="container">
                        <h2 className={styles.sectionTitle}>Česta pitanja</h2>
                        <p className={styles.sectionSubtitle}>Odgovori na najčešće upite naših klijenata</p>

                        <div className={styles.faqList}>
                            {faq.map((item, i) => (
                                <div key={i} className={styles.faqItem}>
                                    <h3 className={styles.faqQuestion}>{item.question}</h3>
                                    <p className={styles.faqAnswer}>{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {serviceAreas && serviceAreas.length > 0 && (
                <section className={styles.areas}>
                    <div className="container">
                        <h2 className={styles.sectionTitle}>Pokrivamo ova područja</h2>
                        <p className={styles.sectionSubtitle}>Brz dolazak u svaki dio Zagreba i okolice</p>
                        <div className={styles.areaTags}>
                            {serviceAreas.map((area, i) => (
                                <span key={i} className={styles.areaTag}>{area}</span>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className={styles.boldCta}>
                <div className="container">
                    <div className={styles.boldCtaInner}>
                        <h2>Trebate pomoć?</h2>
                        <p>Nazovite nas za besplatnu procjenu — odgovaramo u roku od sat vremena</p>
                        <a 
                            href="tel:+385958442806" 
                            className={styles.boldCtaPhone}
                            onClick={() => {
                                // @ts-ignore
                                window.dataLayer?.push({ event: 'call_click', cta_location: 'service_page_footer_cta' });
                            }}
                        >
                            <Phone size={24} />
                            (095) 844-2806
                        </a>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaBox}>
                        <h2>Spremni za blistavo čist prostor?</h2>
                        <p>Javite nam se danas i dobijte besplatnu procjenu za vašu nekretninu. Naš tim će vam se javiti u najkraćem roku.</p>
                        <Link href="/#kontakt" className={styles.ctaBtn}>
                            Zatražite ponudu <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {relatedServices.length > 0 && (
                <section className={styles.related}>
                    <div className="container">
                        <h2 className={styles.sectionTitle}>Pogledajte i ostale usluge</h2>
                        <div className={styles.relatedGrid}>
                            {relatedServices.map((service, i) => (
                                <Link key={i} href={service.href} className={styles.relatedCard}>
                                    <div className={styles.relatedIcon}>{service.icon}</div>
                                    {service.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
