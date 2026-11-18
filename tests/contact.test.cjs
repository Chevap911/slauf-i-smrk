/* eslint-disable @typescript-eslint/no-require-imports -- Server boundary tests run through Node's built-in runner. */
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const ts=require('typescript');
const vm=require('node:vm');
const path=require('node:path');
require.extensions['.ts']=(module,filename)=>module._compile(ts.transpileModule(fs.readFileSync(filename,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText,filename);
const {contactFields}=require('../lib/contact.ts');

function handler({dbOk=true,mailOk=true}={}) {
 const calls={rows:[],mails:[],updates:[]};
 const db={from:()=>({insert:rows=>{calls.rows.push(...rows);return {select:()=>({single:async()=>dbOk?{data:{id:'test-id'},error:null}:{data:null,error:new Error('DB test failure')}})};},update:row=>{calls.updates.push(row);return{eq:async()=>({error:null})};}})};
 const deps={
  'next/server':{NextResponse:{json:(data,{status=200}={})=>({status,data})}},
  '@/lib/contact':{contactFields},
  '@/utils/supabase/client':{supabase:db},
  '@/components/emails/InquiryEmail':{AdminNotificationEmail:props=>props},
  '@/lib/upiti/obavijest':{posaljiMail:async(_,mail)=>{calls.mails.push(mail);return mailOk;},primatelji:()=>['slauf.i.smrk@gmail.com']}
 };
 const compiled={exports:{}};
 const code=ts.transpileModule(fs.readFileSync(path.join(__dirname,'../app/api/contact/route.ts'),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;
 vm.runInNewContext(code,{module:compiled,exports:compiled.exports,require:id=>{assert.ok(deps[id],id);return deps[id];},console:{error:()=>{}},Date});
 return {POST:compiled.exports.POST,calls};
}
const req=formData=>({json:async()=>({mode:'final',formData,estimatedPrice:{min:480,max:720}})});
test('e-mail upit se sprema prije slanja i u mailu ostaju kontakt i izračun',async()=>{
 const {POST,calls}=handler();const response=await POST(req({email:'upit@example.com',phone:'',service:'yard',surfaceSize:'120',message:'Okućnica, 120 m², 480–720 €.'}));
 assert.equal(response.status,200);assert.equal(calls.rows[0].email,'upit@example.com');assert.equal(calls.rows[0].phone,'');assert.equal(calls.rows[0].estimated_price_min,480);
 assert.match(calls.mails[0].subject,/upit@example.com/);assert.match(calls.mails[0].text,/480 - 720/);assert.match(calls.mails[0].text,/120 m²/);
 assert.equal(calls.mails[0].react.email,'upit@example.com');assert.equal(calls.updates[0].details._meta.obavijest.mail,true);
});
test('postojeći telefonski upiti rade bez e-maila',async()=>{
 const {POST,calls}=handler();assert.equal((await POST(req({phone:'+385958442806',service:'facade'}))).status,200);assert.equal(calls.rows[0].email,'');
});
test('neispravan kontakt i honeypot ne uzrokuju slanje',async()=>{
 const {POST,calls}=handler();assert.equal((await POST(req({phone:'abc'}))).status,400);
 assert.equal((await POST(req({honeypot:'bot'}))).status,200);assert.equal(calls.rows.length,0);assert.equal(calls.mails.length,0);
});
test('potpuni pad baze i maila ne daje lažnu potvrdu',async()=>{
 const {POST,calls}=handler({dbOk:false,mailOk:false});assert.equal((await POST(req({email:'upit@example.com'}))).status,500);assert.equal(calls.mails.length,2);
});
test('upit ostaje zaprimljen kad baza radi, a oba pokušaja maila padnu',async()=>{
 const {POST,calls}=handler({dbOk:true,mailOk:false});assert.equal((await POST(req({phone:'+385958442806'}))).status,200);assert.equal(calls.updates[0].details._meta.obavijest.mail,false);
});

test('početna cijena nema lažni maksimum u bazi ili mailu',async()=>{
 const {POST,calls}=handler();
 const response=await POST({json:async()=>({mode:'final',formData:{email:'upit@example.com',service:'yard'},estimatedPrice:{min:480}})});
 assert.equal(response.status,200);
 assert.equal(calls.rows[0].estimated_price_max,null);
 assert.match(calls.mails[0].text,/od 480/);
 assert.equal(calls.mails[0].react.estimatedPriceMax,null);
});
