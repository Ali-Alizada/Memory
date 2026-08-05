import { gameSettings } from "./_settingState";

const themes = {
    "code-vibes": "src/assets/images/dark/prew-dark.svg",
    gaming: "src/assets/images/gaming/prew-darkblue-hover.svg",
    "da-projects": "src/assets/images/da-projects/prew-hover-img.svg",
    foods: "src/assets/images/foods/prew-hover-img.svg",
};

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


function updatePreview(
    preview: HTMLImageElement | null,
    theme: string
) {
    if (!preview) return;

    preview.src =
        themes[theme as keyof typeof themes] ??
        themes["code-vibes"];
}


export function initSettingsEvents(app: HTMLElement) {
    const elements = getSettingsElements(app);

    initThemeEvents(app, elements);
    initPlayerEvents(app, elements.playerRadios);
    initBoardEvents(app, elements.boardRadios);

    restoreSettings(elements);
    updatePreview(elements.preview, gameSettings.theme);
    updateStartPanel(app);
}


function getSettingsElements(app: HTMLElement) {
    return {
        preview: app.querySelector<HTMLImageElement>("#themPreview"),
        radios: app.querySelectorAll<HTMLInputElement>(
            'input[name="theme"]'
        ),
        playerRadios: app.querySelectorAll<HTMLInputElement>(
            'input[name="player"]'
        ),
        boardRadios: app.querySelectorAll<HTMLInputElement>(
            'input[name="board"]'
        ),
    };
}


function initThemeEvents(
    app: HTMLElement,
    elements: ReturnType<typeof getSettingsElements>
) {
    elements.radios.forEach((radio) => {
        const update = () =>
            updatePreview(elements.preview, radio.value);

        const label = app.querySelector<HTMLLabelElement>(
            `label[for="${radio.id}"]`
        );

        radio.addEventListener("mouseenter", update);
        radio.addEventListener("focus", update);

        radio.addEventListener("change", () => {
            gameSettings.theme = radio.value;
            update();
            updateStartPanel(app);
        });

        addLabelEvents(label, update);
    });
}


function addLabelEvents(
    label: HTMLLabelElement | null,
    callback: () => void
) {
    if (!label) return;

    label.addEventListener("mouseenter", callback);
    label.addEventListener("focus", callback);
    label.addEventListener("click", callback);
}


function initPlayerEvents(
    app: HTMLElement,
    radios: NodeListOf<HTMLInputElement>
) {
    radios.forEach((radio) => {
        radio.addEventListener("change", () => {
            gameSettings.player = radio.value;
            updateStartPanel(app);
        });
    });
}


function initBoardEvents(
    app: HTMLElement,
    radios: NodeListOf<HTMLInputElement>
) {
    radios.forEach((radio) => {
        radio.addEventListener("change", () => {
            gameSettings.boards = radio.value;
            updateStartPanel(app);
        });
    });
}


function restoreSettings(
    elements: ReturnType<typeof getSettingsElements>
) {
    checkRadio(elements.radios, gameSettings.theme);
    checkRadio(elements.playerRadios, gameSettings.player);
    checkRadio(elements.boardRadios, gameSettings.boards);
}


function checkRadio(
    radios: NodeListOf<HTMLInputElement>,
    value: string
) {
    const radio = Array.from(radios)
        .find((item) => item.value === value);

    if (radio) {
        radio.checked = true;
    }
}


function updateStartPanel(app: HTMLElement) {
    const elements = getPanelElements(app);

    if (!elements) return;

    updatePanelTexts(elements);
    updatePanelState(elements, app);
}


function getPanelElements(app: HTMLElement) {
    const theme = app.querySelector<HTMLButtonElement>("#selectedTheme");
    const player = app.querySelector<HTMLButtonElement>("#selectedPlayer");
    const board = app.querySelector<HTMLButtonElement>("#selectedBoard");
    const start = app.querySelector<HTMLButtonElement>("#startBtn");
    if (!theme || !player || !board || !start) {
        return null;
    }

    return {
        theme,
        player,
        board,
        start,
    };
}


function updatePanelTexts(
    elements: NonNullable<ReturnType<typeof getPanelElements>>
) {
    elements.theme.textContent =
        themeNames[gameSettings.theme] ?? "Game theme";

    elements.player.querySelector("span")!.textContent =
        playerNames[gameSettings.player] ?? "Player";

    elements.board.querySelector("span")!.textContent =
        boardNames[gameSettings.boards] ?? "Board size";
}


function updatePanelState(
    elements: NonNullable<ReturnType<typeof getPanelElements>>,
    app: HTMLElement
) {
    const complete = Boolean(gameSettings.theme && gameSettings.player && gameSettings.boards);
    elements.theme.disabled = !complete;
    elements.player.disabled = !complete;
    elements.board.disabled = !complete;
    elements.start.disabled = !complete;
    
    app.querySelector(".start__pannel")
        ?.classList.toggle(
            "start__pannel--disabled",
            !complete
        );
}