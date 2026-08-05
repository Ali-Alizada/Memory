/**
 * Generates the markup for the game settings screen.
 *
 * @returns The settings screen markup.
 */
export function settingsTemplate(): string {

    return `
        <div class="container-wrapper">
        <!-- conainer-left -->
        <section class="conatiner__left">

            <header class="setting__header">
                <h2>Settings</h2>
                <img src="src/assets/images/setting/Line 2.svg" alt="line-icon">
            </header>

            <section class="setting__content">

                <div class="game__themes__title">
                    <span><img class="chose-icons" src="src/assets/images/setting/them-icon.svg" alt="them-icon"></span>
                    <p>Game themes</p>
                </div>

                <div class="radio__buttons">
                    <div>
                        <input type="radio" id="code-vibes" name="theme" value="code-vibes" />
                        <label for="code-vibes">Code vibes themes</label>
                        <img src="src/assets/images/setting/Line 3.svg" alt="line-icon">
                    </div>

                    <div>
                        <input type="radio" id="gaming" name="theme" value="gaming" />
                        <label for="gaming">Gaming themes</label>
                        <img src="src/assets/images/setting/Line 3.svg" alt="line-icon">
                    </div>

                    <div>
                        <input type="radio" id="da-projects" name="theme" value="da-projects" />
                        <label for="da-projects">DA Projects themes</label>
                        <img src="src/assets/images/setting/Line 3.svg" alt="line-icon">
                    </div>

                    <div>
                        <input type="radio" id="foods" name="theme" value="foods" />
                        <label for="foods">Foods themes</label>
                        <img src="src/assets/images/setting/Line 3.svg" alt="line-icon">
                    </div>
                </div>

                <div class="game__title__players">
                    <span><img class="chose-icons" src="src/assets/images/setting/player-icon.svg"
                            alt="chose-player-icon"></span>
                    <p>Choose player</p>
                </div>

                <div class="radio__buttons">
                    <div>
                        <input type="radio" id="bluePlayer" name="player" value="bluePlayer" />
                        <label for="bluePlayer">Blue</label>
                        <img src="src/assets/images/setting/Line 3.svg" alt="line-icon">
                    </div>

                    <div>
                        <input type="radio" id="orangePlayer" name="player" value="orangePlayer" />
                        <label for="orangePlayer">Orange</label>
                        <img src="src/assets/images/setting/Line 3.svg" alt="line-icon">
                    </div>
                </div>

                <div class="game__title__board">
                    <span><img class="chose-icons" src="src/assets/images/setting/board-icon.svg"
                            alt="board-icon"></span>
                    <p>Board size</p>
                </div>

                <div class="radio__buttons">
                    <div>
                        <input type="radio" id="boardSmall" name="board" value="boardSmall" />
                        <label for="boardSmall">16 cards</label>
                        <img src="src/assets/images/setting/Line 3.svg" alt="line-icon">
                    </div>

                    <div>
                        <input type="radio" id="boardMedium" name="board" value="boardMedium" />
                        <label for="boardMedium">24 cards</label>
                        <img src="src/assets/images/setting/Line 3.svg" alt="line-icon">
                    </div>

                    <div>
                        <input type="radio" id="boardLarge" name="board" value="boardLarge" />
                        <label for="boardLarge">36 cards</label>
                        <img src="src/assets/images/setting/Line 3.svg" alt="line-icon">
                    </div>
                </div>

            </section>

        </section>

        <!-- container-right -->

        <section class="container-right">

        <div class="prew-imgs-container">
        <img id="themPreview" class="prew-img" src="src/assets/images/gaming/prew-darkblue-hover.svg" alt="prew-dark-img">
        </div>

            
            <div class="start__pannel">

                <button class="game__button" id="selectedTheme">
                    <span>Game theme</span>
                </button>

                <button class="game__button" id="selectedPlayer">
                    <img src="src/assets/images/setting/Line 5.png" alt="line-icon">
                    <span>Player</span>
                </button>

                <button class="game__button" id="selectedBoard">
                    <img src="src/assets/images/setting/Line 5.png" alt="line-icon">
                       <span>Board size</span>
                </button>

                <button class="start-btn" id="startBtn" disabled>
                            <span><img class="start-icon" src="src/assets/images/setting/start-icon.svg"
                            alt="start-btn-icon"></span>
                    start
                </button>
            </div>

        </section>

    </div>
    `;
}
