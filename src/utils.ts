import { AcceptedWord, Question } from "./types";

export const getRandomQuestion = (
  array: Question[],
  picked: AcceptedWord[]
): Question => {
  const pickedWords = picked.map((el) => el.word);
  array = array.filter((el) => !pickedWords.includes(el.word));

  const randomEl = array[Math.floor(Math.random() * array.length)];
  return randomEl;
};

export const checkCorrectAnswer = (currentQuestion: Question, lettersCorrect: string[]) =>
  !!currentQuestion.word.length &&
  currentQuestion.word.split("").every((l) => lettersCorrect.includes(l) || l === " ");
