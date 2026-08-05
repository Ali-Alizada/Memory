import { settingsTemplate } from "../templates/_settings-template";
import { initSettingsEvents } from "./_settingsEvent";
import { renderGame } from "../../game";

export function renderSettings(app: HTMLElement) {
    app.innerHTML = settingsTemplate();
    initSettingsEvents(app);

    const startBtn = app.querySelector("#startBtn");
    startBtn?.addEventListener("click", () => {
        renderGame(app);
    });

}
