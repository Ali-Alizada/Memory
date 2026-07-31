import { createExitOverlay } from "./components/overlay";
import { createBoard } from "./components/board";
import { gameSettings } from "./components/settings/_settingState";
import { renderGameOver } from "./components/_gameover";
import { renderSettings } from "./components/settings/_settings";

export function renderGame(app: HTMLElement) {
    app.innerHTML = `
    <div class="container__wrapper game-theme--${gameSettings.theme}">
        <section class="screen game">
            <header class="game__header-one">
                <div class="scrore__container">
                    <img class="blue__icon" src="src/assets/images/dark/label-blue.svg" alt="blue-score-icon">
                    <p>Blue</p>
                    <span id="score-blue">0</span>

                    <img class="orange__icon" src="src/assets/images/dark/label-orange.svg" alt="orange-score-icon">
                    <p>Orange</p>
                    <span id="score-orange">0</span>
                </div>

                <h2 class="game__title">
                    <span class="title">Current Player:</span>
                    <img id="current-player-icon" src="src/assets/images/dark/label-blue.svg" alt="label-currentPlayer-icon">
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

    // Initialize state
    let currentPlayer = gameSettings.player; 
    const scores = {
        bluePlayer: 0,
        orangePlayer: 0
    };
    let flippedCards: HTMLElement[] = [];
    let isProcessing = false;

    // Elements
    const scoreBlueEl = app.querySelector("#score-blue");
    const scoreOrangeEl = app.querySelector("#score-orange");
    const currentPlayerIcon = app.querySelector("#current-player-icon") as HTMLImageElement;
    const boardRoot = app.querySelector(".board");

    const updateHeader = () => {
        if (scoreBlueEl) scoreBlueEl.textContent = String(scores.bluePlayer);
        if (scoreOrangeEl) scoreOrangeEl.textContent = String(scores.orangePlayer);
        if (currentPlayerIcon) {
            currentPlayerIcon.src = currentPlayer === "bluePlayer"
                ? "src/assets/images/dark/label-blue.svg"
                : "src/assets/images/dark/label-orange.svg";
        }
    };


    updateHeader();

    if (boardRoot) {
        boardRoot.appendChild(createBoard(gameSettings.theme, gameSettings.boards));
    }

    const cardElements = app.querySelectorAll<HTMLElement>(".card");
    cardElements.forEach((cardEl) => {
        cardEl.addEventListener("click", () => {
            if (isProcessing) return;
            if (cardEl.classList.contains("flipped") || cardEl.classList.contains("matched")) return;

            // Flip current card
            cardEl.classList.add("flipped");
            flippedCards.push(cardEl);

            if (flippedCards.length === 2) {
                isProcessing = true;
                const [card1, card2] = flippedCards;
                const pairId1 = card1.dataset.pairId;
                const pairId2 = card2.dataset.pairId;

                if (pairId1 === pairId2) {
                    // Match found!
                    card1.classList.add("matched");
                    card2.classList.add("matched");
                    
                    scores[currentPlayer as keyof typeof scores] += 1;
                    updateHeader();
                    
                    flippedCards = [];
                    isProcessing = false;

                    // Check win condition
                    const allMatched = Array.from(cardElements).every((c) => c.classList.contains("matched"));
                    if (allMatched) {
                        setTimeout(() => {
                            renderGameOver(app, scores);
                        }, 600);
                    }
                } else {
                    // Mismatch, flip back after delay and switch player
                    setTimeout(() => {
                        card1.classList.remove("flipped");
                        card2.classList.remove("flipped");
                        flippedCards = [];
                        
                        currentPlayer = currentPlayer === "bluePlayer" ? "orangePlayer" : "bluePlayer";
                        updateHeader();
                        
                        isProcessing = false;
                    }, 1000);
                }
            }
        });
    });

    const overlay = createExitOverlay(app, () => {
        renderSettings(app);
    });

    const extBtn = app.querySelector("#exit-btn");
    extBtn?.addEventListener("click", () => {
        overlay?.classList.remove("hidden");
    });
}


