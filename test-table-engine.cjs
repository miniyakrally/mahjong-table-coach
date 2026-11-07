const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const E=require('./table-engine.js'),G=require('./practice-engine.js');
const ctx={};vm.createContext(ctx);vm.runInContext(fs.readFileSync('curriculum.js','utf8')+';this.rows=practiceCard;',ctx);const rows=ctx.rows;
function conserve(g){assert.deepEqual(g.racks.flat().concat(g.wall,g.discards.map(d=>d.code),g.exposed.flat(2).flatMap(e=>e.tiles)).sort(),G.supply().sort());}
for(let run=0;run<50;run++){
 const g=E.create([rows[0],rows[1],rows[0],rows[2]]);let guard=0;
 while(!g.ended&&guard++<600){
  conserve(g);
  if(g.pending){const c=E.option(g,0);if(c&&Math.random()<.5){try{E.claim(g,0);}catch{E.advance(g);}}else E.advance(g);}
  else if(g.turn===0){if(!g.drawn)E.draw(g);else if(!E.declare(g))E.discard(g,Math.floor(Math.random()*g.racks[0].length));}
  else E.advance(g);
 }
 assert.ok(g.ended);conserve(g);if(g.winner!==null)assert.ok(E.complete(g,g.winner));
}
// Deterministic legal exposure and exchange, including joker replacement.
const g=E.create([rows[0],rows[1],rows[0],rows[2]]);
g.racks[0]=['4B','J','4B'];g.pending={code:'4B',seat:3};g.discards=[{code:'4B',seat:3}];g.turn=0;g.drawn=false;
g.racks[1]=[];g.racks[2]=[];g.racks[3]=[];
assert.equal(E.option(g,0).group,1);E.claim(g,0);assert.equal(g.exposed[0][0].tiles.length,4);assert.equal(g.racks[0].length,0);
g.racks[0].push('4B');assert.equal(E.exchanges(g,0).length,1);E.exchange(g,0,0,0);assert.deepEqual(g.racks[0],['J']);assert.ok(!g.exposed[0][0].tiles.includes('J'));
g.pending={code:'J',seat:1};assert.equal(E.option(g,0),null);
console.log('Passed: 50 full four-player hands, finite walls, physical supply conservation, legal exposures, joker exchanges and discard limits.');
