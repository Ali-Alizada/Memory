import { renderHome } from "./components/_home";


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


            <div id="exit-message" class="overlay hidden">
                <div class="overlay__content">
                    <p>Are you sure you want to quite <br>the game?</p>
                    
                    <div class="overlayBtns">
                          <button class="stay-btn">Back to game</button>
                          <button class="back-btn">Exit game</button>
                    </div>
                  
                </div>
            </div>


        </section>


    </div>
    
    `;



    const exitOverlayBtn = app.querySelector("#exit-btn");
    const overlay = app.querySelector("#exit-message");
    exitOverlayBtn?.addEventListener("click", ()=> {
        overlay?.classList.remove("hidden");
    });


        const stayBtn = app.querySelector(".stay-btn");
        stayBtn?.addEventListener("click", ()=> {
            overlay?.classList.add("hidden");
        });


        const backBtn = app.querySelector(".back-btn");

        backBtn?.addEventListener("click", ()=> {
            renderHome(app);
        });


}

