const lessons = [
  {
    title: "What you are trying to make",
    body: "Most hands win with four sets and one pair. A set can be a sequence, a triplet, or a quad. The pair is two identical tiles.",
    bullets: [
      "Sequence: 2-3-4 in the same suit.",
      "Triplet: three matching tiles.",
      "Pair: two matching tiles, used once in the hand."
    ]
  },
  {
    title: "Meet the tile families",
    body: "There are three numbered suits plus honors. Numbered suits can form sequences. Winds and dragons can only form matching sets.",
    bullets: [
      "Characters, bamboo, and dots run from 1 through 9.",
      "Winds are East, South, West, and North.",
      "Dragons are red, green, and white."
    ]
  },
  {
    title: "How a turn works",
    body: "On your turn, draw one tile, improve your hand if possible, then discard one tile face up.",
    bullets: [
      "Keep tiles that help multiple possible sets.",
      "Discard isolated honors or terminals early when they do not help.",
      "Watch discards to learn what tiles may be unavailable."
    ]
  },
  {
    title: "Calls at the table",
    body: "A discard can sometimes be claimed. Calling helps you complete sets, but it reveals information and may limit your hand.",
    bullets: [
      "Chow claims a sequence from the player on your left.",
      "Pung claims a triplet from any player.",
      "Mahjong claims the winning tile from any player."
    ]
  },
  {
    title: "Choosing a direction",
    body: "Early in a hand, keep flexible shapes and look for a plan: sequences, triplets, one suit, honors, or a mixed hand.",
    bullets: [
      "Two-sided waits like 4-5 waiting on 3 or 6 are strong.",
      "Pairs can become triplets, but too many pairs can slow you down.",
      "Do not chase a fancy hand if the simple win is nearby."
    ]
  },
  {
    title: "Playing with friends",
    body: "For a learning night, keep scoring light. Let everyone explain their discard once per round and pause when someone calls.",
    bullets: [
      "Start open-hand for the first few rounds.",
      "Use a shared discard review after each win.",
      "Rotate the teacher role so everyone practices explaining."
    ]
  }
];

const tileDeck = [
  { symbol: "一", name: "One Character", family: "Characters", hint: "Characters are one of the three suited families." },
  { symbol: "五", name: "Five Character", family: "Characters", hint: "Middle numbers connect well because they can form several sequences." },
  { symbol: "九", name: "Nine Character", family: "Characters", hint: "Ones and nines are terminals; they make fewer sequences." },
  { symbol: "🀐", name: "One Bamboo", family: "Bamboo", hint: "Bamboo tiles run from 1 through 9 and can form chows." },
  { symbol: "🀕", name: "Six Bamboo", family: "Bamboo", hint: "Suited number tiles can be used in runs such as 4-5-6." },
  { symbol: "🀙", name: "One Dot", family: "Dots", hint: "Dots, bamboo, and characters all work the same way for sequences." },
  { symbol: "🀞", name: "Six Dot", family: "Dots", hint: "A 5-6 shape can wait on 4 or 7." },
  { symbol: "東", name: "East Wind", family: "Winds", hint: "Winds are honor tiles and cannot form sequences." },
  { symbol: "南", name: "South Wind", family: "Winds", hint: "A wind triplet is a pung." },
  { symbol: "中", name: "Red Dragon", family: "Dragons", hint: "Dragons only form pairs, pungs, or kongs." },
  { symbol: "發", name: "Green Dragon", family: "Dragons", hint: "Dragon triplets are often valuable in scoring systems." },
  { symbol: "白", name: "White Dragon", family: "Dragons", hint: "Many sets mark this as a blank or framed tile." }
];

const familyReference = [
  { name: "Characters", tiles: ["一", "二", "三", "四", "五", "六", "七", "八", "九"], note: "Numbered suit. Great for sequences." },
  { name: "Bamboo", tiles: ["🀐", "🀑", "🀒", "🀓", "🀔", "🀕", "🀖", "🀗", "🀘"], note: "Numbered suit. Same sequence rules." },
  { name: "Dots", tiles: ["🀙", "🀚", "🀛", "🀜", "🀝", "🀞", "🀟", "🀠", "🀡"], note: "Numbered suit. Look for connected shapes." },
  { name: "Honors", tiles: ["東", "南", "西", "北", "中", "發", "白"], note: "No sequences. Match them in pairs or triplets." }
];

const tileBank = ["一", "二", "三", "三", "四", "五", "六", "七", "八", "九", "東", "東", "南", "中", "發", "白"];
const practiceDeals = [
  ["二", "三", "四", "四", "五", "六", "🀙", "🀚", "🀛", "東", "東", "中", "中"],
  ["一", "二", "三", "七", "八", "九", "🀐", "🀐", "🀐", "南", "南", "發", "白"],
  ["三", "四", "五", "五", "六", "七", "🀜", "🀝", "🀞", "西", "西", "白", "白"]
];

const callScenarios = [
  {
    text: "You hold 3 and 4 characters. The player on your left discards 2 characters. What can you call?",
    options: ["Chow", "Pung", "Kong"],
    answer: "Chow",
    feedback: "Chow completes 2-3-4, and chows can only be called from the player on your left."
  },
  {
    text: "You hold two red dragons. Any player discards a red dragon. What can you call?",
    options: ["Pung", "Chow", "Pair"],
    answer: "Pung",
    feedback: "Three matching honor tiles make a pung, and pung can be called from any discard."
  },
  {
    text: "You hold East, South, and West winds. Someone discards North. What set does that make?",
    options: ["No set", "Chow", "Pung"],
    answer: "No set",
    feedback: "Honors do not form sequences, so four different winds are not a set."
  }
];

const quizQuestions = [
  {
    question: "Which shape is a standard winning hand goal?",
    answers: ["Four sets and one pair", "Seven single tiles", "One set and four pairs"],
    correct: "Four sets and one pair"
  },
  {
    question: "Which tile family can form a sequence?",
    answers: ["Dots", "Dragons", "Winds"],
    correct: "Dots"
  },
  {
    question: "What happens at the end of most turns?",
    answers: ["Discard one tile", "Draw three tiles", "Pass your full hand left"],
    correct: "Discard one tile"
  },
  {
    question: "What is a pung?",
    answers: ["Three matching tiles", "Three suited tiles in order", "Two matching tiles"],
    correct: "Three matching tiles"
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
  "Are concealed hands being explained before the first round?"
];

const groupPrompts = [
  "Everyone name one tile in your hand that supports more than one possible direction.",
  "Before discarding, say which card section you are currently watching.",
  "Find one joker rule on the table: where could a joker legally help, and where could it not?",
  "Spot a Soap use: is it acting as White Dragon, zero, or neither in this possible hand?",
  "Choose one discard and explain why it was less connected than the tiles you kept.",
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
  $("#viewTitle").textContent = {
    lesson: "Lessons",
    tiles: "Tile Trainer",
    table: "Practice Table",
    quiz: "Group Quiz",
    card: "2026 Card",
    tools: "Tools"
  }[viewId];
}

function updateReadiness() {
  const lessonProgress = ((state.lesson + 1) / lessons.length) * 44;
  const tileProgress = Math.min(state.knownTiles, 8) * 4;
  const quizProgress = Math.min(state.quizScore, 4) * 6;
  const score = Math.min(100, Math.round(lessonProgress + tileProgress + quizProgress));
  $("#readinessScore").textContent = `${score}%`;
  $("#readinessMeter").style.width = `${score}%`;
  $("#readinessNote").textContent =
    score > 74
      ? "You are ready for a slow, open-hand practice round."
      : score > 48
        ? "You know the shape. Practice calls and tile families next."
        : "Start with turns, calls, and the four-set hand shape.";
}

function renderLesson() {
  const lesson = lessons[state.lesson];
  $("#lessonNumber").textContent = String(state.lesson + 1);
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

function renderHand() {
  $("#practiceHand").innerHTML = state.hand
    .map((tile, index) => `<button class="hand-tile" data-index="${index}" type="button">${tile}</button>`)
    .join("");
  evaluateHand();
}

function evaluateHand() {
  const counts = state.hand.reduce((map, tile) => {
    map[tile] = (map[tile] || 0) + 1;
    return map;
  }, {});
  const pairs = Object.values(counts).filter((count) => count === 2).length;
  const triplets = Object.values(counts).filter((count) => count >= 3).length;
  const connected = ["一二三", "二三四", "三四五", "四五六", "五六七", "六七八", "七八九"].filter((run) =>
    [...run].every((tile) => state.hand.includes(tile))
  ).length;

  if (state.hand.length < 13) {
    $("#handFeedback").textContent = "Add tiles from the bank until you have 13 tiles.";
  } else if (pairs >= 1 && triplets + connected >= 3) {
    $("#handFeedback").textContent = "Nice shape. You have a pair and several set candidates.";
  } else if (pairs >= 1) {
    $("#handFeedback").textContent = "You have a pair. Now look for more sequences or triplets.";
  } else {
    $("#handFeedback").textContent = "Look for a pair and keep connected suited tiles together.";
  }
}

function renderTileBank() {
  $("#tileBank").innerHTML = tileBank
    .map((tile) => `<button class="bank-tile" type="button" data-tile="${tile}">${tile}</button>`)
    .join("");
}

function dealPracticeHand() {
  state.hand = [...practiceDeals[Math.floor(Math.random() * practiceDeals.length)]];
  renderHand();
}

function renderCallScenario() {
  const scenario = callScenarios[state.call % callScenarios.length];
  $("#callScenario").textContent = scenario.text;
  $("#callFeedback").textContent = "";
  $("#callOptions").innerHTML = scenario.options
    .map((option) => `<button type="button" data-answer="${option}">${option}</button>`)
    .join("");
}

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
    `Spend 10 minutes naming tiles and sorting suits together.`,
    `Play ${friends <= 4 ? "one table" : "rotating-table"} open-hand practice for ${minutes} minutes.`,
    "Pause after each call so the caller explains chow, pung, or mahjong.",
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

  $("#tileBank").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-tile]");
    if (!button || state.hand.length >= 14) return;
    state.hand.push(button.dataset.tile);
    renderHand();
  });

  $("#practiceHand").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-index]");
    if (!button) return;
    state.hand.splice(Number(button.dataset.index), 1);
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
    window.setTimeout(() => {
      state.call += 1;
      renderCallScenario();
    }, 1800);
  });

  $("#quizAnswers").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-answer]");
    if (!button) return;
    const current = quizQuestions[state.quiz % quizQuestions.length];
    const isCorrect = button.dataset.answer === current.correct;
    if (isCorrect) state.quizScore += 1;
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
    state.call = 0;
    state.cardPrompt = 0;
    state.coachHand = [];
    state.customLabels = {};
    state.tilePhoto = "";
    state.ruleDrill = 0;
    state.groupPrompt = 0;
    state.hand = [];
    saveTileLabels();
    saveTilePhoto();
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

loadTileSetPreferences();
bindEvents();
renderAll();
