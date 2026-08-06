
import type { WinnerSide } from "../winner";

interface WinnerTemplateProps {
    winner: WinnerSide;
    winnerName: string;
    cssClass: string;
    iconSrc: string;
    themeClass: string;
    showConfetti: boolean;
    confettiSrc?: string;
}

/**
 * Generates the markup for the winner screen.
 *
 * @param props - Winner display details.
 * @returns The winner screen markup.
 */
export function winnerTemplate({
    winnerName,
    cssClass,
    iconSrc,
    themeClass,
    showConfetti,
    confettiSrc,
}: WinnerTemplateProps): string {
    return `
        <div class="container__wrapper winner ${cssClass} ${themeClass}">

            ${
                showConfetti && confettiSrc
                    ? `
                <header class="winner__confetti-overlay" aria-hidden="true">
                    <img
                        class="winner__hero-confetti-img"
                        src="${confettiSrc}"
                        alt="Confetti">
                </header>
                `
                    : ""
            }

            <section class="main__container">
                <h2 class="winner-text">The winner is</h2>

                <h3>
                    <span class="${cssClass}">
                        ${winnerName}
                    </span>
                </h3>

                <div class="winner-content">
                    <img src="${iconSrc}" alt="${winnerName} winner icon">
                </div>

                <button class="back-btn" id="back-to-menu">
                    Home
                </button>
            </section>

        </div>
    `;
}
