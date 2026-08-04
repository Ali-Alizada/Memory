# Memory Game

Ein modernes, responsives Memory Game, entwickelt mit TypeScript. Wähle ein Theme, konfiguriere die Anzahl der Spieler und die Spielfeldgröße und finde die meisten passenden Kartenpaare.

## Übersicht

Memory Game verbindet klassisches Karten-Matching mit einer konfigurierbaren, theme-basierten Benutzeroberfläche. Die Anwendung unterstützt verschiedene Spielmodi und liefert für jede Spielsituation ein passendes Ergebnis-Overlay.

## Screenshots & Demo

> Screenshots oder eine GIF-Demo können im folgenden Bereich ergänzt werden.

![Memory Game – Spielfeld](/assets/screenshots/game-screen.png)

_Empfohlener Ablageort für weitere Medien: `/assets/screenshots/`_

## Features

- Auswahl aus mehreren visuellen Game-Themes.
- Konfiguration der Spieleranzahl vor Spielbeginn.
- Unterschiedliche Board-Größen für variable Schwierigkeitsstufen.
- Eigene Ergebnisansichten für Gewinner, Unentschieden und Game Over.
- Responsives Layout für Desktop, Tablet und Mobilgeräte.
- Theme-basierte UI-Anpassungen für Karten, Farben und Spieloberflächen.
- Wiederverwendbare Komponenten für Einstellungen, Spielfeld, Overlays und Ergebnisansichten.
- Typsichere Architektur mit TypeScript für besser wartbaren Anwendungscode.

## Technologien

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

## Projektstruktur

```text
src/
├── assets/
├── components/
│   ├── settings/
│   ├── winner/
│   ├── draw/
│   └── overlay/
├── game/
├── data/
├── theme/
└── main.ts
```

- `assets/` enthält Bilder und weitere statische Medien.
- `components/` bündelt UI-Komponenten, Einstellungen sowie Ergebnis- und Overlay-Ansichten.
- `game/` enthält die zentrale Spiellogik und den Ablauf einer Partie.
- `data/` stellt Kartensätze und zugehörige Datentypen bereit.
- `theme/` verwaltet Theme-Konfigurationen und deren Typdefinitionen.
- `main.ts` ist der Einstiegspunkt der Anwendung.

## Architektur

Die Anwendung folgt einer komponentenbasierten Struktur: einzelne Bereiche wie Einstellungen, Spielfeld und Ergebnisansichten sind klar voneinander getrennt. HTML-Templates und TypeScript-Logik werden separat gehalten, wodurch Komponenten leichter verständlich und wiederverwendbar bleiben. Gemeinsame Funktionen bündeln wiederkehrende Abläufe; zentrale Theme-Dateien steuern die visuellen Varianten der Oberfläche.

## Installation & Start

**Voraussetzung:** Node.js (empfohlen: aktuelle LTS-Version)

```bash
npm install
```

Entwicklungsserver starten:

```bash
npm run dev
```

Produktions-Build erstellen:

```bash
npm run build
```

Den Build lokal prüfen:

```bash
npm run preview
```

## Lizenz

Dieses Projekt steht unter der im Repository hinterlegten Lizenz.
