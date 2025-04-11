import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { AcceptedWord, LangType, LetterType, Screen } from "../types";
import { SCORE_POINT } from "../constants";

type AppState = {
  lang: LangType;
  screen: Screen;
  pickedCategory: string;
  lettersCorrect: string[];
  lettersWrong: string[];
  score: number;
  questions: AcceptedWord[];

  setLang: (lang: LangType) => void;
  setScreen: (data: Screen) => void;
  setCategory: (data: string) => void;
  setLetter: (letter: string, type: LetterType) => void;
  setQuestions: (word: AcceptedWord) => void;
  resetWord: () => void;
  resetGame: () => void;
  resetScore: () => void;
};

export const useAppStore = create<AppState>()(
  devtools((set) => ({
    lang: "en",
    screen: "main",
    pickedCategory: "",
    lettersCorrect: [],
    lettersWrong: [],
    score: 0,
    questions: [],

    setLang: (lang) => set(() => ({ lang })),

    setScreen: (data) => set(() => ({ screen: data })),

    setCategory: (data) => set(() => ({ pickedCategory: data })),

    setLetter: (letter, type) =>
      set((state) => {
        if (type === "correct") {
          return {
            lettersCorrect: [...state.lettersCorrect, letter],
            score: state.score + SCORE_POINT,
          };
        }
        if (type === "vowel") {
          return {};
        }
        return { lettersWrong: [...state.lettersWrong, letter] };
      }),

    setQuestions: (word) => set((state) => ({ questions: [...state.questions, word] })),

    resetWord: () => set(() => ({ lettersCorrect: [], lettersWrong: [] })),

    resetScore: () => set(() => ({ score: 0, questions: [] })),

    resetGame: () =>
      set(() => ({
        lettersCorrect: [],
        lettersWrong: [],
        pickedCategory: "",
        questions: [],
      })),
  }))
);
