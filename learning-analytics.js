/* Explicit milestone events only. No SDK, autocapture, replay, answers or tile data. */
(() => {
  const config=window.MAHJONG_ANALYTICS||{};
  const hosts=['mahjong.bookblendapp.com','mahjong-table-coach.onrender.com'];
  const endpoints=['https://us.i.posthog.com','https://eu.i.posthog.com'];
  const allowed=new Set(['visit','stage_reached','activity_completed','practice_turn_completed']);
  let session=null;
  function capture(event,values={}) {
    try {
      if(!config.token||!hosts.includes(location.hostname)||!endpoints.includes(config.host)||navigator.doNotTrack==='1'||navigator.globalPrivacyControl||localStorage.getItem('mahjong-analytics-off')==='1'||!allowed.has(event))return;
      const now=Date.now();
      if(!session)session=JSON.parse(sessionStorage.getItem('mahjong-analytics-session')||'null');
      if(!session||now-session.at>1800000)session={id:crypto.randomUUID(),at:now,seen:[]};
      const properties={$process_person_profile:false,$geoip_disable:true,$ip:null};
      if(Number.isInteger(values.stage)&&values.stage>=0&&values.stage<=9)properties.stage=values.stage;
      if(Number.isInteger(values.unit)&&values.unit>=0&&values.unit<=5)properties.unit=values.unit;
      if(['guided','independent'].includes(values.mode))properties.mode=values.mode;
      const key=event+JSON.stringify(properties);
      session.at=now;
      if(session.seen.includes(key)){sessionStorage.setItem('mahjong-analytics-session',JSON.stringify(session));return;}
      session.seen.push(key);session.at=now;
      sessionStorage.setItem('mahjong-analytics-session',JSON.stringify(session));
      fetch(config.host+'/i/v0/e/',{method:'POST',credentials:'omit',referrerPolicy:'no-referrer',keepalive:true,headers:{'Content-Type':'application/json'},body:JSON.stringify({api_key:config.token,event,distinct_id:session.id,properties})}).catch(()=>{});
    } catch (_) { /* Analytics must never interrupt a lesson. */ }
  }
  window.LearningAnalytics={capture};
  capture('visit');
  const notice=document.querySelector('#analyticsNotice');
  try { if(notice&&config.token){notice.hidden=false;const control=document.querySelector('#analyticsOptOut');control.checked=localStorage.getItem('mahjong-analytics-off')==='1';control.addEventListener('change',()=>{try{localStorage.setItem('mahjong-analytics-off',control.checked?'1':'0');}catch(_){}});}} catch (_) {}
})();
