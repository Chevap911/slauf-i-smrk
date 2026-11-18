'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { jobsFor, type JobPhoto } from '@/data/completedJobs';
import QuoteLink from '@/components/QuoteLink/QuoteLink';
import { serviceForPath } from '@/lib/quote';
import styles from './CompletedJobsFeed.module.css';

function Photo({ photo }: {photo: JobPhoto}) {
    if (photo.singleImage) return <figure className={styles.single}><Image src={photo.singleImage} alt={photo.singleAlt!} width={photo.width || 1200} height={photo.height || 900} sizes="(max-width: 700px) 100vw, 900px" /><figcaption>{photo.singleAlt}</figcaption></figure>;
    return <div className={styles.pair}>
        {([{src:photo.beforeImage!,alt:photo.beforeAlt!,label:'Prije'},{src:photo.afterImage!,alt:photo.afterAlt!,label:'Poslije'}]).map(p => <figure key={p.src}><div className={styles.image} style={{aspectRatio:photo.aspectRatio}}><Image src={p.src} alt={p.alt} fill sizes="(max-width: 700px) 50vw, 450px" /></div><figcaption>{p.label}</figcaption></figure>)}
    </div>;
}
export default function CompletedJobsFeed({ serviceSlug, areaSlug }: {serviceSlug?: string; areaSlug?: string}) {
    const [visible, setVisible] = useState(6);
    const jobs = jobsFor({serviceSlug,areaSlug});
    if (!jobs.length) return <section className={styles.empty}><div className="container"><h2>Radovi s terena</h2><p>{areaSlug ? 'Za ovo područje još nemamo izdvojen dokumentiran posao.' : 'Za ovu uslugu još nemamo izdvojen dokumentiran posao.'} <Link href="/galerija">Pogledajte ostale radove i fotografije.</Link></p></div></section>;
    return <section className={styles.section} aria-labelledby="completed-jobs-heading"><div className="container">
        <div className={styles.heading}><span className={styles.eyebrow}>Fotografije naših radova</span><h2 id="completed-jobs-heading">Odrađeni poslovi i rezultati s terena</h2><p>Fotografije prije, tijekom i nakon čišćenja. Uz svaki posao je opis radova.</p></div>
        <div className={styles.list}>{jobs.slice(0,visible).map((job,i) => <article className={styles.job} key={job.id} id={`posao-${job.id}`}>
            <div className={styles.jobHeader}><span className={styles.number}>{String(i+1).padStart(2,'0')}</span><div><h3>{job.title}</h3><p className={styles.meta}>{[job.location,job.material,job.surfaceSize,job.date && new Date(`${job.date}T12:00:00`).toLocaleDateString('hr-HR',{month:'long',year:'numeric'})].filter(Boolean).join(' · ')}</p></div></div>
            <Photo photo={job.photos[0]} />
            {job.photos.length > 1 && <details className={styles.morePhotos}><summary>Još fotografija istog posla ({job.photos.length-1})</summary>{job.photos.slice(1).map((p,n) => <Photo key={n} photo={p}/>)}</details>}
            <div className={styles.story}>{job.problemDescription && <div><h4>Što smo zatekli</h4><p>{job.problemDescription}</p></div>}<div><h4>Što smo napravili</h4><p>{job.solutionDescription}</p></div></div>
            <QuoteLink service={job.serviceSlugs.includes('odrzavanje-grobnih-mjesta') ? 'grave' : serviceForPath(`/usluge/${serviceSlug || job.serviceSlugs[0]}`)} className={styles.cta}>{job.serviceSlugs.includes('odrzavanje-grobnih-mjesta') ? 'Grobna mjesta: prijavite interes →' : 'Želite ovakav rezultat? Izračunajte cijenu →'}</QuoteLink>
        </article>)}</div>
        {visible < jobs.length && <button type="button" className={styles.load} onClick={() => setVisible(n=>n+6)}>Učitaj još odrađenih poslova ({jobs.length-visible})</button>}
        <p className={styles.count} role="status">Prikazano {Math.min(visible,jobs.length)} od {jobs.length} poslova.</p>
    </div></section>;
}
