import { cardSets } from "../data/index";
import type { Card } from "../data/types";
import { createCard } from "./cards";
import { getThemeConfig } from "../theme/index";

const boardSizeMap: Record<string, number> = {
    boardSmall: 16,
    boardMedium: 24,
    boardLarge: 36,
};

/**
 * Returns the provided items in a randomized order.
 *
 * @param items - Items to shuffle.
 * @returns A shuffled copy of the items.
 */
function shuffle<T>(items: T[]): T[] {
    return [...items].sort(() => Math.random() - 0.5);
}

/**
 * Creates a shuffled card board for the selected theme and size.
 *
 * @param themeId - Identifier of the active theme.
 * @param boardSizeKey - Key that selects the number of cards.
 * @returns The generated board element.
 */
export function createBoard(themeId: string, boardSizeKey: string): HTMLElement {
    const themeConfig = getThemeConfig(themeId);
    const cards: Card[] = cardSets[themeConfig.key] ?? cardSets.codeVibes;
    const size = boardSizeMap[boardSizeKey] ?? 16;

    const selectedCards = cards.slice(0, size);
    const boardEl = document.createElement("div");
    boardEl.className = `card-grid card-grid--${boardSizeKey} card-grid--${themeConfig.id}`;

    shuffle(selectedCards).forEach((card) => {
        boardEl.appendChild(createCard(card, themeConfig));
    });
    return boardEl;
}
