const assert=require('node:assert/strict');
const Engine=require('./practice-engine.js');
const Charleston=require('./charleston.js');
const groups=[Array(3).fill('2C'),Array(4).fill('4B'),Array(4).fill('6D'),Array(3).fill('F')];
const target={groups};
const inventory=Engine.supply().sort().join(',');
function check(g){assert.equal([...g.racks.flat(),...g.wall,...g.discards].sort().join(','),inventory,'Every physical tile remains accounted for');}
for(let n=0;n<30;n++){
 const g=Engine.create(target);check(g);
 for(let step=0;step<6;step++){
  if(g.phase==='second')g.phase='passing';
  const eligible=g.racks[0].map((c,i)=>c==='J'?-1:i).filter(i=>i>=0);
  const blind=[2,5].includes(step)?n%4:0;
  Charleston.exchange(g,eligible.slice(0,3-blind),blind);check(g);assert.equal(g.racks[0].length,13);
 }
 g.courtesy=2;g.phase='courtesy';Charleston.exchange(g,g.racks[0].map((c,i)=>c==='J'?-1:i).filter(i=>i>=0).slice(0,2));check(g);
 for(let turn=0;turn<g.wall.length+152;turn++){
  const c=Engine.draw(g);if(c===null)break;
  assert.equal(g.racks[0].length,14);check(g);assert.throws(()=>Engine.draw(g));
  Engine.discard(g,turn%14);assert.equal(g.racks[0].length,13);check(g);
 }
 assert.equal(g.wall.length,0);assert.equal(g.exhausted,true);check(g);
}
// Reserve the winning hand before dealing opponents, so this fixture cannot
// randomly place a required natural tile in somebody else's rack.
const deck=Engine.shuffle(Engine.supply());
const start=groups.flat().slice(0,13).map(c=>Engine.take(deck,c));
const winning=Engine.take(deck,groups.flat()[13]);
const g={racks:[start,deck.splice(0,13),deck.splice(0,13),deck.splice(0,14)],wall:[winning,...deck],discards:[],step:6,phase:'done',courtesy:0,target,independent:false,drawn:false,won:false,exhausted:false};check(g);
assert.equal(Engine.draw(g),winning);assert.equal(Engine.win(g),true);check(g);assert.throws(()=>Engine.discard(g,0));
// Hints on/off must both draw the next wall tile, even if a useful tile is later.
for(const independent of [false,true]){
 const orderGame=Engine.create(target,independent);
 const expected=[...orderGame.wall];
 for(let turn=0;turn<20;turn++){
  assert.equal(Engine.draw(orderGame),expected[turn]);Engine.discard(orderGame,13);
 }
 check(orderGame);
}
assert.equal(Engine.missing(['F','J'],[['F','F']]).length,1);
assert.equal(Engine.missing(['6D','J','J'],[['6D','6D','6D']]).length,0);
console.log('Passed: 30 complete Charleston sessions, blind/courtesy passes, 152-tile conservation through repeated poor discards, finite walls, draw/discard counts, wins and joker limits.');
