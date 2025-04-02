import correctAudio from "./assets/sounds/correct.mp3";
import failureAudio from "./assets/sounds/failure.mp3";

export const LETTERS = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

export const ATTEMPTS_NUMBER = 7;
export const MAXIMUM_QUESTIONS = 8;
export const SCORE_POINT = 10;

export const correctSound = new Audio(correctAudio);
export const failureSound = new Audio(failureAudio);
