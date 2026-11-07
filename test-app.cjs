// Exercise app initialization and interaction handlers with a minimal document stub.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync('index.html','utf8');
const elements=new Map([...html.matchAll(/id="([^"]+)"/g)].map(([,id])=>[id,{value:id==='blindCount'||id==='courtesyCount'?'0':id==='friendCount'?'4':'',style:{},classList:{toggle(){}},listeners:{},addEventListener(e,f){this.listeners[e]=f;},removeAttribute(){},setAttribute(){}}]));
const savedProgress=new Map();
const context=vm.createContext({document:{querySelector(s){if(s.startsWith('[data-'))return {focus(){}};assert.ok(elements.has(s.slice(1)),`Missing element ${s}`);return elements.get(s.slice(1));},querySelectorAll(){return[];}},localStorage:{getItem(k){return savedProgress.get(k)||null},setItem(k,v){savedProgress.set(k,v)},removeItem(k){savedProgress.delete(k)}},window:{},console});
vm.runInContext(fs.readFileSync('tile-art.js','utf8')+'\n'+fs.readFileSync('curriculum.js','utf8')+'\n'+fs.readFileSync('charleston.js','utf8')+'\n'+fs.readFileSync('teaching-visuals.js','utf8')+'\n'+fs.readFileSync('practice-engine.js','utf8')+'\n'+fs.readFileSync('app.js','utf8'),context);
const run=s=>vm.runInContext(s,context);
const click=id=>elements.get(id).listeners.click({target:{closest:s=>s==='#drawPracticeTile'?{}:null}});
assert.match(elements.get('lessonTitle').textContent,/Start here/);
assert.equal(run('state.hand.length'),13);
click('tileBank');assert.equal(run('state.hand.length'),14);
run(`document.querySelector('#practiceHand').listeners.click({target:{closest:()=>({dataset:{index:'13'}})}})`);
assert.equal(run('state.hand.length'),13);
click('tileBank');
run(`document.querySelector('#tileBank').listeners.click({target:{closest:s=>s==='#declarePracticeWin'?{}:null}})`);
assert.equal(run('turnComplete'),true);
for(let n=0;n<3;n++)run(`selectedPass=passingGame.racks[0].map((c,i)=>c==='J'?-1:i).filter(i=>i>=0).slice(0,3);document.querySelector('#confirmPass').listeners.click()`);
assert.equal(run('passingGame.phase'),'second');
click('stopSecond');click('agreeCourtesy');assert.equal(run('passingGame.phase'),'done');
click('resetProgress');assert.equal(run('passingGame.phase'),'passing');assert.equal(run('state.hand.length'),13);
console.log('Passed: app initialization, draw/discard/win drill, first Charleston, stop second, skip courtesy, reset.');

assert.equal(run('lessons.length'),22);
assert.equal(elements.get('lessonTotal').textContent,'22');
for(let i=0;i<22;i++) {
  run(`state.lesson=${i};renderLesson()`);
  assert.equal(elements.get('lessonNumber').textContent,String(i+1));
}
assert.equal(elements.get('readinessScore').textContent,'22 / 22');
console.log('Passed: all twenty-two lessons render with the correct lesson count.');

// Every lesson has a valid example and a usable check with explanatory feedback.
for(let i=0;i<run('lessons.length');i++) {
  assert.equal(run(`lessons[${i}].answers.includes(lessons[${i}].correct)`),true);
  assert.ok(run(`lessons[${i}].why.length`) > 20);
  assert.equal(run(`lessons[${i}].tiles.every(code=>!!getTile(code))`),true);
}
for(let i=0;i<3;i++) {
  run(`practiceIndex=${i};dealPracticeHand();renderPracticeCard()`);
  assert.equal(run('turnTarget.length'),14);
  assert.equal(run('comparePattern(turnTarget).complete'),true);
  assert.equal(run('comparePattern(turnTarget.slice(0,13)).complete'),false);
  run(`state.hand=[...turnTarget];state.hand[0]='J'`);
  assert.equal(run('comparePattern(state.hand).complete'),i!==2,'Jokers allowed in large groups but never pairs');
}
run('practiceIndex=0;dealPracticeHand()');
assert.equal(run(`comparePattern([...turnTarget.slice(0,13),'9B']).complete`),false);
assert.equal(run('coachTiles.every(tile=>tileArt(tile.code).includes("<svg"))'),true);
console.log('Passed: lesson checks, valid tile examples, three 14-tile practice patterns, missing tiles, wrong tiles, legal/illegal joker substitution.');

// Check the teaching dependencies Caroline flagged and the new decision quiz.
assert.equal(run(`lessons.slice(0,9).some(l=>/joker/i.test([l.title,l.body,l.caption,l.question,l.why,...l.bullets,...l.answers].join(' ')))`),false,'No joker references before their introduction');
assert.equal(run(`lessons[7].bullets.some(b=>/pattern|Charleston/.test(b))`),false,'Flowers do not assume untaught card or passing concepts');
assert.equal(run(`lessons.some(l=>l.title==='A friendly first game')`),false);
assert.equal(run(`lessons.some(l=>/chow/.test(JSON.stringify(l)))`),false,'Do not introduce another variant’s terminology');
assert.ok(run(`printedPattern(practiceCard[0]).includes('222') && printedPattern(practiceCard[0]).includes('4444')`));
assert.equal(run(`quizQuestions.length`),10);
for(let i=0;i<10;i++) {
  assert.equal(run(`quizQuestions[${i}].answers.includes(quizQuestions[${i}].correct)`),true);
  run(`state.quiz=${i};renderQuiz()`);
}
for (const mode of ['rol','lor']) for(let i=0;i<3;i++) assert.ok(run(`passingDiagram('${mode}',${i}).includes('Pass ${i+1}:')`));
for(let i=0;i<4;i++) assert.ok(run(`tableDiagram('deal',${i}).includes('East')`));
run(`state.lesson=0;state.quiz=0;renderLesson();renderQuiz()`);
console.log('Passed: no premature jargon, old wrap-up removed, printed notation, all scenario quiz views, both Charleston diagram sequences, four deal stages.');

// Run the new journey through its actual delegated event handler, including all card rows.
elements.set('journeyTitle',{focus(){},scrollIntoView(){}});
vm.runInContext(fs.readFileSync('learning-progress.js','utf8')+'\n'+fs.readFileSync('guided-hand.js','utf8'),context);
const journey=elements.get('journey');
const jclick=dataset=>journey.listeners.click({target:{closest:()=>({dataset,disabled:false})}});
assert.match(journey.innerHTML,/Three numbered suits/);
assert.doesNotMatch(journey.innerHTML,/Four winds/);
// Wrong choices remain retryable and do not become first-attempt successes.
jclick({activityIndex:'0'});jclick({go:'checkActivity'});assert.match(journey.innerHTML,/Try again/);
jclick({activityIndex:'0'});
for(const index of [1,1,2,0,1]){
 jclick({activityIndex:String(index)});jclick({go:'checkActivity'});assert.match(journey.innerHTML,/✓ Correct/);jclick({go:'next'});
}
assert.match(journey.innerHTML,/Read a card row/);
for(const indices of [[2],[2],[0,2,3]]){
 indices.forEach(i=>jclick({activityIndex:String(i)}));jclick({go:'checkActivity'});assert.match(journey.innerHTML,/✓ Correct/);jclick({go:'next'});
}
jclick({answer:'0'});jclick({go:'next'});
assert.match(journey.innerHTML,/Pass 1: right/);
const getSaved=()=>JSON.parse(savedProgress.get('mahjongTableCoach.journey.v2'));
assert.equal(getSaved().results.find(([k])=>k==='tiles0')[1],false);
// A reload retains the exact rack and selection, then offers an explicit continuation.
jclick({rack:'8'});
const rackBefore=JSON.stringify(getSaved().game.racks);
vm.runInContext(fs.readFileSync('guided-hand.js','utf8'),context);
assert.match(journey.innerHTML,/Continue learning/);
assert.equal(JSON.stringify(getSaved().game.racks),rackBefore);
assert.deepEqual(getSaved().selection,[8]);
jclick({go:'resume'});jclick({rack:'8'});
function passJourney(){
 const buttons=[...journey.innerHTML.matchAll(/<button[^>]*data-rack="(\d+)"[^>]*>/g)].filter(m=>!m[0].includes('disabled'));
 buttons.slice(0,3).forEach(m=>jclick({rack:m[1]}));jclick({go:'pass'});
}
for(let i=0;i<3;i++)passJourney();
assert.match(journey.innerHTML,/First Charleston complete/);jclick({go:'second'});
for(let i=0;i<3;i++)passJourney();
assert.match(journey.innerHTML,/One optional exchange/);
elements.set('journeyCourtesy',{value:'0'});jclick({go:'courtesy'});jclick({go:'next'});
assert.match(journey.innerHTML,/13 tiles/);jclick({go:'draw'});assert.equal(getSaved().game.racks[0].length,14);
const drawnBefore=JSON.stringify(getSaved().game);
vm.runInContext(fs.readFileSync('guided-hand.js','utf8'),context);
assert.equal(JSON.stringify(getSaved().game),drawnBefore);
jclick({go:'resume'});jclick({go:'skip'});
for(const choice of [0,1,2,1,1,0]){jclick({answer:String(choice)});jclick({go:'next'});}
for(const [i,choice] of [1,0,1,1,2,0].entries()){
 assert.match(journey.innerHTML,new RegExp(`New row ${i+1} of 6`));jclick({answer:String(choice)});jclick({go:'next'});
}
assert.match(journey.innerHTML,/Your practice recap/);assert.match(journey.innerHTML,/6 of 6/);
jclick({go:'independent'});assert.match(journey.innerHTML,/The wall is shuffled/);
// Invalid or old progress never restores an impossible hand.
const valid=getSaved();assert.equal(run('LearningProgress.validate(JSON.parse(localStorage.getItem(LearningProgress.key))) !== null'),true);
valid.game.wall.push('6D');savedProgress.set('mahjongTableCoach.journey.v2',JSON.stringify(valid));
vm.runInContext(fs.readFileSync('guided-hand.js','utf8'),context);
assert.match(journey.innerHTML,/Three numbered suits/);
assert.equal(getSaved().step,0);
assert.equal((html.match(/class="nav-button/g)||[]).length,3);
console.log('Passed: short tile activities, retry scoring, exposure assembly, saved rack/selection/drawn turn, resume, six passes, six call decisions, six new rows, independent play, invalid-save recovery, and three-part navigation.');
// Restart is explicit and scoped to learning; local photo/label preferences survive.
savedProgress.set('mahjongTableCoach.labels','keep-labels');
savedProgress.set('mahjongTableCoach.photo','keep-photo');
elements.get('restartLearning').listeners.click();assert.equal(elements.get('restartConfirm').hidden,false);
elements.get('cancelRestartLearning').listeners.click();assert.equal(elements.get('restartConfirm').hidden,true);
elements.get('confirmRestartLearning').listeners.click();assert.equal(getSaved().step,0);
assert.equal(savedProgress.get('mahjongTableCoach.labels'),'keep-labels');assert.equal(savedProgress.get('mahjongTableCoach.photo'),'keep-photo');
// Browsers with denied storage still allow the lesson to run and disclose the limit.
context.localStorage.setItem=()=>{throw Error('Storage denied');};
vm.runInContext(fs.readFileSync('guided-hand.js','utf8'),context);
assert.match(journey.innerHTML,/could not save your progress/);
console.log('Passed: explicit restart/cancel, preserved photo and labels, and usable storage-denied fallback.');
