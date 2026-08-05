import { renderSettings } from "../components/settings/_settings";
import { gameSettings } from "./settings/_settingState";
import { getThemeConfig } from "../theme/index";
import { winnerTemplate } from "./templates/_winner-template";

export type WinnerSide = "blue" | "orange";

export interface WinnerOptions {
  winner: WinnerSide;
  scores: {
    bluePlayer: number;
    orangePlayer: number;
  };
}

export function renderWinner(
  app: HTMLElement,
  { winner }: WinnerOptions,
): void {
  const themeConfig = getThemeConfig(gameSettings.theme);
  const winnerName = winner === "blue" ? "Blue Player" : "Orange Player";
  const cssClass = winner === "blue" ? "blue-winner" : "orange-winner";
  const iconSrc =
  winner === "blue" ? themeConfig.winner.blueWinnerIcon : themeConfig.winner.orangeWinnerIcon;
  app.innerHTML = winnerTemplate({
    winner, winnerName, cssClass, iconSrc,
    themeClass: themeConfig.cssClass,
    showConfetti: themeConfig.winner.showConfetti, confettiSrc: themeConfig.winner.confettiSrc,
});
  app.querySelector("#back-to-menu")?.addEventListener("click", () => { renderSettings(app); });
}
