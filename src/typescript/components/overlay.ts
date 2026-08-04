import { gameSettings } from "./settings/_settingState";
import { overlayTemplate } from "./templates/_overlay-template";

export function createExitOverlay(
    app: HTMLElement, 
    onExit: () => void
) {

    const overlay = document.createElement("div");
    overlay.className = `overlay hidden overlay--${gameSettings.theme}`;

    let stayButtonText = "No, back to game";
    let exitButtonText = "Yes, quit game";

    if (gameSettings.theme === "code-vibes" || gameSettings.theme === "da-projects") {
        stayButtonText = "Back to game";
    }

    if (gameSettings.theme === "code-vibes" || gameSettings.theme === "da-projects" || gameSettings.theme === "foods") {
        exitButtonText = "Exit game";
    }

    overlay.innerHTML = overlayTemplate(
    stayButtonText,
    exitButtonText
);

    app.appendChild(overlay);

    overlay.querySelector(".stay-btn")?.addEventListener("click", ()=> {
        overlay.classList.add("hidden");
    });

    overlay.querySelector(".back-btn")?.addEventListener("click", ()=> {
        onExit();
    });

    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            overlay.classList.add("hidden");
        }
    });

    return overlay;
}