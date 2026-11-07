const lessons = [
  {
    "title": "Your goal: match a hand on the card",
    "body": "American mahjong is a four-player game. You build a 14-tile hand that matches one complete line on the annual card, including its instructions.",
    "bullets": [
      "Use the same annual card as the rest of your table.",
      "The card decides the groups, numbers, and suits you need. There is no universal four-sets-and-a-pair goal.",
      "This app teaches the rules; keep your official card beside you for real hands."
    ]
  },
  {
    "title": "Meet your tiles",
    "body": "Sort your rack into Craks, Bams, Dots, winds, dragons, flowers, and jokers.",
    "bullets": [
      "Each numbered suit runs from 1 to 9. A bird often marks 1 Bam.",
      "Winds are North, East, West, and South. Dragons are red, green, and white (Soap).",
      "Flowers stay in your hand. A joker can replace a tile in a matching group of three or more, never a single or pair."
    ]
  },
  {
    "title": "Read one line, then choose a direction",
    "body": "Read the whole line and its parenthetical instructions before choosing a hand. Card colors distinguish suits; they do not require the physical tile colors.",
    "bullets": [
      "A pung has three matching tiles; a kong has four; a quint has five.",
      "X allows exposures when a call is legal. C means concealed: call only for your final winning tile.",
      "Consecutive Runs is a card category. You cannot call a chow or invent a free-form run."
    ]
  },
  {
    "title": "Set the table together",
    "body": "Table routine · Before the Charleston, everyone helps mix the tiles face down and build four walls. A standard American set has 152 playing tiles.",
    "bullets": [
      "Each player builds a wall 19 stacks long and two tiles high. Leave extra blanks or spare tiles out unless you agreed otherwise.",
      "Choose East, roll the dice, and have an experienced friend demonstrate the wall break and deal before everyone tries it.",
      "Wait until the deal is finished before racking your tiles. Check the counts together: 14 for East, 13 for each other player."
    ]
  },
  {
    "title": "Fishtail the end of the wall",
    "body": "Wall marker · Fishtailing means turning the last tiles at the tail end sideways to mark where the wall ends. It helps everyone distinguish the end from the drawing side.",
    "bullets": [
      "After the wall is broken, ask the player tending that wall to identify the drawing end and the tail.",
      "Turn the tail tiles at a right angle without exposing their faces or changing their order. This is a helpful marker, not a required move to win.",
      "Draw from the active drawing end, not from the fishtail. Ask before moving or straightening someone else’s wall."
    ]
  },
  {
    "title": "Your tiles, your hands",
    "body": "Table etiquette · Handle your own rack and tiles. Even helpful rearranging can expose someone’s hand or make a play unclear.",
    "bullets": [
      "Do not touch another player’s rack, hand, or exposures. Ask them to move or show a tile instead.",
      "For a legal joker exchange on your turn, ask the owner to exchange the matching tile with you; do not reach over and take their joker.",
      "Name each discard clearly. Give everyone a moment to react, take your turn at a comfortable pace, and offer strategy advice only when invited."
    ]
  },
  {
    "title": "Before play: the Charleston",
    "body": "After the deal, East has 14 tiles and everyone else has 13. The Charleston lets you exchange unwanted tiles before discarding begins.",
    "bullets": [
      "First pass three right, then three across, then three left. Never pass a joker.",
      "Any player may stop the second Charleston before it starts. Otherwise complete left, across, right.",
      "An optional courtesy exchange is across: agree on zero to three tiles, using the smaller requested number. Try the Charleston practice next."
    ]
  },
  {
    "title": "Draw, decide, discard",
    "body": "East starts by discarding from 14 tiles. Play then moves to the right. On an ordinary turn, draw from the wall, consider your card, then discard and name one tile.",
    "bullets": [
      "After discarding you have 13 tiles total, counting any exposed tiles.",
      "Call the latest discard only if it completes a permitted exposure for your hand, or completes mahjong. No drawing after a call.",
      "You cannot call a discard for a single or pair unless it completes your entire winning hand. A discarded joker cannot be called."
    ]
  },
  {
    "title": "Bird Bam: a little table celebration",
    "body": "Optional social tradition · The bird tile is 1 Bam. At this gathering, it is also an excuse for a friendly toast or sip, if you want to join in.",
    "bullets": [
      "Agree before playing on the Bird Bam moment: for example, when it is discarded. Your group chooses the trigger; it is not an official game rule.",
      "Any drink counts, and passing on the toast is always fine. Keep glasses beside the playing area so tiles and cards stay dry.",
      "Say “One Bam” clearly when discarding. A bird toast does not pause the rules, change the tile’s value, or take away anyone’s chance to call."
    ]
  },
  {
    "title": "Your first game together",
    "body": "Start slowly, with racks visible and rules questions welcome. Experienced friends can explain their decisions without choosing every tile for someone else.",
    "bullets": [
      "Practice the Charleston together before playing a full hand.",
      "For each call, check the card, expose the complete group, then discard. For mahjong, reveal and verify all 14 tiles.",
      "Skip money and penalties during the teaching round. Use the official rules and your agreed card when you move into regular play."
    ]
  }
];

const tileDeck = [
  { symbol: "一", name: "One Character", family: "Characters", hint: "Characters are one of the three suited families." },
  { symbol: "五", name: "Five Character", family: "Characters", hint: "Compare this number with the groups required on your card." },
  { symbol: "九", name: "Nine Character", family: "Characters", hint: "A 9 is useful when your chosen card line needs it." },
  { symbol: "🀐", name: "One Bamboo", family: "Bamboo", hint: "Bams run from 1 through 9. American mahjong has no chow calls." },
  { symbol: "🀕", name: "Six Bamboo", family: "Bamboo", hint: "Consecutive numbers matter only as specified by the card." },
  { symbol: "🀙", name: "One Dot", family: "Dots", hint: "Dots are one of the three numbered suits." },
  { symbol: "🀞", name: "Six Dot", family: "Dots", hint: "Compare your Dots with the numbers and group sizes on the card." },
  { symbol: "東", name: "East Wind", family: "Winds", hint: "Winds are honor tiles and cannot form sequences." },
  { symbol: "南", name: "South Wind", family: "Winds", hint: "A wind triplet is a pung." },
  { symbol: "中", name: "Red Dragon", family: "Dragons", hint: "Dragons only form pairs, pungs, or kongs." },
  { symbol: "發", name: "Green Dragon", family: "Dragons", hint: "Green dragons match Bams when a card line requires matching dragons." },
  { symbol: "白", name: "White Dragon", family: "Dragons", hint: "Many sets mark this as a blank or framed tile." }
];

const familyReference = [
  { name: "Characters", tiles: ["一", "二", "三", "四", "五", "六", "七", "八", "九"], note: "Craks: numbered 1–9." },
  { name: "Bamboo", tiles: ["🀐", "🀑", "🀒", "🀓", "🀔", "🀕", "🀖", "🀗", "🀘"], note: "Bams: numbered 1–9; 1 often shows a bird." },
  { name: "Dots", tiles: ["🀙", "🀚", "🀛", "🀜", "🀝", "🀞", "🀟", "🀠", "🀡"], note: "Dots: numbered 1–9." },
  { name: "Flowers and Jokers", tiles: ["花", "★"], note: "Flowers count alike. Jokers cannot replace singles or pairs." },
  { name: "Honors", tiles: ["東", "南", "西", "北", "中", "發", "白"], note: "Use exactly the winds and dragons your card requires." }
];

const tileBank = ["一", "二", "三", "三", "四", "五", "六", "七", "八", "九", "東", "東", "南", "中", "發", "白"];
const practiceDeals = [
  ["二", "三", "四", "四", "五", "六", "🀙", "🀚", "🀛", "東", "東", "中", "中"],
  ["一", "二", "三", "七", "八", "九", "🀐", "🀐", "🀐", "南", "南", "發", "白"],
  ["三", "四", "五", "五", "六", "七", "🀜", "🀝", "🀞", "西", "西", "白", "白"]
];

const callScenarios = [
  {
    "text": "Your exposed-type (X) card line needs a pung of Red Dragons. You hold two, and someone discards the third. What can you do?",
    "options": [
      "Call and expose the pung",
      "Draw, then call",
      "Keep the discard hidden"
    ],
    "answer": "Call and expose the pung",
    "feedback": "Call the latest discard, expose the full matching group, then discard. Do not draw as well."
  },
  {
    "text": "You hold 3 and 4 Craks. Someone discards 2 Crak. Can you call a chow?",
    "options": [
      "No chow calls",
      "Only from the left",
      "Yes, from anyone"
    ],
    "answer": "No chow calls",
    "feedback": "American mahjong follows the annual card. Three consecutive tiles are not a callable chow."
  },
  {
    "text": "Your hand is marked C. A discard would complete a kong, but not your whole hand. Can you call?",
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
    "feedback": "The winning tile may complete a single or pair. Reveal and check the complete hand against your card."
  }
];

const quizQuestions = [
  {
    "question": "What makes a winning American mahjong hand?",
    "answers": [
      "Match a complete line on the agreed card",
      "Any four sets and a pair",
      "Any fourteen tiles"
    ],
    "correct": "Match a complete line on the agreed card"
  },
  {
    "question": "What is the first Charleston order?",
    "answers": [
      "Right, across, left",
      "Left, right, across",
      "Across, left, right"
    ],
    "correct": "Right, across, left"
  },
  {
    "question": "Can you pass a joker in the Charleston?",
    "answers": [
      "No",
      "Yes, if you have two",
      "Only across"
    ],
    "correct": "No"
  },
  {
    "question": "Who can stop the second Charleston before it begins?",
    "answers": [
      "Any one player",
      "Only East",
      "Only a majority"
    ],
    "correct": "Any one player"
  },
  {
    "question": "What happens on an ordinary turn?",
    "answers": [
      "Draw, decide, discard",
      "Draw three and pass",
      "Call a chow"
    ],
    "correct": "Draw, decide, discard"
  },
  {
    "question": "Can a joker fill a pair?",
    "answers": [
      "No",
      "Yes",
      "Only with flowers"
    ],
    "correct": "No"
  },
  {
    "question": "What does the fishtail mark?",
    "answers": [
      "The tail end of the wall",
      "The next tile to draw",
      "A bonus tile"
    ],
    "correct": "The tail end of the wall"
  },
  {
    "question": "Someone has an exposed joker you can legally exchange for. What is the polite approach?",
    "answers": [
      "Ask the owner to exchange it with you",
      "Reach over and take it",
      "Rearrange their exposure"
    ],
    "correct": "Ask the owner to exchange it with you"
  },
  {
    "question": "Is the Bird Bam toast an official game rule?",
    "answers": [
      "No, it is an optional social tradition",
      "Yes, everyone must drink",
      "Yes, it changes the score"
    ],
    "correct": "No, it is an optional social tradition"
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
    note: "Hands that use connected numbers from the card, not free-form chows."
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
    question: "On the 2026 card, what tile represents the zero in 2026?",
    answers: ["Soap / White Dragon", "Any joker", "A blank tile"],
    correct: "Soap / White Dragon",
    feedback: "Right. The zero in a year pattern is Soap, also called White Dragon."
  },
  {
    question: "Do you need to know the 2025 card to play the 2026 card?",
    answers: ["No, only the agreed current card", "Yes, all old cards build up", "Only for jokers"],
    correct: "No, only the agreed current card",
    feedback: "Exactly. Each table plays from one agreed card, usually the current NMJL card."
  },
  {
    question: "Can a joker replace a single tile in a Singles and Pairs hand?",
    answers: ["No", "Yes", "Only if it is Soap"],
    correct: "No",
    feedback: "Correct. Jokers are for larger matching groups, not singles or pairs."
  },
  {
    question: "If the 2027 card has a year section, what changes?",
    answers: ["The year pattern on the new card", "The physical Soap tile", "All previous year hands stay legal"],
    correct: "The year pattern on the new card",
    feedback: "Yes. The tile set stays the same; the card's valid hands change."
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
  { mark: "D", meaning: "Dragon; color usually follows the suit shown by the hand." },
  { mark: "0", meaning: "Soap / White Dragon when reading a year." },
  { mark: "N E W S", meaning: "North, East, West, South winds." },
  { mark: "X", meaning: "Exposed hand. You may call tiles where the rules allow." },
  { mark: "C", meaning: "Concealed hand. Do not expose, except to declare mahjong." },
  { mark: "Any", meaning: "The card lets you choose a suit, number, or dragon that fits that line." },
  { mark: "Pair", meaning: "Two matching tiles. Jokers cannot be used here." }
];

const ruleDrills = [
  {
    question: "You have two 6 Bams and a joker. Can that complete a pung of 6 Bams?",
    answers: ["Yes", "No", "Only in concealed hands"],
    correct: "Yes",
    feedback: "Yes. Jokers can fill larger matching groups like pungs, kongs, quints, or sextets."
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
    feedback: "No. In American mahjong, calls are generally for exposed larger groups or for mahjong."
  }
];

const checklistItems = [
  "Which annual card are we using?",
  "Are blanks or house-rule tiles in play?",
  "Are we playing for points, coins, or just practice?",
  "Will beginners get one table-talk hint per hand?",
  "How strict are we about calling a hand dead?",
  "Are concealed hands being explained before the first round?",
  "Can everyone point to the drawing end and fishtailed tail?",
  "Have we agreed to ask before touching anyone else’s rack, tiles, or wall?",
  "When is our optional Bird Bam toast? Any drink counts; joining in is optional."
];

const groupPrompts = [
  "Point to the drawing end and the fishtail without moving anyone else’s wall.",
  "Practice asking for a joker exchange without reaching into another player’s exposure.",
  "Find 1 Bam and explain our optional bird-toast tradition to a new friend.",
  "Everyone name one tile in your hand that supports more than one possible direction.",
  "Before discarding, say which card section you are currently watching.",
  "Find one joker rule on the table: where could a joker legally help, and where could it not?",
  "Spot a Soap use: is it acting as White Dragon, zero, or neither in this possible hand?",
  "Choose one discard and explain why your card direction does not need it.",
  "After a call, pause and name whether it was for pung, kong, quint, sextet, or mahjong."
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
  const symbol = tileSymbol(code);
  return `
    <span class="tile-symbol">${escapeHtml(symbol)}</span>
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
  $$(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewId);
  });
  $$(".view").forEach((view) => {
    view.classList.toggle("active", view.id === viewId);
  });
  $$(".nav-button").forEach(button => {
    if (button.dataset.view === viewId) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  $("#viewTitle").textContent = {
    lesson: "Lessons",
    tiles: "Tile Trainer",
    table: "Practice Table",
    quiz: "Group Quiz",
    card: "2026 Card",
    charleston: "Practice the Charleston",
    tools: "Tools"
  }[viewId];
}

function updateReadiness() {
  $("#readinessScore").textContent = `${state.lesson + 1} / ${lessons.length}`;
  $("#readinessMeter").style.width = `${(state.lesson + 1) / lessons.length * 100}%`;
  $("#readinessNote").textContent = "Read the basics, then try the Charleston and a practice turn. Go back whenever you need a reminder.";
}

function renderLesson() {
  const lesson = lessons[state.lesson];
  $("#lessonNumber").textContent = String(state.lesson + 1);
  $("#lessonTotal").textContent = String(lessons.length);
  $("#lessonTitle").textContent = lesson.title;
  $("#lessonBody").textContent = lesson.body;
  $("#lessonBullets").innerHTML = lesson.bullets.map((item) => `<li>${item}</li>`).join("");
  $("#prevLesson").disabled = state.lesson === 0;
  $("#nextLesson").textContent = state.lesson === lessons.length - 1 ? "Review Again" : "Next Lesson";
  updateReadiness();
}

function renderFlashcard() {
  const tile = tileDeck[state.tile % tileDeck.length];
  $("#flashTile").textContent = tile.symbol;
  $("#flashFamily").textContent = tile.family;
  $("#flashName").textContent = tile.name;
  $("#flashHint").textContent = tile.hint;
}

function renderFamilies() {
  $("#tileFamilies").innerHTML = familyReference
    .map(
      (family) => `
        <div class="family">
          <div>
            <h4>${family.name}</h4>
            <p>${family.note}</p>
          </div>
          <div class="mini-row">
            ${family.tiles.map((tile) => `<span class="mini-tile">${tile}</span>`).join("")}
          </div>
        </div>
      `
    )
    .join("");
}

const turnStart = ["2C", "2C", "2C", "4B", "4B", "4B", "4B", "6D", "6D", "6D", "F", "F", "F"];
const turnTarget = [...turnStart, "6D"];
let turnDrawn = false;
let turnComplete = false;
let turnDraws = 0;
function renderHand() {
  $("#practiceHand").innerHTML = state.hand.map((code, index) => `<button class="hand-tile" data-index="${index}" type="button" ${!turnDrawn || turnComplete ? "disabled" : ""} aria-label="Discard ${escapeHtml(tileDisplay(code))}">${tileButtonMarkup(code)}</button>`).join("");
  $("#tileBank").innerHTML = `<button id="drawPracticeTile" class="primary-button" type="button" ${turnDrawn || turnComplete ? "disabled" : ""}>Draw a tile</button><button id="declarePracticeWin" class="secondary-button" type="button" ${!turnDrawn || turnComplete ? "disabled" : ""}>Declare mahjong</button>`;
  $("#turnCount").textContent = `${state.hand.length} tiles in your rack`;
}
function dealPracticeHand() {
  state.hand = [...turnStart]; turnDrawn = false; turnComplete = false; turnDraws = 0;
  $("#handFeedback").textContent = "You are not East. Draw a tile to begin your turn. Your first draw is scripted so you can practice discarding.";
  $("#practiceTarget").innerHTML = turnTarget.map(code => `<span class="bank-tile">${tileButtonMarkup(code)}</span>`).join("");
  renderHand();
}
function renderTileBank() {}
function renderCallScenario() {
  const scenario = callScenarios[state.call % callScenarios.length];
  $("#callScenario").textContent = scenario.text;
  $("#callFeedback").textContent = "";
  $("#callOptions").innerHTML = scenario.options
    .map((option) => `<button type="button" data-answer="${option}">${option}</button>`)
    .join("");
}

const answeredQuizQuestions = new Set();

function renderQuiz() {
  const current = quizQuestions[state.quiz % quizQuestions.length];
  $("#quizQuestion").textContent = current.question;
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
    "Practice right, across, left together, then explain each call against your card.",
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

function longestRun(numbers) {
  const unique = [...new Set(numbers)].sort((a, b) => a - b);
  let best = 0;
  let current = 0;
  let previous = null;
  unique.forEach((number) => {
    current = previous !== null && number === previous + 1 ? current + 1 : 1;
    best = Math.max(best, current);
    previous = number;
  });
  return best;
}

function getCoachDirections(summary) {
  const directions = [];
  const suitEntries = Object.entries(summary.suits).sort((a, b) => b[1].length - a[1].length);
  const [topSuit, topNumbers] = suitEntries[0];
  const topSuitName = topSuit === "C" ? "Craks" : topSuit === "B" ? "Bams" : "Dots";
  const topRun = longestRun(topNumbers);

  if (summary.soaps || summary.suits.C.includes(2) || summary.suits.B.includes(2) || summary.suits.D.includes(2) || summary.suits.C.includes(6) || summary.suits.B.includes(6) || summary.suits.D.includes(6)) {
    directions.push({
      title: "Watch the year section",
      body: "You have at least one 2, 6, or Soap. Compare your hand to the current card's year patterns before passing those tiles."
    });
  }

  if (topNumbers.length >= 5 || topRun >= 3) {
    directions.push({
      title: `Explore ${topSuitName}`,
      body: `You have ${topNumbers.length} ${topSuitName} and a longest connected run of ${topRun}. That can point toward consecutive-run or one-suit ideas.`
    });
  }

  if (summary.pairs.length >= 2 || summary.jokers > 0) {
    directions.push({
      title: "Look for matching groups",
      body: `${summary.pairs.length ? `Pairs: ${summary.pairs.join(", ")}. ` : ""}${summary.jokers ? "Jokers make pungs, kongs, quints, and sextets easier." : ""}`
    });
  }

  if (summary.flowers >= 2 || summary.winds + summary.dragons >= 4) {
    directions.push({
      title: "Check honors and flowers",
      body: "Multiple flowers, winds, or dragons can matter on the card. Keep them until you know whether they support a real line."
    });
  }

  if (!directions.length) {
    directions.push({
      title: "Stay flexible",
      body: "No obvious cluster yet. Keep connected number tiles and pairs, then pass the tiles that do the least work."
    });
  }

  return directions.slice(0, 3);
}

function scorePassCandidate(tile, summary) {
  if (!tile || tile.kind === "joker") return -99;
  let score = 0;
  const count = summary.counts[tile.code] || 0;
  if (count > 1) score -= 5;
  if (tile.kind === "flower" && summary.flowers > 1) score += 3;
  if (tile.kind === "wind") score += 2;
  if (tile.kind === "dragon") score += tile.code === "Soap" ? -1 : 1;
  if (tile.kind === "suit") {
    const sameSuit = summary.suits[tile.suit];
    const hasNeighbor = sameSuit.some((number) => Math.abs(number - tile.number) === 1 || Math.abs(number - tile.number) === 2);
    const sameNumberAcrossSuits = ["C", "B", "D"].some((suit) => suit !== tile.suit && summary.suits[suit].includes(tile.number));
    if (!hasNeighbor) score += 3;
    if (tile.number === 1 || tile.number === 9) score += 1;
    if (sameNumberAcrossSuits) score -= 2;
    if (tile.number === 2 || tile.number === 6) score -= 1;
  }
  return score;
}

function getPassCandidates(summary) {
  return summary.tiles
    .map((tile, index) => ({ tile, index, score: scorePassCandidate(tile, summary) }))
    .filter(({ tile }) => tile.kind !== "joker")
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
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
  const summary = summarizeCoachHand();
  const directions = getCoachDirections(summary);
  const passCandidates = getPassCandidates(summary);
  const warnings = [];
  if (summary.jokers) warnings.push("Do not pass jokers in the Charleston.");
  if (summary.soaps) warnings.push("Pause before passing Soap; it may be zero in the year section.");
  if (state.coachHand.length < 13) warnings.push("Guidance gets better once all 13 starting tiles are entered.");

  $("#coachAdvice").innerHTML = `
    <div class="advice-card">
      <h4>Possible Directions</h4>
      ${directions.map((item) => `<p><strong>${item.title}:</strong> ${item.body}</p>`).join("")}
    </div>
    <div class="advice-card">
      <h4>Consider Passing</h4>
      ${
        passCandidates.length
          ? `<ol>${passCandidates.map(({ tile }) => `<li>${escapeHtml(tileDisplay(tile.code))}: ${tile.name}</li>`).join("")}</ol>`
          : "<p>Add tiles to get suggestions.</p>"
      }
    </div>
    <div class="advice-card">
      <h4>Beginner Guardrails</h4>
      ${warnings.length ? warnings.map((warning) => `<p>${warning}</p>`).join("") : "<p>Keep pairs, connected numbers, and any tile that matches a clear card direction.</p>"}
    </div>
  `;
  renderCharlestonPicks();
}

function renderCharlestonPicks() {
  const summary = summarizeCoachHand();
  const picks = getPassCandidates(summary);
  $("#charlestonPicks").innerHTML = picks.length
    ? picks
        .map(
          ({ tile }) => `
            <div class="recommendation-item">
              <strong>${escapeHtml(tileDisplay(tile.code))}</strong>
              <span>${tile.kind === "suit" ? "Low connection to the rest of your numbers." : "Often passable unless your card direction needs it."}</span>
            </div>
          `
        )
        .join("")
    : '<p class="helper-line">Enter a hand in the coach to see three pass candidates.</p>';
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

function bindEvents() {
  $$(".nav-button").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  $("#nextLesson").addEventListener("click", () => {
    state.lesson = (state.lesson + 1) % lessons.length;
    renderLesson();
  });

  $("#prevLesson").addEventListener("click", () => {
    state.lesson = Math.max(0, state.lesson - 1);
    renderLesson();
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
      state.hand.push(turnDraws++ === 0 ? "9B" : "6D"); turnDrawn = true;
      $("#handFeedback").textContent = "You have 14 tiles. Compare with the teaching target. Discard one tile, or declare mahjong if the whole hand matches.";
      renderHand();
    } else if (event.target.closest("#declarePracticeWin") && turnDrawn && !turnComplete) {
      const matches = [...state.hand].sort().join() === [...turnTarget].sort().join();
      turnComplete = matches;
      $("#handFeedback").textContent = matches ? "Mahjong! All 14 tiles match this teaching target. In a real game, verify the entire hand against your official card. Try the call decisions next." : "Not yet: all 14 tiles must match the target. Look for the tile it does not need.";
      renderHand();
    }
  });
  $("#practiceHand").addEventListener("click", event => {
    const button = event.target.closest("button[data-index]");
    if (!button || !turnDrawn || turnComplete) return;
    const [code] = state.hand.splice(Number(button.dataset.index), 1); turnDrawn = false;
    $("#handFeedback").textContent = `You discarded ${tileDisplay(code)}. Back to 13 tiles. The other players take their turns; then draw again. This short drill skips their turns.`;
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
      ? "Correct. Make someone at the table explain why."
      : `Close. The answer is ${current.correct}.`;
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
    $("#cardPromptFeedback").textContent = isCorrect ? prompt.feedback : `Close. ${prompt.feedback}`;
  });

  $("#nextCardPrompt").addEventListener("click", () => {
    state.cardPrompt = (state.cardPrompt + 1) % cardPrompts.length;
    renderCardPrompt();
  });

  $("#coachTileBank").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-coach-tile]");
    if (!button || state.coachHand.length >= 14) return;
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
    $("#ruleDrillFeedback").textContent = isCorrect ? drill.feedback : `Close. ${drill.feedback}`;
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
  renderLesson();
  renderFlashcard();
  renderFamilies();
  renderTileBank();
  dealPracticeHand();
  renderCallScenario();
  renderQuiz();
  renderNightPlan();
  renderCardSections();
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
  $("#passHelp").textContent = game.phase === 'done' ? 'East discards first. Try the Practice Table next, or start again.' : active ? `Choose ${count - blind} tiles from your rack${blind ? ` plus ${blind} unseen incoming tiles` : ''}. Jokers cannot be passed. There is no single best selection without a card hand in mind.` : 'Your rack still has 13 tiles. Reconsider your direction before exchanging more.';
  $("#charlestonRack").innerHTML = game.racks[0].map((code,i) => `<button class="hand-tile ${selectedPass.includes(i) ? 'selected-pass' : ''}" data-pass-index="${i}" aria-pressed="${selectedPass.includes(i)}" aria-label="${escapeHtml(tileDisplay(code))}${code === 'J' ? ', keep: jokers cannot be passed' : ''}" type="button" ${!active || code === 'J' ? 'disabled' : ''}>${tileButtonMarkup(code)}</button>`).join('');
  $("#passStatus").textContent = `${selectedPass.length} rack tiles selected${blind ? ` + ${blind} blind` : ''} · ${game.racks[0].length} tiles in your rack`;
  $("#confirmPass").disabled = !active || selectedPass.length + blind !== count;
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
  $("#passReceipt").textContent = 'First choose a possible line on your card. Keep tiles it needs; pick unwanted tiles from the rest. Flowers and pairs are not automatically good or bad. Never pass a joker.';
});
$("#restartCharleston").addEventListener('click', resetCharleston);
renderCharleston();

loadTileSetPreferences();
bindEvents();
renderAll();
