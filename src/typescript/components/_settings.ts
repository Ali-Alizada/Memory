export function renderSettings(app: HTMLElement): void {

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
            <input type="radio" id="code-vibes" name="" value="" checked />
            <label for="code-vibes">Code vibes themes</label>
            </div>

            <div>
            <input type="radio" id="gaming" name="" value="" checked />
            <label for="gaming">Gaming themes</label>
            </div>

            <div>
            <input type="radio" id="da-projecs" name="" value="" checked />
            <label for="gaming">DA Projects thmene</label>
            </div>

            <div>
            <input type="radio" id="foods" name="" value="" checked />
            <label for="gaming">Foods themes</label>
            </div>
            </div>



            <div class="game__title__players">
            <span><img class="chose-icons" src="src/assets/images/setting/player-icon.svg" alt="chose-player-icon"></span>
            <p>Choose player</p>
            </div>

            <div class="radio__buttons">
            <div>
            <input type="radio" id="code-vibes" name="" value="" checked />
            <label for="code-vibes">Blue</label>
            </div>

            <div>
            <input type="radio" id="gaming" name="" value="" checked />
            <label for="gaming">Orange</label>
            </div>
            </div>

            <div class="game__title__board">
            <span><img class="chose-icons" src="src/assets/images/setting/board-icon.svg" alt="board-icon"></span>
            <p>Board size</p>
            </div>

            <div class="radio__buttons">
            <div>
            <input type="radio" id="code-vibes" name="" value="" checked />
            <label for="code-vibes">16 cards</label>
            </div>

            <div>
            <input type="radio" id="gaming" name="" value="" checked />
            <label for="gaming">24 cards</label>
            </div>

            <div>
            <input type="radio" id="gaming" name="" value="" checked />
            <label for="gaming">36 cards</label>
            </div>
            </div>

            </section>

            </section>

            <!-- container-right -->
            <section class="container-right">

                <img class="prew-img" src="src/assets/images/dark/prew-dark.svg" alt="prew-dark-img">
            
                <div class="start__pannel">

                    <button class="game__button">
                          
                    Game theme
                    </button>
                  
                 <button class="game__button">
                       <img src="src/assets/images/setting/Line 4.svg" alt="line-icon">
                          player
                 </button>
                 
                  <button class="game__button">
                    <img src="src/assets/images/setting/Line 4.svg" alt="line-icon">
                     Board size
                   </button>
                    
                 <button class="start-btn">
                <span><img class="start-icon" src="src/assets/images/setting/start-icon.svg" alt="start-btn-icon"></span>
                    start
                </button>
                </div>
 
            </section>


    </div>



   

    `;

    
}