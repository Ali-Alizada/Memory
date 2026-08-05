import { renderSettings } from "../components/settings/_settings";
import { gameSettings } from "./settings/_settingState";
import { getThemeConfig } from "../theme/index";
import { drawTemplate } from "./templates/_draw-template";

export function renderDraw(app: HTMLElement): void {
    const themeConfig = getThemeConfig(gameSettings.theme);
    const backButtonText =
        gameSettings.theme === "code-vibes"
            ? "Back to start"
            : "Home";

    app.innerHTML = drawTemplate(
        themeConfig.cssClass,
        themeConfig.draw.drawTextImg,
        themeConfig.draw.drawIcon,
        backButtonText
    );

    app.querySelector("#back-to-menu")?.addEventListener("click", () => {
        renderSettings(app);
    });
}