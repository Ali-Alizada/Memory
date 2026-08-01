import { renderSettings } from "../components/settings/_settings";
import { gameSettings } from "./settings/_settingState";
import { getThemeConfig } from "../theme/index";

export function renderDraw(app: HTMLElement): void {
    const themeConfig = getThemeConfig(gameSettings.theme);

    app.innerHTML = `
        <div class="container__wrapper draw ${themeConfig.cssClass}">

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
                <img src="${themeConfig.draw.drawTextImg}" alt="draw-text-img">

                <div class="winner-content">
                    <img src="${themeConfig.draw.drawIcon}" alt="draw-icon">
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
