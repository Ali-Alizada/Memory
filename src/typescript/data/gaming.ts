import type { Card } from "./types";

const assets = [
  { asset: "src/assets/images/gaming/1a.svg", label: "Mario", alt: "Mario logo" },
  { asset: "src/assets/images/gaming/1b.svg", label: "Luigi", alt: "Luigi logo" },

  { asset: "src/assets/images/gaming/2a.svg", label: "Pac-Man", alt: "Pac-Man logo" },
  { asset: "src/assets/images/gaming/2b.svg", label: "Ghost", alt: "Ghost logo" },

  { asset: "src/assets/images/gaming/3a.svg", label: "Sonic", alt: "Sonic logo" },
  { asset: "src/assets/images/gaming/3b.svg", label: "Tails", alt: "Tails logo" },

  { asset: "src/assets/images/gaming/4a.svg", label: "Pikachu", alt: "Pikachu logo" },
  { asset: "src/assets/images/gaming/4b.svg", label: "Poké Ball", alt: "Poké Ball logo" },

  { asset: "src/assets/images/gaming/5a.svg", label: "Master Sword", alt: "Master Sword" },
  { asset: "src/assets/images/gaming/5b.svg", label: "Triforce", alt: "Triforce" },

  { asset: "src/assets/images/gaming/6a.svg", label: "Creeper", alt: "Minecraft Creeper" },
  { asset: "src/assets/images/gaming/6b.svg", label: "Diamond", alt: "Minecraft Diamond" },

  { asset: "src/assets/images/gaming/7a.svg", label: "Controller", alt: "Game Controller" },
  { asset: "src/assets/images/gaming/7b.svg", label: "Joystick", alt: "Arcade Joystick" },

  { asset: "src/assets/images/gaming/8a.svg", label: "Coin", alt: "Game Coin" },
  { asset: "src/assets/images/gaming/8b.svg", label: "Trophy", alt: "Gaming Trophy" },

  { asset: "src/assets/images/gaming/9a.svg", label: "Game Boy", alt: "Game Boy" },
  { asset: "src/assets/images/gaming/9b.svg", label: "Console", alt: "Game Console" },
];


export const gamingCardsWinner = {
  showConfetti: false,
  confettiSrc: "",
  blueWinnerIcon: "...",
};

export const gamingCards: Card[] = assets.flatMap((item, index) => {
  const pairId = index + 1;

  return [
    {
      id: `gm-${pairId}-a`,
      pairId,
      boardKey: "gaming",
      asset: item.asset,
      label: item.label,
      alt: item.alt,
    },
    {
      id: `gm-${pairId}-b`,
      pairId,
      boardKey: "gaming",
      asset: item.asset,
      label: item.label,
      alt: item.alt,
    },
  ];
});