import { createExitOverlay } from "./components/overlay";
import { createBoard } from "./components/board";
import { gameSettings } from "./components/settings/_settingState";
import { renderGameOver } from "./components/_gameover";
import { renderSettings } from "./components/settings/_settings";
import { getThemeConfig } from "./theme/index";
import type { ThemeConfig } from "./theme/types";
import { gameTemplate } from "./components/templates/_game-template";

type GameState = {
  currentPlayer: "bluePlayer" | "orangePlayer";
  scores: {
    bluePlayer: number;
    orangePlayer: number;
  };
  flippedCards: HTMLElement[];
  isProcessing: boolean;
};

export function renderGame(app: HTMLElement) {
  const themeConfig = getThemeConfig(gameSettings.theme);

  app.innerHTML = gameTemplate(themeConfig);
  const game = initGameState();
  updateHeader(app, themeConfig, game);
  createGameBoard(app);
  initCards(app, themeConfig, game);
  initExit(app);
}

function initGameState(): GameState {
  return {
    currentPlayer:
      (gameSettings.player as "bluePlayer" | "orangePlayer") || "bluePlayer",

    scores: {
      bluePlayer: 0,
      orangePlayer: 0,
    },
    flippedCards: [],
    isProcessing: false,
  };
}

function updateHeader(app: HTMLElement, themeConfig: ThemeConfig, game: GameState,) {
  const blueScore = app.querySelector("#score-blue");
  const orangeScore = app.querySelector("#score-orange");
  const playerIcon = app.querySelector("#current-player-icon",) as HTMLImageElement | null;

  if (blueScore) {
    blueScore.textContent = String(game.scores.bluePlayer);}
  if (orangeScore) {
    orangeScore.textContent = String(game.scores.orangePlayer); }
  if (playerIcon) {
    playerIcon.src = game.currentPlayer === "bluePlayer" ? themeConfig.header.blueLabelIcon : themeConfig.header.orangeLabelIcon; }
}

function createGameBoard(app: HTMLElement) {
  const board = app.querySelector(".board");
  board?.appendChild(createBoard(gameSettings.theme, gameSettings.boards));
}

function initCards(
  app: HTMLElement,
  themeConfig: ThemeConfig,
  game: GameState,
) {
  const cards = app.querySelectorAll<HTMLElement>(".card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      handleCardClick(card, cards, app, themeConfig, game);
    });
  });
}

function handleCardClick(
  card: HTMLElement, cards: NodeListOf<HTMLElement>, app: HTMLElement, themeConfig: ThemeConfig, game: GameState,
) { if (game.isProcessing) return;
  if (card.classList.contains("flipped") || card.classList.contains("matched"))
    return;
  card.classList.add("flipped");
  game.flippedCards.push(card);
  if (game.flippedCards.length !== 2) return;
  game.isProcessing = true;
  const [card1, card2] = game.flippedCards;

  checkMatch(card1, card2, cards, app, themeConfig, game);
}

function checkMatch(
  card1: HTMLElement, card2: HTMLElement, cards: NodeListOf<HTMLElement>, app: HTMLElement, themeConfig: ThemeConfig, game: GameState,
) {
  const isMatch = card1.dataset.pairId === card2.dataset.pairId;
  if (isMatch) {
    card1.classList.add("matched");
    card2.classList.add("matched");
    game.scores[game.currentPlayer]++;
    game.flippedCards = [];
    game.isProcessing = false;
    updateHeader(app, themeConfig, game);
    checkGameFinished(cards, app, game.scores);
    return;
  }

  setTimeout(() => {
    card1.classList.remove("flipped");
    card2.classList.remove("flipped");
    game.flippedCards = [];
    game.currentPlayer = game.currentPlayer === "bluePlayer" ? "orangePlayer" : "bluePlayer";
    updateHeader(app, themeConfig, game);
    game.isProcessing = false;
  }, 1000);
}

function checkGameFinished(
  cards: NodeListOf<HTMLElement>,
  app: HTMLElement,
  scores: GameState["scores"],
) {
  const finished = Array.from(cards).every((card) =>
    card.classList.contains("matched"),
  );

  if (finished) {
    setTimeout(() => {
      renderGameOver(app, scores);
    }, 600);
  }
}

function initExit(app: HTMLElement) {
  const overlay = createExitOverlay(app, () => renderSettings(app));

  app.querySelector("#exit-btn")?.addEventListener("click", () => {
    overlay.classList.remove("hidden");
  });
}
