import type { Card } from "../../data/types";
import type { ThemeConfig } from "../../theme/types";

/**
 * Generates the inner markup for a card.
 *
 * @param card - Card data to render.
 * @param themeConfig - Configuration for the active theme.
 * @returns The card markup.
 */
export function cardTemplate(card: Card, themeConfig: ThemeConfig): string {
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
