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