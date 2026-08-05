# Memory Game

A modern, responsive Memory Game built with TypeScript. Choose a theme, configure the player count and board size, then find the most matching card pairs.

## Overview

Memory Game combines classic card matching with a configurable, theme-based user interface. The application supports multiple game modes and provides a dedicated result overlay for every game outcome.


## Features

- Select from multiple visual game themes.
- Configure the number of players before starting a game.
- Choose different board sizes for flexible difficulty levels.
- Dedicated result screens for winners, draws, and game-over states.
- Responsive layout for desktop, tablet, and mobile devices.
- Theme-based UI customisation for cards, colours, and game surfaces.
- Reusable components for settings, the game board, overlays, and result views.
- Type-safe TypeScript architecture for more maintainable application code.

## Installation & Getting Started

**Prerequisite:** Node.js (the current LTS version is recommended)

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```


## Tech Stack

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

## Project Structure

```text
src/
├── assets/
│   └── images/
├── scss/
│   ├── abstract/
│   ├── components/
│   └── style.scss
└── typescript/
    ├── components/
    │   ├── settings/
    │   ├── templates/
    │   ├── board.ts
    │   ├── cards.ts
    │   └── overlay.ts
    ├── data/
    ├── theme/
    ├── game.ts
    └── main.ts
```

- `assets/images/` contains images and SVG assets for the different game themes.
- `scss/` contains the stylesheets; `abstract/` groups variables, mixins, and helper functions, while `components/` contains component-specific styles.
- `typescript/components/` contains UI logic for the game board, cards, settings, overlays, and result views.
- `typescript/components/templates/` separates HTML templates from component logic.
- `typescript/data/` provides card data for the available themes and shared types.
- `typescript/theme/` manages theme configurations and their type definitions.
- `typescript/game.ts` contains the core game logic; `typescript/main.ts` is the application's entry point.

## Architecture

The application follows a component-based structure: areas such as settings, the game board, and result views are clearly separated. HTML templates and TypeScript logic are kept apart, making components easier to understand and reuse. Shared functions encapsulate recurring behaviour, while central theme files control the visual variations of the interface.


## License

This project is available under the license included in the repository.
