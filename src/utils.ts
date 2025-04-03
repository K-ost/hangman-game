import { Question } from "./types";

export const getImageLink = (url: string): string => {
  return new URL(url, import.meta.url).href;
};

export const generateRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getRandomQuestion = (array: Question[], picked: string[]): Question => {
  array = array.filter((el) => !picked.includes(el.word));
  const randomEl = array[Math.floor(Math.random() * array.length)];
  return randomEl;
};

export const checkCorrectAnswer = (currentQuestion: Question, lettersCorrect: string[]) =>
  !!currentQuestion.word.length &&
  currentQuestion.word.split("").every((l) => lettersCorrect.includes(l) || l === " ");
