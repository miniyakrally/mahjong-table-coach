/* Pure four-seat exchange model: seat 0 is the learner; seat 3 is East. */
const Charleston = (() => {
  const directions = [1, 2, 3, 3, 2, 1];
  function newGame(random = Math.random) {
    const deck = [];
    for (const suit of ['C', 'B', 'D']) for (let n = 1; n <= 9; n++) deck.push(...Array(4).fill(`${n}${suit}`));
    for (const code of ['E','S','W','N','RD','GD','Soap']) deck.push(...Array(4).fill(code));
    deck.push(...Array(8).fill('F'), ...Array(8).fill('J'));
    for (let i = deck.length - 1; i > 0; i--) { const j = Math.floor(random() * (i + 1)); [deck[i],deck[j]] = [deck[j],deck[i]]; }
    return { racks: [deck.splice(0,13),deck.splice(0,13),deck.splice(0,13),deck.splice(0,14)], wall: deck, step: 0, phase: 'passing', courtesy: 0 };
  }
  function exchange(game, selected, blind = 0) {
    const courtesy = game.phase === 'courtesy';
    if (!courtesy && game.phase !== 'passing') throw Error('Choose the next stage first.');
    const count = courtesy ? game.courtesy : 3;
    if (!Number.isInteger(blind) || blind < 0 || blind > 3 || (blind && (courtesy || ![2,5].includes(game.step)))) throw Error('Blind passing is only available on first left and second right.');
    if (new Set(selected).size !== selected.length || selected.length + blind !== count) throw Error(`Select ${count - blind} rack tiles for this pass.`);
    if (selected.some(i => !Number.isInteger(i) || i < 0 || i >= game.racks[0].length || game.racks[0][i] === 'J')) throw Error('Jokers stay in your rack.');
    const offset = courtesy ? 2 : directions[game.step];
    const picks = game.racks.map((rack,seat) => seat === 0 ? selected : rack.map((c,i) => c === 'J' ? -1 : i).filter(i => i >= 0).slice(0,count));
    const outgoing = picks.map((indices, seat) => indices.map(i => game.racks[seat][i]));
    const from = (4 - offset) % 4;
    if (blind) outgoing[0].push(...outgoing[from].slice(0,blind));
    const incoming = game.racks.map((_,seat) => outgoing[(seat - offset + 4) % 4].slice(seat === 0 ? blind : 0));
    game.racks = game.racks.map((rack,seat) => rack.filter((_,i) => !picks[seat].includes(i)).concat(incoming[seat]));
    if (courtesy) game.phase = 'done';
    else { game.step++; if (game.step === 3) game.phase = 'second'; if (game.step === 6) game.phase = 'courtesyChoice'; }
    return incoming[0];
  }
  return { newGame, exchange };
})();
if (typeof module !== 'undefined') module.exports = Charleston;
