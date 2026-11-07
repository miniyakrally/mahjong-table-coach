const vm=require('node:vm'),fs=require('node:fs'),assert=require('node:assert/strict');
const source=fs.readFileSync('learning-analytics.js','utf8');
function setup(overrides={}){
 const sent=[],data=new Map();const storage={getItem:k=>data.get(k)||null,setItem:(k,v)=>data.set(k,v)};
 const ctx={window:{MAHJONG_ANALYTICS:{token:'public-test-token',host:'https://us.i.posthog.com'}},location:{hostname:'mahjong.bookblendapp.com'},navigator:{},localStorage:storage,sessionStorage:storage,crypto:{randomUUID:()=> 'random-session'},fetch:(url,opts)=>{sent.push(JSON.parse(opts.body));return Promise.resolve();},document:{querySelector:()=>null},...overrides};
 vm.runInNewContext(source,ctx);return {ctx,sent,data};
}
const {ctx,sent}=setup();assert.equal(sent.length,1);
ctx.window.LearningAnalytics.capture('stage_reached',{stage:6,unit:0,mode:'guided',name:'PRIVATE',hand:['J'],answer:'PRIVATE'});
ctx.window.LearningAnalytics.capture('stage_reached',{stage:6,unit:0,mode:'guided'});assert.equal(sent.length,2);
assert.ok(!JSON.stringify(sent).includes('PRIVATE'));assert.ok(!('hand' in sent[1].properties));assert.equal(sent[1].properties.$process_person_profile,false);
ctx.window.LearningAnalytics.capture('unknown');assert.equal(sent.length,2);
for(const overrides of [{navigator:{doNotTrack:'1'}},{navigator:{globalPrivacyControl:true}},{location:{hostname:'localhost'}},{window:{MAHJONG_ANALYTICS:{}}}])assert.equal(setup(overrides).sent.length,0);
assert.equal(setup({sessionStorage:{getItem:()=>{throw Error('denied')}}}).sent.length,0);
console.log('Passed: anonymous milestone allowlist, deduplication, no personal payloads, privacy preferences, local exclusion and storage failure.');
