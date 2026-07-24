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
        <div class="card__inner">
            <div class="card__front">
                <img class="card__cover" src="src/assets/images/dark/card-green.svg" alt="Card Cover">
            </div>
            <div class="card__back">
                <img class="card__icon" src="${card.asset}" alt="${card.alt ?? card.label ?? ''}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <span class="card__label" style="display: none;">${label}</span>
            </div>
        </div>
    `;

    return cardEl;
}
