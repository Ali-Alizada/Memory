import type { Card } from "./types";

const assets = [
  { asset: "src/assets/images/dark/htmlL.svg", label: "HTML", alt: "HTML logo" },
  { asset: "src/assets/images/dark/CSSL.svg", label: "CSS", alt: "CSS logo" },
  { asset: "src/assets/images/dark/JsL.svg", label: "JavaScript", alt: "JavaScript logo" },
  { asset: "src/assets/images/dark/TsL.svg", label: "TypeScript", alt: "TypeScript logo" },
  { asset: "src/assets/images/dark/VjsL.svg", label: "Vue", alt: "Vue logo" },
  { asset: "src/assets/images/dark/gitL.svg", label: "Git", alt: "Git logo" },
  { asset: "src/assets/images/dark/GhL.svg", label: "GitHub", alt: "GitHub logo" },
  { asset: "src/assets/images/dark/RctL.svg", label: "React", alt: "React logo" },
  { asset: "src/assets/images/dark/AngL.svg", label: "Angular", alt: "Angular logo" },
  { asset: "src/assets/images/dark/BtsL.svg", label: "Bootstrap", alt: "Bootstrap logo" },
  { asset: "src/assets/images/dark/CmdL.svg", label: "Command", alt: "Command logo" },
  { asset: "src/assets/images/dark/DbL.svg", label: "Database", alt: "Database logo" },
  { asset: "src/assets/images/dark/djL.svg", label: "Django", alt: "Django logo" },
  { asset: "src/assets/images/dark/FbL.svg", label: "Firebase", alt: "Firebase logo" },
  { asset: "src/assets/images/dark/NjsL.svg", label: "Node.js", alt: "Node.js logo" },
  { asset: "src/assets/images/dark/PtL.svg", label: "Python", alt: "Python logo" },
  { asset: "src/assets/images/dark/ScssL.svg", label: "SCSS", alt: "SCSS logo" },
  { asset: "src/assets/images/dark/VSCL.svg", label: "VS Code", alt: "VS Code logo" },
];

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