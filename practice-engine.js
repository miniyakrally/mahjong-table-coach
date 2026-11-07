/* Guided practice uses original teaching rows, never the official annual hand list. */
const GuidedEngine = (() => {
  function supply() {
    const tiles=[];
    for(const s of ['C','B','D']) for(let n=1;n<=9;n++) tiles.push(...Array(4).fill(`${n}${s}`));
    for(const c of ['N','E','W','S','RD','GD','Soap']) tiles.push(...Array(4).fill(c));
    return tiles.concat(Array(8).fill('F'),Array(8).fill('J'));
  }
  function take(deck,code) { const i=deck.indexOf(code); if(i<0) throw Error(`No ${code} remains in the supply.`); return deck.splice(i,1)[0]; }
  function shuffle(deck,random=Math.random) { for(let i=deck.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[deck[i],deck[j]]=[deck[j],deck[i]];} return deck; }
  function create(target,independent=false) {
    const deck=shuffle(supply());
    const starter=independent?deck.splice(0,13):['2C','2C','4B','4B','6D','6D','F','J','9B','E','RD','7C','1B'].map(c=>take(deck,c));
    return {racks:[starter,deck.splice(0,13),deck.splice(0,13),deck.splice(0,14)],wall:deck,discards:[],step:0,phase:'passing',courtesy:0,target,independent,drawn:false,won:false,exhausted:false};
  }
  function missing(hand,groups) {
    const counts={};hand.forEach(c=>counts[c]=(counts[c]||0)+1);let jokers=counts.J||0;const result=[];
    for(const group of groups){const code=group[0],natural=Math.min(counts[code]||0,group.length);counts[code]=(counts[code]||0)-natural;let need=group.length-natural;if(group.length>=3){const used=Math.min(jokers,need);need-=used;jokers-=used;}result.push(...Array(need).fill(code));}return result;
  }
  function draw(game) {
    if(game.drawn||game.won||game.exhausted) throw Error('Finish this turn before drawing again.');
    if(!game.wall.length){game.exhausted=true;return null;}
    // The wall was shuffled when dealt. Always draw its next physical tile;
    // hints and the target pattern must never change draw order.
    const code=game.wall.shift();game.racks[0].push(code);game.drawn=true;return code;
  }
  function discard(game,index) {
    if(!game.drawn||game.won||!Number.isInteger(index)||index<0||index>=game.racks[0].length)throw Error('Draw before choosing your discard.');
    const code=game.racks[0].splice(index,1)[0];game.discards.push(code);game.drawn=false;return code;
  }
  function win(game) { game.won=game.drawn&&game.racks[0].length===14&&missing(game.racks[0],game.target.groups).length===0;return game.won; }
  return {supply,take,shuffle,create,missing,draw,discard,win};
})();
if(typeof module!=='undefined')module.exports=GuidedEngine;

