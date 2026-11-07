/* Shared navigation and optional help; gameplay stays in the existing engines. */
(() => {
 const dialog=document.querySelector('#coachDialog');let previousFocus;
 const open=(title,html)=>{previousFocus=document.activeElement;document.querySelector('#coachDialogTitle').textContent=title;document.querySelector('#coachDialogBody').innerHTML=html;if(!dialog.open)dialog.showModal();document.body.classList.add('dialog-open');document.querySelector('#closeCoachDialog').focus();};
 document.querySelector('#closeCoachDialog').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');(previousFocus?.isConnected?previousFocus:document.querySelector('#viewTitle'))?.focus({preventScroll:true});});
 dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();});
 dialog.addEventListener('keydown',event=>{if(event.key!=='Tab')return;const controls=[...dialog.querySelectorAll('button:not([disabled]),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]')].filter(el=>el.tabIndex>=0&&el.getClientRects().length);const first=controls[0],last=controls.at(-1);if(!first)return;if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}});
 document.addEventListener('click',event=>{if(event.target.closest('[data-help-pattern]'))open('Your practice row',patternMarkup(currentPattern()));});
 window.CoachDialog={open};
 const stageNames=['Meet the tiles','Read the card','Place a joker','Hidden or exposed?','Meet the table','Pass in the Charleston','Draw and discard','Calls and exchanges','Read a new row','Your next game'];
 const home=document.querySelector('#learn-home');
 function learningHome(){
  let saved;try{saved=LearningProgress.read(localStorage);}catch{}
  const stage=saved?.step||0, started=Boolean(saved&&(stage>0||saved.introIndex>0||saved.results.length));
  home.innerHTML=`<div class="learn-shell"><p class="learn-intro">The card lists the hands you can make. Start with the tiles, then learn to read a hand and take your turn.</p><div class="learning-current"><div><p class="crumb">${started?'YOUR NEXT LESSON':'START HERE'}</p><h2>${stage===0&&started?['Three numbered suits','Four winds','Three dragons','Flowers count alike','Meet the joker'][saved.introIndex]:stageNames[stage]}</h2><button class="primary-button" data-open-view="journey">${started?'Continue learning':'Start learning'} →</button></div><div class="mini-tiles">${['3C','3B','3D'].map(c=>`<span class="face" role="img" aria-label="${escapeHtml(tileDisplay(c))}">${tileButtonMarkup(c)}</span>`).join('')}</div></div><div class="lesson-list">${stageNames.map((name,i)=>`<button class="lesson-item" data-open-view="journey" data-lesson-stage="${i}"><small>${String(i+1).padStart(2,'0')}</small><strong>${name}${i===0?'<small class="lesson-topics">Craks, Bams, Dots · winds · dragons · flowers · jokers</small>':''}</strong><span aria-hidden="true">→</span></button>`).join('')}</div><button class="text-button" data-open-view="lesson">All illustrated lessons →</button></div>`;
 }
 window.CoachUI={viewChanged(view){if(view==='learn-home')learningHome();}};
 document.querySelector('#welcomeTiles').innerHTML=['2C','4B','6D','F','1B','J'].map(c=>`<span class="face" role="img" aria-label="${escapeHtml(tileDisplay(c))}">${tileButtonMarkup(c)}</span>`).join('');
})();
