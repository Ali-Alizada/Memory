import { renderWinner } from "./_winner";
import { renderDraw } from "./_draw";

export function renderGameOver(app: HTMLElement, scores: { bluePlayer: number; orangePlayer: number }): void {
    let resultText = "";
    if (scores.bluePlayer > scores.orangePlayer) {
        resultText = "Blue Player Wins!";
    } else if (scores.orangePlayer > scores.bluePlayer) {
        resultText = "Orange Player Wins!";
    } else {
        resultText = "It's a Draw!";
    }

    app.innerHTML = `
    <div class="container__wrapper">
        <section class="screen game-over">
            <header class="game-over-header">
                <img class="game-over__hero-img" src="src/assets/images/dark/Game over-green.svg" alt="hero-text-img">
            </header>

            <section class="main__container">
                <h2>Final Score</h2>

                <div class="scrore__container">
                    <img class="blue__icon" src="src/assets/images/dark/label-blue.svg" alt="blue-icon">
                    <p class="blue">Blue</p>
                    <span class="score__b">${scores.bluePlayer}</span>

                    <img class="orange__icon" src="src/assets/images/dark/label-orange.svg" alt="orange-icon">
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