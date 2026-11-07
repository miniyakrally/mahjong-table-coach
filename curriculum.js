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
    "why": "Your hand is the collection you are playing with. The wall is the shared supply of face-down tiles; those tiles are not in anyone’s hand yet.",
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
      "A 3 Dot and a 3 Bam",
      "A 3 Crak and a 4 Crak",
      "Two 3 Dots"
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
      "Count the sticks or read the corner number. The bird is the number 1 in the Bam suit.",
      "Our optional Bird Bam toast happens when someone draws—takes—1 Bam from the face-down shared supply during play.",
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
    "question": "You are sorting a bird tile beside 2 Bam and 3 Bam. Where does it belong?",
    "answers": [
      "It is a separate bird suit",
      "It is 1 Bam",
      "It replaces a missing number"
    ],
    "correct": "It is 1 Bam",
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
      "One",
      "Nine",
      "Six"
    ],
    "correct": "Six",
    "why": "The circles tell you the number. The corner number helps too.",
    "visual": null
  },
  {
    "title": "Winds: four names, four different tiles",
    "body": "The wind tiles are North, East, West, and South. They are not numbered suits.",
    "bullets": [
      "Look for N, E, W, or S on a physical set. These pictures also show the Chinese characters. There are four copies of each wind.",
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
      "Yes, all winds match",
      "No"
    ],
    "correct": "No",
    "why": "North, East, West, and South are four different tiles. An East and a West do not match.",
    "visual": null
  },
  {
    "title": "Dragons: red, green, and white",
    "body": "There are three different dragons: Red, Green, and White. The White Dragon is often called Soap, even when its picture has a blue frame.",
    "bullets": [
      "Learn the three names first. Four copies of each dragon are in the set.",
      "A blue-framed White Dragon is still White Dragon, not a fourth kind of dragon.",
      "The three dragon pictures are different tiles. Red Dragon and Green Dragon do not match."
    ],
    "tiles": [
      "RD",
      "GD",
      "Soap"
    ],
    "caption": "Red Dragon, Green Dragon, White Dragon (Soap).",
    "question": "Your set has a red 中, a green 發, and a blue-framed rectangle. How many kinds of dragon are here?",
    "answers": [
      "Two: red and green",
      "Three: Red, Green, and White",
      "Four: red, green, blue, and white"
    ],
    "correct": "Three: Red, Green, and White",
    "why": "The framed tile is White Dragon, also called Soap. The frame color does not make it a Blue Dragon.",
    "visual": null
  },
  {
    "title": "Flowers: different pictures, same tile",
    "body": "American mahjong has eight flower tiles. A set may show different flowers or seasons on them. For play, they all count as flowers.",
    "bullets": [
      "Two flowers with different pictures still match.",
      "Like the other tiles you have been dealt, flowers stay with your hand. They are not bonus tiles that go off to the side.",
      "We will use F as the short name for a flower when we introduce the card."
    ],
    "tiles": [
      "F",
      "F",
      "F",
      "F"
    ],
    "caption": "These matching example faces stand for flower tiles; a real set may show eight different pictures.",
    "question": "You have a spring tile and a flower tile with a different picture. A friend says they cannot match. What do you tell them?",
    "answers": [
      "They match only if their printed numbers match",
      "They must show the same flower to match",
      "They match: both count as flowers"
    ],
    "correct": "They match: both count as flowers",
    "why": "All eight flowers count alike in American mahjong, including season pictures.",
    "visual": null
  },
  {
    "title": "Pairs, pungs, and kongs",
    "body": "A winning hand must match a row on the card. The row tells you which smaller groups belong together; you cannot win with just any collection of pairs and groups.",
    "bullets": [
      "One tile is a single. Two matching tiles are a pair.",
      "Three matching tiles are a pung. Four matching tiles are a kong.",
      "Matching means the same number and suit, or the same wind or dragon. Flowers all count alike."
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
    "question": "Look at the three collections below. Which is a pung?",
    "answers": [
      "The four 4 Bams",
      "The two 2 Craks",
      "The three 6 Dots"
    ],
    "correct": "The three 6 Dots",
    "why": "A pung has three matching tiles. The 2 Craks form a pair; the 4 Bams form a kong.",
    "visual": "groups"
  },
  {
    "title": "Jokers: fill one missing place",
    "body": "A joker can stand in for a missing tile in a matching group of three or more. It cannot replace a single tile or one tile of a pair. Start with this example: you need three 6 Dots, but you have only two.",
    "bullets": [
      "The first group below is the goal: three 6 Dots. There are eight joker tiles in the set.",
      "In the second group, a joker stands in for the missing 6 Dot. That group can do the same job.",
      "The joker represents 6 Dot in this group. It does not change the identity of your other tiles."
    ],
    "tiles": [
      "6D",
      "6D",
      "6D",
      "6D",
      "6D",
      "J"
    ],
    "caption": "Goal: 6 Dot, 6 Dot, 6 Dot. What you have: 6 Dot, 6 Dot, joker.",
    "question": "You need a kong of four 4 Bams. You have three 4 Bams and a joker. What can that joker represent?",
    "answers": [
      "A fourth 4 Bam in this group",
      "Any missing tile anywhere in the hand at once",
      "A new suit for the entire group"
    ],
    "correct": "A fourth 4 Bam in this group",
    "why": "The joker fills one place in this group of matching 4 Bams. It does not change any other group.",
    "visual": "joker"
  },
  {
    "title": "What a row on the card looks like",
    "body": "A card is a list of allowed hands. Each row uses repeated numbers and letters to show the exact groups to collect. Here is an original teaching row, laid out like a card row.",
    "bullets": [
      "Read 222 as three 2s, not the number two hundred twenty-two. Read FFF as three flowers.",
      "For numbered groups, different colors mean different suits; the same color means the same suit. In this example, we choose Craks for blue, Bams for green, and Dots for pink. On the annual card, a color does not name one fixed suit. Flowers and winds do not become numbered suits because of their print color.",
      "The words in parentheses limit your choices. This practice row fixes the numbers and uses three suits. Collect all 14 places in one row; do not mix groups from different rows."
    ],
    "visual": "card",
    "caption": "Read the printed row first. Then compare each printed group with the tiles underneath.",
    "question": "This row shows 222 in blue and 4444 in green. Which interpretation follows the card?",
    "answers": [
      "Three 2s and four 4s in different suits",
      "Any seven tiles using the numbers 2 and 4",
      "Two 2s and four 4s in the same suit"
    ],
    "correct": "Three 2s and four 4s in different suits",
    "why": "Three printed 2s mean three tiles. The different colors require different suits.",
    "tiles": []
  },
  {
    "title": "Jokers cannot fill singles or pairs",
    "body": "The size of the required group matters. Jokers are allowed in matching groups of three or more, but not in singles or pairs.",
    "bullets": [
      "Allowed: two 6 Dots and a joker can fill a pung of 6 Dots.",
      "Not allowed: a flower and a joker cannot fill a flower pair. You need two real flowers.",
      "It does not matter whether this would be your final winning tile. The single-and-pair restriction still applies."
    ],
    "visual": "joker-limits",
    "caption": "Compare the group sizes: three places in the pung, only two in the pair.",
    "question": "Your last missing group is a pair of 2 Craks. You hold one 2 Crak and draw a joker. What now?",
    "answers": [
      "Keep playing; the pair still needs another real 2 Crak",
      "Declare mahjong because the joker is the final tile",
      "Use the joker only if the hand is concealed"
    ],
    "correct": "Keep playing; the pair still needs another real 2 Crak",
    "why": "A joker cannot fill a pair, even to finish mahjong. The same restriction applies to a single.",
    "tiles": []
  },
  {
    "title": "2026: read the zero as Soap",
    "body": "The official card changes each year. Here is how to read the year 2026 in tiles. This is a notation example, not a complete official winning hand.",
    "bullets": [
      "The numbers read 2, zero, 2, 6. Soap is the zero.",
      "The card decides which suits the numbered tiles use and what other groups complete the hand. Read each place in the year separately; the two 2s are not an ordinary matching group that can use a joker.",
      "The full official 2026 hand list is not included. You do not need it for our original practice card."
    ],
    "tiles": [
      "2C",
      "Soap",
      "2B",
      "6D"
    ],
    "caption": "2 · Soap (0) · 2 · 6. The suits here illustrate the idea only.",
    "question": "In the year notation 2026, you have the two 2s and the 6 but no Soap. Does a joker fill the zero?",
    "answers": [
      "Yes, the zero is a number",
      "No, the zero is a single Soap tile",
      "Only if the joker is white"
    ],
    "correct": "No, the zero is a single Soap tile",
    "why": "The zero represents Soap. It is a single tile, so a joker cannot replace it.",
    "visual": null
  },
  {
    "title": "X and C: what may other players see?",
    "body": "Start with your tile faces turned toward you, so only you can see them. Find X or C beside the groups at the right end of your chosen card row, near its point value. This letter tells you whether you may show called groups while building the hand.",
    "bullets": [
      "A discard is a tile a player removes from their hand, names aloud, and places face up in the center of the table. X means you may call—claim—the latest available discard to complete an allowed matching group of three or more. Show that whole group face up on top of your rack. This is an exposure; the rest of your hand stays hidden.",
      "C means concealed. You cannot call a discard to reveal an unfinished part of the hand. You may call the one tile that completes the entire hand, then reveal everything for mahjong.",
      "An X hand can also be completed without exposing anything. Playing a teaching round with all tiles visible is a learning aid, not what X means."
    ],
    "visual": "exposure",
    "caption": "Left: an X hand after showing one pung. Right: a C hand with no groups exposed.",
    "question": "You are building an X hand and have not called anything. Must you show a group before you can win?",
    "answers": [
      "No, X allows exposures but does not require them",
      "Only if another player has already exposed a group",
      "Yes, X requires at least one exposure"
    ],
    "correct": "No, X allows exposures but does not require them",
    "why": "X gives permission to make legal exposures. You can still draw all the tiles yourself and keep your hand hidden until mahjong.",
    "tiles": []
  },
  {
    "title": "Meet the table before building the walls",
    "body": "Sit one player on each side of a square table. Put a rack in front of each player. The four walls form a smaller square inside the racks.",
    "bullets": [
      "The walls are a shared supply of face-down tiles. They do not belong to the player sitting behind them.",
      "A standard American set has 152 playing tiles. Divide them into four walls of 38 tiles each.",
      "Each wall has 19 stacks, with two tiles in each stack. Your hand will sit on your rack, outside the walls."
    ],
    "visual": "table",
    "caption": "Top view. East is the dealer and sits at the bottom in this example. The compass names are seats, not directions on a map.",
    "question": "A friend puts 19 individual tiles in a single row for their wall. What needs fixing?",
    "answers": [
      "Add one more tile so East has 20",
      "Nothing: 19 tiles make a complete wall",
      "Add a second layer: 19 stacks need two tiles each"
    ],
    "correct": "Add a second layer: 19 stacks need two tiles each",
    "why": "Each wall contains 38 tiles: 19 stacks of two. Across four walls that gives 152 tiles.",
    "tiles": []
  },
  {
    "title": "Break the wall, then deal in small batches",
    "body": "Use the steps below to follow one example deal. The diagram keeps East at the bottom so “East’s right” stays in the same place.",
    "bullets": [
      "East rolls two dice. In our example they total 7. Count seven stacks from East’s right end of the wall, then make a gap.",
      "Start taking tiles just to the left of that gap. Each player receives two stacks—four tiles—at a time. Go East, then the player to East’s right, then around the table. Repeat three times: everyone now has 12.",
      "Finish the deal: East receives two more tiles and everyone else one. Check the totals—14 for East, 13 for the others—before arranging the racks."
    ],
    "visual": "deal",
    "caption": "Use Next step to watch the gap, the four-tile batches, and the final counts.",
    "question": "After three trips around the table, each player has received four tiles each time. What still needs to happen?",
    "answers": [
      "Everyone starts playing with 12 tiles",
      "East gets two more; each other player gets one",
      "Everyone gets two more tiles"
    ],
    "correct": "East gets two more; each other player gets one",
    "why": "Three batches of four make 12. East needs two more for 14; the other players need one each for 13.",
    "tiles": []
  },
  {
    "title": "Mark the tail with a fishtail",
    "body": "The gap creates two ends of the tile supply. Start dealing and drawing from one end. The other end is the tail, where the supply eventually finishes.",
    "bullets": [
      "In this example, the next tiles come from the left side of the gap in East’s wall. The right side is the tail.",
      "The player tending that wall may turn the tail-end tiles sideways to mark it. This is called fishtailing. Keep the tile faces down and their order unchanged.",
      "The fishtail is a visual reminder, not a separate pile of bonus tiles. Ask before moving someone else’s wall. Never touch another player’s rack or hand."
    ],
    "visual": "tail",
    "caption": "Same table and same gap as the previous lesson. The close-up labels the drawing side and the fishtailed tail.",
    "question": "You see the sideways fishtail and a gap beside it. Where should the next draw come from?",
    "answers": [
      "Either end, as long as the tile stays face down",
      "The active drawing side, on the other side of the gap",
      "The fishtail itself"
    ],
    "correct": "The active drawing side, on the other side of the gap",
    "why": "The sideways end marks the tail. Start with the next tile on the active drawing side and follow the wall in order.",
    "tiles": []
  },
  {
    "title": "First Charleston: ROL",
    "body": "After the deal, before East starts play, everyone trades tiles in the Charleston. Compare your rack with a possible card row, choose three tiles that do not help it, and pass them together. Never pass a joker.",
    "bullets": [
      "R: everyone passes three tiles face down to the player on their right. You receive three from your left. Add those to your hand, then choose again for the next pass.",
      "O: everyone passes three across, or “over.” L: everyone passes three left. That is ROL: Right, Over, Left.",
      "Wait until everyone is ready before each pass. The next lesson shows the optional second Charleston and courtesy pass."
    ],
    "visual": "rol",
    "caption": "Watch the arrows from your seat. “Over” means across the table. Passing exchanges tiles between hands; these tiles are not discards in the center.",
    "question": "You have finished passing right and then across. What finishes the first Charleston?",
    "answers": [
      "Any number across",
      "Three tiles left",
      "Three tiles right"
    ],
    "correct": "Three tiles left",
    "why": "The first Charleston is ROL: Right, Over, Left. Each of these passes contains three tiles.",
    "tiles": []
  },
  {
    "title": "Second Charleston: LOR",
    "body": "After ROL, any one player may stop the second Charleston before it starts. If everyone agrees to continue, do LOR: Left, Over, Right.",
    "bullets": [
      "Notice the two left passes next to each other: ROL | LOR. Finishing the first left does not mean the next pass is across.",
      "Once the second Charleston begins, finish all three passes: left, across, right. Jokers still stay in your rack.",
      "After stopping or finishing the second Charleston, you and the player across may agree on a courtesy exchange of zero to three tiles. Use the smaller number requested: if you ask for three and they ask for one, exchange one each. Zero means no exchange."
    ],
    "visual": "lor",
    "caption": "ROL | LOR. The second round reverses the first. Blind passing is explained separately in Charleston practice.",
    "question": "Everyone agrees to a second Charleston. You just finished the first left. Where does the very next pass go?",
    "answers": [
      "Across: avoid passing left twice",
      "Right: start ROL again",
      "Left: the second Charleston starts LOR"
    ],
    "correct": "Left: the second Charleston starts LOR",
    "why": "The complete sequence is right, across, left, left, across, right. The two left passes are intentional.",
    "tiles": []
  },
  {
    "title": "Take a turn with a pattern in view",
    "body": "We are using the practice row shown below. Your rack is one 6 Dot short of finishing it. First look at the row, then at your rack.",
    "bullets": [
      "East makes the first discard without drawing, because East started with 14 tiles. After that, turns move to the right.",
      "On an ordinary turn, take the next face-down tile from the wall: this is a draw. You now have 14 tiles. If you draw 9 Bam here, it does not fill the missing 6 Dot. Choose one tile, say its name, and place it face up in the center. This discard returns you to 13 tiles.",
      "If you draw the missing 6 Dot, all 14 tiles match this row. Declare mahjong and keep that last tile; do not discard it."
    ],
    "visual": "turn",
    "caption": "The row, your 13-tile rack, and the two possible draws are shown together.",
    "question": "With this rack and this exact row, which action follows a draw of 9 Bam?",
    "answers": [
      "Discard 9 Bam; the missing tile is still 6 Dot",
      "Declare mahjong because you now hold 14 tiles",
      "Keep 9 Bam and discard one of the required flowers"
    ],
    "correct": "Discard 9 Bam; the missing tile is still 6 Dot",
    "why": "Fourteen tiles alone do not make a win. The hand still needs its fourth 6 Dot, and the row does not use 9 Bam.",
    "tiles": []
  },
  {
    "title": "Call a discard before it is too late",
    "body": "Discards collect face up in the center of the table. A call claims only the latest available discard, not an older one. For an X hand, an ordinary call must complete a matching group of three or more required by the row. A call for mahjong must finish the entire 14-tile hand.",
    "bullets": [
      "For this row, if you hold three 6 Dots and someone discards the fourth, you may call it. Show the completed kong on top of your rack, then discard. Do not also draw. A single or pair may be called only to finish mahjong; a discarded joker can never be called, even for mahjong.",
      "Once the next player racks the tile they drew, the previous discard can no longer be called. “Rack” means place the drawn tile on the sloped part of their rack; merely lifting and looking at it is not enough.",
      "Other actions can also close that window: the next player names or discards the drawn tile, announces or begins a joker exchange, or declares mahjong. If players want the same discard, mahjong takes priority over a call for a group."
    ],
    "visual": "call",
    "caption": "Only the newest available discard can be called. Tiles already passed over are not a second supply.",
    "question": "You need the discard. The next player has lifted a wall tile and looked at it, but has not racked it or taken another action. Can you still call?",
    "answers": [
      "Only if the next player agrees to give up their turn",
      "Yes, if the discard completes a legal exposure or mahjong",
      "No, picking the tile up always ends the chance to call"
    ],
    "correct": "Yes, if the discard completes a legal exposure or mahjong",
    "why": "Looking at a drawn tile is not the same as racking it. Once it is racked—or another closing action happens—the prior discard is no longer available.",
    "tiles": [],
    "details": "Timing questions and simultaneous calls can be subtle. During a teaching game, pause and check the official rules rather than settling a dispute by speed."
  },
  {
    "title": "Exchange a joker without touching someone else’s tiles",
    "body": "On your turn, after drawing or making a legal call, you may exchange a matching natural tile—a real tile such as 6 Dot, rather than another joker—for a joker in a valid face-up exposure.",
    "bullets": [
      "In the example, 6 Dot, 6 Dot, joker is exposed. If you hold a 6 Dot, offer it to the owner and ask for the joker in exchange.",
      "Never touch another player’s tiles or rack. That includes taking their joker, rearranging an exposure, or moving a tile to “help.” Let the owner handle their tiles.",
      "You cannot call a discarded 6 Dot only to make this exchange. The trade does not replace your normal discard; finish your turn unless you have mahjong."
    ],
    "visual": "exchange",
    "caption": "Offer your 6 Dot; the owner swaps it for their exposed joker. Each player handles their own tiles.",
    "question": "A 6 Dot is discarded, and you notice one could replace an exposed joker. You do not already have 6 Dot. What can you do?",
    "answers": [
      "Call 6 Dot and immediately exchange it",
      "Reach over and trade the discarded tile for the joker",
      "Do not call solely for the exchange; wait for a tile you can legally use"
    ],
    "correct": "Do not call solely for the exchange; wait for a tile you can legally use",
    "why": "A discard must complete your permitted exposure or your winning hand. It cannot be claimed just to trade for a joker. Never touch the other player’s tiles.",
    "tiles": []
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
