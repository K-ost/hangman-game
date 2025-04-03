import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { LetterType, Screen } from "../types";
import { SCORE_POINT } from "../constants";

type AppState = {
  screen: Screen;
  pickedCategory: string;
  lettersCorrect: string[];
  lettersWrong: string[];
  score: number;
  questions: string[];

  setScreen: (data: Screen) => void;
  setCategory: (data: string) => void;
  setLetter: (letter: string, type: LetterType) => void;
  setQuestions: (word: string) => void;
  resetWord: () => void;
  resetGame: () => void;
  resetScore: () => void;
};

export const useAppStore = create<AppState>()(
  devtools((set) => ({
    screen: "main",
    pickedCategory: "",
    lettersCorrect: [],
    lettersWrong: [],
    score: 0,
    questions: [],

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

    resetScore: () => set(() => ({ score: 0 })),

    resetGame: () =>
      set(() => ({
        lettersCorrect: [],
        lettersWrong: [],
        pickedCategory: "",
        questions: [],
      })),
  }))
);
