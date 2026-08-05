import { gameSettings } from "./settings/_settingState";
import { overlayTemplate } from "./templates/_overlay-template";

/**
 * Selects overlay button labels for the active theme.
 *
 * @returns The stay and exit button labels.
 */
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

/**
 * Registers controls that close the overlay or exit the game.
 *
 * @param overlay - Overlay element that receives the listeners.
 * @param onExit - Callback invoked when the exit action is selected.
 */
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

/**
 * Creates and appends the game-exit confirmation overlay.
 *
 * @param app - Application container that receives the overlay.
 * @param onExit - Callback invoked after confirming the exit.
 * @returns The generated overlay element.
 */
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
