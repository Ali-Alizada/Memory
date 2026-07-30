// export interface Card {
//   id: string; // unique card id (per card instance)
//   pairId: number; // id shared by the two matching cards
//   boardKey: string; // which board / card-set this card belongs to
//   asset: string; // image filename or asset key
//   label?: string; // human readable label 
//   alt?: string; // alt text for accessibility 

// }

// // Exports card sets keyed by a board identifier. This keeps card data
// // independent from board layout and allows adding more boards later.
// export const cardSets: Record<string, Card[]> = {
//     //Code vibes as example board; contains 8 pairs => 16 cards
//   codeVibes: [
//     {
//       id: "cv-html-a",
//       pairId: 1,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/htmlL.svg",
//       label: "HTML",
//       alt: "HTML logo",

//     },
//     {
//       id: "cv-html-b",
//       pairId: 1,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/htmlL.svg",
//       label: "HTML",
//       alt: "HTML logo",
 
//     },

//     {
//       id: "cv-css-a",
//       pairId: 2,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/CSSL.svg",
//       label: "CSS",
//       alt: "CSS logo",

//     },
//     {
//       id: "cv-css-b",
//       pairId: 2,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/CSSL.svg",
//       label: "CSS",
//       alt: "CSS logo",

//     },

//     {
//       id: "cv-js-a",
//       pairId: 3,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/JsL.svg",
//       label: "JavaScript",
//       alt: "JavaScript logo",

//     },
//     {
//       id: "cv-js-b",
//       pairId: 3,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/JsL.svg",
//       label: "JavaScript",
//       alt: "JavaScript logo",

//     },

//     {
//       id: "cv-ts-a",
//       pairId: 4,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/TsL.svg",
//       label: "TypeScript",
//       alt: "TypeScript logo",

//     },
//     {
//       id: "cv-ts-b",
//       pairId: 4,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/TsL.svg",
//       label: "TypeScript",
//       alt: "TypeScript logo",

//     },

//     {
//       id: "cv-vue-a",
//       pairId: 5,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/VjsL.svg",
//       label: "Vue",
//       alt: "VueJs logo",

//     },
//     {
//       id: "cv-vue-a",
//       pairId: 5,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/VjsL.svg",
//       label: "Vue",
//       alt: "VueJs logo",

//     },

//     {
//       id: "cv-git-a",
//       pairId: 6,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/gitL.svg",
//       label: "Git",
//       alt: "Git logo",

//     },
//     {
//       id: "cv-git-b",
//       pairId: 6,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/gitL.svg",
//       label: "Git",
//       alt: "Git logo",

//     },

//     {
//       id: "cv-github-a",
//       pairId: 7,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/GhL.svg",
//       label: "GitHub",
//       alt: "GitHub logo",

//     },
//     {
//       id: "cv-github-b",
//       pairId: 7,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/GhL.svg",
//       label: "GitHub",
//       alt: "GitHub logo",

//     },

//     {
//       id: "cv-react-a",
//       pairId: 8,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/RctL.svg",
//       label: "React",
//       alt: "React logo",

//     },
//     {
//       id: "cv-react-b",
//       pairId: 8,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/RctL.svg",
//       label: "React",
//       alt: "React logo",

//     },

//     {
//       id: "cv-react-a",
//       pairId: 9,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/AngL.svg",
//       label: "React",
//       alt: "React logo",

//     },
//     {
//       id: "cv-react-b",
//       pairId: 9,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/AngL.svg",
//       label: "React",
//       alt: "React logo",

//     },
//     {
//       id: "cv-react-a",
//       pairId: 10,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/BtsL.svg",
//       label: "React",
//       alt: "React logo",

//     },
//     {
//       id: "cv-react-b",
//       pairId: 10,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/BtsL.svg",
//       label: "React",
//       alt: "React logo",

//     },
//     {
//       id: "cv-react-a",
//       pairId: 11,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/CmdL.svg",
//       label: "React",
//       alt: "React logo",

//     },
//     {
//       id: "cv-react-b",
//       pairId: 11,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/CmdL.svg",
//       label: "React",
//       alt: "React logo",

//     },
//     {
//       id: "cv-react-a",
//       pairId: 12,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/DbL.svg",
//       label: "React",
//       alt: "React logo",

//     },
//     {
//       id: "cv-react-b",
//       pairId: 12,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/DbL.svg",
//       label: "React",
//       alt: "React logo",

//     },
//     {
//       id: "cv-react-a",
//       pairId: 13,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/djL.svg",
//       label: "React",
//       alt: "React logo",

//     },
//     {
//       id: "cv-react-b",
//       pairId: 13,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/djL.svg",
//       label: "React",
//       alt: "React logo",

//     },
//     {
//       id: "cv-react-a",
//       pairId: 14,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/FbL.svg",
//       label: "React",
//       alt: "React logo",

//     },
//     {
//       id: "cv-react-b",
//       pairId: 14,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/FbL.svg",
//       label: "React",
//       alt: "React logo",

//     },
//     {
//       id: "cv-react-a",
//       pairId: 15,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/NjsL.svg",
//       label: "React",
//       alt: "React logo",

//     },
//     {
//       id: "cv-react-b",
//       pairId: 15,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/NjsL.svg",
//       label: "React",
//       alt: "React logo",

//     },
//     {
//       id: "cv-react-a",
//       pairId: 16,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/PtL.svg",
//       label: "React",
//       alt: "React logo",

//     },
//     {
//       id: "cv-react-b",
//       pairId: 16,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/PtL.svg",
//       label: "React",
//       alt: "React logo",

//     },
//     {
//       id: "cv-react-a",
//       pairId: 17,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/ScssL.svg",
//       label: "React",
//       alt: "React logo",

//     },
//     {
//       id: "cv-react-b",
//       pairId: 17,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/ScssL.svg",
//       label: "React",
//       alt: "React logo",

//     },
//     {
//       id: "cv-react-a",
//       pairId: 18,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/VSCL.svg",
//       label: "React",
//       alt: "React logo",

//     },
//     {
//       id: "cv-react-b",
//       pairId: 18,
//       boardKey: "codeVibes",
//       asset: "src/assets/images/dark/VSCL.svg",
//       label: "React",
//       alt: "React logo",

//     },
//   ],

//   gaming: createPairs("gaming", [
//     ["Controller", ""], ["Joystick", ""], ["Trophy", ""],
//     ["Target", ""], ["Rocket", ""], ["Alien", ""],
//     ["Robot", ""], ["Dragon", ""], ["Dice", ""],
//     ["Puzzle", ""], ["Crown", ""], ["Lightning", ""],
//     ["Fire", ""], ["Star", ""], ["Gem", ""],
//     ["Shield", ""], ["Sword", ""], ["Flag", ""],
//   ]),
// };

// function createPairs(boardKey: string, pairs: [string, string][]): Card[] {
//   return pairs.flatMap(([name, symbol], index) => ["a", "b"].map((copy) => ({
//     id: `${boardKey}-${index + 1}-${copy}`,
//     pairId: index + 1,
//     boardKey,
//     asset: "",
//     label: symbol,
//     alt: name,
//   })));
// }


// export const codeVibesCards = cardSets.codeVibes.map((c) => c.asset);
