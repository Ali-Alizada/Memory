import { renderSettings } from "../components/settings/_settings";
import { gameSettings } from "./settings/_settingState";
import { getThemeConfig } from "../theme/index";

export type WinnerSide = "blue" | "orange";

export interface WinnerOptions {
    winner: WinnerSide;
    scores: { bluePlayer: number; orangePlayer: number };
}

export function renderWinner(app: HTMLElement, { winner }: WinnerOptions): void {
    const themeConfig = getThemeConfig(gameSettings.theme);
    const winnerName = winner === "blue" ? "Blue Player" : "Orange Player";
    const cssClass = winner === "blue" ? "blue-winner" : "orange-winner";
    const iconSrc = winner === "blue"
        ? themeConfig.winner.blueWinnerIcon
        : themeConfig.winner.orangeWinnerIcon;

    app.innerHTML = `
        <div class="container__wrapper winner ${cssClass} ${themeConfig.cssClass}">

            <header class="winner__confetti-overlay" aria-hidden="true">
                <img
                    class="winner__hero-confetti-img"
                    src="${themeConfig.winner.confettiSrc}"
                    alt="confetti"
                    ${themeConfig.winner.confettiSrc ? "" : 'style="display:none"'}
                >
            </header>

            <section class="main__container">
                <h2 class="winner-text">The winner is</h2>
                <h3><span class="${cssClass}">${winnerName}</span></h3>

                <div class="winner-content">
                    <img src="${iconSrc}" alt="${winnerName} winner icon">
                </div>

                <button class="back-btn" id="back-to-menu">
                    Back to start
                </button>
            </section>

        </div>
    `;

    app.querySelector("#back-to-menu")?.addEventListener("click", () => {
        renderSettings(app);
    });
}
