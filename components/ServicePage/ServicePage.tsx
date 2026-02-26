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

export interface ServicePageProps {
    title: string;
    titleHighlight?: string;
    description: string;
    priceHint?: string;
    features: ServiceFeature[];
    faq: ServiceFaq[];
    relatedServices: RelatedService[];
    heroImage?: string;
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
}: ServicePageProps) {
    // Generate FAQ JSON-LD Schema
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
            {/* FAQ Schema JSON-LD */}
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

                            <Link href="/#kontakt" className={styles.heroCta}>
                                <Phone size={18} />
                                Zatražite besplatnu procjenu
                            </Link>
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
