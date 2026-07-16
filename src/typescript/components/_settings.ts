export function renderSettings(app: HTMLElement): void {

    app.innerHTML = `
        <section class="screen home">

            <header class="home__header">
                <p>it's play time.</p>
                <h1>Settings</h1>
            </header>

            <section class="home__content">

                <button class="btn">
                    Play
                </button>

            </section>

            <footer class="home__footer">
                <p>© Memory Game</p>
            </footer>

        </section>
    `;

    
}