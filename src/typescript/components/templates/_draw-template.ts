/**
 * Generates the markup for the draw screen.
 *
 * @param cssClass - Theme CSS class for the screen.
 * @param drawTextImg - Source of the draw text image.
 * @param drawIcon - Source of the draw icon.
 * @param backButtonText - Label for the navigation button.
 * @returns The draw screen markup.
 */
export function drawTemplate(
    cssClass: string,
    drawTextImg: string,
    drawIcon: string,
    backButtonText: string
): string {
    return `
        <div class="container__wrapper draw ${cssClass}">

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

                <img src="${drawTextImg}" alt="draw-text-img">

                <div class="winner-content">
                    <img src="${drawIcon}" alt="draw-icon">
                </div>

                <button class="back-btn" id="back-to-menu">
                    ${backButtonText}
                </button>
            </section>

        </div>
    `;
}
