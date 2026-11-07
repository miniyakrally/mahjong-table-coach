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
// A physically valid simultaneous group call and mahjong: mahjong wins.
const priority=E.create([rows[0],rows[0],rows[1],rows[2]]),deck=G.supply();
const consume=code=>G.take(deck,code);
priority.racks=[['4B','4B','J'].map(consume),['2C','2C','2C','4B','J','J','6D','6D','6D','6D','F','F','F'].map(consume),[],[]];
consume('4B');priority.discards=[{code:'4B',seat:3}];priority.pending={code:'4B',seat:3};priority.drawn=false;priority.turn=0;
priority.racks.forEach(r=>{while(r.length<13)r.push(deck.shift());});priority.wall=deck;conserve(priority);
assert.equal(E.option(priority,0).win,false);assert.equal(E.option(priority,1).win,true);assert.throws(()=>E.claim(priority,0),/priority/);E.advance(priority);assert.equal(priority.winner,1);conserve(priority);
const pair=E.create([rows[2],rows[0],rows[1],rows[0]]);pair.racks[0]=rows[2].groups.flat().slice(0,13);pair.pending={seat:1,code:'Soap'};pair.discards=[{seat:1,code:'Soap'}];pair.drawn=false;pair.turn=2;assert.equal(E.option(pair,0).win,true);E.claim(pair,0);assert.equal(pair.winner,0);
const invalid=E.create([rows[2],rows[0],rows[1],rows[0]]);invalid.racks[0]=rows[2].groups.flat();invalid.racks[0][0]='J';assert.equal(E.declare(invalid),false);
console.log('Passed: mahjong priority over a group call, concealed final-pair call, and rejected joker in a pair.');
