
const callScenarios = [
  {
    "text": "You chose an X pattern that needs three Red Dragons. You have two, and someone discards the third. What can you do?",
    "options": [
      "Call and expose the pung",
      "Draw, then call",
      "Keep the discard hidden"
    ],
    "answer": "Call and expose the pung",
    "feedback": "Call the latest discard, expose the full matching group, then discard. Do not draw as well."
  },
  {
    "text": "You hold 3 and 4 Craks. Someone discards 2 Crak. These three tiles would not finish your hand. May you call them as a group?",
    "options": [
      "No: these are not identical tiles",
      "Only from the left",
      "Yes, from anyone"
    ],
    "answer": "No: these are not identical tiles",
    "feedback": "To call an intermediate group, the discard must complete a matching group allowed by an X row. A sequence of different numbers is not that group."
  },
  {
    "text": "Your hand is marked C (concealed). A discard would complete a kong (four matching tiles), but not your whole hand. Can you call?",
    "options": [
      "No, stay concealed",
      "Yes, expose the kong"
    ],
    "answer": "No, stay concealed",
    "feedback": "A concealed hand may call only its final tile for mahjong."
  },
  {
    "text": "A discard completes the final pair and your entire card hand. Can you call mahjong?",
    "options": [
      "Yes, reveal and verify",
      "No pair calls ever"
    ],
    "answer": "Yes, reveal and verify",
    "feedback": "The winning tile may complete a single or pair. Reveal all 14 tiles and check them against the complete pattern."
  }
];

const quizQuestions = [
  {
    "question": "Your 13-tile rack has only three 6 Dots and two flowers for this row, plus an unwanted 9 Bam. You draw a fourth 6 Dot. What next?",
    "answers": [
      "Discard 9 Bam; you still need one flower on a later turn.",
      "Discard a flower because the numbers are complete.",
      "Discard the new 6 Dot because you must always discard your draw."
    ],
    "correct": "Discard 9 Bam; you still need one flower on a later turn.",
    "feedback": "With a 13-tile starting rack containing an unwanted 9 Bam, drawing the fourth 6 Dot gives 14 tiles but still leaves the unwanted tile. Discarding it returns you to 13; you cannot both discard and declare a 14-tile win. Count the whole hand, not just the 6 Dots.",
    "tiles": [
      "6D",
      "6D",
      "6D",
      "9B",
      "6D"
    ],
    "visual": "quiz-count"
  },
  {
    "question": "You need a pung of 6 Dots for an X hand. You have one 6 Dot and a joker. A 6 Dot is discarded. Can you call it?",
    "answers": [
      "Yes: your tile, the discard, and the joker complete the pung.",
      "Only if this is the final group needed for mahjong.",
      "No: you must hold two real 6 Dots before calling."
    ],
    "correct": "Yes: your tile, the discard, and the joker complete the pung.",
    "feedback": "The completed group has three places. Your 6 Dot, your joker, and the discarded 6 Dot fill all three. Show the completed pung, then discard; do not also draw.",
    "tiles": [
      "6D",
      "J",
      "6D"
    ],
    "visual": null
  },
  {
    "question": "Your hand is marked C. You have three Norths and need a kong of Norths, but two other groups are unfinished. North is discarded. What do you do?",
    "answers": [
      "Do not call: the whole concealed hand is not finished.",
      "Call North and show only that kong.",
      "Call North and keep the kong hidden."
    ],
    "correct": "Do not call: the whole concealed hand is not finished.",
    "feedback": "A C hand may call only the final tile for mahjong. It cannot claim this discard for an intermediate group, hidden or shown.",
    "tiles": [
      "N",
      "N",
      "N",
      "N"
    ],
    "visual": null
  },
  {
    "question": "This row requires seven pairs. You have the first six pairs and one Soap: 13 tiles. You draw a joker. Can these 14 tiles win?",
    "answers": [
      "Yes: the joker completes the last pair.",
      "No: the last pair still needs a real Soap.",
      "Yes: C hands allow jokers in pairs."
    ],
    "correct": "No: the last pair still needs a real Soap.",
    "feedback": "The row requires pairs only. The joker cannot fill the missing Soap, even as your final tile. Fourteen tiles are not enough unless all seven pairs are valid.",
    "tiles": [],
    "visual": "quiz-pairs"
  },
  {
    "question": "You have just finished ROL. Everyone agrees to continue, and you have passed left once more. Where do the next two passes go?",
    "answers": [
      "Right, then across.",
      "Across, then left.",
      "Across, then right."
    ],
    "correct": "Across, then right.",
    "feedback": "After the first ROL, the second round is LOR. You have completed its L; O and R are next.",
    "tiles": [],
    "visual": null
  },
  {
    "question": "For the courtesy exchange, you want three tiles and the player opposite wants one. How many does each player pass?",
    "answers": [
      "Each passes three tiles.",
      "Each passes the number they asked for.",
      "Each passes one tile."
    ],
    "correct": "Each passes one tile.",
    "feedback": "An exchange must be equal. Use the smaller request: one tile each.",
    "tiles": [],
    "visual": null
  },
  {
    "question": "On the first left pass you want to keep all but one of your rack tiles. How can you still pass three?",
    "answers": [
      "Pass the one rack tile and two incoming tiles without looking at them.",
      "Pass the one rack tile and a joker, then wait for a replacement.",
      "Look at all incoming tiles, then choose two to send on."
    ],
    "correct": "Pass the one rack tile and two incoming tiles without looking at them.",
    "feedback": "First left permits a blind pass. One tile from your rack plus two unseen incoming tiles makes three. Blind means you do not look at the forwarded incoming tiles.",
    "tiles": [],
    "visual": null
  },
  {
    "question": "A needed tile is discarded. The next player lifts a wall tile, looks at it, and places it on the sloped part of their rack. May you now call the earlier discard?",
    "answers": [
      "Yes, if you say “mahjong” rather than calling a group.",
      "No: racking the drawn tile closed the previous discard.",
      "Yes, because the next discard has not happened yet."
    ],
    "correct": "No: racking the drawn tile closed the previous discard.",
    "feedback": "The cutoff has already happened. You needed to call before the next player racked the tile. Mahjong priority does not reopen an expired discard.",
    "tiles": [],
    "visual": null
  },
  {
    "question": "On your turn, after drawing, you hold 6 Dot. Another player has 6 Dot, 6 Dot, joker exposed. What is the right way to exchange?",
    "answers": [
      "Discard your 6 Dot and ask them to replace their joker with it.",
      "Offer your 6 Dot and ask the owner to swap their joker; then finish your turn.",
      "Move your 6 Dot into their rack and take their joker yourself."
    ],
    "correct": "Offer your 6 Dot and ask the owner to swap their joker; then finish your turn.",
    "feedback": "You have the natural replacement tile and it is your turn. Let the owner handle their exposure. The exchange does not replace your normal discard.",
    "tiles": [
      "6D",
      "6D",
      "J",
      "6D"
    ],
    "visual": null
  },
  {
    "question": "The printed row uses different colors for 222 and 4444. You choose Craks for the 2s. Which choice for the 4s follows the row?",
    "answers": [
      "Craks too: they are all number tiles.",
      "Bams or Dots: the second color needs a different suit.",
      "Only the suit whose physical tiles match the ink color."
    ],
    "correct": "Bams or Dots: the second color needs a different suit.",
    "feedback": "Different printed colors separate suits. They do not prescribe the physical color of the tiles. Follow any additional suit restrictions in the row’s words.",
    "tiles": [],
    "visual": "card"
  }
];

const annualCardSections = [
  {
    title: "Year",
    shorthand: "2026",
    note: "The year changes with the card. Soap is read as zero in year patterns."
  },
  {
    title: "Like Numbers",
    shorthand: "Any same number",
    note: "Hands built around one repeated number across suits, dragons, or flowers."
  },
  {
    title: "Consecutive Runs",
    shorthand: "Neighbor numbers",
    note: "Patterns using consecutive numbers in specified groups. You cannot call a chow."
  },
  {
    title: "Winds and Dragons",
    shorthand: "NEWS and dragons",
    note: "Honor-heavy hands. Read each grouping exactly as printed."
  },
  {
    title: "Singles and Pairs",
    shorthand: "No jokers",
    note: "Jokers cannot stand in for singles or pairs."
  }
];

const cardPrompts = [
  {
    "question": "In a year pattern, what does 0 mean?",
    "answers": [
      "Soap / White Dragon",
      "Joker",
      "Flower"
    ],
    "correct": "Soap / White Dragon",
    "feedback": "Soap is the White Dragon. It represents zero in a year pattern."
  },
  {
    "question": "A card row shows two different suit colors. How many different suits does it need?",
    "answers": [
      "Two",
      "One",
      "Any number"
    ],
    "correct": "Two",
    "feedback": "Different colors mean different suits. The printed color does not force a particular physical suit."
  },
  {
    "question": "Can you win by finishing parts of two different rows?",
    "answers": [
      "No",
      "Yes"
    ],
    "correct": "No",
    "feedback": "Your 14 tiles must match one complete row, including its written instructions."
  },
  {
    "question": "Does this app contain the full official 2026 NMJL hand list?",
    "answers": [
      "No, it includes original practice hands",
      "Yes"
    ],
    "correct": "No, it includes original practice hands",
    "feedback": "The practice hands are included so you can learn without a separate card. They are not the official 2026 hands."
  }
];

const chineseNumbers = ["一", "二", "三", "四", "五", "六", "七", "八", "九"];

const coachTiles = [
  ...["C", "B", "D"].flatMap((suit) =>
    Array.from({ length: 9 }, (_, index) => {
      const number = index + 1;
      const suitName = suit === "C" ? "Crak" : suit === "B" ? "Bam" : "Dot";
      const chineseNumber = chineseNumbers[index];
      return {
        code: `${number}${suit}`,
        label: `${number} ${suitName}`,
        shorthand: `${number}${suit}`,
        symbol: suit === "C" ? `${chineseNumber}萬` : suit === "B" ? `${chineseNumber}條` : `${chineseNumber}筒`,
        name: `${number} ${suitName}`,
        kind: "suit",
        suit,
        number
      };
    })
  ),
  ...[
    ["E", "East", "東"],
    ["S", "South", "南"],
    ["W", "West", "西"],
    ["N", "North", "北"]
  ].map(([wind, label, symbol]) => ({ code: wind, label, shorthand: wind, symbol, name: `${label} Wind`, kind: "wind" })),
  { code: "RD", label: "Red Dragon", shorthand: "Red", symbol: "中", name: "Red Dragon", kind: "dragon", color: "red" },
  { code: "GD", label: "Green Dragon", shorthand: "Green", symbol: "發", name: "Green Dragon", kind: "dragon", color: "green" },
  { code: "Soap", label: "Soap / White", shorthand: "Soap", symbol: "白", name: "White Dragon / Soap", kind: "dragon", color: "white" },
  { code: "F", label: "Flower", shorthand: "F", symbol: "花", name: "Flower", kind: "flower" },
  { code: "J", label: "Joker", shorthand: "J", symbol: "★", name: "Joker", kind: "joker" }
];

const labelPresets = {
  beginner: Object.fromEntries(coachTiles.map((tile) => [tile.code, tile.label])),
  american: Object.fromEntries(coachTiles.map((tile) => [tile.code, tile.shorthand || tile.label])),
  symbols: Object.fromEntries(coachTiles.map((tile) => [tile.code, tile.symbol || tile.label]))
};

const tileIdentifierRows = [
  { label: "1 Bam", look: "Often a bird", meaning: "Still the 1 tile in the Bam suit." },
  { label: "Soap", look: "Blank, framed, white, or labeled Soap", meaning: "White Dragon, and zero in year hands." },
  { label: "Flower", look: "Many different pictures", meaning: "All function as flowers in American mahjong." },
  { label: "Joker", look: "Decorative wild tile", meaning: "Can stand in only for larger matching groups." },
  { label: "Craks", look: "Characters, numbers, or modern icons", meaning: "One of the three numbered suits." },
  { label: "Dots", look: "Circles, coins, wheels, or objects", meaning: "One of the three numbered suits." }
];

const notationRows = [
  { mark: "F", meaning: "Flower" },
  { mark: "D", meaning: "Dragon; read the row’s instructions for which dragon to use." },
  { mark: "0", meaning: "Soap / White Dragon when reading a year." },
  { mark: "N E W S", meaning: "North, East, West, South winds." },
  { mark: "X", meaning: "Exposed hand. You may call tiles where the rules allow." },
  { mark: "C", meaning: "Concealed hand. Keep tiles hidden during play; call only to finish mahjong." },
  { mark: "Any", meaning: "Choose only what the words allow. “Any one suit” means pick one suit and keep that choice throughout the row." },
  { mark: "Pair", meaning: "Two matching tiles. Jokers cannot be used here." }
];

const ruleDrills = [
  {
    question: "You have two 6 Bams and a joker. Can that complete a pung of 6 Bams?",
    answers: ["Yes", "No", "Only in concealed hands"],
    correct: "Yes",
    feedback: "Yes. A joker can replace a missing tile in a matching group of three or more."
  },
  {
    question: "You need a pair of flowers and have one flower plus a joker. Is that pair legal?",
    answers: ["No", "Yes", "Only for mahjong"],
    correct: "No",
    feedback: "No. Jokers cannot be used in pairs or singles."
  },
  {
    question: "In a 2026 year hand, what does the 0 mean?",
    answers: ["Soap / White Dragon", "Any dragon", "A blank house-rule tile"],
    correct: "Soap / White Dragon",
    feedback: "Correct. The zero in the year is Soap, also called White Dragon."
  },
  {
    question: "Someone discards a tile that completes your concealed hand. Can you call it for mahjong?",
    answers: ["Yes", "No", "Only from the player on your left"],
    correct: "Yes",
    feedback: "Yes. Concealed means you do not expose during play, but you may call the final tile for mahjong."
  },
  {
    question: "Can you call a discard just to complete a pair before mahjong?",
    answers: ["No", "Yes", "Only if it is Soap"],
    correct: "No",
    feedback: "No. In American mahjong, a call must complete a permitted exposure of three or more matching tiles, or finish mahjong."
  }
];

const checklistItems = [
  "Are we using the included practice card, or has everyone brought the same official annual card?",
  "Are blanks or house-rule tiles in play?",
  "Are we playing for points, coins, or just practice?",
  "Will beginners get one table-talk hint per hand?",
  "How strict are we about calling a hand dead?",
  "Are concealed hands being explained before the first round?",
  "Can everyone point to the drawing end and fishtailed tail?",
  "Have we agreed never to touch anyone else’s rack or tiles, and to ask the owner to serve their wall?",
  "Our optional Bird Bam toast happens when 1 Bam is drawn. Any drink counts; joining in is optional."
];

const groupPrompts = [
  "Point to the drawing end and the fishtail without moving anyone else’s wall.",
  "Practice asking for a joker exchange without reaching into another player’s exposure.",
  "Find 1 Bam and explain our optional toast when it is drawn to a new friend.",
  "Everyone name one tile in your hand that could help more than one of our practice patterns.",
  "Before discarding, point to the practice pattern you are trying to finish.",
  "Find one joker rule on the table: where could a joker legally help, and where could it not?",
  "Spot a Soap use: is it a White Dragon here, or zero in a year example?",
  "Choose one discard and show why the selected practice pattern does not need it.",
  "After a call, explain what group it completes and why the pattern allows you to show it."
];

const state = {
  lesson: 0,
  tile: 0,
  knownTiles: 0,
  quiz: 0,
  quizScore: 0,
  call: 0,
  cardPrompt: 0,
  coachHand: [],
  customLabels: {},
  tilePhoto: "",
  ruleDrill: 0,
  groupPrompt: 0,
  hand: []
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const TILE_LABEL_STORAGE_KEY = "mahjongTableCoach.labels";
const TILE_PHOTO_STORAGE_KEY = "mahjongTableCoach.photo";

function loadTileSetPreferences() {
  try {
    state.customLabels = JSON.parse(localStorage.getItem(TILE_LABEL_STORAGE_KEY) || "{}");
    state.tilePhoto = localStorage.getItem(TILE_PHOTO_STORAGE_KEY) || "";
  } catch {
    state.customLabels = {};
    state.tilePhoto = "";
  }
}

function saveTileLabels() {
  localStorage.setItem(TILE_LABEL_STORAGE_KEY, JSON.stringify(state.customLabels));
}

function saveTilePhoto() {
  if (state.tilePhoto) {
    localStorage.setItem(TILE_PHOTO_STORAGE_KEY, state.tilePhoto);
  } else {
    localStorage.removeItem(TILE_PHOTO_STORAGE_KEY);
  }
}

function tileDisplay(code) {
  const tile = getTile(code);
  return state.customLabels[code] || tile?.label || code;
}

function tileSymbol(code) {
  const tile = getTile(code);
  return tile?.symbol || "";
}

function tileButtonMarkup(code) {
  return `
    ${tileArt(code)}
    <span class="tile-label">${escapeHtml(tileDisplay(code))}</span>
  `;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function setView(viewId) {
  const practiceViews = ['practice','charleston','table','quiz','tiles','tools'];
  const referenceViews = ['reference','lesson','card'];
  const section = viewId === 'tiles' && setView.section === 'reference' ? 'reference' : viewId === 'journey' ? 'journey' : practiceViews.includes(viewId) ? 'practice' : referenceViews.includes(viewId) ? 'reference' : 'settings';
  setView.section = section;
  if(viewId !== 'journey') $('#learningAnnouncement').textContent = '';
  $$('.nav-button').forEach(button => {
    button.classList.toggle('active', button.dataset.view === section);
    if (button.dataset.view === section) button.setAttribute('aria-current','page');
    else button.removeAttribute('aria-current');
  });
  $$('.view').forEach(view => view.classList.toggle('active', view.id === viewId));
  $('#viewTitle').textContent = {
    journey:'Learn by playing', practice:'Practice a skill', reference:'Reference', settings:'Settings',
    lesson:'Rules and table etiquette', tiles:'Tile names and suits', table:'Draw and discard',
    quiz:'Rules decisions', card:'Card rows and notation', charleston:'Practice the Charleston', tools:'Compare your hand'
  }[viewId];
  $('#sectionLinks').innerHTML = viewId !== section ? `<button class="text-button" data-open-view="${section}">← All ${section === 'practice' ? 'practice exercises' : 'reference topics'}</button><button class="text-button" data-open-view="journey">Return to learning →</button>` : '';
  const heading = viewId === 'journey' ? $('#journeyTitle') : $('#viewTitle');
  heading.setAttribute?.('tabindex','-1');
  heading.focus?.({preventScroll:true});
  heading.scrollIntoView?.({block:'start'});
}

function updateReadiness() {
  $("#readinessScore").textContent = `${state.lesson + 1} / ${lessons.length}`;
  $("#readinessMeter").style.width = `${(state.lesson + 1) / lessons.length * 100}%`;
  $("#readinessNote").textContent = "Read the basics, then try the Charleston and a practice turn. Go back whenever you need a reminder.";
}

const lessonAnswers = new Map();
function tileRow(codes) {
  return codes.map(code => `<span class="shown-tile" role="img" aria-label="${escapeHtml(getTile(code).name)}">${tileButtonMarkup(code)}</span>`).join('');
}
function patternMarkup(line) {
  return `${printedPattern(line)}<h4>${escapeHtml(line.title)} — shown as tiles</h4><p>${escapeHtml(line.note)}</p><div class="pattern-groups">${line.groups.map(group => `<div class="pattern-group">${tileRow(group)}<span>${group.length === 2 ? 'Pair' : group.length === 3 ? 'Pung' : 'Kong'} of ${escapeHtml(tileDisplay(group[0]))}</span></div>`).join('')}</div>`;
}
function wallMarkup() {
  return `<div class="wall-example" role="img" aria-label="Face-down wall viewed from above. Drawing end on the left, tail turned sideways on the right."><span>Draw here →</span><div class="example-stacks">${Array.from({length:5},()=>'<i></i>').join('')}<i class="tail-stack"></i></div><span>↑ Fishtailed tail</span></div><p>A short section of wall, viewed from above. Each block is a stack of two face-down tiles.</p>`;
}
function renderLesson() {
  const lesson = lessons[state.lesson];
  $("#lessonJump").innerHTML = lessons.map((item,i)=>`<option value="${i}">${i+1}. ${escapeHtml(item.title)}</option>`).join('');
  $("#lessonJump").value = String(state.lesson);
  $("#lessonNumber").textContent = String(state.lesson + 1);
  $("#lessonTotal").textContent = String(lessons.length);
  $("#lessonTitle").textContent = lesson.title;
  $("#lessonBody").textContent = lesson.body;
  $("#lessonBullets").innerHTML = lesson.bullets.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  $("#lessonExample").innerHTML = renderTeachingVisual(lesson);
  $("#lessonCaption").textContent = lesson.caption;
  $("#lessonQuestion").textContent = lesson.question;
  const answer = lessonAnswers.get(state.lesson);
  $("#lessonChoices").innerHTML = lesson.answers.map((choice,i) => `<button class="secondary-button ${answer === choice ? choice === lesson.correct ? 'correct' : 'incorrect' : ''}" type="button" data-lesson-choice="${i}" aria-pressed="${answer === choice}">${escapeHtml(choice)}</button>`).join('');
  $("#lessonFeedback").textContent = answer ? `${answer === lesson.correct ? 'Yes.' : 'Try again.'} ${lesson.why}` : '';
  $("#prevLesson").disabled = state.lesson === 0;
  $("#nextLesson").textContent = state.lesson === lessons.length - 1 ? 'Try a practice turn' : 'Next lesson';
  updateReadiness();
}
function renderFlashcard() {
  const tile = coachTiles[state.tile % coachTiles.length];
  $("#flashTile").innerHTML = tileArt(tile.code);
  $("#flashFamily").textContent = tile.kind === 'suit' ? ({C:'Craks — characters',B:'Bams — bamboo',D:'Dots — circles'})[tile.suit] : ({wind:'Wind',dragon:'Dragon',flower:'Flower',joker:'Joker'})[tile.kind];
  $("#flashName").textContent = tile.name;
  $("#flashHint").textContent = tile.code === '1B' ? 'The bird is 1 Bam. It belongs to the bamboo suit.' : tile.kind === 'suit' ? 'Say the number and the suit together. Same number, different suit means a different tile.' : tile.kind === 'wind' ? 'Match the wind name: North, East, West, or South.' : tile.kind === 'flower' ? 'All eight flowers count alike, even when their pictures differ.' : tile.kind === 'joker' ? 'Use a joker in matching groups of three or more. Never in a single or pair.' : tile.code === 'Soap' ? 'White Dragon is also called Soap. It is zero in a year pattern.' : 'Red Dragon matches Craks; Green Dragon matches Bams; White Dragon matches Dots.';
}
function renderFamilies() {
  const families = [
    ['Craks — characters','One numbered suit. Look for the number above 萬.',coachTiles.filter(t=>t.suit==='C')],
    ['Bams — bamboo','One numbered suit. 1 Bam is usually a bird.',coachTiles.filter(t=>t.suit==='B')],
    ['Dots — circles','One numbered suit. Count the circles.',coachTiles.filter(t=>t.suit==='D')],
    ['Winds','Four separate tiles: North, East, West, South.',coachTiles.filter(t=>t.kind==='wind')],
    ['Dragons','Red, Green, and White (Soap).',coachTiles.filter(t=>t.kind==='dragon')],
    ['Flowers and jokers','Flowers count alike. Jokers fill matching groups of three or more.',coachTiles.filter(t=>['flower','joker'].includes(t.kind))]
  ];
  $("#tileFamilies").innerHTML = families.map(([title,note,tiles])=>`<div class="family"><div><h4>${title}</h4><p>${note}</p></div><div class="example-tiles">${tileRow(tiles.map(t=>t.code))}</div></div>`).join('');
}
let practiceIndex = 0;
function currentPattern() { return practiceCard[practiceIndex]; }
function comparePattern(hand, line = currentPattern()) {
  const counts = {};
  hand.forEach(code=>{counts[code]=(counts[code]||0)+1;});
  let jokers=counts.J||0;
  const missing=[];
  line.groups.forEach(group=>{
    const code=group[0], natural=Math.min(counts[code]||0,group.length);
    counts[code]=(counts[code]||0)-natural;
    let need=group.length-natural;
    const used=group.length>=3?Math.min(jokers,need):0;
    jokers-=used;need-=used;
    missing.push(...Array(need).fill(code));
  });
  return {missing, complete:hand.length===14 && missing.length===0};
}
function renderPracticeCard() {
  $("#practiceCardRows").innerHTML = practiceCard.map((line,i)=>`<article class="practice-line">${patternMarkup(line)}<button class="secondary-button" data-pattern-index="${i}" aria-pressed="${practiceIndex===i}" type="button">${practiceIndex===i?'Using this pattern':'Use this pattern'}</button></article>`).join('');
  $("#charlestonTarget").innerHTML = patternMarkup(currentPattern());
}
let turnTarget = [];
let turnStart = [];
let turnMissingTile = null;
let turnDrawn = false;
let turnComplete = false;
let turnDraws = 0;
let turnWall = [];
let turnDiscards = [];
function renderHand() {
  $("#practiceHand").innerHTML = state.hand.map((code, index) => `<button class="hand-tile" data-index="${index}" type="button" ${!turnDrawn || turnComplete ? "disabled" : ""} aria-label="Discard ${escapeHtml(tileDisplay(code))}">${tileButtonMarkup(code)}</button>`).join("");
  $("#tileBank").innerHTML = `<button id="drawPracticeTile" class="primary-button" type="button" ${turnDrawn || turnComplete || !turnWall.length ? "disabled" : ""}>Draw one tile</button><button id="declarePracticeWin" class="secondary-button" type="button" ${!turnDrawn || turnComplete ? "disabled" : ""}>Declare mahjong</button>`;
  $("#turnCount").textContent = `${state.hand.length} tiles in your rack`;
}
function dealPracticeHand() {
  turnTarget = currentPattern().groups.flat();
  turnStart = [...turnTarget];
  const missingIndex=turnStart.includes("6D")?turnStart.lastIndexOf("6D"):turnStart.length-1;
  [turnMissingTile] = turnStart.splice(missingIndex,1);
  state.hand = [...turnStart]; turnDrawn = false; turnComplete = false; turnDraws = 0;
  turnWall = GuidedEngine.shuffle(GuidedEngine.supply());
  state.hand.forEach(code => GuidedEngine.take(turnWall, code));
  turnDiscards = [];
  $("#handFeedback").textContent = "You have 13 tiles. Draw one, then compare your rack with the pattern above. Tap a tile in your rack to discard it. The other players’ turns are skipped in this short exercise.";
  $("#practiceTarget").innerHTML = patternMarkup(currentPattern());
  renderHand();
}
function renderTileBank() {}
function renderCallScenario() {
  const scenario = callScenarios[state.call % callScenarios.length];
  $("#callScenario").textContent = scenario.text;
  $("#callExample").innerHTML = tileRow([["RD","RD","RD"],["3C","4C","2C"],["6D","6D","6D","6D"],["F","F"]][state.call % callScenarios.length]);
  $("#callFeedback").textContent = "";
  $("#callOptions").innerHTML = scenario.options
    .map((option) => `<button type="button" data-answer="${option}">${option}</button>`)
    .join("");
}

const answeredQuizQuestions = new Set();

function renderQuiz() {
  const current = quizQuestions[state.quiz % quizQuestions.length];
  $("#quizQuestion").textContent = current.question;
  $("#quizExample").innerHTML = current.visual ? renderTeachingVisual(current) : tileRow(current.tiles);
  $("#quizScore").textContent = String(state.quizScore);
  $("#quizFeedback").textContent = "";
  $("#quizAnswers").innerHTML = current.answers
    .map((answer) => `<button type="button" data-answer="${answer}">${answer}</button>`)
    .join("");
}

function renderNightPlan() {
  const friends = Number($("#friendCount").value) || 4;
  const minutes = friends > 4 ? 90 : 60;
  const plan = [
    `Spend 10 minutes naming tiles, building walls, and identifying the drawing end and fishtail.`,
    "Agree on hands-to-yourself etiquette, beginner hints, and the optional Bird Bam toast.",
    `Play ${friends <= 4 ? "one table" : "rotating-table"} open-hand practice for ${minutes} minutes.`,
    "Practice right, across, left together, then explain each call against the included practice pattern.",
    "End with one closed-hand round where table talk is limited to rules questions."
  ];
  $("#nightPlan").innerHTML = plan.map((item) => `<li>${item}</li>`).join("");
}

function renderCardSections() {
  $("#cardSections").innerHTML = annualCardSections
    .map(
      (section) => `
        <div class="card-section">
          <span>${section.shorthand}</span>
          <h4>${section.title}</h4>
          <p>${section.note}</p>
        </div>
      `
    )
    .join("");
}

function renderCardPrompt() {
  const prompt = cardPrompts[state.cardPrompt % cardPrompts.length];
  $("#cardPrompt").textContent = prompt.question;
  $("#cardPromptFeedback").textContent = "";
  $("#cardPromptOptions").innerHTML = prompt.answers
    .map((answer) => `<button type="button" data-answer="${answer}">${answer}</button>`)
    .join("");
}

function getTile(code) {
  return coachTiles.find((tile) => tile.code === code);
}

function summarizeCoachHand() {
  const tiles = state.coachHand.map(getTile).filter(Boolean);
  const counts = state.coachHand.reduce((map, code) => {
    map[code] = (map[code] || 0) + 1;
    return map;
  }, {});
  const suits = { C: [], B: [], D: [] };
  tiles.forEach((tile) => {
    if (tile.kind === "suit") suits[tile.suit].push(tile.number);
  });
  const pairs = Object.entries(counts)
    .filter(([, count]) => count >= 2)
    .map(([code]) => tileDisplay(code));
  return {
    tiles,
    counts,
    suits,
    pairs,
    jokers: counts.J || 0,
    flowers: counts.F || 0,
    soaps: counts.Soap || 0,
    winds: tiles.filter((tile) => tile.kind === "wind").length,
    dragons: tiles.filter((tile) => tile.kind === "dragon").length
  };
}

function getPassCandidates(summary) {
  const needed = {};
  currentPattern().groups.flat().forEach(code=>{needed[code]=(needed[code]||0)+1;});
  const extras=[];
  summary.tiles.forEach((tile,index)=>{
    if(tile.code==='J') return;
    if(needed[tile.code]>0) needed[tile.code]--;
    else extras.push({tile,index});
  });
  return extras.slice(0,3);
}
function renderCoachHand() {
  $("#coachHand").innerHTML = state.coachHand.length
    ? state.coachHand
        .map((code, index) => `<button class="hand-tile" data-coach-index="${index}" type="button">${tileButtonMarkup(code)}</button>`)
        .join("")
    : '<span class="empty-hand">No tiles entered yet.</span>';
  $("#coachCount").textContent = `${state.coachHand.length} of 13 starting tiles entered. Tap a tile in your hand to remove it.`;
  renderCoachAdvice();
}

function renderCoachTileBank() {
  $("#coachTileBank").innerHTML = coachTiles
    .map((tile) => `<button class="bank-tile coach-bank-tile" type="button" data-coach-tile="${tile.code}">${tileButtonMarkup(tile.code)}</button>`)
    .join("");
}

function renderCoachAdvice() {
  const result = comparePattern(state.coachHand);
  $("#coachAdvice").innerHTML = `<div class="advice-card"><h4>Compared with ${escapeHtml(currentPattern().title)}</h4><p>${result.missing.length ? `Still needed: ${result.missing.map(tileDisplay).map(escapeHtml).join(', ')}.` : 'All required groups are present.'}</p><p>These counts use the practice pattern shown in the Practice card tab. Jokers fill only groups of three or more.</p></div>`;
  renderCharlestonPicks();
}
function renderCharlestonPicks() {
  const picks = getPassCandidates(summarizeCoachHand());
  $("#charlestonPicks").innerHTML = picks.length ? `<p>Our selected practice pattern does not need these tiles:</p><div class="example-tiles">${tileRow(picks.map(({tile})=>tile.code))}</div><p>These are suggestions for this pattern only. Keep all jokers.</p>` : '<p>Enter tiles above to compare them with the selected practice pattern.</p>';
}
function renderTileIdentifier() {
  $("#tileIdentifier").innerHTML = tileIdentifierRows
    .map(
      (row) => `
        <div class="identifier-row">
          <strong>${row.label}</strong>
          <span>${row.look}</span>
          <p>${row.meaning}</p>
        </div>
      `
    )
    .join("");
}

function renderNotationGrid() {
  $("#notationGrid").innerHTML = notationRows
    .map(
      (row) => `
        <div class="notation-row">
          <strong>${row.mark}</strong>
          <span>${row.meaning}</span>
        </div>
      `
    )
    .join("");
}

function renderTileCustomizer() {
  $("#customLabelGrid").innerHTML = coachTiles
    .map(
      (tile) => `
        <label class="custom-label-row">
          <span>${tile.name}</span>
          <span class="custom-symbol">${escapeHtml(tile.symbol || "")}</span>
          <input type="text" value="${escapeHtml(tileDisplay(tile.code))}" data-custom-label="${tile.code}" />
        </label>
      `
    )
    .join("");

  const preview = $("#tilePhotoPreview");
  if (state.tilePhoto) {
    preview.src = state.tilePhoto;
    preview.hidden = false;
  } else {
    preview.removeAttribute("src");
    preview.hidden = true;
  }
}

function applyLabelPreset(presetName) {
  state.customLabels = { ...labelPresets[presetName] };
  saveTileLabels();
  renderTileCustomizer();
  renderCoachTileBank();
  renderCoachHand();
}

function renderRuleDrill() {
  const drill = ruleDrills[state.ruleDrill % ruleDrills.length];
  $("#ruleDrillQuestion").textContent = drill.question;
  $("#ruleDrillFeedback").textContent = "";
  $("#ruleDrillAnswers").innerHTML = drill.answers
    .map((answer) => `<button type="button" data-answer="${answer}">${answer}</button>`)
    .join("");
}

function renderChecklist() {
  $("#tableChecklist").innerHTML = checklistItems
    .map(
      (item, index) => `
        <label>
          <input type="checkbox" />
          <span>${index + 1}. ${item}</span>
        </label>
      `
    )
    .join("");
}

function renderGroupPrompt() {
  $("#groupPrompt").textContent = groupPrompts[state.groupPrompt % groupPrompts.length];
}

function focusLesson() {
  $("#lessonTitle").setAttribute('tabindex','-1');
  $("#lessonTitle").focus?.({preventScroll:true});
  $("#lessonTitle").scrollIntoView?.({block:'start'});
}
function bindEvents() {
  document.addEventListener?.('click', event => {
    const button = event.target.closest('[data-open-view]');
    if (button) setView(button.dataset.openView);
  });

  $("#lessonExample").addEventListener('click',event=>{
    const button=event.target.closest('[data-demo-move]');
    if(!button||button.disabled)return;
    const count=lessons[state.lesson].visual==='deal'?4:3;
    demoSteps.set(state.lesson,Math.max(0,Math.min(count-1,(demoSteps.get(state.lesson)||0)+Number(button.dataset.demoMove))));
    renderLesson();
    const step=demoSteps.get(state.lesson),direction=step===count-1?-1:step===0?1:Number(button.dataset.demoMove);
    document.querySelector(`[data-demo-move="${direction}"]`).focus({preventScroll:true});
    $("#lessonExample").scrollIntoView?.({block:"start"});
  });
  $("#lessonJump").addEventListener('change',()=>{state.lesson=Number($("#lessonJump").value);renderLesson();focusLesson();});
  $("#lessonChoices").addEventListener('click', event=>{
    const button=event.target.closest('[data-lesson-choice]');
    if(!button)return;
    const i=Number(button.dataset.lessonChoice);
    lessonAnswers.set(state.lesson,lessons[state.lesson].answers[i]);
    renderLesson();
    document.querySelector(`[data-lesson-choice="${i}"]`).focus();
  });
  $("#practiceCardRows").addEventListener('click', event=>{
    const button=event.target.closest('[data-pattern-index]');
    if(!button)return;
    practiceIndex=Number(button.dataset.patternIndex);
    renderPracticeCard();dealPracticeHand();renderCoachAdvice();
    document.querySelector(`[data-pattern-index="${practiceIndex}"]`).focus();
  });
  $$(".nav-button").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  $("#nextLesson").addEventListener("click", () => {
    if (state.lesson === lessons.length - 1) { setView("table"); return; }
    state.lesson++;
    renderLesson();
    focusLesson();
  });

  $("#prevLesson").addEventListener("click", () => {
    state.lesson = Math.max(0, state.lesson - 1);
    renderLesson();
    focusLesson();
  });

  $("#nextTile").addEventListener("click", () => {
    state.tile += 1;
    renderFlashcard();
  });

  $("#knownTile").addEventListener("click", () => {
    state.knownTiles += 1;
    state.tile += 1;
    renderFlashcard();
    updateReadiness();
  });

  $("#tileBank").addEventListener("click", event => {
    if (event.target.closest("#drawPracticeTile") && !turnDrawn && !turnComplete) {
      if (!turnWall.length) return;
      const wanted = turnDraws++ === 0 ? "9B" : comparePattern(state.hand).missing[0];
      const next = turnWall.includes(wanted) ? GuidedEngine.take(turnWall, wanted) : turnWall.shift();
      state.hand.push(next); turnDrawn = true;
      $("#handFeedback").textContent = "You have 14 tiles. Tap a tile you do not need to discard it. If every tile matches the pattern, declare mahjong instead.";
      renderHand();
    } else if (event.target.closest("#declarePracticeWin") && turnDrawn && !turnComplete) {
      const matches = comparePattern(state.hand).complete;
      turnComplete = matches;
      $("#handFeedback").textContent = matches ? "Mahjong! All 14 tiles match our practice pattern. You kept the last tile instead of discarding it. Try another pattern or the call questions next." : "Not yet: all 14 tiles must match the target. Look for the tile it does not need.";
      renderHand();
    }
  });
  $("#practiceHand").addEventListener("click", event => {
    const button = event.target.closest("button[data-index]");
    if (!button || !turnDrawn || turnComplete) return;
    const [code] = state.hand.splice(Number(button.dataset.index), 1); turnDrawn = false;
    turnDiscards.push(code);
    $("#handFeedback").textContent = `You discarded ${tileDisplay(code)}. Back to 13 tiles. The other players take their turns; then draw again. This short drill skips their turns.${turnWall.length ? "" : " The wall is empty; start a new hand."}`;
    renderHand();
  });
  $("#dealHand").addEventListener("click", dealPracticeHand);

  $("#callOptions").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-answer]");
    if (!button) return;
    const scenario = callScenarios[state.call % callScenarios.length];
    const isCorrect = button.dataset.answer === scenario.answer;
    $$("#callOptions button").forEach((option) => {
      option.disabled = true;
      option.classList.toggle("correct", option.dataset.answer === scenario.answer);
      option.classList.toggle("incorrect", option === button && !isCorrect);
    });
    $("#callFeedback").textContent = scenario.feedback;

  });

  $("#nextCall").addEventListener("click", () => { state.call++; renderCallScenario(); });

  $("#quizAnswers").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-answer]");
    if (!button || button.disabled) return;
    const current = quizQuestions[state.quiz % quizQuestions.length];
    const isCorrect = button.dataset.answer === current.correct;
    if (isCorrect) answeredQuizQuestions.add(state.quiz % quizQuestions.length);
    state.quizScore = answeredQuizQuestions.size;
    $$("#quizAnswers button").forEach((answer) => {
      answer.disabled = true;
      answer.classList.toggle("correct", answer.dataset.answer === current.correct);
      answer.classList.toggle("incorrect", answer === button && !isCorrect);
    });
    $("#quizScore").textContent = String(state.quizScore);
    $("#quizFeedback").textContent = isCorrect
      ? `Yes. ${current.feedback}`
      : `The answer is ${current.correct}. ${current.feedback}`;
    updateReadiness();
  });

  $("#nextQuestion").addEventListener("click", () => {
    state.quiz = (state.quiz + 1) % quizQuestions.length;
    renderQuiz();
  });

  $("#cardPromptOptions").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-answer]");
    if (!button) return;
    const prompt = cardPrompts[state.cardPrompt % cardPrompts.length];
    const isCorrect = button.dataset.answer === prompt.correct;
    $$("#cardPromptOptions button").forEach((answer) => {
      answer.disabled = true;
      answer.classList.toggle("correct", answer.dataset.answer === prompt.correct);
      answer.classList.toggle("incorrect", answer === button && !isCorrect);
    });
    $("#cardPromptFeedback").textContent = isCorrect ? prompt.feedback : `Not quite. ${prompt.feedback}`;
  });

  $("#nextCardPrompt").addEventListener("click", () => {
    state.cardPrompt = (state.cardPrompt + 1) % cardPrompts.length;
    renderCardPrompt();
  });

  $("#coachTileBank").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-coach-tile]");
    if (!button || state.coachHand.length >= 13) return;
    const code=button.dataset.coachTile;
    const limit=["F","J"].includes(code)?8:4;
    if(state.coachHand.filter(tile=>tile===code).length>=limit)return;
    state.coachHand.push(button.dataset.coachTile);
    renderCoachHand();
  });

  $("#coachHand").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-coach-index]");
    if (!button) return;
    state.coachHand.splice(Number(button.dataset.coachIndex), 1);
    renderCoachHand();
  });

  $("#sampleCoachHand").addEventListener("click", () => {
    state.coachHand = ["2C", "Soap", "2B", "6D", "6D", "7D", "8D", "F", "F", "E", "RD", "J", "9B"];
    renderCoachHand();
  });

  $("#clearCoachHand").addEventListener("click", () => {
    state.coachHand = [];
    renderCoachHand();
  });

  $("#customLabelGrid").addEventListener("input", (event) => {
    const input = event.target.closest("input[data-custom-label]");
    if (!input) return;
    const code = input.dataset.customLabel;
    const value = input.value.trim();
    if (value) {
      state.customLabels[code] = value;
    } else {
      delete state.customLabels[code];
    }
    saveTileLabels();
    renderCoachTileBank();
    renderCoachHand();
  });

  $$(".preset-buttons button[data-label-preset]").forEach((button) => {
    button.addEventListener("click", () => applyLabelPreset(button.dataset.labelPreset));
  });

  $("#resetTileLabels").addEventListener("click", () => {
    state.customLabels = {};
    state.tilePhoto = "";
    saveTileLabels();
    saveTilePhoto();
    $("#tilePhotoInput").value = "";
    renderTileCustomizer();
    renderCoachTileBank();
    renderCoachHand();
  });

  $("#tilePhotoInput").addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      state.tilePhoto = String(reader.result || "");
      saveTilePhoto();
      renderTileCustomizer();
    });
    reader.readAsDataURL(file);
  });

  $("#ruleDrillAnswers").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-answer]");
    if (!button) return;
    const drill = ruleDrills[state.ruleDrill % ruleDrills.length];
    const isCorrect = button.dataset.answer === drill.correct;
    $$("#ruleDrillAnswers button").forEach((answer) => {
      answer.disabled = true;
      answer.classList.toggle("correct", answer.dataset.answer === drill.correct);
      answer.classList.toggle("incorrect", answer === button && !isCorrect);
    });
    $("#ruleDrillFeedback").textContent = isCorrect ? drill.feedback : `Not quite. ${drill.feedback}`;
  });

  $("#nextRuleDrill").addEventListener("click", () => {
    state.ruleDrill = (state.ruleDrill + 1) % ruleDrills.length;
    renderRuleDrill();
  });

  $("#nextGroupPrompt").addEventListener("click", () => {
    state.groupPrompt = (state.groupPrompt + 1) % groupPrompts.length;
    renderGroupPrompt();
  });

  $("#friendCount").addEventListener("input", renderNightPlan);

  $("#resetProgress").addEventListener("click", () => {
    state.lesson = 0;
    lessonAnswers.clear();
    demoSteps.clear();
    state.tile = 0;
    state.knownTiles = 0;
    state.quiz = 0;
    state.quizScore = 0;
    answeredQuizQuestions.clear();
    state.call = 0;
    state.cardPrompt = 0;
    state.coachHand = [];
    state.ruleDrill = 0;
    state.groupPrompt = 0;
    state.hand = [];
    resetCharleston();
    renderAll();
  });
}

function renderAll() {
  renderPracticeCard();
  renderLesson();
  renderFlashcard();
  renderFamilies();
  renderTileBank();
  dealPracticeHand();
  renderCallScenario();
  renderQuiz();
  renderNightPlan();
  renderCardSections();
  $("#yearExample").innerHTML = tileRow(["2C","Soap","2B","6D"]);
  renderCardPrompt();
  renderCoachTileBank();
  renderCoachHand();
  renderTileIdentifier();
  renderNotationGrid();
  renderTileCustomizer();
  renderRuleDrill();
  renderChecklist();
  renderGroupPrompt();
  updateReadiness();
}

let passingGame = Charleston.newGame();
let selectedPass = [];
const passNames = ["First right", "First across", "First left", "Second left", "Second across", "Second right"];
function resetCharleston() {
  passingGame = Charleston.newGame(); selectedPass = [];
  $("#blindCount").value = "0";
  $("#passReceipt").textContent = "";
  renderCharleston();
}
function renderCharleston() {
  const game = passingGame;
  const active = ['passing', 'courtesy'].includes(game.phase);
  const blindAllowed = game.phase === 'passing' && [2,5].includes(game.step);
  if (!blindAllowed) $("#blindCount").value = "0";
  $("#blindCount").disabled = !blindAllowed;
  const blind = Number($("#blindCount").value);
  const count = game.phase === 'courtesy' ? game.courtesy : 3;
  $("#passSteps").innerHTML = passNames.map((name,i) => `<li ${game.phase === 'passing' && i === game.step ? 'aria-current="step"' : ''}>${i < game.step ? '✓ ' : ''}${name}</li>`).join('');
  $("#passTitle").textContent = game.phase === 'done' ? 'Ready for the first discard' : game.phase === 'second' ? 'Continue or stop?' : game.phase === 'courtesyChoice' ? 'Optional courtesy exchange' : game.phase === 'courtesy' ? `Pass ${count} across` : `Pass 3 · ${passNames[game.step]}`;
  $("#passHelp").textContent = game.phase === 'done' ? 'East discards first. Try the Practice Table next, or start again.' : active ? `Choose ${count - blind} tiles from your rack${blind ? ` plus ${blind} unseen incoming tiles` : ''}. Jokers cannot be passed. Compare your rack with the practice pattern above. Look for tiles it does not need.` : 'Your rack still has 13 tiles. Look again at the practice pattern before exchanging more.';
  $("#charlestonRack").innerHTML = game.racks[0].map((code,i) => `<button class="hand-tile ${selectedPass.includes(i) ? 'selected-pass' : ''}" data-pass-index="${i}" aria-pressed="${selectedPass.includes(i)}" aria-label="${escapeHtml(tileDisplay(code))}${code === 'J' ? ', keep: jokers cannot be passed' : ''}" type="button" ${!active || code === 'J' ? 'disabled' : ''}>${tileButtonMarkup(code)}</button>`).join('');
  $("#passStatus").textContent = `${selectedPass.length} rack tiles selected${blind ? ` + ${blind} blind` : ''} · ${game.racks[0].length} tiles in your rack`;
  $("#confirmPass").disabled = !active || selectedPass.length + blind !== count;
  $("#confirmPass").textContent = !active ? "Finish this stage first" : selectedPass.length + blind === count ? `Pass ${count} tiles →` : `Select ${count - blind - selectedPass.length} more tiles`;
  $("#passHint").disabled = !active;
  $("#secondChoice").hidden = game.phase !== 'second';
  $("#courtesyChoice").hidden = game.phase !== 'courtesyChoice';
}
$("#charlestonRack").addEventListener('click', event => {
  const button = event.target.closest('[data-pass-index]');
  if (!button || button.disabled) return;
  const i = Number(button.dataset.passIndex);
  const max = (passingGame.phase === 'courtesy' ? passingGame.courtesy : 3) - Number($("#blindCount").value);
  if (selectedPass.includes(i)) selectedPass = selectedPass.filter(n => n !== i);
  else if (selectedPass.length < max) selectedPass.push(i);
  renderCharleston();
  document.querySelector(`[data-pass-index="${i}"]`).focus();
});
$("#confirmPass").addEventListener('click', () => {
  try {
    const incoming = Charleston.exchange(passingGame, selectedPass, Number($("#blindCount").value));
    selectedPass = []; $("#blindCount").value = '0';
    $("#passReceipt").textContent = `Exchange complete. Received into your rack: ${incoming.map(tileDisplay).join(', ') || 'no tiles (all incoming tiles passed blind)'}.`;
    renderCharleston();
  } catch (error) { $("#passReceipt").textContent = error.message; }
});
$("#blindCount").addEventListener('change', () => { selectedPass = []; renderCharleston(); });
$("#continueSecond").addEventListener('click', () => { passingGame.phase = 'passing'; renderCharleston(); });
$("#stopSecond").addEventListener('click', () => { passingGame.phase = 'courtesyChoice'; renderCharleston(); });
$("#agreeCourtesy").addEventListener('click', () => {
  passingGame.courtesy = Math.min(2, Number($("#courtesyCount").value));
  passingGame.phase = passingGame.courtesy ? 'courtesy' : 'done'; renderCharleston();
});
$("#passHint").addEventListener('click', () => {
  const needed={};currentPattern().groups.flat().forEach(code=>{needed[code]=(needed[code]||0)+1;});
  const extras=passingGame.racks[0].filter(code=>{if(code==='J')return false;if(needed[code]>0){needed[code]--;return false;}return true;});
  $("#passReceipt").textContent = extras.length ? `For ${currentPattern().title}, consider passing ${extras.slice(0,3).map(tileDisplay).join(', ')}. They are not needed, or you have more copies than this pattern needs. Keep all jokers.` : 'Every non-joker tile helps this pattern. If a blind pass is available, you may use it; otherwise you still need to choose tiles for this exchange.';
});
$("#restartCharleston").addEventListener('click', resetCharleston);
renderCharleston();

loadTileSetPreferences();
bindEvents();
renderAll();
