import Link from 'next/link';
import { Phone, ArrowRight, ChevronRight } from 'lucide-react';
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

export interface ServicePageProps {
    title: string;
    titleHighlight?: string;
    description: string;
    priceHint?: string;
    features: ServiceFeature[];
    faq: ServiceFaq[];
    relatedServices: RelatedService[];
    heroImage?: string;
    /** Numbered process steps (Kako Radimo) */
    processSteps?: ProcessStep[];
    /** Long-form content sections with H2 headings */
    contentSections?: ContentSection[];
    /** Common problems/scenarios the client might recognize */
    commonProblems?: CommonProblem[];
    /** List of neighborhoods/areas covered for this service */
    serviceAreas?: string[];
    /** Additional inline HTML/JSX content with internal links */
    detailedContent?: React.ReactNode;
}

export default function ServicePage({
    title,
    titleHighlight,
    description,
    priceHint,
    features,
    faq,
    relatedServices,
    heroImage,
    processSteps,
    contentSections,
    commonProblems,
    serviceAreas,
    detailedContent,
}: ServicePageProps) {
    // FAQ JSON-LD Schema
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map(item => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };

    return (
        <div className={styles.servicePage}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Hero */}
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
                                        {title.replace(titleHighlight, '')}{' '}
                                        <span>{titleHighlight}</span>
                                    </>
                                ) : (
                                    title
                                )}
                            </h1>
                            <p className={styles.heroSubtitle}>{description}</p>

                            {priceHint && (
                                <div className={styles.heroPrice}>💰 {priceHint}</div>
                            )}

                            <div className={styles.heroBtns}>
                                <Link href="/#kontakt" className={styles.heroCta}>
                                    <Phone size={18} />
                                    Zatražite besplatnu procjenu
                                </Link>
                                <a href="tel:+385958442806" className={styles.heroCtaSecondary}>
                                    +385 95 844 2806
                                </a>
                            </div>
                        </div>

                        <div className={styles.heroImage}>
                            {heroImage ? (
                                <img src={heroImage} alt={title} />
                            ) : (
                                <div className={styles.heroImagePlaceholder}>
                                    <span style={{ fontSize: '4rem' }}>🧹</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Steps — Kako Radimo */}
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

            {/* Long-form Content Sections */}
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

            {/* Detailed Content (JSX with internal links) */}
            {detailedContent && (
                <section className={styles.longContent}>
                    <div className="container">
                        <div className={styles.contentWrap}>
                            {detailedContent}
                        </div>
                    </div>
                </section>
            )}

            {/* Features */}
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

            {/* Common Problems */}
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

            {/* FAQ */}
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

            {/* Service Areas */}
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

            {/* Bold CTA Banner */}
            <section className={styles.boldCta}>
                <div className="container">
                    <div className={styles.boldCtaInner}>
                        <h2>Trebate pomoć?</h2>
                        <p>Nazovite nas za besplatnu procjenu — odgovaramo u roku od sat vremena</p>
                        <a href="tel:+385958442806" className={styles.boldCtaPhone}>
                            <Phone size={24} />
                            (095) 844-2806
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA */}
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

            {/* Related Services */}
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
