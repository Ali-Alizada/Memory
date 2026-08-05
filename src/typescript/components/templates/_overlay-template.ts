/**
 * Generates the markup for the exit confirmation overlay.
 *
 * @param stayButtonText - Label for the button that keeps the game open.
 * @param exitButtonText - Label for the button that exits the game.
 * @returns The overlay markup.
 */
export function overlayTemplate(
    stayButtonText: string,
    exitButtonText: string
): string {
    return `
        <div class="overlay__content">
            <p>Are you sure you want to quit <br>the game?</p>

            <div class="overlayBtns">
                <button class="stay-btn">${stayButtonText}</button>
                <button class="back-btn">${exitButtonText}</button>
            </div>
        </div>
    `;
}
