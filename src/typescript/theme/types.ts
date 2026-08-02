export type ThemeId = "code-vibes" | "gaming" | "da-projects" | "foods";

export interface HeaderTheme {
  blueLabelIcon: string;
  orangeLabelIcon: string;
  exitIcon: string;
}

export interface CardTheme {
  width: number;
  height: number;
  coverImage: string;
}

export interface WinnerTheme {
  showConfetti: boolean;
  confettiSrc: string;
  blueWinnerIcon: string;
  orangeWinnerIcon: string;
}

export interface DrawTheme {
  drawTextImg: string;
  drawIcon: string;
}

export interface GameOverTheme {
  heroImg: string;
  blueLabelIcon: string;
  orangeLabelIcon: string;
}

export interface ThemeConfig {
  id: ThemeId;
  key: "codeVibes" | "gaming" | "daProjects" | "foods";
  name: string;
  cssClass: string;
  fontFamily: string;
  card: CardTheme;
  header: HeaderTheme;
  winner: WinnerTheme;
  draw: DrawTheme;
  gameOver: GameOverTheme;
}
