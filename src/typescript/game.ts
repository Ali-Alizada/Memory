import { createExitOverlay } from "./components/overlay";
import { renderHome } from "./components/_home";
import { createBoard } from "./components/board";
import { gameSettings } from "./components/settings/_settingState";

export function renderGame(app: HTMLElement) {
    app.innerHTML = `

    <div class="container__wrapper">
        <section class="screen game">
            <header class="game__header">
                <div class="scrore__container">
                    <img class="blue__icon" src="src/assets/images/dark/label-blue.svg" alt="blue-scrore-icon">
                    <p>Blue</p>
                    <span>0</span>

                    <img class="orange__icon" src="src/assets/images/dark/label-orange.svg" alt="orange-score-icon">
                    <p>Orange</p>
                    <span>6</span>
                </div>

                <h2>
                    <span class="title">Current Player:</span>
                    <img src="src/assets/images/dark/label-blue.svg" alt="label-currentPlayer-icon">
                </h2>

                <button class="exit-btn" id="exit-btn">
                    <img class="exit-icon" src="src/assets/images/dark/exit-icon.svg" alt="exit-icon">
                    <span>Exit game</span>
                </button>
            </header>

            <main>
                <div class="board"></div>
            </main>

        </section>

    </div>
    `;

    const boardRoot = app.querySelector(".board");
    if (boardRoot) {
        boardRoot.appendChild(createBoard(gameSettings.theme, gameSettings.boards));
    }

    const overlay = createExitOverlay(app, () => {
        renderHome(app);
    });

    const extBtn = app.querySelector("#exit-btn");
    extBtn?.addEventListener("click", () => {
        overlay?.classList.remove("hidden");
    });
}

