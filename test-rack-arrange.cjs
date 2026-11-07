const vm=require('node:vm'),fs=require('node:fs'),assert=require('node:assert/strict');
const ctx={window:{}};vm.runInNewContext(fs.readFileSync('rack-arrange.js','utf8'),ctx);const {move,remap}=ctx.window.RackArrange;
for(let from=0;from<14;from++)for(let to=0;to<14;to++){
 const rack=Array.from({length:14},(_,i)=>i);assert.ok(move(rack,from,to));
 for(let index=0;index<14;index++)assert.equal(rack[remap(index,from,to)],index);
 assert.equal(new Set(rack).size,14);assert.equal(remap(null,from,to),null);
}
const rack=['J','F'];assert.equal(move(rack,0,-1),false);assert.deepEqual(rack,['J','F']);
console.log('Passed: all 196 rack moves preserve tiles and selected, new, and hinted tile identities.');
