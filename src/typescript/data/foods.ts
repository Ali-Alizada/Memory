import type { Card } from "./types";

const foodAssets = [
  { asset: "src/assets/images/foods/1a.svg", label: "Apple", alt: "Apple" },
  { asset: "src/assets/images/foods/1b.svg", label: "Burger", alt: "Burger" },
  { asset: "src/assets/images/foods/2a.svg", label: "Pizza", alt: "Pizza" },
  { asset: "src/assets/images/foods/2b.svg", label: "Donut", alt: "Donut" },
  { asset: "src/assets/images/foods/3a.svg", label: "Ice Cream", alt: "Ice Cream" },
  { asset: "src/assets/images/foods/3b.svg", label: "Fries", alt: "Fries" },
  { asset: "src/assets/images/foods/4a.svg", label: "Sushi", alt: "Sushi" },
  { asset: "src/assets/images/foods/4b.svg", label: "Taco", alt: "Taco" },
  { asset: "src/assets/images/foods/5a.svg", label: "Ramen", alt: "Ramen" },
  { asset: "src/assets/images/foods/5b.svg", label: "Cookie", alt: "Cookie" },
  { asset: "src/assets/images/foods/6a.svg", label: "Cupcake", alt: "Cupcake" },
  { asset: "src/assets/images/foods/6b.svg", label: "Hot Dog", alt: "Hot Dog" },
  { asset: "src/assets/images/foods/7a.svg", label: "Popcorn", alt: "Popcorn" },
  { asset: "src/assets/images/foods/7b.svg", label: "Drink", alt: "Drink" },
  { asset: "src/assets/images/foods/8a.svg", label: "Pancake", alt: "Pancake" },
  { asset: "src/assets/images/foods/8b.svg", label: "Waffle", alt: "Waffle" },
  { asset: "src/assets/images/foods/9a.svg", label: "Bacon", alt: "Bacon" },
  { asset: "src/assets/images/foods/9b.svg", label: "Cheese", alt: "Cheese" },
];


export const foodCardsWinner = {
  showConfetti: false,
  confettiSrc: "",
  blueWinnerIcon: "...",

};

export const foodCards: Card[] = foodAssets.flatMap((item, index) => {
  const pairId = index + 1;
  return [
    {
      id: `food-${pairId}-a`,
      pairId,
      boardKey: "foods",
      asset: item.asset,
      label: item.label,
      alt: item.alt,
    },
    {
      id: `food-${pairId}-b`,
      pairId,
      boardKey: "foods",
      asset: item.asset,
      label: item.label,
      alt: item.alt,
    },
  ];
});