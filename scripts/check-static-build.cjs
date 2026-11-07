const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'../dist'),html=fs.readFileSync(path.join(root,'index.html'),'utf8');
for(const [,file,hash] of html.matchAll(/(?:src|href)="([^"?]+\.(?:js|css))\?v=([a-f0-9]{10})"/g)){
 const bytes=fs.readFileSync(path.join(root,file));assert.equal(crypto.createHash('sha256').update(bytes).digest('hex').slice(0,10),hash,`Cache version for ${file}`);
}
assert.ok(html.includes('shell.js?v='));assert.ok(html.includes('table-first.css?v='));assert.ok(!fs.existsSync(path.join(root,'design')));assert.ok(!fs.existsSync(path.join(root,'qc')));assert.ok(!html.includes('DESIGN PREVIEW'));
console.log('Passed: versioned runtime assets exist; mockups and QC artifacts stay outside the published site.');
