import type { Card } from "../data/types";

export function createCard(card: Card): HTMLElement {
    const cardEl = document.createElement("button");
    cardEl.type = "button";
    cardEl.className = `card card--${card.boardKey}`;
    cardEl.dataset.cardId = card.id;
    cardEl.dataset.pairId = String(card.pairId);
    cardEl.dataset.boardKey = card.boardKey;
    cardEl.setAttribute("aria-label", card.alt ?? card.label ?? "Card");

    const cardBack = card.asset
        ? `<img class="card__icon" src="${card.asset}" alt="${card.alt ?? card.label ?? ""}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
           <span class="card__label" style="display: none;">${card.label ?? card.asset}</span>`
        : `<span class="card__label">${card.label ?? "?"}</span>`;

    cardEl.innerHTML = `
        <div class="card__inner">
            <div class="card__front">
                <span class="card__cover" aria-hidden="true"></span>
            </div>
            <div class="card__back">
                ${cardBack}
            </div>
        </div>
    `;

    return cardEl;
}
