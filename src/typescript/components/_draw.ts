import { renderSettings } from "../components/settings/_settings";


export function renderDraw(app: HTMLElement): void {
    app.innerHTML = `
        <div class="container__wrapper draw">

            <header>
                <img
                    class="draw__hero-img"
                    src=""
                    alt="draw-hero"
                    style="display:none"
                >
            </header>

            <section class="main__container">
                <h2 class="winner-text">It's a</h2>
                <img src="src/assets/images/dark/Draw-text-img.svg" alt="draw-text-img">

                <div class="winner-content">
                    <img src="src/assets/images/dark/Draw-icon.svg" alt="draw-icon">
                </div>

                <button class="back-btn" id="back-to-menu">
                    Back to start
                </button>
            </section>

        </div>
    `;

    app.querySelector("#back-to-menu")?.addEventListener("click", () => {
        renderSettings(app);
    });
}
