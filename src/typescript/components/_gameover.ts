import { renderGame } from "../game";
// import { renderHome } from "./_home";

export function renderGameOver(app: HTMLElement, scores: { bluePlayer: number; orangePlayer: number }) {
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
            <header>
                <img class="game-over__hero-img" src="src/assets/images/dark/Game over-green.svg" alt="hero-text-img">
            </header> 

            <section class="main__container">
                <h2>Final Score</h2>
                
                <div class="scrore__container">
                    <img class="blue__icon">
                    <p class="blue">Blue</p>
                    <span class="score__b">${scores.bluePlayer}</span>

                    <img class="orange__icon">
                    <p class="orange">Orange</p>
                    <span class="score__o" id="score-orange">${scores.orangePlayer}</span>
                </div>


            </section>
        </section>
    </div>
    `;


 //   app.querySelector("#to-menu-btn")?.addEventListener("click", () => {
     //renderHome(app);
   // });


}