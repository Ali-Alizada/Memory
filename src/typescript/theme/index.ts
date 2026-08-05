import { themes } from "./themes";
import type { ThemeConfig, ThemeId } from "./types";

export * from "./types";
export * from "./themes";

/**
 * Retrieves the configuration for a theme, using the default when unavailable.
 *
 * @param themeId - Identifier of the requested theme.
 * @returns The matching or default theme configuration.
 */
export function getThemeConfig(themeId: string): ThemeConfig {
  const normalizedId = (themeId || "code-vibes") as ThemeId;
  return themes[normalizedId] 
  ?? themes["code-vibes"];
}
