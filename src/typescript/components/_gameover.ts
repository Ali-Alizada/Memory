import { renderWinner } from "./_winner";
import { renderDraw } from "./_draw";
import { gameOverTemplate } from "./templates/_gameover-template";

/**
 * Renders the final score before displaying the game result.
 *
 * @param app - Application container that receives the game-over view.
 * @param scores - Final scores for both players.
 */
export function renderGameOver(app: HTMLElement, scores: { bluePlayer: number; orangePlayer: number }): void {

    app.innerHTML = gameOverTemplate(scores);
    setTimeout(() => {
        if (scores.bluePlayer > scores.orangePlayer) {
            renderWinner(app, { winner: "blue", scores });
        } else if (scores.orangePlayer > scores.bluePlayer) {
            renderWinner(app, { winner: "orange", scores });
        } else {
            renderDraw(app);
        }
    }, 3000);
} 
