import type { Card } from "./types";

const assets = [
  { asset: "src/assets/images/da-projects/1a.svg", label: "HTML", alt: "HTML logo" },
  { asset: "src/assets/images/da-projects/1b.svg", label: "CSS", alt: "CSS logo" },
  { asset: "src/assets/images/da-projects/2a.svg", label: "JavaScript", alt: "JavaScript logo" },
  { asset: "src/assets/images/da-projects/2b.svg", label: "TypeScript", alt: "TypeScript logo" },
  { asset: "src/assets/images/da-projects/3a.svg", label: "Vue", alt: "Vue logo" },
  { asset: "src/assets/images/da-projects/3b.svg", label: "Git", alt: "Git logo" },
  { asset: "src/assets/images/da-projects/4a.svg", label: "GitHub", alt: "GitHub logo" },
  { asset: "src/assets/images/da-projects/4b.svg", label: "React", alt: "React logo" },
  { asset: "src/assets/images/da-projects/5a.svg", label: "Angular", alt: "Angular logo" },
  { asset: "src/assets/images/da-projects/5b.svg", label: "Bootstrap", alt: "Bootstrap logo" },
  { asset: "src/assets/images/da-projects/6a.svg", label: "Command", alt: "Command logo" },
  { asset: "src/assets/images/da-projects/6b.svg", label: "Database", alt: "Database logo" },
  { asset: "src/assets/images/da-projects/7a.svg", label: "Django", alt: "Django logo" },
  { asset: "src/assets/images/da-projects/7b.svg", label: "Firebase", alt: "Firebase logo" },
  { asset: "src/assets/images/da-projects/8a.svg", label: "Node.js", alt: "Node.js logo" },
  { asset: "src/assets/images/da-projects/8b.svg", label: "Python", alt: "Python logo" },
  { asset: "src/assets/images/da-projects/9a.svg", label: "SCSS", alt: "SCSS logo" },
  { asset: "src/assets/images/da-projects/9b.svg", label: "VS Code", alt: "VS Code logo" },
];

export const daProjectsCardsWinner = {
  showConfetti: false,
  confettiSrc: "",
  blueWinnerIcon: "...",
};

export const daProjectsCards: Card[] = assets.flatMap((item, index) => {
  const pairId = index + 1;
  return [
    {
      id: `da-${pairId}-a`,
      pairId,
      boardKey: "daProjects",
      asset: item.asset,
      label: item.label,
      alt: item.alt,
    },
    {
      id: `da-${pairId}-b`,
      pairId,
      boardKey: "daProjects",
      asset: item.asset,
      label: item.label,
      alt: item.alt,
    },
  ];
});