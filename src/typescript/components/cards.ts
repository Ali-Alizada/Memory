import type { Card } from "./cardData";

export function createCard(card: Card): HTMLElement {
    const cardEl = document.createElement("button");
    cardEl.type = "button";
    cardEl.className = "card";
    cardEl.dataset.cardId = card.id;
    cardEl.dataset.pairId = String(card.pairId);
    cardEl.dataset.boardKey = card.boardKey;
    cardEl.setAttribute("aria-label", card.alt ?? card.label ?? "Card");

    const label = card.label ?? card.asset;

    cardEl.innerHTML = `
        <span class="card__label">${label}</span>
    `;

    return cardEl;
}
