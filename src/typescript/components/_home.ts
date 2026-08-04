import { renderSettings } from "./settings/_settings";
import { homeTemplate } from "./templates/_home-template";

export function renderHome(app: HTMLElement): void {
    app.innerHTML = homeTemplate();

    const playButton = app.querySelector("#playButton");
    playButton?.addEventListener("click", () => {
        renderSettings(app);
    });
}
