/* eslint-disable @typescript-eslint/no-require-imports -- Node test runner compiles the shared TypeScript modules through CommonJS. */
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, filename);
const { computeEstimate, serviceForPath, quoteSummary, whatsappHref, priceItem } = require('../lib/quote.ts');
const { contactFields } = require('../lib/contact.ts');

test('120 m² okućnice daje početnih 480 €, povijesni raspon ostaje sačuvan', () => {
 assert.deepEqual(computeEstimate('yard', '120'), { cijena: {min:480}, sidrena: {min:480,max:720} });
});
test('minimum se primjenjuje samo na usluge koje ga imaju u cjeniku', () => {
 assert.deepEqual(computeEstimate('terrace','20').cijena,{min:200});
 assert.deepEqual(computeEstimate('yard','50').cijena,{min:200});
 assert.deepEqual(computeEstimate('pavers','20').cijena,{min:80});
});
test('decimalni zarez se prihvaća, neispravni i beskonačni unosi ne', () => {
 assert.deepEqual(computeEstimate('facade','100,5').cijena,{min:503});
 for (const input of ['', '0', '-5', '120abc', 'Infinity', '1e100', '1,2,3']) assert.equal(computeEstimate('facade',input),null);
});
test('grob, poslovni objekt i nepoznata usluga nemaju automatsku ponudu', () => {
 for(const service of ['grave','b2b_commercial','other']) assert.equal(computeEstimate(service,'100'),null);
 assert.equal(priceItem('grave'),undefined);
});
test('kemijsko čišćenje koristi odabrani komad, ne kvadraturu', () => {
 assert.equal(priceItem('chemical','trosjed').cijena.min,40);
 assert.equal(priceItem('chemical','garnitura').cijena.min,80);
 assert.equal(priceItem('chemical','madrac').cijena.min,30);
});
test('ruta odabire ispravnu uslugu', () => {
 assert.equal(serviceForPath('/usluge/pranje-tlakavaca'),'pavers');
 assert.equal(serviceForPath('/usluge/odrzavanje-grobnih-mjesta'),'grave');
 assert.equal(serviceForPath('/usluge/poslovni-objekti'),'b2b_commercial');
});
test('WhatsApp zadržava uslugu, kvadraturu i stvarni prikazani izračun', () => {
 const text=quoteSummary('yard','120');
 assert.match(text,/120 m²/); assert.match(text,/480/); assert.match(text,/od 480/); assert.doesNotMatch(text,/720/);
 const url=new URL(whatsappHref(text)); assert.equal(url.pathname,'/385958442806'); assert.ok(url.searchParams.get('text').includes(text));
 assert.match(quoteSummary('grave','120'),/lista interesa/);
});
test('kontakt može biti telefon ili e-mail, nikad izmišljena adresa', () => {
 assert.deepEqual(contactFields(' upit@example.com '),{phone:'',email:'upit@example.com'});
 assert.deepEqual(contactFields('+385 95 844 2806'),{phone:'+385 95 844 2806',email:''});
 for (const s of ['abc','a@','+1','123abc456','']) assert.equal(contactFields(s),null);
});

const { COMPLETED_JOBS, jobsFor } = require('../data/completedJobs.ts');
const path = require('node:path');
const crypto = require('node:crypto');
test('radovi nemaju duple ID-jeve, nepostojeće slike ni iste fotografije u različitim poslovima', () => {
 const ids=new Set(), images=new Map();
 for(const job of COMPLETED_JOBS) {
  assert.ok(!ids.has(job.id)); ids.add(job.id); assert.ok(job.photos.length);
  for(const slug of job.serviceSlugs) assert.ok(fs.existsSync(path.join(__dirname,'../app/usluge',slug,'page.tsx')));
  for(const photo of job.photos) for(const src of [photo.beforeImage,photo.afterImage,photo.singleImage].filter(Boolean)) {
   const file=path.join(__dirname,'../public',src); assert.ok(fs.existsSync(file),src);
   const hash=crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
   assert.ok(!images.has(hash) || images.get(hash) === job.id,src); images.set(hash,job.id);
  }
 }
});
test('lokacija posla nije proizvoljno proširena radi SEO-a', () => {
 assert.deepEqual(jobsFor({areaSlug:'samobor'}).map(j=>j.id),['kolodvor-samobor']);
 assert.ok(!jobsFor({areaSlug:'zagreb'}).some(j=>j.id==='kolodvor-samobor'));
 assert.ok(!jobsFor({areaSlug:'zapresic'}).some(j=>j.id==='leggiero-family-mall'));
 assert.equal(jobsFor({serviceSlug:'odrzavanje-grobnih-mjesta'}).length,1);
 assert.equal(jobsFor({serviceSlug:'odrzavanje-grobnih-mjesta'})[0].photos.length,3);
});

test('naslovnica prikazuje šest različitih poslova koji su dostupni u početnoj galeriji', () => {
 const { featuredJobs } = require('../data/completedJobs.ts');
 const featured=featuredJobs();
 assert.equal(featured.length,6);
 assert.equal(new Set(featured.map(j=>j.id)).size,6);
 for(const job of featured) assert.ok(COMPLETED_JOBS.slice(0,6).includes(job));
 assert.ok(featured.some(j=>j.areaSlugs.includes('dugo-selo')));
 assert.ok(featured.some(j=>j.id==='kolodvor-samobor'));
});
test('novi kadrovi pripadaju pravoj usluzi i lokaciji', () => {
 assert.ok(jobsFor({areaSlug:'dugo-selo'}).some(j=>j.id==='zid-uz-parking'));
 assert.ok(jobsFor({serviceSlug:'ciscenje-kamenih-povrsina'}).some(j=>j.id==='kameni-zid-mlinovi'));
 const avenue=COMPLETED_JOBS.find(j=>j.id==='leggiero-avenue-mall');
 assert.ok(avenue && avenue.photos.length>=3);
 assert.ok(!avenue.photos[0].beforeImage); // Nemamo potvrđen par prije/poslije.
});

test('sve javne cijene su početne, povijesne se ne prepisuju', () => {
 const {CJENIK,formatIznos}=require('../lib/cjenik.ts');
 for(const item of CJENIK.flatMap(k=>k.stavke)) {
  assert.equal(item.cijena.max,undefined,item.naziv);
  assert.match(formatIznos(item.cijena,item.jedinica),/^od /);
 }
 assert.deepEqual(priceItem('facade').sidrena,{min:5,max:7});
});
