import { renderSettings } from "./settings/_settings";
import { homeTemplate } from "./templates/_home-template";

/**
 * Renders the home screen and its play action.
 *
 * @param app - Application container that receives the home view.
 */
export function renderHome(app: HTMLElement): void {
    app.innerHTML = homeTemplate();

    const playButton = app.querySelector("#playButton");
    playButton?.addEventListener("click", () => {
        renderSettings(app);
    });
}
