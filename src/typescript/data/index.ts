import { codeVibesCards } from "./code-vibes";
import { gamingCards } from "./gaming";
import { daProjectsCards } from "./da-project";
import { foodCards } from "./foods";
import type { Card } from "./types";

export * from "./types";

export const cardSets: Record<string, Card[]> = {
  codeVibes: codeVibesCards,
  gaming: gamingCards,
  daProjects: daProjectsCards,
  foods: foodCards,
};