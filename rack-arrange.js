/* Rack order is presentation only; preserve selections by tile position. */
(() => {
  const modes=new Map();
  function remap(index,from,to){
    if(index===null)return null;
    if(index===from)return to;
    if(from<to&&index>from&&index<=to)return index-1;
    if(to<from&&index>=to&&index<from)return index+1;
    return index;
  }
  function move(rack,from,to){
    if(!Number.isInteger(from)||!Number.isInteger(to)||from<0||to<0||from>=rack.length||to>=rack.length)return false;
    rack.splice(to,0,rack.splice(from,1)[0]);return true;
  }
  function mount(element,key,onMove,redraw){
    if(!element)return;
    element.parentElement.querySelector(`[data-arrange-toolbar="${key}"]`)?.remove();
    const state=modes.get(key)||{active:false,index:null};modes.set(key,state);
    const tiles=[...element.querySelectorAll('button.hand-tile')];
    if(state.index>=tiles.length)state.index=null;
    const toolbar=document.createElement('div');toolbar.className='rack-arrange';toolbar.dataset.arrangeToolbar=key;
    const toggle=document.createElement('button');toggle.type='button';toggle.className='secondary-button';toggle.textContent=state.active?'Done arranging':'Rearrange tiles';toggle.setAttribute('aria-pressed',String(state.active));
    toggle.onclick=()=>{state.active=!state.active;state.index=null;redraw();document.querySelector(`[data-arrange-toolbar="${key}"] button`)?.focus();};toolbar.append(toggle);
    if(state.active){
      const note=document.createElement('span');note.textContent='Choose a tile, then move it left or right. Tile taps only choose a position here.';toolbar.append(note);
      for(const [label,delta] of [['Move left',-1],['Move right',1]]){
        const button=document.createElement('button');button.type='button';button.className='secondary-button';button.textContent=label;
        button.disabled=state.index===null||state.index+delta<0||state.index+delta>=tiles.length;
        button.onclick=()=>{const from=state.index,to=from+delta;state.index=to;onMove(from,to);redraw();document.querySelector(`[data-arrange-toolbar="${key}"]`)?.previousElementSibling?.querySelectorAll('button.hand-tile')[to]?.focus();};toolbar.append(button);
      }
      tiles.forEach((tile,index)=>{
        tile.disabled=false;tile.classList.toggle('arrange-selected',state.index===index);
        tile.setAttribute('aria-pressed',String(state.index===index));tile.setAttribute('aria-label',`Arrange tile ${index+1}: ${tile.getAttribute('aria-label')}`);
        tile.addEventListener('click',event=>{event.stopImmediatePropagation();state.index=index;redraw();document.querySelector(`[data-arrange-toolbar="${key}"]`)?.previousElementSibling?.querySelectorAll('button.hand-tile')[index]?.focus();});
      });
    }
    element.after(toolbar);
  }
  window.RackArrange={mount,move,remap};
})();
