import type { Card } from "../data/types";
import type { ThemeConfig } from "../theme/types";

export function createCard(card: Card, themeConfig: ThemeConfig): HTMLElement {
    const cardEl = createCardElement(card, themeConfig);
    cardEl.innerHTML = cardTemplate(card, themeConfig);

    return cardEl;
}

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

function getCardBack(card: Card): string {
    return card.asset
        ? `<img class="card__icon" src="${card.asset}" alt="${card.alt ?? card.label ?? ""}" 
            onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='block';">
           <span class="card__label" style="display:none">${card.label ?? card.asset}</span>`
        : `<span class="card__label">${card.label ?? "?"}</span>`;
}

function getCoverStyle(themeConfig: ThemeConfig): string {
    return themeConfig.id !== "gaming" && themeConfig.card.coverImage
        ? `style="background-image:url('${themeConfig.card.coverImage}')"`
        : "";
}