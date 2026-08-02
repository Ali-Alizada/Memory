import type { ThemeConfig, ThemeId } from "./types";

export const themes: Record<ThemeId, ThemeConfig> = {
  "code-vibes": {
    id: "code-vibes",
    key: "codeVibes",
    name: "Code Vibes",
    cssClass: "game-theme--code-vibes",
    fontFamily: "'Red Rose', sans-serif",
    card: {
      width: 120,
      height: 120,
      coverImage: "src/assets/images/dark/card-green.svg",
    },
    header: {
      blueLabelIcon: "src/assets/images/dark/label-blue.svg",
      orangeLabelIcon: "src/assets/images/dark/label-orange.svg",
      exitIcon: "src/assets/images/dark/exit-icon.svg",
    },
    winner: {
      confettiSrc: "src/assets/images/dark/Confetti.svg",
      blueWinnerIcon: "src/assets/images/dark/blue-winner-icon.svg",
      orangeWinnerIcon: "src/assets/images/dark/orange-winner-icon.svg",
    },
    draw: {
      drawTextImg: "src/assets/images/dark/Draw-text-img.svg",
      drawIcon: "src/assets/images/dark/Draw-icon.svg",
    },
    gameOver: {
      heroImg: "src/assets/images/dark/Game over-green.svg",
      blueLabelIcon: "src/assets/images/dark/label-blue.svg",
      orangeLabelIcon: "src/assets/images/dark/label-orange.svg",
    },
  },
  gaming: {
    id: "gaming",
    key: "gaming",
    name: "Gaming",
    cssClass: "game-theme--gaming",
    fontFamily: "'Orbitron', sans-serif",
    card: {
      width: 105,
      height: 120,
      coverImage: "src/assets/images/gaming/prew-darkblue-hover.svg",
    },
    header: {
      blueLabelIcon: "src/assets/images/gaming/chess_pawn-blue.svg",
      orangeLabelIcon: "src/assets/images/gaming/chess_pawn-orange.svg",
      exitIcon: "src/assets/images/dark/exit-icon.svg",
    },
    winner: {
      confettiSrc: "src/assets/images/dark/Confetti.svg",
      blueWinnerIcon: "src/assets/images/dark/blue-winner-icon.svg",
      orangeWinnerIcon: "src/assets/images/dark/orange-winner-icon.svg",
    },
    draw: {
      drawTextImg: "src/assets/images/dark/Draw-text-img.svg",
      drawIcon: "src/assets/images/dark/Draw-icon.svg",
    },
    gameOver: {
      heroImg: "src/assets/images/dark/Game over-green.svg",
      blueLabelIcon: "src/assets/images/dark/label-blue.svg",
      orangeLabelIcon: "src/assets/images/dark/label-orange.svg",
    },
  },
  "da-projects": {
    id: "da-projects",
    key: "daProjects",
    name: "DA Projects",
    cssClass: "game-theme--da-projects",
    fontFamily: "'Figtree', sans-serif",
    card: {
      width: 120,
      height: 100,
      coverImage: "src/assets/images/white/prew-hover-img.svg",
    },
    header: {
      blueLabelIcon: "src/assets/images/dark/label-blue.svg",
      orangeLabelIcon: "src/assets/images/dark/label-orange.svg",
      exitIcon: "src/assets/images/dark/exit-icon.svg",
    },
    winner: {
      confettiSrc: "src/assets/images/dark/Confetti.svg",
      blueWinnerIcon: "src/assets/images/dark/blue-winner-icon.svg",
      orangeWinnerIcon: "src/assets/images/dark/orange-winner-icon.svg",
    },
    draw: {
      drawTextImg: "src/assets/images/dark/Draw-text-img.svg",
      drawIcon: "src/assets/images/dark/Draw-icon.svg",
    },
    gameOver: {
      heroImg: "src/assets/images/dark/Game over-green.svg",
      blueLabelIcon: "src/assets/images/dark/label-blue.svg",
      orangeLabelIcon: "src/assets/images/dark/label-orange.svg",
    },
  },
  foods: {
    id: "foods",
    key: "foods",
    name: "Food",
    cssClass: "game-theme--foods",
    fontFamily: "'Red Rose', sans-serif",
    card: {
      width: 120,
      height: 120,
      coverImage: "src/assets/images/foods/prew-hover-img.svg",
    },
    header: {
      blueLabelIcon: "src/assets/images/dark/label-blue.svg",
      orangeLabelIcon: "src/assets/images/dark/label-orange.svg",
      exitIcon: "src/assets/images/dark/exit-icon.svg",
    },
    winner: {
      confettiSrc: "src/assets/images/dark/Confetti.svg",
      blueWinnerIcon: "src/assets/images/dark/blue-winner-icon.svg",
      orangeWinnerIcon: "src/assets/images/dark/orange-winner-icon.svg",
    },
    draw: {
      drawTextImg: "src/assets/images/dark/Draw-text-img.svg",
      drawIcon: "src/assets/images/dark/Draw-icon.svg",
    },
    gameOver: {
      heroImg: "src/assets/images/dark/Game over-green.svg",
      blueLabelIcon: "src/assets/images/dark/label-blue.svg",
      orangeLabelIcon: "src/assets/images/dark/label-orange.svg",
    },
  },
};
