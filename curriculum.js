// Original teaching examples, not the official NMJL annual hand list.
const lessons = [
  {
    "title": "Start here: tiles, a rack, and a goal",
    "body": "American mahjong is played by four people. Each person keeps their tiles on a rack, the long stand in front of them. Your tiles are your hand.",
    "bullets": [
      "The aim is to collect 14 tiles that match one allowed pattern, called a winning hand.",
      "The allowed patterns are printed on a card. We include a small practice card, so you need no supplies to learn here.",
      "Learn a little, look at the tiles, then try the question. Nothing is timed."
    ],
    "tiles": [
      "2C",
      "2C",
      "2C",
      "4B",
      "4B"
    ],
    "caption": "Part of a hand. These tiles would sit on your rack.",
    "question": "What does “your hand” mean?",
    "answers": [
      "Your collection of tiles",
      "Only the tile you just picked up",
      "The whole table"
    ],
    "correct": "Your collection of tiles",
    "why": "Your hand is all the tiles you are playing with, including any groups you later show on your rack.",
    "visual": null
  },
  {
    "title": "Craks, Bams, and Dots are suits",
    "body": "Playing cards have hearts, diamonds, clubs, and spades. Mahjong has three numbered suits: Craks, Bams, and Dots.",
    "bullets": [
      "Craks is short for characters. Bams is short for bamboo. Dots show circles.",
      "Each suit has numbers 1 through 9. There are four copies of each numbered tile.",
      "A 3 Crak, 3 Bam, and 3 Dot share a number, but they are three different tiles."
    ],
    "tiles": [
      "3C",
      "3B",
      "3D"
    ],
    "caption": "Same number, three different suits. Say “three Crak,” “three Bam,” and “three Dot.”",
    "question": "Which two tiles are identical?",
    "answers": [
      "Two 3 Dots",
      "A 3 Dot and a 3 Bam",
      "A 3 Crak and a 4 Crak"
    ],
    "correct": "Two 3 Dots",
    "why": "Both the number and suit must match.",
    "visual": null
  },
  {
    "title": "Craks: look for the number",
    "body": "Craks have a Chinese number above the character 萬. Most sets also print a small number in a corner.",
    "bullets": [
      "The tiles below run from 1 Crak to 9 Crak.",
      "Read the corner number while you learn the Chinese numbers.",
      "“Crak” is pronounced like “crack.” Different sets may spell it Crak, Crack, or Character."
    ],
    "tiles": [
      "1C",
      "2C",
      "3C",
      "4C",
      "5C",
      "6C",
      "7C",
      "8C",
      "9C"
    ],
    "caption": "The complete Crak suit.",
    "question": "Are 2 Crak and 2 Bam the same tile?",
    "answers": [
      "No, they are different suits",
      "Yes, they are both 2"
    ],
    "correct": "No, they are different suits",
    "why": "Matching numbers alone are not enough: the suit matters too.",
    "visual": null
  },
  {
    "title": "Bams: bamboo, with one bird",
    "body": "Most Bam tiles show bamboo sticks. The exception is 1 Bam, which usually shows a bird.",
    "bullets": [
      "Count the sticks or read the corner number. The bird is 1 Bam, not a flower or a joker.",
      "Our optional Bird Bam toast happens when someone draws 1 Bam from the wall during play.",
      "Join in with any drink, or skip the toast. This is our social tradition, not a game rule."
    ],
    "tiles": [
      "1B",
      "2B",
      "3B",
      "4B",
      "5B",
      "6B",
      "7B",
      "8B",
      "9B"
    ],
    "caption": "1 Bam is the bird. The others show bamboo.",
    "question": "What is the bird tile?",
    "answers": [
      "1 Bam",
      "A flower",
      "A joker"
    ],
    "correct": "1 Bam",
    "why": "The bird belongs to the Bam suit. It is the number 1.",
    "visual": null
  },
  {
    "title": "Dots: count the circles",
    "body": "Dots are the third numbered suit. Each tile has the number of circles its name says.",
    "bullets": [
      "One large decorated circle usually means 1 Dot. Nine small circles mean 9 Dot.",
      "Pictures and colors vary by set. Use the suit and number to identify a tile.",
      "Try saying all nine tile names aloud."
    ],
    "tiles": [
      "1D",
      "2D",
      "3D",
      "4D",
      "5D",
      "6D",
      "7D",
      "8D",
      "9D"
    ],
    "caption": "The complete Dot suit.",
    "question": "How many circles does 6 Dot show?",
    "answers": [
      "Six",
      "One",
      "Nine"
    ],
    "correct": "Six",
    "why": "The circles tell you the number. The corner number helps too.",
    "visual": null
  },
  {
    "title": "Winds: four names, four different tiles",
    "body": "The wind tiles are North, East, West, and South. They are not numbered suits.",
    "bullets": [
      "Look for N, E, W, or S on a physical set. These pictures also show the Chinese characters.",
      "Two East tiles match. An East and a West do not.",
      "East is also the name for the dealer. The East tile itself does not decide who deals."
    ],
    "tiles": [
      "N",
      "E",
      "W",
      "S"
    ],
    "caption": "North, East, West, South. On a card you may see N E W S.",
    "question": "Do East and West match?",
    "answers": [
      "No",
      "Yes, all winds match"
    ],
    "correct": "No",
    "why": "Each wind is a separate tile. Keep the wind named by your chosen pattern.",
    "visual": null
  },
  {
    "title": "Dragons: red, green, and white",
    "body": "There are three dragon tiles. The white dragon is often called Soap. It may have a blue frame, a white face, or a different design.",
    "bullets": [
      "Red Dragon matches Craks, Green Dragon matches Bams, and White Dragon matches Dots when a pattern asks for matching dragons.",
      "Soap has another job: it stands for zero in a year pattern.",
      "A white dragon is not a joker. It cannot stand for any tile you want."
    ],
    "tiles": [
      "RD",
      "GD",
      "Soap"
    ],
    "caption": "Red Dragon, Green Dragon, White Dragon (Soap).",
    "question": "Is Soap a wild tile?",
    "answers": [
      "No, it is the White Dragon",
      "Yes, it can replace any tile"
    ],
    "correct": "No, it is the White Dragon",
    "why": "Soap is a particular dragon. It also represents zero in year patterns.",
    "visual": null
  },
  {
    "title": "Flowers stay in your hand",
    "body": "American mahjong has eight flower tiles. They may show different flowers or seasons. They all count as the same kind of tile.",
    "bullets": [
      "A pattern marked F needs a flower. FF means two flowers.",
      "Keep flowers on your rack until you use, pass, or discard them. Do not put them aside and draw replacements.",
      "You can pass flowers in the Charleston. Keep them if your chosen pattern needs them."
    ],
    "tiles": [
      "F",
      "F",
      "F",
      "F"
    ],
    "caption": "These matching example faces stand for flower tiles; a real set may show eight different pictures.",
    "question": "Your pattern needs two flowers. Must the pictures match?",
    "answers": [
      "No, all flowers count alike",
      "Yes, the pictures must match"
    ],
    "correct": "No, all flowers count alike",
    "why": "Any two flower tiles make a flower pair in American mahjong.",
    "visual": null
  },
  {
    "title": "Pairs, pungs, and kongs",
    "body": "A group is a small collection of tiles within a hand. The group’s size tells you its name.",
    "bullets": [
      "One tile is a single. Two matching tiles are a pair.",
      "Three matching tiles are a pung. Four are a kong. Five are a quint; most quints need a joker because there are only four natural copies.",
      "The pattern tells you which groups to collect. Three consecutive tiles are not a group you can call as a chow in American mahjong."
    ],
    "tiles": [
      "2C",
      "2C",
      "6D",
      "6D",
      "6D",
      "4B",
      "4B",
      "4B",
      "4B"
    ],
    "caption": "Pair of 2 Craks · pung of 6 Dots · kong of 4 Bams.",
    "question": "What is a pung?",
    "answers": [
      "Three matching tiles",
      "Two matching tiles",
      "Three numbers in a row"
    ],
    "correct": "Three matching tiles",
    "why": "A pung is three copies of one tile, such as three 6 Dots.",
    "visual": null
  },
  {
    "title": "Jokers fill larger matching groups",
    "body": "A joker is a wild tile. American sets have eight. Use one in place of a missing tile in a matching group of three or more.",
    "bullets": [
      "Two 6 Dots and a joker can fill a pung of 6 Dots.",
      "A joker cannot replace a single or fill a pair, even when it would finish your hand.",
      "Never pass a joker in the Charleston. A discarded joker cannot be claimed."
    ],
    "tiles": [
      "6D",
      "6D",
      "J",
      "F",
      "J"
    ],
    "caption": "6 Dot + 6 Dot + joker can fill a pung. Flower + joker cannot fill a pair.",
    "question": "Can one flower and one joker make a flower pair?",
    "answers": [
      "No",
      "Yes"
    ],
    "correct": "No",
    "why": "A pair needs two actual matching tiles. Jokers are for matching groups of at least three.",
    "visual": null
  },
  {
    "title": "Read a pattern one group at a time",
    "body": "Think of the card as a menu of hands you may build. Each row is one complete 14-tile pattern. You must finish the whole row, not a bit from several rows.",
    "bullets": [
      "The practice card shown here has three original patterns. You can use it for every exercise in this app. It is not the official 2026 NMJL card.",
      "For example, our first row needs a pung of 2 Craks, a kong of 4 Bams, a kong of 6 Dots, and a pung of flowers.",
      "On an annual card, colors separate suits; they do not force red ink to mean Craks. Always read the words beside the row too."
    ],
    "tiles": [
      "2C",
      "2C",
      "2C",
      "4B",
      "4B",
      "4B",
      "4B",
      "6D",
      "6D",
      "6D",
      "6D",
      "F",
      "F",
      "F"
    ],
    "caption": "Our first practice pattern: 3 + 4 + 4 + 3 = 14 tiles.",
    "question": "Can you mix half of one row with half of another to win?",
    "answers": [
      "No, finish one complete row",
      "Yes, any 14 tiles will do"
    ],
    "correct": "No, finish one complete row",
    "why": "Choose one pattern and match all its groups.",
    "visual": "card"
  },
  {
    "title": "2026: read the zero as Soap",
    "body": "The official card changes each year. Here is how to read the year 2026 in tiles. This is a notation example, not a complete official winning hand.",
    "bullets": [
      "The numbers read 2, zero, 2, 6. Soap is the zero.",
      "The card decides which suits the numbered tiles use and what other groups complete the hand.",
      "The full official 2026 hand list is not included. You do not need it for our original practice card."
    ],
    "tiles": [
      "2C",
      "Soap",
      "2B",
      "6D"
    ],
    "caption": "2 · Soap (0) · 2 · 6. The suits here illustrate the idea only.",
    "question": "Which tile represents zero?",
    "answers": [
      "Soap / White Dragon",
      "A joker",
      "A flower"
    ],
    "correct": "Soap / White Dragon",
    "why": "Soap is the zero in a year pattern. A joker cannot replace that single zero.",
    "visual": null
  },
  {
    "title": "X means you may show groups; C means keep them hidden",
    "body": "To expose a group means to place it face up on top of your rack after calling a discard. Other players can then see it.",
    "bullets": [
      "X marks a hand that allows legal exposures. It does not mean you must expose it.",
      "C marks a concealed hand. Keep its tiles hidden during play; you may call only the final tile that completes mahjong.",
      "A discard can complete a single or pair only when it also completes your entire winning hand."
    ],
    "tiles": [
      "RD",
      "RD",
      "RD"
    ],
    "caption": "Three Red Dragons shown face up: an exposed pung.",
    "question": "Your C hand needs a kong, but you are not ready to win. Can you call a discard for it?",
    "answers": [
      "No, keep the hand concealed",
      "Yes, expose the kong"
    ],
    "correct": "No, keep the hand concealed",
    "why": "C hands cannot expose groups before mahjong.",
    "visual": null
  },
  {
    "title": "Build the walls and deal",
    "body": "Mix all 152 tiles face down. Each player builds a wall 19 stacks long and two tiles high. Put the four walls into a square.",
    "bullets": [
      "Choose a dealer, called East. East rolls two dice. Count that many stacks from the right end of East’s wall, as East sees it, and make a gap there.",
      "The tiles left of the gap begin the deal. Starting with East, give each player four tiles at a time, going to the right, until everyone has 12. Then give East two more and everyone else one.",
      "East finishes with 14; the others have 13. Wait until the deal is complete to arrange tiles on your rack."
    ],
    "tiles": [],
    "caption": "The wall is a supply of face-down tiles, not part of anyone’s hand.",
    "question": "How many tiles does East have before the first discard?",
    "answers": [
      "14",
      "13",
      "12"
    ],
    "correct": "14",
    "why": "East starts with one extra tile and makes the first discard without drawing.",
    "visual": "wall"
  },
  {
    "title": "Fishtail the tail, then draw from the other end",
    "body": "After the wall is broken, there are two ends. One supplies the next tile. The other is the tail, where drawing eventually finishes.",
    "bullets": [
      "Fishtailing turns the end tiles at the tail sideways to mark that end. Keep their faces down and their order unchanged.",
      "Ask the player in front of that wall to point out both ends before you move anything.",
      "Take the top tile of the next stack at the drawing end, then the bottom tile. Follow the wall in order; do not start at the fishtail."
    ],
    "tiles": [],
    "caption": "The sideways end marks the tail, not the next draw.",
    "question": "What does a fishtail mark?",
    "answers": [
      "The end of the wall",
      "The next tile to draw",
      "A bonus tile"
    ],
    "correct": "The end of the wall",
    "why": "The tail marks where the wall ends. Drawing starts at the other open end.",
    "visual": "wall"
  },
  {
    "title": "The Charleston: trade before playing",
    "body": "The Charleston is a series of tile exchanges before the first discard. It gives you a chance to trade tiles your chosen pattern does not need.",
    "bullets": [
      "Choose three unwanted tiles. Everyone passes right, then across, then left. Keep jokers. Wait until all players are ready before each exchange.",
      "Any player may stop the second Charleston before it begins. If everyone agrees to continue, complete left, across, right.",
      "Afterward, you and the player opposite may agree to exchange up to three more tiles. Use the smaller requested number. This is the courtesy pass."
    ],
    "tiles": [
      "9B",
      "E",
      "RD"
    ],
    "caption": "Three possible passing tiles if your chosen pattern needs none of them.",
    "question": "What are the first three pass directions?",
    "answers": [
      "Right, across, left",
      "Left, across, right",
      "Across, right, left"
    ],
    "correct": "Right, across, left",
    "why": "The first Charleston is right, across, left. Practice it in the Charleston tab.",
    "visual": "passing"
  },
  {
    "title": "Draw one, then discard one",
    "body": "After the Charleston, East names and discards one tile face up. Play moves to East’s right. Each later ordinary turn begins with a draw from the wall.",
    "bullets": [
      "Add the drawn tile to your hand. Compare all your tiles with the pattern you chose.",
      "Keep a useful tile and discard one you do not need. Say its name, such as “nine Bam.” After discarding, you have 13 tiles total, including exposed groups.",
      "If your draw completes all 14 tiles of your pattern, declare mahjong instead of discarding."
    ],
    "tiles": [
      "9B",
      "6D"
    ],
    "caption": "For our first practice pattern, 6 Dot helps and 9 Bam does not.",
    "question": "Your draw completes your 14-tile hand. Do you discard?",
    "answers": [
      "No, declare mahjong",
      "Yes, always discard"
    ],
    "correct": "No, declare mahjong",
    "why": "A winning hand has 14 tiles. Keep the final tile and show the complete hand.",
    "visual": null
  },
  {
    "title": "Calling a discard changes your turn",
    "body": "A call means asking to take the latest discard. Before calling, check that it completes an allowed matching group for your hand, or finishes your whole hand.",
    "bullets": [
      "For an X hand, call, take the tile, and show the complete group on top of your rack. Then discard. Do not also draw from the wall.",
      "You may use jokers already in your hand to complete a legal exposure. You may not call a tile just to save it for later.",
      "Call promptly, before the next player racks their draw or discards. Mahjong takes priority over a call for a group."
    ],
    "tiles": [
      "6D",
      "6D",
      "6D",
      "6D"
    ],
    "caption": "If you have three 6 Dots and need a kong, a discarded fourth can complete it.",
    "question": "After calling a discard and exposing the group, what comes next?",
    "answers": [
      "Discard one tile",
      "Draw another tile",
      "Pass three tiles"
    ],
    "correct": "Discard one tile",
    "why": "A call replaces your draw. Expose the group, then discard.",
    "visual": null
  },
  {
    "title": "Trade for an exposed joker politely",
    "body": "On your turn, after drawing or making a legal call, you may trade a matching natural tile for a joker in a valid exposure, including your own.",
    "bullets": [
      "If someone has 6 Dot, 6 Dot, joker exposed and you hold 6 Dot, offer that tile for the joker. Ask the owner to make the exchange.",
      "Do not call a discarded tile just to exchange it for a joker. Do not reach over and take someone else’s joker.",
      "The exchange does not replace your normal discard. Finish your turn by discarding unless you have mahjong."
    ],
    "tiles": [
      "6D",
      "6D",
      "J",
      "6D"
    ],
    "caption": "The last 6 Dot can replace the exposed joker.",
    "question": "Can you claim a discarded 6 Dot only to trade it for a joker?",
    "answers": [
      "No",
      "Yes"
    ],
    "correct": "No",
    "why": "You must already have the replacement tile on your turn. A discard must complete a legal exposure or mahjong.",
    "visual": null
  },
  {
    "title": "A friendly first game",
    "body": "Use our practice card for a slow first round. Put racks where the group can see them if everyone agrees. Ask questions and explain decisions as you go.",
    "bullets": [
      "Handle your own tiles and rack. Ask before moving another player’s wall or touching an exposure.",
      "For mahjong, reveal all 14 tiles and compare them with one complete pattern. If the wall runs out without a winner, the hand ends with no winner.",
      "For this visit, skip payments and strict penalties while learning. Regular card games use the score and payment rules on the agreed card."
    ],
    "tiles": [
      "1B",
      "F",
      "J"
    ],
    "caption": "Remember the bird, the flowers, and the joker. Keep drinks beside the playing area.",
    "question": "Someone looks unsure. What helps during a teaching game?",
    "answers": [
      "Ask whether they want a hint",
      "Move their tiles for them",
      "Rush them to discard"
    ],
    "correct": "Ask whether they want a hint",
    "why": "Let each person make their own choices. Explain a rule or give a hint when invited.",
    "visual": null
  }
];
const practiceCard = [
  {
    "id": "groups",
    "title": "Flowers and three suits",
    "note": "X · Fixed numbers and suits · Jokers may fill groups of three or more",
    "groups": [
      [
        "2C",
        "2C",
        "2C"
      ],
      [
        "4B",
        "4B",
        "4B",
        "4B"
      ],
      [
        "6D",
        "6D",
        "6D",
        "6D"
      ],
      [
        "F",
        "F",
        "F"
      ]
    ]
  },
  {
    "id": "winds",
    "title": "Four winds",
    "note": "X · Fixed winds · Jokers may fill these matching groups",
    "groups": [
      [
        "E",
        "E",
        "E"
      ],
      [
        "S",
        "S",
        "S"
      ],
      [
        "W",
        "W",
        "W",
        "W"
      ],
      [
        "N",
        "N",
        "N",
        "N"
      ]
    ]
  },
  {
    "id": "pairs",
    "title": "Seven pairs",
    "note": "C · Fixed numbers and suits · No jokers",
    "groups": [
      [
        "1C",
        "1C"
      ],
      [
        "3C",
        "3C"
      ],
      [
        "5B",
        "5B"
      ],
      [
        "7B",
        "7B"
      ],
      [
        "2D",
        "2D"
      ],
      [
        "8D",
        "8D"
      ],
      [
        "Soap",
        "Soap"
      ]
    ]
  }
];
