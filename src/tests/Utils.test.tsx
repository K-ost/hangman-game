import { describe, expect, it } from "vitest";
import { checkCorrectAnswer, getRandomQuestion } from "../utils";
import { AcceptedWord, Question } from "../types";

const mockedQuestions: Question[] = [
  { word: "dog" },
  { word: "cat" },
  { word: "bear" },
  { word: "panda" },
  { word: "cow" },
];
const mockedPickedQuestions: AcceptedWord[] = [
  { word: "dog", mistakes: 1 },
  { word: "cat", mistakes: 3 },
  { word: "bear", mistakes: 0 },
];

describe("Utils", () => {
  it("getRandomQuestion", () => {
    const question = getRandomQuestion(mockedQuestions, mockedPickedQuestions);
    expect(question.hasOwnProperty("word")).toStrictEqual(true);
    const array = mockedPickedQuestions.map((el) => el.word);
    expect(array.includes(question.word)).toBe(false);
  });

  it("checkCorrectAnswer", () => {
    const isCorrect = checkCorrectAnswer({ word: "cat" }, ["c", "a", "t"]);
    expect(isCorrect).toBe(true);
    const isCorrect2 = checkCorrectAnswer({ word: "cat" }, ["b", "a", "t"]);
    expect(isCorrect2).toBe(false);
  });
});
