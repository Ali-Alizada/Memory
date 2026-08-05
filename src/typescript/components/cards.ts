import type { Card } from "../data/types";
import type { ThemeConfig } from "../theme/types";

/**
 * Creates a playable card element using the active theme.
 *
 * @param card - Card data to render.
 * @param themeConfig - Configuration for the active theme.
 * @returns The generated card element.
 */
export function createCard(card: Card, themeConfig: ThemeConfig): HTMLElement {
    const cardEl = createCardElement(card, themeConfig);
    cardEl.innerHTML = cardTemplate(card, themeConfig);

    return cardEl;
}

/**
 * Creates the button element and metadata for a card.
 *
 * @param card - Card data used for element metadata.
 * @param themeConfig - Configuration for the active theme.
 * @returns The configured card button.
 */
function createCardElement(card: Card, themeConfig: ThemeConfig): HTMLButtonElement {
    const cardEl = document.createElement("button");

    cardEl.type = "button";
    cardEl.className = `card card--${themeConfig.id}`;
    cardEl.dataset.cardId = card.id;
    cardEl.dataset.pairId = String(card.pairId);
    cardEl.dataset.boardKey = card.boardKey;
    cardEl.setAttribute("aria-label", card.alt ?? card.label ?? "Card");

    return cardEl;
}

/**
 * Generates the inner markup for a card.
 *
 * @param card - Card data to render.
 * @param themeConfig - Configuration for the active theme.
 * @returns The card markup.
 */
function cardTemplate(card: Card, themeConfig: ThemeConfig): string {
    return `
        <div class="card__inner">
            <div class="card__front">
                <span class="card__cover" aria-hidden="true" ${getCoverStyle(themeConfig)}></span>
            </div>
            <div class="card__back">
                ${getCardBack(card)}
            </div>
        </div>
    `;
}

/**
 * Generates the visible content for a card back.
 *
 * @param card - Card data that supplies an asset or label.
 * @returns Markup for the card back.
 */
function getCardBack(card: Card): string {
    return card.asset
        ? `<img class="card__icon" src="${card.asset}" alt="${card.alt ?? card.label ?? ""}" 
            onerror="this.style.display='none';
            if(this.nextElementSibling) this.nextElementSibling.style.display='block';">
           <span class="card__label" style="display:none">${card.label ?? card.asset}</span>`
        : `<span class="card__label">${card.label ?? "?"}</span>`;
}

/**
 * Generates the optional background-image style for a card cover.
 *
 * @param themeConfig - Configuration for the active theme.
 * @returns The cover style attribute or an empty string.
 */
function getCoverStyle(themeConfig: ThemeConfig): string {
    return themeConfig.id !== "gaming" && themeConfig.card.coverImage
        ? `style="background-image:url('${themeConfig.card.coverImage}')"`
        : "";
}
