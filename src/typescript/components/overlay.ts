export function createExitOverlay(
    app: HTMLElement, 
    onExit: () => void
) {

    const overlay = document.createElement("div");
    overlay.className = "overlay hidden";

    overlay.innerHTML = `
    
         <div class="overlay__content">
                    <p>Are you sure you want to quite <br>the game?</p>
                    
                    <div class="overlayBtns">
                          <button class="stay-btn">Back to game</button>
                          <button class="back-btn">Exit game</button>
                    </div>
                  
        </div>
    
    `;

    app.appendChild(overlay);

    overlay.querySelector(".stay-btn")?.addEventListener("click", ()=> {
        overlay.classList.add("hidden");
    });

    overlay.querySelector(".back-btn")?.addEventListener("click", ()=> {
        onExit();
    });

    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            overlay.classList.add("hidden");
        }
    });

    return overlay;


}