// Original vector tile faces. Labels remain visible; artwork is decorative.
function tileArt(code) {
  const colors = {red:'#a32e2b', green:'#17664b', blue:'#214f7c'};
  let art = '';
  const match = /^([1-9])([CBD])$/.exec(code);
  const text = (value,y,color,size=27) => `<text x="30" y="${y}" text-anchor="middle" fill="${color}" font-family="serif" font-size="${size}">${value}</text>`;
  if (match) {
    const n=Number(match[1]), suit=match[2];
    art += `<text x="5" y="12" fill="#18211f" font-family="sans-serif" font-size="11">${n}</text>`;
    if (suit === 'C') art += text(['一','二','三','四','五','六','七','八','九'][n-1],35,'#18211f') + text('萬',66,colors.red,30);
    else if (suit === 'B' && n === 1) art += '<path d="M16 53 Q9 31 28 25 Q40 16 45 32 L53 35 L44 39 Q47 56 29 60 L17 71 L21 54 Z" fill="#17664b"/><path d="M22 43 Q30 30 39 42 Q34 55 23 52" fill="#e5bb4d"/><circle cx="39" cy="30" r="2" fill="white"/><path d="M23 60 L24 69 M31 59 L33 69" stroke="#a32e2b" stroke-width="2"/>';
    else {
      const positions = n===1?[[30,43]]:n===2?[[30,27],[30,58]]:n===3?[[17,23],[30,43],[43,63]]:n===4?[[17,26],[43,26],[17,60],[43,60]]:Array.from({length:n},(_,i)=>[16+(i%3)*14,24+Math.floor(i/3)*20]);
      positions.forEach(([x,y],i)=>{
        const color=suit==='B'?(i===4?colors.red:colors.green):[colors.blue,colors.green,colors.red][i%3];
        art += suit==='D'?`<circle cx="${x}" cy="${y}" r="${n===1?15:5}" fill="none" stroke="${color}" stroke-width="2.8"/><circle cx="${x}" cy="${y}" r="1.5" fill="${color}"/>`:`<path d="M${x} ${y-6}v12m-3-9h6m-6 6h6" stroke="${color}" stroke-width="3" stroke-linecap="round"/>`;
      });
    }
  } else if (['E','S','W','N'].includes(code)) art = text({E:'東',S:'南',W:'西',N:'北'}[code],53,'#18211f',38);
  else if (code==='RD' || code==='GD') art=text(code==='RD'?'中':'發',55,code==='RD'?colors.red:colors.green,42);
  else if (code==='Soap') art='<rect x="12" y="18" width="36" height="47" rx="3" fill="none" stroke="#214f7c" stroke-width="4"/><rect x="18" y="24" width="24" height="35" rx="1" fill="none" stroke="#214f7c"/>';
  else if (code==='F') art='<path d="M30 69V35 M30 58Q14 57 17 47Q29 47 30 58 M30 64Q46 64 44 51Q32 52 30 64" fill="#17664b" stroke="#17664b" stroke-width="2"/>' + [0,60,120,180,240,300].map(angle=>`<ellipse cx="30" cy="24" rx="6" ry="11" fill="#a32e2b" transform="rotate(${angle} 30 34)"/>`).join('')+'<circle cx="30" cy="34" r="6" fill="#c58b22"/>';
  else if (code==='J') art='<path d="M30 15L35 31L51 31L38 41L43 58L30 48L17 58L22 41L9 31L25 31Z" fill="#17664b"/>'+text('JOKER',74,colors.red,12);
  return `<svg class="tile-art" viewBox="0 0 60 84" aria-hidden="true" focusable="false">${art}</svg>`;
}
