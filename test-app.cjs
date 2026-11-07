// Exercise app initialization and interaction handlers with a minimal document stub.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync('index.html','utf8');
const elements=new Map([...html.matchAll(/id="([^"]+)"/g)].map(([,id])=>[id,{value:id==='blindCount'||id==='courtesyCount'?'0':id==='friendCount'?'4':'',style:{},classList:{toggle(){}},listeners:{},addEventListener(e,f){this.listeners[e]=f;},removeAttribute(){},setAttribute(){}}]));
const context=vm.createContext({document:{querySelector(s){assert.ok(elements.has(s.slice(1)),`Missing element ${s}`);return elements.get(s.slice(1));},querySelectorAll(){return[];}},localStorage:{getItem(){return null},setItem(){},removeItem(){}},window:{},console});
vm.runInContext(fs.readFileSync('tile-art.js','utf8')+'\n'+fs.readFileSync('curriculum.js','utf8')+'\n'+fs.readFileSync('charleston.js','utf8')+'\n'+fs.readFileSync('teaching-visuals.js','utf8')+'\n'+fs.readFileSync('app.js','utf8'),context);
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
