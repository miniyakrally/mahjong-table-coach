/* One task at a time, with locally saved progress and a continuous practice rack. */
if (typeof document !== 'undefined') (() => {
  const root = document.querySelector('#journey');
  const names = ['Meet the tiles','Read a card row','Place a joker','Hidden or exposed?','Meet the table','Pass and rethink','Draw and discard','Calls and exchanges','Read a new row','Your next game'];
  let discardSelection=null;
  let step=0, introIndex=0, answer=null, feedback='', selection=[], activitySelection=[], game=null;
  let blind=0, hinted=false, independent=false, questionIndex=0, transferIndex=0;
  let hintIndices=[], incomingIndices=[], resumed=false, saveFailed=false;
  const results=new Map();
  let progressStorage;
  try { progressStorage=localStorage; } catch { saveFailed=true; }
  const row=()=>practiceCard[0];
  const tiles=codes=>`<div class="example-tiles">${tileRow(codes)}</div>`;
  const actions=(label='Continue')=>`<button class="primary-button" data-go="next">${label} →</button>`;
  const intros = [
    {title:'Three numbered suits', copy:'Craks are characters, Bams are bamboo, and Dots are circles. Each suit runs from 1 to 9. Match both the number and the suit.', families:[['Craks',['3C']],['Bams',['3B']],['Dots',['3D']]], prompt:'You have two 3 Dots. Select the tile that makes three matching tiles.', choices:[['3B'],['3D'],['4D']], correct:[1], why:'Three 3 Dots match. A 3 Bam shares the number but belongs to a different suit.'},
    {title:'Four winds', copy:'North, East, West, and South are four different tiles. Match the wind name, not its position at the table.', families:[['Winds',['N','E','W','S']]], prompt:'You hold a North. Select another North to make a pair.', choices:[['W'],['N'],['S']], correct:[1], why:'Two Norths make a pair. North and South are different tiles.'},
    {title:'Three dragons', copy:'The dragons are Red, Green, and White. White Dragon is also called Soap. It often has a rectangular frame.', families:[['Dragons',['RD','GD','Soap']]], prompt:'Select the White Dragon, also called Soap.', choices:[['GD'],['RD'],['Soap']], correct:[2], why:'The framed White Dragon is Soap. You will also see it represent zero in year patterns.'},
    {title:'Flowers count alike', copy:'All eight flowers count alike, even when their pictures or season names differ. Keep flowers in your hand; they do not earn replacement draws.', families:[['A flower',['F']]], prompt:'You hold one flower. Select the tile that makes a pair of flowers.', choices:[['F'],['N'],['RD']], correct:[0], why:'Any other flower completes the pair, regardless of the picture on it.'},
    {title:'Meet the joker', copy:'There are eight jokers. A joker can fill a place in a matching group of three or more. It cannot fill a single or pair. We will try those placements shortly.', families:[['Joker',['J']]], prompt:'Select the joker. Its face is usually marked “Joker.”', choices:[['Soap'],['J'],['F']], correct:[1], why:'The joker is a special tile. Keep it during the Charleston; jokers cannot be passed.'}
  ];
  const questions=[
    {q:'Someone discards 4 Bam. You have three 4 Bams for the kong on this X row. The next player has picked up a tile but has not racked it or taken another closing action. What can you do?',codes:['4B','4B','4B','4B'],a:['Call, show all four 4 Bams, then discard.','Draw your tile first, then call.','Call and keep the kong hidden.'],correct:0,why:'The calling window is still open. A legal call replaces your draw: show the complete kong, then discard. Racking the next draw closes the window; discarding, declaring mahjong, or starting a joker exchange also closes it.'},
    {q:'You need a pair of flowers. A flower is discarded, but that pair would not finish your whole hand. What do you do?',codes:['F','F'],a:['Call the flower and show the pair.','Let it go; a pair may be called only to finish mahjong.','Use a joker with your flower instead.'],correct:1,why:'You cannot expose a pair as an intermediate call. The final winning discard may complete a single or pair; jokers may never fill those places.'},
    {q:'It is your turn, after your draw. You hold 6 Dot. Another player has 6 Dot, 6 Dot, joker exposed. How do you exchange?',codes:['6D','6D','J'],a:['Take their joker, then leave your tile.','Discard 6 Dot so the owner can take it.','Offer your 6 Dot and ask the owner to swap; then finish your turn.'],correct:2,why:'The natural tile must match the exposure. Never touch someone else’s tiles or rack. Ask the owner to make the exchange. You may not call a discard solely to trade it for a joker.'},
    {q:'Someone discards a joker. It could fill the final missing place in your kong and finish your hand. Can you claim it?',codes:['J'],a:['Yes, because it would be mahjong.','No: a discarded joker can never be claimed.','Only if the discarder agrees.'],correct:1,why:'A joker must come from your own draw, your dealt hand, or a legal exchange with an exposed joker. Once discarded, a joker cannot be called, even for mahjong.'},
    {q:'Two players call the same discard: one for a kong and one for mahjong. Whose call has priority?',codes:['6D'],a:['The kong, because it has more tiles.','Mahjong takes priority.','The player who reaches the tile first.'],correct:1,why:'A valid mahjong call takes priority over a call for an exposure. Announce clearly; do not reach across the table to compete for a tile.'},
    {q:'Your row is marked C. A discarded North completes your entire 14-tile hand. May you call it?',codes:['N','N'],a:['Yes: call mahjong and reveal the complete hand.','No: C forbids every discard call.','Yes: expose the pair and keep playing.'],correct:0,why:'A concealed hand may claim its final tile for mahjong. It cannot make intermediate exposures. Reveal all 14 tiles for verification.'}
  ];
  const transfers=[
    {row:'<span>FF</span><span class="suit-B">3333</span><span class="suit-B">5555</span><span>DDDD</span><b>X · 20</b>',words:'Any one suit; matching dragon',info:'Choose one suit for both numbered groups. Red Dragon matches Craks; Green matches Bams; White (Soap) matches Dots. The 20 is an illustrative point value, not a tile.',codes:['F','F','3D','3D','3D','3D','5D','5D','5D','5D','Soap','Soap','Soap','Soap'],q:'The tiles choose Dots. Which change still satisfies the row?',a:['Replace one flower with a joker.','Replace one Soap with a joker.','Replace the four 5 Dots with four 5 Bams.'],correct:1,why:'A joker can fill a place in the dragon kong. It cannot fill the flower pair. Both numbered groups must use the same chosen suit.'},
    {row:'<span>FF</span><span class="suit-C">3333</span><span class="suit-B">3333</span><span class="suit-D">3333</span><b>X · 25</b>',words:'Any like numbers; three suits',info:'“Like numbers” means the same number in each group. The different colors require three different suits. The printed 3 is a model for the number you choose.',codes:['7C','7B','7D'],q:'You choose 7 as your number. Which combination fits the three kongs?',a:['Four 7 Craks, four 7 Bams, four 7 Dots.','Four 3 Craks, four 5 Bams, four 7 Dots.','Twelve 7 Dots.'],correct:0,why:'The number can change, but all three groups must share it. The three colors require all three suits, not twelve copies of one tile.'},
    {row:'<span>FF</span><span class="suit-C">222</span><span class="suit-C">333</span><span class="suit-C">444</span><span class="suit-C">555</span><b>X · 25</b>',words:'Any four consecutive numbers; one suit',info:'Consecutive means one number after the next. Each cluster here is still three identical tiles, not a group of three different numbers. All numbered groups use the same suit.',codes:['5B','6B','7B','8B'],q:'Which four pungs could replace 222, 333, 444, 555?',a:['5 Bam, 6 Dot, 7 Crak, 8 Bam pungs.','5, 6, 7, 8 Bams, three of each.','7, 8, 9, 1 Bams, three of each.'],correct:1,why:'5–6–7–8 is four consecutive numbers, all in one suit. Numbers do not wrap from 9 back to 1.'},
    {row:'<span>FF</span><span class="suit-C">2026</span><span class="suit-C">3333</span><span>DDDD</span><b>X · 25</b>',words:'Numbers as shown; any one suit; matching dragon',info:'In 2026, 0 is Soap. Read these as separate places: 2, Soap, 2, 6. The two 2s are not printed as an interchangeable pair. DDDD is a separate kong of the dragon matching your chosen suit.',codes:['2B','Soap','2B','6B','GD'],q:'Choosing Bams, which tiles fill 2026 and the dragon kong?',a:['2 Bam, Green Dragon, 2 Bam, 6 Bam; four Soaps.','2 Bam, Soap, 2 Bam, 6 Bam; four Green Dragons.','2 Bam, joker, 2 Bam, 6 Bam; four Green Dragons.'],correct:1,why:'Zero always means Soap in the year. The matching dragon for Bams is Green. The year places cannot use jokers; the separate dragon kong can.'},
    {row:'<span>FF</span><span class="suit-C">33333</span><span>DDDDD</span><span class="suit-C">22</span><b>X · 30</b>',words:'Numbers as shown; any one suit; matching dragon',info:'Five identical tiles form a quint. There are only four natural copies of each numbered tile and each dragon, so these quints need jokers. Five printed places are intentional, not a printing error.',codes:['3C','3C','3C','3C','J'],q:'How many jokers does this entire row need at minimum?',a:['One joker in total.','Three: one for each flower and one for the quints.','Two: at least one for each quint.'],correct:2,why:'Each quint needs a fifth tile beyond its four natural copies. The pair of flowers and pair of 2s cannot contain jokers.'},
    {row:'<span>FF</span><span class="suit-C">111</span><span class="suit-C">333</span><span class="suit-C">555</span><span class="suit-C">777</span><b>C · 30</b>',words:'Numbers as shown; any one suit; concealed',info:'Read the entire row, including C and the words below it. You may choose the suit, but the printed numbers are fixed.',codes:['7D','7D','7D'],q:'You choose Dots. A discarded 7 Dot completes the last pung and the whole 14-tile hand. What is legal?',a:['Call mahjong, reveal all 14 tiles, and verify the row.','Call the pung and discard a flower.','Keep playing because C never permits a call.'],correct:0,why:'C allows the final call for mahjong, including one that completes a pung. It forbids calling intermediate groups. Keep the final tile; do not discard after winning.'}
  ];

  const correctAnswer=()=>[1,2,1,1,0,null,null,questions[questionIndex]?.correct,transfers[transferIndex]?.correct][step];
  const resultKey=()=>step===0?`tiles${introIndex}`:step===7?`situation${questionIndex}`:step===8?`transfer${transferIndex}`:String(step);
  function record(correct) { if(correct) window.LearningAnalytics?.capture('activity_completed',{stage:step,unit:step===0?introIndex:step===7?questionIndex:step===8?transferIndex:0,mode:independent?'independent':'guided'}); if(!results.has(resultKey())) results.set(resultKey(), correct && !hinted); }
  function focus(selector) { document.querySelector(selector)?.focus?.({preventScroll:true}); }
  function activityConfig() {
    if(step===0) return intros[introIndex];
    if(step===1) return {prompt:'This row needs four 4 Bams. You already have three. Select the tile that fills the last place.', choices:[['4D'],['6D'],['4B']], correct:[2], why:'Four 4 Bams fill 4444. Every place in this kong must be the same tile or an eligible joker.'};
    if(step===2) return {prompt:'Select the group where the joker is NOT allowed.', choices:[['6D','J','6D'],['4B','4B','J','J'],['F','J']], correct:[2], why:'The flower pair cannot use a joker. The pung and kong can: the finished group has three or more matching places.'};
    if(step===3) return {prompt:'Your X row needs a kong of 4 Bams. A 4 Bam was just discarded. Select the THREE tiles from your rack to show with that discard.', choices:[['4B'],['9B'],['4B'],['4B']], correct:[0,2,3], why:'Your three 4 Bams join the discarded 4 Bam. Show all four together on top of your rack, then discard. The 9 Bam stays in your rack until you choose your discard.'};
    return null;
  }
  function activity() {
    const config=activityConfig();
    const solved=answer===correctAnswer();
    return `<section class="tile-activity" aria-label="Tile activity"><h3>${config.prompt}</h3><div class="activity-choices">${config.choices.map((codes,i)=>`<button class="activity-choice ${activitySelection.includes(i)?'selected':''}" data-activity-index="${i}" aria-pressed="${activitySelection.includes(i)}" aria-label="${codes.map(tileDisplay).map(escapeHtml).join(', ')}${config.correct.length>1?`, rack position ${i+1}`:''}" ${solved?'disabled':''}>${tiles(codes)}${activitySelection.includes(i)?'<span class="selection-check" aria-hidden="true">✓</span>':''}</button>`).join('')}</div>${answer===null?'':`<p class="answer-feedback ${solved?'success':'correction'}" role="status"><strong>${solved?'✓ Correct.':'Try again.'}</strong> ${config.why}</p>`}${solved?(step===3?`<div class="exposure-result"><p><strong>Your exposure</strong> · visible to everyone</p>${tiles(['4B','4B','4B','4B'])}</div>`:'')+actions(step===0&&introIndex<4?'Next tile family':'Continue'):`<button class="primary-button" data-go="checkActivity" ${activitySelection.length===config.correct.length?'':'disabled'}>${activitySelection.length===config.correct.length?'Check my choice':`Select ${config.correct.length-activitySelection.length} ${config.correct.length-activitySelection.length===1?'tile':'tiles'}`}</button>`}</section>`;
  }
  function question(key,q,choices,correct,why) {
    const order=choices.map((text,i)=>({text,i}));
    const shift=(key.length+step+questionIndex)%order.length;
    order.push(...order.splice(0,shift));
    return `<fieldset class="journey-question"><legend>${q}</legend><div class="answer-grid">${order.map(({text,i})=>`<button class="secondary-button ${answer===i?(i===correct?'correct':'incorrect'):''}" data-answer="${i}" aria-pressed="${answer===i}">${answer===i?(i===correct?'✓ ':'↻ '):''}${text}</button>`).join('')}</div></fieldset>${answer===null?'':`<p class="answer-feedback ${answer===correct?'success':'correction'}" role="status"><strong>${answer===correct?'✓ Correct.':'Try again.'}</strong> ${why}</p>`}${answer===correct?actions(step===7&&questionIndex<questions.length-1?'Next situation':step===8&&transferIndex<transfers.length-1?'Try the next row':'Continue'):''}`;
  }
  function card() {
    return `<div class="journey-target ${step>=5?'compact':''}">${printedPattern(row())}<details><summary>Show this row as tiles</summary>${patternMarkup(row()).replace(printedPattern(row()),'')}</details></div>`;
  }
  function tabletop() {
    const passing=step===5, g=game;
    const direction=['right','across','left','left','across','right'][g.step];
    return `${card()}<div class="journey-mat"><div class="seat across-seat">Across · East (dealer) ${tileBacks(14)}</div><div class="table-center"><span class="seat">Left</span><div><p class="eyebrow">${passing?'The Charleston':'Your turn'}</p><h3>${passing?(g.phase==='passing'?`Pass ${g.step+1}: ${direction}`:g.phase==='second'?'First Charleston complete':g.phase==='courtesyChoice'?'One optional exchange':g.phase==='courtesy'?`Pass ${g.courtesy} across`:'Ready to play'):g.won?'Mahjong!':g.drawn?'Choose a discard or declare mahjong':'Draw one tile'}</h3><p>${passing?'First: Right → Across → Left<br>Second: Left → Across → Right':'13 between turns · 14 after drawing'}</p></div><span class="seat">Right</span></div><div class="rack-feedback ${hintIndices.length?'hint-feedback':''}" role="status" tabindex="-1">${feedback?escapeHtml(feedback):passing?'Keep tiles that help the row. Pass face down; your joker stays.':g.drawn?'Compare the whole hand with the row before discarding.':'Other players are paused in this short exercise.'}</div><div class="rack-label"><strong>Your rack</strong><span>${g.racks[0].length} tiles${incomingIndices.length?' · New tiles are marked':''}</span></div><div class="journey-rack">${g.racks[0].map((c,i)=>`<button class="hand-tile ${(passing?selection.includes(i):discardSelection===i)?'selected':''} ${hintIndices.includes(i)?'hinted-tile':''} ${incomingIndices.includes(i)?'incoming-tile':''}" data-rack="${i}" aria-pressed="${passing?selection.includes(i):discardSelection===i}" aria-label="${passing?'Select':'Select discard'} ${escapeHtml(tileDisplay(c))}${incomingIndices.includes(i)?', new tile':''}${hintIndices.includes(i)?', suggested tile':''}" ${passing?(c==='J'||!['passing','courtesy'].includes(g.phase)?'disabled':''):!g.drawn||g.won?'disabled':''}>${tileButtonMarkup(c)}${(passing?selection.includes(i):discardSelection===i)?'<span class="selection-check" aria-hidden="true">✓</span>':incomingIndices.includes(i)?'<span class="tile-badge">New</span>':hintIndices.includes(i)?'<span class="tile-badge">Hint</span>':''}</button>`).join('')}</div></div>`;
  }
  function passControls() {
    if(game.phase==='second') return `<p>Everyone must agree to a second Charleston. Any player can stop now. For this exercise, the other players agree if you do.</p><div class="action-bar"><button class="primary-button" data-go="second">Continue with Left → Across → Right</button><button class="secondary-button" data-go="stop">Stop passing</button></div>`;
    if(game.phase==='courtesyChoice') return `<p>Your opposite player offers up to 2 tiles. Exchange the smaller number requested by the two of you.</p><label>How many would you like? <select id="journeyCourtesy"><option value="0">0 — no exchange</option><option>1</option><option>2</option><option>3</option></select></label><div class="action-bar"><button class="primary-button" data-go="courtesy">Agree exchange</button></div>`;
    if(game.phase==='done') return `<p>Passing is finished. Your rack has ${game.racks[0].length} tiles.${game.drawn||game.discards.length?' Return to your current turn.':' East discards first; we skip ahead to your next turn.'}</p><div class="action-bar">${actions('Use this rack to play')}</div>`;
    const count=game.phase==='courtesy'?game.courtesy:3, max=count-blind, remaining=max-selection.length;
    const allowBlind=game.phase==='passing'&&[2,5].includes(game.step);
    return `<p>Choose ${max} tiles from your rack${blind?` and send on ${blind} incoming tiles without looking`:''}. Tap a selected tile again to keep it.</p>${allowBlind?`<details><summary>Try a blind pass</summary><p>On first left or second right, you may send on incoming tiles without looking. Rack tiles plus blind tiles must total three.</p><label>Incoming tiles to pass blind <select id="journeyBlind">${[0,1,2,3].map(n=>`<option ${blind===n?'selected':''}>${n}</option>`).join('')}</select></label></details>`:''}<div class="action-bar"><p class="action-status" role="status">${selection.length} of ${max} selected${remaining?` · Select ${remaining} more`: ' · Ready to pass'}</p><button class="primary-button" data-go="pass" ${remaining?'disabled':''}>${remaining?`Select ${remaining} more ${remaining===1?'tile':'tiles'}`:`Pass ${count} ${['right','across','left','left','across','right'][game.step]||'across'} →`}</button><button class="text-button" data-go="hint">Help me choose</button></div>`;
  }
  function content() {
    if(step===0) {
      const intro=intros[introIndex];
      return `<p class="task-intro">${intro.copy}</p><div class="journey-families intro-families">${intro.families.map(([title,codes])=>`<article><h3>${title}</h3>${tiles(codes)}</article>`).join('')}</div>${introIndex===0?'<p class="small-note">Four players collect 14 tiles to match a row on a card. Your tiles are called your hand.</p>':''}${activity()}${introIndex===0?'<details><summary>Our Bird Bam tradition</summary><p>1 Bam usually shows a bird. When someone draws it during play, we offer an optional toast. Any drink counts; joining in is optional.</p>'+tiles(['1B'])+'</details>':''}`;
    }
    if(step===1) return `<p class="task-intro">A row on a card describes a complete 14-tile hand. Read its symbols, colors, and the words underneath.</p>${card()}<p><strong>222</strong> is a pung: three matching tiles. <strong>4444</strong> and <strong>6666</strong> are kongs: four each. <strong>FFF</strong> means three flowers.</p><details><summary>Colors and instructions on an annual card</summary><p>Colors identify groups that share a suit; they do not always fix the suit itself. Read the words in parentheses for suit and number choices. The number beside an annual row is its point value. Our first teaching row fixes the suits so you can focus on building it.</p></details>${tiles(['4B','4B','4B'])}${activity()}`;
    if(step===2) return `<p class="task-intro">A joker fills a place in a matching group of three or more. It never fills a single or pair.</p>${activity()}`;
    if(step===3) return `<p class="task-intro"><strong>X</strong> allows legal calls to show complete groups on top of your rack. This shown group is an <strong>exposure</strong>. Your other tiles stay hidden.</p><details><summary>How a concealed hand is different</summary><p><strong>C</strong> means keep all groups hidden while building your hand. Call a discard only if it completes your entire hand for mahjong. Concealed groups of three or more can still use jokers. X permits exposures but does not require them.</p>${tileBacks(13)}</details><p>Latest discard: <strong>4 Bam</strong></p>${tiles(['4B'])}${activity()}`;
    if(step===4)return `<p>Face-down tiles form four walls, one by each rack. A full American set has 152 tiles: each wall is 19 stacks, two tiles high. The dealer is called East.</p>${tableDiagram('tail')}<p><strong>Break and deal:</strong> East rolls two dice. Count that many stacks from the right end of East’s wall and open a gap. Deal four tiles at a time to each player for three rounds, then the final tiles: East ends with 14; everyone else has 13.</p><p><strong>Fishtail:</strong> turn the last stack at the tail sideways to mark the end you are not drawing from. Follow the drawing end as the supply runs out. Ask the wall’s owner to move or serve their wall.</p><p class="tradition"><strong>Table etiquette:</strong> never touch someone else’s tiles or rack. Say what you need and let the owner handle their tiles, including joker exchanges.</p>${question('wall','Why does East begin by discarding without drawing?',['East already has 14 tiles from the deal.','East skips the Charleston.','The fishtailed stack belongs to East.'],0,'Everyone else starts with 13. Normally a turn begins with a draw to reach 14, then a discard to return to 13.')}`;
    if(step===5) return `<div class="table-workspace"><div>${tabletop()}</div><aside class="journey-controls" aria-label="Passing instructions">${passControls()}</aside></div>`;
    if(step===6) return `<div class="table-workspace"><div>${tabletop()}${discardTray(game.discards)}</div><aside class="journey-controls" aria-label="Turn instructions">${game.exhausted?'<p>The wall is empty. No winner this hand.</p>':game.won?'<p>All 14 tiles match. Keep your final tile; do not discard after declaring mahjong.</p>':`<div class="action-bar"><p class="action-status">${game.drawn?(discardSelection===null?'14 tiles · Select one tile, then confirm its discard':`Selected: ${escapeHtml(tileDisplay(game.racks[0][discardSelection]))} · Tap again to keep it`):'13 tiles · Draw to begin your turn'}</p>${game.drawn?`<button class="primary-button" data-go="discard" ${discardSelection===null?'disabled':''}>${discardSelection===null?'Select a tile to discard':`Discard ${escapeHtml(tileDisplay(game.racks[0][discardSelection]))}`}</button><button class="secondary-button" data-go="win">Declare mahjong</button>`:'<button class="primary-button" data-go="draw">Draw one tile</button>'}${independent?'':'<button class="text-button" data-go="hint">Help me compare</button>'}</div>`}<details><summary>About this exercise · ${game.wall.length} tiles in the wall</summary><p>Draws come in order from a shuffled wall. The app never chooses tiles to help your pattern, and a hand may end without mahjong. Other players are paused; this is a turn exercise.</p></details>${game.won||game.exhausted?actions('Practice calls and exchanges'):''}<button class="text-button" data-go="newHand">Start a fresh turn exercise</button></aside></div>`;
    if(step===7){const q=questions[questionIndex];return `<p>Situation ${questionIndex+1} of ${questions.length}. These are separate examples so you can practice calls without changing the hand you just played.</p>${tiles(q.codes)}${question('situation'+questionIndex,q.q,q.a,q.correct,q.why)}`;}
    if(step===8){const t=transfers[transferIndex];return `<p>New row ${transferIndex+1} of ${transfers.length}. These original examples teach annual-card conventions; they are not official 2026 hands.</p><div class="transfer-row"><p class="eyebrow">Original teaching row</p><div class="printed-row">${t.row}</div><p>(${t.words})</p></div><p>${t.info}</p>${tiles(t.codes)}${question('transfer'+transferIndex,t.q,t.a,t.correct,t.why)}`;}
    const firstTry=[...results.values()].filter(x=>x).length;
    return `<h3>Your practice recap</h3><p>${firstTry} of ${results.size} decisions were correct on the first try. This records decisions, not a claim that you are ready to play without help.</p><ul><li>Card-reading decisions attempted: ${[...results.keys()].filter(k=>k.startsWith('transfer')).length} of ${transfers.length}.</li><li>Call and exchange decisions attempted: ${[...results.keys()].filter(k=>k.startsWith('situation')).length} of ${questions.length}.</li><li>Current hand: ${game?.won?'matched all 14 tiles':game?.exhausted?'wall exhausted without a win':'not finished'}.</li></ul><p>Next, play with your friends using our included practice card. To play the official 2026 hands, everyone needs access to the same official card. Apply the same reading steps to a row, build it with tiles, and check every instruction.</p><div class="journey-controls"><button class="primary-button" data-go="independent">Try a hand without hints</button><button class="secondary-button" data-view-link="card">Open the card reference</button><button class="secondary-button" data-go="restart">Start the guided hand again</button></div><details><summary>Rules and further reference</summary><p>Practice rows are original. For official NMJL card content and rulings, use the League’s current card and rulebook. This app is not affiliated with the League.</p><a href="https://www.nationalmahjonggleague.org/store.aspx" target="_blank" rel="noreferrer">National Mah Jongg League</a><br><a href="https://guide.americanmahjonggassociation.com/" target="_blank" rel="noreferrer">American Mah Jongg Association rule reference</a></details>`;
  }

  function snapshot() {
    return { step,introIndex,answer,feedback,selection,activitySelection,discardSelection,game,blind,hinted,independent,questionIndex,transferIndex,hintIndices,incomingIndices,results:[...results] };
  }
  function save() { saveFailed=!LearningProgress.write(progressStorage,snapshot()); }
  function restore() {
    const saved=LearningProgress.read(progressStorage);
    if(!saved) return;
    ({step,introIndex,questionIndex,transferIndex}=saved);
    game=saved.game||null;
    if(game) game.target=row();
    independent=Boolean(saved.independent); hinted=Boolean(saved.hinted);
    answer=Number.isInteger(saved.answer)&&saved.answer>=-1&&saved.answer<=3?saved.answer:null;
    feedback=typeof saved.feedback==='string'?saved.feedback.slice(0,800):'';
    blind=Number.isInteger(saved.blind)&&saved.blind>=0&&saved.blind<=3?saved.blind:0;
    const indices=(values,max)=>Array.isArray(values)?[...new Set(values.filter(n=>Number.isInteger(n)&&n>=0&&n<max))]:[];
    selection=indices(saved.selection,game?.racks[0].length||0).slice(0,3);
    discardSelection=game?.drawn&&Number.isInteger(saved.discardSelection)&&saved.discardSelection>=0&&saved.discardSelection<game.racks[0].length?saved.discardSelection:null;
    activitySelection=indices(saved.activitySelection,activityConfig()?.choices.length||0);
    hintIndices=indices(saved.hintIndices,game?.racks[0].length||0);
    incomingIndices=indices(saved.incomingIndices,game?.racks[0].length||0);
    saved.results.forEach(([key,value])=>results.set(key,value));
    resumed=step>0||introIndex>0||results.size>0;
  }
  function render() {
    window.LearningAnalytics?.capture('stage_reached',{stage:step,unit:step===0?introIndex:step===7?questionIndex:step===8?transferIndex:0,mode:independent?'independent':'guided'});
    save();
    root.innerHTML=`${resumed?'<div class="resume-banner"><span>Continue learning · your place and hand are saved.</span><button class="text-button" data-go="resume">Continue learning →</button></div>':''}${saveFailed?'<p class="answer-feedback correction">This browser could not save your progress. Keep this tab open to continue.</p>':''}<div class="journey-heading"><div><p class="eyebrow">${independent?'Practice without hints':`Step ${step+1} of ${names.length}`}${step===0?` · Tiles ${introIndex+1} of 5`:''}</p><h2 id="journeyTitle" tabindex="-1">${step===0?intros[introIndex].title:names[step]}</h2></div><div class="journey-navigation"><button class="text-button" data-go="back" ${step===0&&introIndex===0?'disabled':''}>← Back</button>${step<5?'<button class="text-button" data-go="skip">Skip to passing</button>':step<9?'<button class="text-button" data-go="skip">Practice decisions</button>':''}</div></div><details class="lesson-outline"><summary>Lesson outline · ${step+1}/${names.length}</summary><ol>${names.map((name,i)=>`<li><button class="text-button" data-stage="${i}" ${i===step?'aria-current="step"':''}>${name}</button></li>`).join('')}</ol></details><div class="journey-body">${content()}${[5,6].includes(step)||!feedback?'':`<p class="journey-feedback" role="status">${escapeHtml(feedback)}</p>`}</div>`;
    window.RackArrange?.mount(root.querySelector('.journey-rack'),'journey',(from,to)=>{
      RackArrange.move(game.racks[0],from,to);
      selection=selection.map(i=>RackArrange.remap(i,from,to));
      discardSelection=RackArrange.remap(discardSelection,from,to);
      hintIndices=hintIndices.map(i=>RackArrange.remap(i,from,to));
      incomingIndices=incomingIndices.map(i=>RackArrange.remap(i,from,to));
    },render);
    const announcement=document.querySelector('#learningAnnouncement');
    const spoken=feedback||(answer!==null?(answer===correctAnswer()?'Correct. Continue when you are ready.':'Try again. You can change your selection.'):'');
    if(announcement.textContent!==spoken)announcement.textContent=spoken;
  }
  function go(n) {
    step=n; discardSelection=null; answer=null; feedback=''; selection=[]; activitySelection=[]; blind=0; hinted=false; hintIndices=[]; incomingIndices=[]; resumed=false;
    if(step===5&&!game) game=GuidedEngine.create(row());
    if(step===6&&!game) {game=GuidedEngine.create(row(),independent);game.phase='done';}
    render(); focus('#journeyTitle'); document.querySelector('#journeyTitle')?.scrollIntoView?.({block:'start'});
  }
  function restart() {
    step=0;introIndex=0;independent=false;game=null;questionIndex=0;transferIndex=0;results.clear();go(0);
    document.querySelector('#restartConfirm').hidden=true;
  }
  root.addEventListener('change',event=>{if(event.target.id==='journeyBlind'){blind=Number(event.target.value);selection=[];render();focus('#journeyBlind');}});
  root.addEventListener('click',event=>{
    const button=event.target.closest('button'); if(!button||button.disabled)return;
    if(button.dataset.viewLink){setView(button.dataset.viewLink);return;}
    if(button.dataset.stage!==undefined){if(Number(button.dataset.stage)!==step)go(Number(button.dataset.stage));return;}
    if(button.dataset.activityIndex!==undefined){
      const i=Number(button.dataset.activityIndex), max=activityConfig().correct.length;
      if(activitySelection.includes(i))activitySelection=activitySelection.filter(n=>n!==i);
      else if(activitySelection.length<max)activitySelection.push(i);
      else feedback='You have selected enough tiles. Tap one again to change your choice.';
      answer=null;render();focus(`[data-activity-index="${i}"]`);return;
    }
    if(button.dataset.answer!==undefined){answer=Number(button.dataset.answer);record(answer===correctAnswer());render();focus(`[data-answer="${answer}"]`);return;}
    if(button.dataset.rack!==undefined){
      const i=Number(button.dataset.rack);
      if(step===5){
        const max=(game.phase==='courtesy'?game.courtesy:3)-blind;
        if(selection.includes(i))selection=selection.filter(n=>n!==i);
        else if(selection.length<max)selection.push(i);
        else feedback=`${max} rack tiles are already selected. Tap a selected tile to keep it, then choose another.`;
        render();focus(`[data-rack="${i}"]`);
      } else if(step===6){
        if(!game.drawn||game.won)return;
        discardSelection=discardSelection===i?null:i;
        render();focus(`[data-rack="${i}"]`);
      }return;
    }
    const action=button.dataset.go;if(!action)return;
    try {
      if(action==='resume'){resumed=false;render();focus('#journeyTitle');document.querySelector('#journeyTitle')?.scrollIntoView?.({block:'start'});return;}
      if(action==='checkActivity'){
        const expected=activityConfig().correct;
        const correct=activitySelection.length===expected.length&&expected.every(i=>activitySelection.includes(i));
        answer=correct?correctAnswer():-1;record(correct);render();focus(correct?'[data-go="next"]':'[data-go="checkActivity"]');return;
      }
      if(action==='next'){
        if(step===0&&introIndex<4){introIndex++;go(0);}
        else if(step===7&&questionIndex<questions.length-1){questionIndex++;go(7);}
        else if(step===8&&transferIndex<transfers.length-1){transferIndex++;go(8);}
        else go(Math.min(9,step+1));return;
      }
      if(action==='back'){if(step===0&&introIndex>0){introIndex--;go(0);}else go(Math.max(0,step-1));return;}
      if(action==='skip'){if(step<5){if(!game)game=GuidedEngine.create(row());go(5);}else go(7);return;}
      if(action==='second')game.phase='passing';
      if(action==='stop')game.phase='courtesyChoice';
      if(action==='courtesy'){game.courtesy=Math.min(2,Number(document.querySelector('#journeyCourtesy').value));game.phase=game.courtesy?'courtesy':'done';}
      if(action==='pass'){
        const incoming=Charleston.exchange(game,selection,blind);
        incomingIndices=incoming.map((_,i)=>game.racks[0].length-incoming.length+i);hintIndices=[];selection=[];blind=0;
        feedback=`Received ${incoming.map(tileDisplay).join(', ')||'no rack tiles: all incoming tiles were passed blind'}. New tiles are marked. Compare your rack with the row again.`;
      }
      if(action==='hint'){
        hinted=true;const needed={};row().groups.flat().forEach(code=>needed[code]=(needed[code]||0)+1);hintIndices=[];
        game.racks[0].forEach((code,i)=>{if(code==='J')return;if(needed[code]>0)needed[code]--;else if(hintIndices.length<3)hintIndices.push(i);});
        feedback=hintIndices.length?`The tiles marked Hint are outside this row or exceed its required quantity: ${hintIndices.map(i=>tileDisplay(game.racks[0][i])).join(', ')}. Other patterns may use them.`:'Every tile helps this row. If passing, consider a blind pass when available. If playing, compare all 14 places before declaring mahjong.';
      }
      if(action==='discard'){
        if(discardSelection===null)return;
        const before=GuidedEngine.missing(game.racks[0],row().groups).length;
        window.LearningAnalytics?.capture('practice_turn_completed',{mode:independent?'independent':'guided'});
        const code=GuidedEngine.discard(game,discardSelection), after=GuidedEngine.missing(game.racks[0],row().groups).length;
        discardSelection=null;hintIndices=[];incomingIndices=[];
        feedback=`Discarded ${tileDisplay(code)}. Back to 13 tiles.${independent?'':after>before?' That tile helped this row; you now need another copy or an eligible joker.':' You kept the tiles helping your row.'}`;
      }
      if(action==='draw'){
        const code=GuidedEngine.draw(game);discardSelection=null;hintIndices=[];incomingIndices=code?[game.racks[0].length-1]:[];
        feedback=code?`Drew ${tileDisplay(code)}. ${code==='1B'?'Bird Bam! Optional toast: any drink, or skip it. ':''}The new tile is marked. Select one tile, then confirm its discard, or declare mahjong if all 14 match.`:'The wall is empty. No winner this hand.';
      }
      if(action==='win')feedback=GuidedEngine.win(game)?'✓ Mahjong! All 14 places are filled legally.':'Not yet. Check suits, quantities, flowers, and joker places. Keep your 14 tiles until you choose a discard.';
      if(action==='newHand'){discardSelection=null;game=GuidedEngine.create(row(),independent);game.phase='done';hintIndices=[];incomingIndices=[];feedback='Fresh 13-tile hand. This is a separate turn exercise.';}
      if(action==='independent'){independent=true;game=GuidedEngine.create(row(),true);game.phase='done';go(6);return;}
      if(action==='restart'){document.querySelector('#restartConfirm').hidden=false;setView('settings');return;}
      render();
      if(action==='discard')focus('[data-go="draw"]');
      if(action==='draw')focus('.rack-feedback');
      if(action==='pass')focus('#journeyTitle');
    }catch(error){feedback=error.message;render();}
  });
  document.querySelector('#restartLearning').addEventListener('click',()=>{document.querySelector('#restartConfirm').hidden=false;focus('#confirmRestartLearning');});
  document.querySelector('#cancelRestartLearning').addEventListener('click',()=>{document.querySelector('#restartConfirm').hidden=true;focus('#restartLearning');});
  document.querySelector('#confirmRestartLearning').addEventListener('click',()=>{restart();setView('journey');focus('#journeyTitle');});
  restore();
  render();
})();
