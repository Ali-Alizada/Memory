import { gameSettings } from "./_settingState";

const themes = {
    "code-vibes": "src/assets/images/dark/prew-dark.svg",
    gaming: "src/assets/images/gaming/prew-darkblue-hover.svg",
    "da-projects": "src/assets/images/white/prew-hover-img.svg",
    foods: "src/assets/images/da-project/prew-hover-img.svg",
};

function updatePreview(preview: HTMLImageElement | null, theme: string) {
    if (!preview) return;

    const previewSrc =
        themes[theme as keyof typeof themes] ?? themes["code-vibes"];
    preview.src = previewSrc;
}

export function initSettingsEvents(app: HTMLElement) {
    const preview = app.querySelector<HTMLImageElement>("#themPreview");
    const radios = app.querySelectorAll<HTMLInputElement>('input[name="theme"]');
    const playerRadios = app.querySelectorAll<HTMLInputElement>(
        'input[name="player"]',
    );
    const boardRadios = app.querySelectorAll<HTMLInputElement>(
        'input[name="board"]',
    );

    radios.forEach((radio) => {
        const label = app.querySelector<HTMLLabelElement>(
            `label[for="${radio.id}"]`,
        );

        const updateForTheme = () => {
            updatePreview(preview, radio.value);
        };

        radio.addEventListener("mouseenter", updateForTheme);
        radio.addEventListener("focus", updateForTheme);
        radio.addEventListener("change", () => {
            gameSettings.theme = radio.value;

            updateForTheme();
            updateStartPanel(app);
        });

        if (label) {
            label.addEventListener("mouseenter", updateForTheme);
            label.addEventListener("focus", updateForTheme);
            label.addEventListener("click", () => {
                updateForTheme();
            });
        }
    });

    // radio player eventListener

    playerRadios.forEach((radio) => {
        radio.addEventListener("change", () => {
            gameSettings.player = radio.value;

            updateStartPanel(app);
        });
    });

    // radio Board eventListener
    boardRadios.forEach((radio) => {
        radio.addEventListener("change", () => {
            gameSettings.boards = radio.value;

            updateStartPanel(app);
        });
    });

    const activeTheme = gameSettings.theme;
    const activeRadio = Array.from(radios).find(
        (radio) => radio.value === activeTheme,
    );

    if (activeRadio) {
        activeRadio.checked = true;
    }

    const activePlayer = Array.from(playerRadios).find(
        (radios) => radios.value === gameSettings.player,
    );
    if (activePlayer) {
        activePlayer.checked = true;
    }

    const activeBoard = Array.from(boardRadios).find(
        (radios) => radios.value === gameSettings.boards,
    );
    if (activeBoard) {
        activeBoard.checked = true;
    }

    updatePreview(preview, activeTheme);
    updateStartPanel(app);
}

function updateStartPanel(app: HTMLElement) {
    const themeBtn = app.querySelector<HTMLButtonElement>("#selectedTheme");
    const playerBtn = app.querySelector<HTMLButtonElement>("#selectedPlayer");
    const boardBtn = app.querySelector<HTMLButtonElement>("#selectedBoard");
    const startBtn = app.querySelector<HTMLButtonElement>("#startBtn");
    const startPanel = app.querySelector<HTMLElement>(".start__pannel");

    if (!themeBtn || !playerBtn || !boardBtn || !startBtn) return;

    const themeNames: Record<string, string> = {
        "code-vibes": "Code vibes themes",
        gaming: "Gaming themes",
        "da-projects": "DA Projects themes",
        foods: "Foods themes",
    };

    const playerNames: Record<string, string> = {
        bluePlayer: "Blue",
        orangePlayer: "Orange",
    };

    const boardNames: Record<string, string> = {
        boardSmall: "16 cards",
        boardMedium: "24 cards",
        boardLarge: "36 cards",
    };

    themeBtn.textContent = themeNames[gameSettings.theme] ?? "Game theme";

    const playerText = playerBtn.querySelector("span");
    playerText!.textContent = playerNames[gameSettings.player] ?? "Player";

    const boardText = boardBtn.querySelector("span");
    boardText!.textContent = boardNames[gameSettings.boards] ?? "Board size";

    const complete = Boolean(
        gameSettings.theme && gameSettings.player && gameSettings.boards,
    );

    themeBtn.disabled = !complete;
    playerBtn.disabled = !complete;
    boardBtn.disabled = !complete;
    startBtn.disabled = !complete;
    startPanel?.classList.toggle("start__pannel--disabled", !complete);
}
