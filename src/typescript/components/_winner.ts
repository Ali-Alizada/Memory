import { renderSettings } from "../components/settings/_settings";

// ─── Typen ────────────────────────────────────────────────────────────────────

export type WinnerSide = "blue" | "orange";

export interface WinnerOptions {
    winner: WinnerSide;
    scores: { bluePlayer: number; orangePlayer: number };
}

// ─── Konfigurations-Map ───────────────────────────────────────────────────────

const WINNER_CONFIG: Record<WinnerSide, {
    name: string;
    cssClass: string;
    iconSrc: string;
    confettiSrc: string;
}> = {
    blue: {
        name: "Blue Player",
        cssClass: "blue-winner",
        iconSrc: "src/assets/images/dark/blue-winner-icon.svg",
        confettiSrc: "src/assets/images/dark/Confetti.svg",  
    },
    
    orange: {
        name: "Orange Player",
        cssClass: "orange-winner",
        iconSrc: "src/assets/images/dark/orange-winner-icon.svg",
        confettiSrc: "src/assets/images/dark/Confetti.svg",  
    },
};

// ─── Render-Funktion ──────────────────────────────────────────────────────────

export function renderWinner(app: HTMLElement, { winner, scores }: WinnerOptions): void {
    const config = WINNER_CONFIG[winner];

    app.innerHTML = `
        <div class="container__wrapper winner ${config.cssClass}">

            <header class="winner__confetti-overlay" aria-hidden="true">
                <img
                    class="winner__hero-confetti-img"
                    src="${config.confettiSrc}"
                    alt="confetti"
                    ${config.confettiSrc ? "" : 'style="display:none"'}
                >
            </header>

            <section class="main__container">
                <h2 class="winner-text">The winner is</h2>
                <h3><span class="${config.cssClass}">${config.name}</span></h3>

                <div class="winner-content">
                    <img src="${config.iconSrc}" alt="${config.name} winner icon">
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
