import { renderWinner } from "./_winner";
import { renderDraw } from "./_draw";
import { gameSettings } from "./settings/_settingState";
import { getThemeConfig } from "../theme/index";

export function renderGameOver(app: HTMLElement, scores: { bluePlayer: number; orangePlayer: number }): void {
    const themeConfig = getThemeConfig(gameSettings.theme);

    app.innerHTML = `
    <div class="container__wrapper ${themeConfig.cssClass}">
        <section class="screen game-over">
            <header class="game-over-header">
                <img class="game-over__hero-img" src="${themeConfig.gameOver.heroImg}" alt="hero-text-img">
            </header>

            <section class="main__container">
                <h2>Final Score</h2>

                <div class="scrore__container">
                    <img class="blue__icon" src="${themeConfig.gameOver.blueLabelIcon}" alt="blue-icon">
                    <p class="blue">Blue</p>
                    <span class="score__b">${scores.bluePlayer}</span>

                    <img class="orange__icon" src="${themeConfig.gameOver.orangeLabelIcon}" alt="orange-icon">
                    <p class="orange">Orange</p>
                    <span class="score__o">${scores.orangePlayer}</span>
                </div>

            </section>
        </section>
    </div>
    `;

    setTimeout(() => {
        if (scores.bluePlayer > scores.orangePlayer) {
            renderWinner(app, { winner: "blue", scores });
        } else if (scores.orangePlayer > scores.bluePlayer) {
            renderWinner(app, { winner: "orange", scores });
        } else {
            renderDraw(app);
        }
    }, 3000);
}