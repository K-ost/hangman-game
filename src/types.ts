export type Screen = "main" | "categories" | "game" | "over" | "score";

export type Question = {
  word: string;
  hint?: string;
};

export type Category = {
  id: number;
  category: string;
  image: string;
  questions: Question[];
};
