import { renderHome } from "./_home";

export function renderBlueWinner(app: HTMLElement, scores: { bluePlayer: number; orangePlayer: number }) {

    // Bestimme Gewinner basierend auf den Scores
    let winnerName = "It's a Draw!";
    let winnerClass = "draw";
    if (scores.bluePlayer > scores.orangePlayer) {
        winnerName = "Blue Player";
        winnerClass = "blue-winner";
    } else if (scores.orangePlayer > scores.bluePlayer) {
        winnerName = "Orange Player";
        winnerClass = "orange-winner";
    }

    app.innerHTML = `
    <div class="container__wrapper">

            <header>
                <img class="blue-winner__hero-confetti-img" src="" alt="hero-confetti-img">
            </header>


            <section class="main__container">
                <h2 class="winner-text">The winner is</h2>
                <h3><span class="${winnerClass}">${winnerName}</span></h3>

                <div class="winner-content">
                    <img src="src/assets/images/dark/blue-winner-icon.svg" alt="winner-cup-img">
                </div>

                <button class="back-btn" id="back-to-menu">
                    Back to start
                </button>
            </section>
        
    </div>
    `;


    app.querySelector("#back-to-menu")?.addEventListener("click", () => {
        renderHome(app);
    });

       setTimeout(() => {
            renderBlueWinner(app, scores);
        }, 3000);
}