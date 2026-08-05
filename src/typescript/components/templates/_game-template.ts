import { ThemeConfig } from "../../theme/types"; 

/**
 * Generates the markup for the active game screen.
 *
 * @param themeConfig - Configuration for the active theme.
 * @returns The game screen markup.
 */
export function gameTemplate(themeConfig: ThemeConfig): string {
    return `
    <div class="container__wrapper ${themeConfig.cssClass}">
        <section class="screen game">
            <header class="game__header-one">
                <div class="scrore__container">
                    <img class="blue__icon"
                        src="${themeConfig.header.blueLabelIcon}"
                        alt="blue-score-icon">

                    <p>Blue</p>
                    <span id="score-blue">0</span>

                    <img class="orange__icon"
                        src="${themeConfig.header.orangeLabelIcon}"
                        alt="orange-score-icon">

                    <p>Orange</p>
                    <span id="score-orange">0</span>
                </div>

                <h2 class="game__title">
                    <span class="title">Current Player:</span>
                    <img
                        id="current-player-icon"
                        src="${themeConfig.header.blueLabelIcon}"
                        alt="label-currentPlayer-icon">
                </h2>

                <button class="exit-btn" id="exit-btn">
                    <img
                        class="exit-icon"
                        src="${themeConfig.header.exitIcon}"
                        alt="exit-icon">
                    <span>Exit game</span>
                </button>
            </header>

            <main>
                <div class="board"></div>
            </main>
        </section>
    </div>
    `;
}
