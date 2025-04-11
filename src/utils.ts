import { VOWELS, VOWELS_RU } from "./constants";
import { AcceptedWord, LangType, Question } from "./types";

export const isVowelChecking = (letter: string, lang: LangType): boolean => {
  if (lang === "ru") {
    return VOWELS_RU.includes(letter);
  }
  return VOWELS.includes(letter);
};

export const getRandomQuestion = (
  array: Question[],
  picked: AcceptedWord[],
  lang: LangType
): Question => {
  const pickedWords = picked.map((el) => el.word);
  array = array.filter((el) => !pickedWords.includes(el[lang]));

  const randomEl = array[Math.floor(Math.random() * array.length)];
  return randomEl;
};

export const checkCorrectAnswer = (
  currentQuestion: Question,
  lettersCorrect: string[],
  lang: LangType
) =>
  !!currentQuestion[lang].length &&
  currentQuestion[lang].split("").every((l) => lettersCorrect.includes(l) || l === " ");
