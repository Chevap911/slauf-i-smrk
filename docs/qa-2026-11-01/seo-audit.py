import urllib.request,urllib.parse,xml.etree.ElementTree as ET,concurrent.futures,json,collections,re
from html.parser import HTMLParser
BASE='http://localhost:3108'
class Page(HTMLParser):
 def __init__(self):
  super().__init__(); self.title='';self.h1=[];self.description='';self.robots='';self.canonical='';self.links=[];self.images=[];self.ids=set();self.text=[];self.schema=[];self.tag='';self.script=False;self.jsonld=False;self.buffer='';self.h1on=False;self.titleon=False
 def handle_starttag(self,t,a):
  d=dict(a);self.tag=t
  if 'id' in d:self.ids.add(d['id'])
  if t=='title':self.titleon=True
  if t=='h1':self.h1.append('');self.h1on=True
  if t=='meta':
   if d.get('name')=='description':self.description=d.get('content','')
   if d.get('name')=='robots':self.robots=d.get('content','')
  if t=='link' and d.get('rel')=='canonical':self.canonical=d.get('href','')
  if t=='a' and d.get('href'):self.links.append(d['href'])
  if t=='img':self.images.append(d)
  if t in ['script','style']:self.script=True;self.jsonld=d.get('type')=='application/ld+json';self.buffer=''
 def handle_endtag(self,t):
  if t=='h1':self.h1on=False
  if t=='title':self.titleon=False
  if t in ['script','style']:
   if self.jsonld:
    try:self.schema.append(json.loads(self.buffer))
    except: self.schema.append({'INVALID':True})
   self.script=False;self.jsonld=False
 def handle_data(self,s):
  if self.script:self.buffer+=s;return
  if self.titleon:self.title+=s
  if self.h1on:self.h1[-1]+=s
  self.text.append(s)
def get(path):
 try:
  with urllib.request.urlopen(BASE+path,timeout=25) as r: return r.status,r.read().decode(),r.geturl()
 except Exception as e:return getattr(e,'code',0),str(e),''
sitemap=get('/sitemap.xml')[1]; root=ET.fromstring(sitemap);ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9'}
paths=[urllib.parse.urlparse(n.text).path or '/' for n in root.findall('s:url/s:loc',ns)]
extra=['/politika-privatnosti','/lp/pranje-fasade','/lp/pranje-okucnice','/lp/pranje-terasa','/lp/odrzavanje-grobnih-mjesta']
pages={};issues=[]
def parse(path):
 status,html,url=get(path);p=Page();p.feed(html);return path,status,p,html
for path,status,p,html in concurrent.futures.ThreadPoolExecutor(6).map(parse,paths+extra):
 pages[path]=p
 if status!=200:issues.append([path,'status',status])
 if len(p.h1)!=1:issues.append([path,'h1 count',len(p.h1)])
 if path in paths and ('noindex' in p.robots or not p.title or not p.description):issues.append([path,'index metadata',p.robots])
 if path in paths and p.canonical!='https://slaufismrk.com'+('' if path=='/' else path) and not(path=='/' and p.canonical=='https://slaufismrk.com/'):issues.append([path,'canonical',p.canonical])
 if any('alt' not in im for im in p.images):issues.append([path,'missing alt'])
 visible=' '.join(p.text)
 if re.search(r'(?:Cijena|cijene) na 10\.\s*9\.\s*2026',visible,re.I):issues.append([path,'historical price visible'])
 if '/usluge/' in path:
  services=[s for s in p.schema if s.get('@type')=='Service']
  if len(services)!=1:issues.append([path,'service schema count',len(services)])
  if any('maxPrice' in json.dumps(s) or 'highPrice' in json.dumps(s) for s in services):issues.append([path,'upper offer bound'])
for attr in ['title','description']:
 c=collections.defaultdict(list)
 for path in paths:c[getattr(pages[path],attr)].append(path)
 for v,ps in c.items():
  if len(ps)>1:issues.append([ps,'duplicate '+attr,v])
alltargets=set();incoming=collections.Counter()
for path,p in pages.items():
 for a in p.links:
  u=urllib.parse.urlparse(urllib.parse.urljoin(BASE+path,a))
  if u.netloc not in ['localhost:3108','slaufismrk.com']:continue
  target=u.path or '/'
  if target!=path:incoming[target]+=1
  alltargets.add(target)
for target in sorted(alltargets-set(pages)):
 status,_,_=get(target)
 if status>=400 or status==0:issues.append([target,'broken internal target',status])
orphans=[p for p in paths if not incoming[p] and p!='/']
issues.extend([[p,'no incoming internal link'] for p in orphans])
report={'pages':len(pages),'indexedPages':len(paths),'internalTargets':len(alltargets),'issues':issues,'pagesDetail':[{'path':p,'title':x.title,'description':x.description,'h1':x.h1,'incoming':incoming[p]} for p,x in pages.items()]}
open('/tmp/slauf-seo-audit.json','w').write(json.dumps(report,ensure_ascii=False,indent=2))
print(json.dumps({k:v for k,v in report.items() if k!='pagesDetail'},ensure_ascii=False,indent=2))
