import type { Card } from "../data/types";
import type { ThemeConfig } from "../theme/types";
import { cardTemplate } from "./templates/_card-template";

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
