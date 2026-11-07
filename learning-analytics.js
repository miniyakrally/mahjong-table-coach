/* First-party milestones only: no answers, racks, photos, identities or URLs. */
(() => {
 const config=window.MAHJONG_ANALYTICS||{};
 const hosts=['mahjong.bookblendapp.com','mahjong-table-coach.onrender.com'];
 const endpoint='https://bookblendapp.com/api/mahjong/event';
 const allowed=new Set(['visit','stage_reached','activity_completed','practice_turn_completed','decision_attempt','practice_started']);
 let session=null;
 function capture(event,values={}){
  try{
   if(config.endpoint!==endpoint||!hosts.includes(location.hostname)||navigator.doNotTrack==='1'||navigator.globalPrivacyControl||localStorage.getItem('mahjong-analytics-off')==='1'||!allowed.has(event))return;
   const now=Date.now();
   if(!session)session=JSON.parse(sessionStorage.getItem('mahjong-analytics-session')||'null');
   if(!session||now-session.at>1800000)session={id:crypto.randomUUID(),at:now,seen:[],attempts:{}};
   const properties={};
   if(Number.isInteger(values.stage)&&values.stage>=0&&values.stage<=9)properties.stage=values.stage;
   if(Number.isInteger(values.unit)&&values.unit>=0&&values.unit<=31)properties.unit=values.unit;
   if(['guided','independent','table','decision'].includes(values.mode))properties.mode=values.mode;
   if(['correct','retry'].includes(values.outcome))properties.outcome=values.outcome;
   const activityKey=[properties.stage,properties.unit,properties.mode].join(':');
   if(event==='decision_attempt'){
    session.attempts=session.attempts||{};
    const attempt=(session.attempts[activityKey]||0)+1;if(attempt>10)return;
    session.attempts[activityKey]=attempt;properties.attempt=attempt;
   }
   const key=event+JSON.stringify(properties);session.at=now;
   if(session.seen.includes(key)){sessionStorage.setItem('mahjong-analytics-session',JSON.stringify(session));return;}
   if(session.seen.length>=300)return;
   session.seen.push(key);sessionStorage.setItem('mahjong-analytics-session',JSON.stringify(session));
   fetch(endpoint,{method:'POST',credentials:'omit',referrerPolicy:'no-referrer',keepalive:true,headers:{'Content-Type':'application/json'},body:JSON.stringify({event_id:crypto.randomUUID(),event,session_id:session.id,properties})}).catch(()=>{});
  }catch(_){/* Unavailable telemetry must never block learning. */}
 }
 window.LearningAnalytics={capture};capture('visit');
 try{const notice=document.querySelector('#analyticsNotice');if(notice&&config.endpoint===endpoint){notice.hidden=false;const control=document.querySelector('#analyticsOptOut');control.checked=localStorage.getItem('mahjong-analytics-off')==='1';control.addEventListener('change',()=>{try{localStorage.setItem('mahjong-analytics-off',control.checked?'1':'0');}catch(_){}});}}catch(_){}
})();
