export type LangType = "en" | "ru";

export type Screen = "main" | "categories" | "game" | "over" | "win";

export type LetterType = "correct" | "wrong" | "vowel";

export type Question = {
  en: string;
  ru: string;
};

export type Category = {
  id: number;
  category: Question;
  image: string;
  questions: Question[];
};

export type AcceptedWord = {
  word: string;
  mistakes: number;
};
