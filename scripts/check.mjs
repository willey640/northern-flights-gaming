import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root=path.resolve('docs');
let count=0;
const failures=[];
const gameEntry=path.join(root,'games/caboom/index.html');
const migratedBuilds=JSON.parse(fs.readFileSync('data/website-game-migrations.json','utf8'));
const gameEntries=new Set([gameEntry,...migratedBuilds.map(build=>path.join(root,build.url))]);
function walk(dir){
  for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
    const file=path.join(dir,entry.name);
    if(entry.isDirectory()){walk(file);continue;}
    if(!entry.name.endsWith('.html'))continue;
    const html=fs.readFileSync(file,'utf8');
    if(!gameEntries.has(file)){
      count++;
      for(const required of ['<title>','name="description"','name="viewport"','rel="canonical"','property="og:image"','<main id="main">','aria-controls="main-nav"']){
        if(!html.includes(required))failures.push(`${file}: missing ${required}`);
      }
      if((html.match(/<h1[ >]/g)||[]).length!==1)failures.push(`${file}: expected one h1`);
    }
    for(const [,url] of html.matchAll(/(?:href|src)="([^"#]+)(?:#[^"]*)?"/g)){
      if(/^(?:[a-z]+:|\/\/)/i.test(url))continue;
      let target=url.startsWith('/')?path.join(root,url.split('#')[0]):path.resolve(path.dirname(file),url.split('#')[0]);
      if(url.split('#')[0].endsWith('/'))target=path.join(target,'index.html');
      if(!fs.existsSync(target))failures.push(`${file}: broken ${url}`);
    }
  }
}
walk(root);
if(fs.readFileSync(path.join(root,'CNAME'),'utf8').trim()!=='gaming.nfdg.ca')failures.push('Unexpected CNAME');
const release=JSON.parse(fs.readFileSync('data/caboom-web-build.json','utf8'));
const allBuilds=[release,...migratedBuilds];
for(const build of allBuilds)for(const item of build.files){
  const file=path.join(root,path.dirname(build.url),item.name);
  if(!fs.existsSync(file)){failures.push(`Missing game export file: ${item.name}`);continue;}
  const bytes=fs.readFileSync(file);
  const hash=crypto.createHash('sha256').update(bytes).digest('hex');
  if(bytes.length!==item.bytes||hash!==item.sha256)failures.push(`Game export differs from its recorded source: ${item.name}`);
}
const gameHtml=fs.readFileSync(gameEntry,'utf8');
if(!gameHtml.includes('const GODOT_THREADS_ENABLED = false;'))failures.push('Game export unexpectedly needs threads');
const wasm=fs.readFileSync(path.join(root,'games/caboom/index.wasm'));
if(!wasm.subarray(0,4).equals(Buffer.from([0,97,115,109])))failures.push('Invalid WebAssembly file');
if(!fs.readFileSync(path.join(root,'caboom/index.html'),'utf8').includes('href="/games/caboom/index.html"'))failures.push('Caboom Play link missing');
if(failures.length){console.error(failures.join('\n'));process.exit(1);}
console.log(`PASS: ${count} site pages, ${allBuilds.length} game builds, internal links, metadata, and ${allBuilds.reduce((sum,build)=>sum+build.files.length,0)} byte-exact web export files verified.`);
