import { renderSettings } from "./settings/_settings";

export function renderHome(app: HTMLElement): void {
  app.innerHTML = `
        <section class="screen home">

            <header class="home__header">
                <p>it's play time.</p>
                <h1>Ready to play?</h1>
            </header>

            <section class="home__content">

                <button id="playButton" class="btn">
                    <img class="game-icon" src="src/assets/images/home/stadia_controller_s.svg" alt="Stadia_controller-icon">
                     Play
                    <img class="arrow-icon" src="src/assets/images/home/Arrow 1.svg" alt="arrow-icon">
                    
                </button>
           

            </section>
            
            <img class="stadia_controller" src="src/assets/images/home/Stadia_controller.svg" alt="Stadia_controller">

            <footer class="home__footer">
                <p>© Memory Game 2026</p>
            </footer>

        </section>
    `;
  const playButton = app.querySelector("#playButton");
  playButton?.addEventListener("click", () => {
    renderSettings(app);
  });
}
