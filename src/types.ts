export type Screen = "main" | "categories" | "game" | "over" | "win";

export type LetterType = "correct" | "wrong" | "vowel";

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

export type AcceptedWord = {
  word: string;
  mistakes: number;
};
