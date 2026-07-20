import { gameSettings } from "./_settingState";

const themes = {
    "code-vibes": "src/assets/images/dark/prew-dark.svg",
    "gaming": "src/assets/images/bluedark/prew-darkblue-hover.svg",
    "da-projects": "src/assets/images/blue/prew-hover-img.svg",
    "foods": "src/assets/images/orange/prew-hover-img.svg"
};

const storageKey = "memory-game-settings";

function updatePreview(preview: HTMLImageElement | null, theme: string) {
    if (!preview) return;

    const previewSrc = themes[theme as keyof typeof themes] ?? themes["code-vibes"];
    preview.src = previewSrc;
}


export function initSettingsEvents(app: HTMLElement) {
    const preview = app.querySelector<HTMLImageElement>('#themPreview');
    const radios = app.querySelectorAll<HTMLInputElement>('input[name="theme"]');


    radios.forEach(radio => {
        const label = app.querySelector<HTMLLabelElement>(`label[for="${radio.id}"]`);

        const updateForTheme = () => {
            updatePreview(preview, radio.value);
        };

        radio.addEventListener("mouseenter", updateForTheme);
        radio.addEventListener("focus", updateForTheme);
        radio.addEventListener("change", () => {
            updateForTheme();
        });

        if (label) {
            label.addEventListener("mouseenter", updateForTheme);
            label.addEventListener("focus", updateForTheme);
            label.addEventListener("click", () => {
                updateForTheme();
            });
        }
    });

    const activeTheme = gameSettings.theme;
    const activeRadio = Array.from(radios).find(radio => radio.value === activeTheme);

    if (activeRadio) {
        activeRadio.checked = true;
    }

    updatePreview(preview, activeTheme);
}

function radio(){
    
}
