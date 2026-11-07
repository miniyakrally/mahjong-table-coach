const assert = require('node:assert/strict');
const {newGame,exchange} = require('./charleston.js');
const inventory = g => [...g.racks.flat(),...g.wall].sort();
const picks = (g,n=3) => g.racks[0].map((c,i)=>c==='J'?-1:i).filter(i=>i>=0).slice(0,n);
for(let trial=0;trial<100;trial++) {
  const g = newGame(); const original=inventory(g);
  assert.equal(original.length,152);
  assert.deepEqual(g.racks.map(r=>r.length),[13,13,13,14]);
  assert.throws(()=>exchange(g,picks(g,2)));
  assert.throws(()=>exchange(g,picks(g,2),1));
  for(let step=0;step<6;step++) {
    const before=g.racks.map(r=>[...r]);
    const offset=[1,2,3,3,2,1][step]; const donor=(4-offset)%4;
    const incomingExpected=before[donor].filter(c=>c!=='J').slice(0,3);
    const blind=[2,5].includes(step)?trial%4:0;
    const received=exchange(g,picks(g,3-blind),blind);
    assert.deepEqual(received,incomingExpected.slice(blind));
    assert.deepEqual(g.racks.map(r=>r.length),[13,13,13,14]);
    assert.deepEqual(inventory(g),original);
    g.racks.forEach((r,i)=>assert.equal(r.filter(c=>c==='J').length,before[i].filter(c=>c==='J').length));
    if(step===2) { assert.equal(g.phase,'second'); assert.throws(()=>exchange(g,picks(g))); g.phase='passing'; }
  }
  assert.equal(g.phase,'courtesyChoice');
  g.phase='courtesy';g.courtesy=trial%3;
  exchange(g,picks(g,g.courtesy));
  assert.equal(g.phase,'done');
  assert.deepEqual(inventory(g),original);
  assert.deepEqual(g.racks.map(r=>r.length),[13,13,13,14]);
}
const g=newGame(); g.racks[0][0]='J';
assert.throws(()=>exchange(g,[0,1,2]),/Jokers/);
assert.throws(()=>exchange(g,[1,1,2]));
console.log('Passed: 100 full Charlestons, 0–3 blind tiles, courtesy counts, direction, tile conservation, rack sizes, joker retention, invalid passes.');
