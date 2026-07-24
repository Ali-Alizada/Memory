import { cardSets } from "./cardData";
import { createCard } from "./cards";

const themeToCardSetKey: Record<string, string> = {
    "code-vibes": "codeVibes",
    gaming: "codeVibes",
    "da-projects": "codeVibes",
    foods: "codeVibes",
};

const boardSizeMap: Record<string, number> = {
    boardSmall: 16,
    boardMedium: 24,
    boardLarge: 36,
};

function shuffle<T>(items: T[]): T[] {
    return [...items].sort(() => Math.random() - 0.5);
}

export function createBoard(theme: string, boardSizeKey: string): HTMLElement {
    const cardSetKey = themeToCardSetKey[theme] ?? "codeVibes";
    const cards = cardSets[cardSetKey] ?? cardSets.codeVibes;
    const size = boardSizeMap[boardSizeKey] ?? 16;

    const selectedCards = cards.slice(0, size);
    const boardEl = document.createElement("div");
    boardEl.className = `card-grid card-grid--${boardSizeKey}`;

    shuffle(selectedCards).forEach((card) => {
        boardEl.appendChild(createCard(card));
    });

    return boardEl;
}
