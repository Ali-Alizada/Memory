import { gameSettings } from "./settings/_settingState";
import { overlayTemplate } from "./templates/_overlay-template";

function getOverlayTexts() {
    const theme = gameSettings.theme;

    return {
        stay: ["code-vibes", "da-projects"].includes(theme)
            ? "Back to game"
            : "No, back to game",

        exit: ["code-vibes", "da-projects", "foods"].includes(theme)
            ? "Exit game"
            : "Yes, quit game"
    };
}

function addOverlayEvents(
    overlay: HTMLElement,
    onExit: () => void
) {
    overlay.querySelector(".stay-btn")?.addEventListener("click", () => {
        overlay.classList.add("hidden");
    });

    overlay.querySelector(".back-btn")?.addEventListener("click", onExit);

    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            overlay.classList.add("hidden");
        }
    });
}

export function createExitOverlay(
    app: HTMLElement,
    onExit: () => void
) {
    const overlay = document.createElement("div");
    const { stay, exit } = getOverlayTexts();

    overlay.className = `overlay hidden overlay--${gameSettings.theme}`;
    overlay.innerHTML = overlayTemplate(stay, exit);

    app.appendChild(overlay);
    addOverlayEvents(overlay, onExit);

    return overlay;
}