import { initSettingsEvents } from "./_settingsEvent";

export function renderSettings(app: HTMLElement) {
  app.innerHTML = `

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
                        <input type="radio" id="code-vibes" name="theme" value="code-vibes" checked />
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
                        <input type="radio" id="bluePlayer" name="player" value="bluePlayer" checked />
                        <label for="bluePlayer">Blue</label>
                        <img src="src/assets/images/setting/Line 3.svg" alt="line-icon">
                    </div>

                    <div>
                        <input type="radio" id="orangePlayer" name="player" value="orangePlayer" checked />
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
                        <input type="radio" id="boardSmall" name="board" value="boardSmall" checked />
                        <label for="boardSmall">16 cards</label>
                        <img src="src/assets/images/setting/Line 3.svg" alt="line-icon">
                    </div>

                    <div>
                        <input type="radio" id="boardMedium" name="board" value="boardMedium" checked />
                        <label for="boardMedium">24 cards</label>
                        <img src="src/assets/images/setting/Line 3.svg" alt="line-icon">
                    </div>

                    <div>
                        <input type="radio" id="boardLarge" name="board" value="boardLarge" checked />
                        <label for="boardLarge">36 cards</label>
                        <img src="src/assets/images/setting/Line 3.svg" alt="line-icon">
                    </div>
                </div>

            </section>

        </section>

        <!-- container-right -->

        <section class="container-right">

            <img id="themPreview" class="prew-img" src="src/assets/images/dark/prew-dark.svg" alt="prew-dark-img">

            <div class="start__pannel">

                <button class="game__button" id="selectedTheme">
                    Game theme
                </button>

                <button class="game__button" id="selectedPlayer">
                    <img src="src/assets/images/setting/Line 4.svg" alt="line-icon">
                    <span>Player</span>
                </button>

                <button class="game__button" id="selectedBoard">
                    <img src="src/assets/images/setting/Line 4.svg" alt="line-icon">
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

  initSettingsEvents(app);
}
