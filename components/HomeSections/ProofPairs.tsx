import Image from 'next/image';
import Link from 'next/link';
import QuoteLink from '@/components/QuoteLink/QuoteLink';
import { featuredJobs } from '@/data/completedJobs';
import styles from './HomeSections.module.css';

const PAIR_SIZES = '(max-width: 899px) 46vw, 280px';

export default function ProofPairs() {
    return (
        <section className={styles.section} id="prije-poslije">
            <div className="container">
                <div className={styles.head}>
                    <span className={styles.eyebrow}>Stvarni poslovi</span>
                    <h2 className={styles.title}>Naši radovi u Zagrebu i okolici</h2>
                    <p className={styles.lead}>Od ogradnog zida do poda kolodvora. Fotografije prije, tijekom i nakon pranja.</p>
                </div>
                <div className={styles.pairs}>
                    {featuredJobs().map(job => {
                        const photo = job.photos[0];
                        return <figure key={job.id} className={styles.pair}>
                            {photo.singleImage ? <div className={`${styles.shot} ${styles.singleShot}`}>
                                <span className={styles.tag}>S terena</span>
                                <Image src={photo.singleImage} alt={photo.singleAlt!} fill sizes="(max-width: 899px) 92vw, 560px" className={styles.shotImg}/>
                            </div> : <div className={styles.pairImgs}>
                                <div className={styles.shot} style={{aspectRatio:photo.aspectRatio || '3 / 4'}}>
                                    <span className={styles.tag}>Prije</span>
                                    <Image src={photo.beforeImage!} alt={photo.beforeAlt!} fill sizes={PAIR_SIZES} className={styles.shotImg}/>
                                </div>
                                <div className={styles.shot} style={{aspectRatio:photo.aspectRatio || '3 / 4'}}>
                                    <span className={`${styles.tag} ${styles.tagAfter}`}>Poslije</span>
                                    <Image src={photo.afterImage!} alt={photo.afterAlt!} fill sizes={PAIR_SIZES} className={styles.shotImg}/>
                                </div>
                            </div>}
                            <figcaption className={styles.caption}>
                                <h3 className={styles.jobTitle}>{job.title}</h3>
                                <Link href={`/galerija#posao-${job.id}`} className={styles.textLink}>Fotografije i opis posla →</Link>
                            </figcaption>
                        </figure>;
                    })}
                </div>
                <div className={styles.cta}>
                    <QuoteLink className="btn btn-primary">Zatražite besplatnu procjenu</QuoteLink>
                    <Link href="/galerija" className={styles.textLink}>Svi radovi u galeriji</Link>
                </div>
            </div>
        </section>
    );
}
