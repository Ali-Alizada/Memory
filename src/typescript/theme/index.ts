import { themes } from "./themes";
import type { ThemeConfig, ThemeId } from "./types";

export * from "./types";
export * from "./themes";

export function getThemeConfig(themeId: string): ThemeConfig {
  const normalizedId = (themeId || "code-vibes") as ThemeId;
  return themes[normalizedId] ?? themes["code-vibes"];
}
