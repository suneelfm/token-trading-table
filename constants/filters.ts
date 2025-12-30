export type Filter = {
  id: "SOL" | "BNB";
  label: "Solana" | "BNB";
  image:
    | "https://axiom.trade/images/sol-fill.svg"
    | "https://axiom.trade/images/bnb-fill.svg";
};

export const FILTERS: Filter[] = [
  {
    id: "SOL",
    label: "Solana",
    image: "https://axiom.trade/images/sol-fill.svg",
  },
  { id: "BNB", label: "BNB", image: "https://axiom.trade/images/bnb-fill.svg" },
];
