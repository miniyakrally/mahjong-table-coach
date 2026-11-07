// Original teaching diagrams. They are not images of the official annual card.
function printedPattern(line) {
  const group = codes => {
    const code=codes[0], tile=getTile(code);
    const symbol=tile.kind==='suit'?String(tile.number):code==='F'?'F':code==='Soap'?'0':code;
    const suit=tile.suit || 'honor';
    const label=tile.suit?({C:'Craks',B:'Bams',D:'Dots'})[tile.suit]:tile.kind==='flower'?'Flowers':tile.name;
    return `<span class="printed-group suit-${suit}"><strong>${symbol.repeat(codes.length)}</strong><small>${escapeHtml(label)}</small></span>`;
  };
  const marker=line.id==='pairs'?'C':'X';
  return `<div class="printed-pattern"><p class="printed-heading">On our practice card <span>Original teaching row</span></p><div class="printed-row">${line.groups.map(group).join('')}<b class="hand-marker">${marker}</b></div><p class="row-instructions">${line.id==='groups'?'(Three suits; numbers as shown)':line.id==='winds'?'(Winds as shown)':'(Numbers and suits as shown; concealed)'}</p><p class="row-key">X allows a hand to show called groups; C keeps groups hidden until mahjong. See “X and C” for the full explanation.</p></div>`;
}
function labeledTiles(label,codes) {
  return `<div class="labeled-tiles"><h4>${escapeHtml(label)}</h4><div class="example-tiles">${tileRow(codes)}</div></div>`;
}
function tileBacks(count) {
  return `<div class="hidden-tiles" role="img" aria-label="${count} tiles hidden from the other players">${Array.from({length:count},()=>'<span></span>').join('')}</div>`;
}
function tableDiagram(mode='table',step=0) {
  const broken=mode==='tail'||(mode==='deal' && step>0), highlighted=mode==='deal' && step===1;
  // Seat positions are fixed throughout: East bottom, next player on the right.
  let walls='';
  for(let i=0;i<19;i++) {
    const x=153+i*15;
    walls+=`<rect x="${x}" y="108" width="12" height="23" rx="2" class="wall-stack"/><rect x="104" y="${146+i*10}" width="23" height="8" rx="2" class="wall-stack"/><rect x="473" y="${146+i*10}" width="23" height="8" rx="2" class="wall-stack"/>`;
    const tail=broken && i===12 && mode==='tail';
    const gapShift=broken && i>=12?14:0;
    walls+=`<rect x="${x+gapShift}" y="365" width="12" height="23" rx="2" class="wall-stack ${highlighted&&i>=12?'counted-stack':''}" ${tail?`transform="rotate(90 ${x+gapShift+6} 376.5)"`:''}/>`;
    if(highlighted&&i>=12)walls+=`<text x="${x+gapShift+6}" y="409" text-anchor="middle" class="stack-number">${19-i}</text>`;
  }
  let labels='';
  if(broken) labels='<path d="M338 350L338 395" class="gap-mark"/><text x="318" y="338" text-anchor="middle" class="diagram-label">Draw from here ↓</text><text x="372" y="438" text-anchor="middle" class="diagram-label">Gap / tail side ↑</text>';
  let center='<text x="300" y="210" text-anchor="middle" class="diagram-label">Shared tile supply</text><text x="300" y="235" text-anchor="middle" class="diagram-small">Each rectangle is a stack of two.</text>';
  if(mode==='deal') {
    const desc=['Mix, then build four walls.','Dice total: 7. Count from East’s right.','Deal four tiles each, three times.','Final counts: East 14; everyone else 13.'][step];
    center=`<text x="300" y="205" text-anchor="middle" class="diagram-label">${desc}</text>`;
    if(step===2)center+='<path d="M300 310Q425 310 425 245Q425 160 300 160Q175 160 175 245" class="turn-arrow" marker-end="url(#table-arrow-deal)"/><text x="300" y="265" text-anchor="middle" class="diagram-label">East → right → across → left</text><text x="300" y="290" text-anchor="middle" class="diagram-small">4 tiles each time • 3 rounds = 12 each</text>';
    if(step===3)center+='<text x="300" y="260" text-anchor="middle" class="diagram-label">East: 12 + 2 = 14</text><text x="300" y="290" text-anchor="middle" class="diagram-label">Other seats: 12 + 1 = 13</text>';
  }
  const labelsByMode={table:'Four players, four racks, four walls.',deal:'Example deal with East at the bottom.',tail:'Drawing side and tail at the gap in East’s wall.'};
  return `<svg class="teaching-table" viewBox="0 0 600 510" role="img" aria-label="${labelsByMode[mode]}"><defs><marker id="table-arrow-${mode}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="#275a94"/></marker></defs><rect x="70" y="72" width="460" height="360" rx="35" class="table-cloth"/>${walls}${center}${labels}<text x="300" y="45" text-anchor="middle" class="diagram-label">West • opposite</text><text x="300" y="477" text-anchor="middle" class="diagram-label">East • dealer • your seat</text><text x="565" y="225" text-anchor="middle" class="diagram-label">South</text><text x="565" y="249" text-anchor="middle" class="diagram-small">your right</text><text x="38" y="225" text-anchor="middle" class="diagram-label">North</text><text x="38" y="249" text-anchor="middle" class="diagram-small">your left</text><rect x="194" y="85" width="212" height="11" rx="4" class="rack-bar"/><rect x="194" y="449" width="212" height="11" rx="4" class="rack-bar"/><rect x="80" y="173" width="11" height="150" rx="4" class="rack-bar"/><rect x="509" y="173" width="11" height="150" rx="4" class="rack-bar"/></svg>`;
}
function passingDiagram(round,step) {
  const names=round==='rol'?['Right','Over (across)','Left']:['Left','Over (across)','Right'];
  const dest=names[step].startsWith('Right')?[450,185]:names[step].startsWith('Left')?[150,185]:[300,75];
  return `<div class="charleston-rounds"><p><b>First: R O L</b> — Right, Over, Left</p><p><b>Second: L O R</b> — Left, Over, Right <span>(if everyone agrees)</span></p></div><svg class="passing-table" viewBox="0 0 600 350" role="img" aria-label="From your seat, pass three tiles ${names[step]}."><defs><marker id="pass-arrow-${round}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#265ea7"/></marker></defs><rect x="135" y="60" width="330" height="225" rx="30" class="table-cloth"/><text x="300" y="35" text-anchor="middle" class="diagram-label">Across</text><text x="80" y="185" text-anchor="middle" class="diagram-label">Left</text><text x="520" y="185" text-anchor="middle" class="diagram-label">Right</text><text x="300" y="325" text-anchor="middle" class="diagram-label">You</text><path d="M300 270L${dest[0]} ${dest[1]}" fill="none" stroke="#265ea7" stroke-width="7" marker-end="url(#pass-arrow-${round})"/><text x="300" y="150" text-anchor="middle" class="diagram-label">Pass ${step+1}: ${names[step]}</text></svg>`;
}
const demoSteps = new Map();
function renderTeachingVisual(lesson) {
  const step=demoSteps.get(state.lesson)||0;
  switch(lesson.visual) {
    case 'joker':return labeledTiles('You need this group',['6D','6D','6D'])+labeledTiles('This does the same job',['6D','6D','J']);
    case 'joker-limits':return labeledTiles('Allowed: a pung',['6D','6D','J'])+labeledTiles('Not allowed: a pair',['F','J']);
    case 'card':return patternMarkup(practiceCard[0]);
    case 'table':return tableDiagram('table');
    case 'deal':return tableDiagram('deal',step)+demoControls(step,4);
    case 'tail':return tableDiagram('tail')+wallMarkup();
    case 'rol':case 'lor':return passingDiagram(lesson.visual,step)+demoControls(step,3);
    case 'exposure':return `<div class="rack-comparison"><article><h4>X hand: exposures allowed</h4><p>Shown on top of the rack after a legal call:</p>${labeledTiles('One exposed pung',['2C','2C','2C'])}<p>Still hidden in your rack:</p>${tileBacks(10)}<p>3 shown + 10 hidden = 13 after discarding.</p></article><article><h4>C hand: no exposures before mahjong</h4><p>No groups shown on top of the rack.</p>${tileBacks(13)}<p>13 hidden after discarding. Reveal all 14 only when the hand is complete.</p></article></div>`;
    case 'turn':return turnExample();
    case 'quiz-pairs':return printedPattern(practiceCard[2])+labeledTiles('After drawing: 14 tiles',[...practiceCard[2].groups.flat().slice(0,13),'J']);
    case 'quiz-count': {
      const rack=practiceCard[0].groups.flat();rack.splice(rack.indexOf('6D'),1);rack.splice(rack.lastIndexOf('F'),1);rack.push('9B');
      return printedPattern(practiceCard[0])+labeledTiles('Starting rack: 13 tiles',rack)+labeledTiles('You draw this tile',['6D']);
    }
    case 'call':return printedPattern(practiceCard[0])+labeledTiles('In your hand: three 6 Dots',['6D','6D','6D'])+labeledTiles('The latest discard: fourth 6 Dot',['6D']);
    case 'exchange':return labeledTiles('Other player’s exposed group',['6D','6D','J'])+labeledTiles('Your replacement tile',['6D']);
    default:return `<div class="example-tiles">${tileRow(lesson.tiles)}</div>`;
  }
}
function demoControls(step,count) {
  return `<div class="demo-controls"><button class="secondary-button" type="button" data-demo-move="-1" ${step===0?'disabled':''}>Previous step</button><span role="status">Step ${step+1} of ${count}</span><button class="secondary-button" type="button" data-demo-move="1" ${step===count-1?'disabled':''}>Next step</button></div>`;
}
function turnExample() {
  const line=practiceCard[0];
  const rack=line.groups.flat();rack.splice(rack.lastIndexOf('6D'),1);
  return printedPattern(line)+labeledTiles('Your rack: one 6 Dot is missing',rack)+labeledTiles('Compare two possible draws',['9B','6D']);
}
