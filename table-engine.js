/* Four-seat practice with a finite physical supply and original teaching rows. */
const TableEngine=(()=>{
 const base=typeof GuidedEngine!=='undefined'?GuidedEngine:require('./practice-engine.js');
 const concealed=row=>row.note.startsWith('C');
 const all=(g,seat)=>g.racks[seat].concat(g.exposed[seat].flatMap(e=>e.tiles));
 const complete=(g,seat,extra=[])=>{const hand=all(g,seat).concat(extra);return hand.length===14&&base.missing(hand,g.targets[seat].groups).length===0;};
 function create(rows){
  const deck=base.shuffle(base.supply()),racks=[deck.splice(0,14),deck.splice(0,13),deck.splice(0,13),deck.splice(0,13)];
  return {racks,wall:deck,exposed:[[],[],[],[]],targets:rows,discards:[],turn:0,drawn:true,pending:null,winner:null,ended:false,log:['You are East. You have 14 tiles; discard first.']};
 }
 function finish(g,seat){g.winner=seat;g.ended=true;g.pending=null;g.log.push(`${seat===0?'You':`Player ${seat}`} declared mahjong.`);}
 function draw(g){if(g.ended||g.drawn||g.pending)throw Error('Finish the current decision first.');if(!g.wall.length){g.ended=true;g.log.push('Wall empty. No winner.');return null;}const code=g.wall.shift();g.racks[g.turn].push(code);g.drawn=true;return code;}
 function discard(g,index){if(g.ended||!g.drawn||!Number.isInteger(index)||index<0||index>=g.racks[g.turn].length)throw Error('Choose a tile on the current rack.');const seat=g.turn,code=g.racks[seat].splice(index,1)[0];g.discards.push({code,seat});g.pending={code,seat};g.drawn=false;g.turn=(seat+1)%4;g.log.push(`${seat===0?'You':`Player ${seat}`} discarded ${code}.`);return code;}
 function option(g,seat){
  const p=g.pending;if(!p||p.seat===seat||p.code==='J'||g.ended)return null;
  if(complete(g,seat,[p.code]))return {win:true};
  if(concealed(g.targets[seat]))return null;
  const used=new Set(g.exposed[seat].map(e=>e.group));
  for(let group=0;group<g.targets[seat].groups.length;group++){
   const row=g.targets[seat].groups[group];if(used.has(group)||row.length<3||row[0]!==p.code)continue;
   const indices=[];g.racks[seat].forEach((c,i)=>{if(c===p.code&&indices.length<row.length-1)indices.push(i);});
   g.racks[seat].forEach((c,i)=>{if(c==='J'&&indices.length<row.length-1)indices.push(i);});
   if(indices.length===row.length-1)return {win:false,group,indices};
  }return null;
 }
 function claim(g,seat,playerPassed=false){
  const legal=option(g,seat);if(!legal)throw Error('This discard does not complete a legal call for your row.');
  for(let n=1;n<=3;n++){const other=(g.pending.seat+n)%4;if(other!==seat&&!(playerPassed&&other===0)&&option(g,other)?.win&&(!legal.win||n<(seat-g.pending.seat+4)%4))throw Error('Another player’s mahjong takes priority.');}
  const p=g.pending;g.discards.pop();g.pending=null;g.turn=seat;g.drawn=true;
  if(legal.win){g.racks[seat].push(p.code);finish(g,seat);return;}
  const tiles=legal.indices.sort((a,b)=>b-a).map(i=>g.racks[seat].splice(i,1)[0]);tiles.push(p.code);
  g.exposed[seat].push({group:legal.group,tiles});g.log.push(`${seat===0?'You':`Player ${seat}`} called ${p.code} and exposed a group.`);
 }
 function declare(g){if(!g.ended&&g.drawn&&complete(g,g.turn)){finish(g,g.turn);return true;}return false;}
 function exchanges(g,seat){
  if(g.ended||!g.drawn||g.turn!==seat)return [];
  const choices=[];g.exposed.forEach((groups,owner)=>groups.forEach((e,group)=>{const joker=e.tiles.indexOf('J'),natural=g.targets[owner].groups[e.group][0],index=g.racks[seat].indexOf(natural);if(joker>=0&&index>=0)choices.push({owner,group,index,joker,natural});}));return choices;
 }
 function exchange(g,seat,owner,group){const e=exchanges(g,seat).find(c=>c.owner===owner&&c.group===group);if(!e)throw Error('No legal joker exchange is available.');g.racks[seat][e.index]='J';g.exposed[owner][group].tiles[e.joker]=e.natural;g.log.push(`${seat===0?'You':`Player ${seat}`} exchanged ${e.natural} for an exposed joker.`);}
 function botDiscard(g){const rack=g.racks[g.turn];let best=-1,index=0;for(let i=0;i<rack.length;i++){const hand=all(g,g.turn),j=hand.indexOf(rack[i]);hand.splice(j,1);const score=-base.missing(hand,g.targets[g.turn].groups).length;if(score>best||i===0){best=score;index=i;}}return discard(g,index);}
 function advance(g){
  if(g.ended) return;
  if(g.pending){
   // Mahjong beats group calls; equal calls go to the nearest seat in turn order.
   for(let n=1;n<=3;n++){const seat=(g.pending.seat+n)%4;if(seat!==0&&option(g,seat)?.win){claim(g,seat,true);return;}}
   let claimed=false;
   for(let n=1;n<=3;n++){const seat=(g.pending.seat+n)%4;if(seat!==0&&option(g,seat)){claim(g,seat,true);claimed=true;break;}}
   if(!claimed)g.pending=null;
  }
  if(g.turn===0)return;
  if(!g.drawn)draw(g);if(g.ended)return;
  if(declare(g))return;
  botDiscard(g);
 }
 return {create,all,complete,draw,discard,option,claim,declare,exchanges,exchange,advance};
})();
if(typeof module!=='undefined')module.exports=TableEngine;
