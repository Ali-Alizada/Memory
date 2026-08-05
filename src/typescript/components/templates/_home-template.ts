/**
 * Generates the markup for the home screen.
 *
 * @returns The home screen markup.
 */
export function homeTemplate(): string {
    return `
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
            
            <img class="stadia_controller" src="src/assets/images/home/stadia_controller.svg" alt="Stadia_controller">

            <footer class="home__footer">
                <p>© Memory Game 2026</p>
            </footer>

        </section>
    
    `;

}
