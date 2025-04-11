import { describe, expect, it } from "vitest";
import { checkCorrectAnswer, getRandomQuestion } from "../utils";
import { AcceptedWord, Question } from "../types";

const mockedQuestions: Question[] = [
  { en: "dog", ru: "собака" },
  { en: "cat", ru: "кот" },
  { en: "bear", ru: "медведь" },
  { en: "panda", ru: "панда" },
  { en: "cow", ru: "корова" },
];
const mockedPickedQuestions: AcceptedWord[] = [
  { word: "dog", mistakes: 1 },
  { word: "cat", mistakes: 3 },
  { word: "bear", mistakes: 0 },
];

describe("Utils", () => {
  it("getRandomQuestion", () => {
    const question = getRandomQuestion(mockedQuestions, mockedPickedQuestions, "en");
    expect(question.hasOwnProperty("en")).toStrictEqual(true);
    const array = mockedPickedQuestions.map((el) => el.word);
    expect(array.includes(question.en)).toBe(false);
  });

  it("checkCorrectAnswer", () => {
    const isCorrect = checkCorrectAnswer({ en: "cat", ru: "кот" }, ["c", "a", "t"], "en");
    expect(isCorrect).toBe(true);
    const isCorrect2 = checkCorrectAnswer(
      { en: "cat", ru: "кот" },
      ["b", "a", "t"],
      "en"
    );
    expect(isCorrect2).toBe(false);
  });
});
