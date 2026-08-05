import { gameSettings } from ".././settings/_settingState";
import { getThemeConfig } from "../../theme";

/**
 * Generates the markup for the final-score screen.
 *
 * @param scores - Final scores for both players.
 * @returns The game-over screen markup.
 */
export function gameOverTemplate(scores: {
    bluePlayer: number;
    orangePlayer: number;
}):string {

    const themeConfig = getThemeConfig(gameSettings.theme);

    return `
    <div class="container__wrapper game-over-page ${themeConfig.cssClass}">
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
}
