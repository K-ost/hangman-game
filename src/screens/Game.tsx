import { JSX, useEffect, useMemo } from "react";
import { useAppStore } from "../store/useAppStore";
import {
  ATTEMPTS_NUMBER,
  correctSound,
  failureSound,
  LETTERS,
  MAXIMUM_QUESTIONS,
  VOWELS,
} from "../constants";
import Word from "../ui/Word";
import KeyButton from "../ui/KeyButton";
import ProgressBar from "../ui/ProgressBar";
import useQuestion from "../hooks/useQuestion";
import { KeyboardGrid } from "../components/Keyboard";
import Correct from "../components/Correct";
import { checkCorrectAnswer } from "../utils";
import data from "../../data.json";

const GameScreen = (): JSX.Element => {
  const {
    pickedCategory,
    setLetter,
    lettersWrong,
    lettersCorrect,
    setScreen,
    resetWord,
    setQuestions,
    questions,
  } = useAppStore();

  const {
    correct,
    question: currentQuestion,
    setCorrect,
    setUpdate,
    questionsLength,
  } = useQuestion({ data });

  const isCorrectAnswer = useMemo(
    () => checkCorrectAnswer(currentQuestion, lettersCorrect),
    [currentQuestion, lettersCorrect]
  );

  if (questionsLength === 0) return <h3>There're no questions in this category yet.</h3>;

  useEffect(() => {
    if (isCorrectAnswer) {
      setCorrect(true);
    }

    if (lettersWrong.length >= ATTEMPTS_NUMBER) {
      setQuestions({
        mistakes: lettersWrong.length,
        word: currentQuestion.word,
      });
      setScreen("over");
      failureSound.play();
    }

    if (questions.length === MAXIMUM_QUESTIONS - 1 && isCorrectAnswer) {
      setQuestions({
        mistakes: lettersCorrect.length,
        word: currentQuestion.word,
      });
      setScreen("win");
      correctSound.play();
    }
  }, [lettersCorrect, lettersWrong, currentQuestion]);

  const keyHandler = (char: string) => {
    if (currentQuestion) {
      const isVowel = VOWELS.includes(char);
      const isChar = currentQuestion.word.includes(char);
      if (isVowel && !isChar) {
        return;
      }
      setLetter(char, isChar ? "correct" : "wrong");
    }
  };

  const goNextHandler = () => {
    setCorrect(false);
    setUpdate(true);
    resetWord();
    setQuestions({
      mistakes: lettersWrong.length,
      word: currentQuestion.word,
    });
  };

  return (
    <div className="fullWidth">
      <h2>Category: {pickedCategory}</h2>

      <p className="text-center">
        Question: {questions.length + 1} / {MAXIMUM_QUESTIONS}
      </p>

      {currentQuestion.hint && <h3>{currentQuestion.hint}</h3>}

      <Word word={currentQuestion.word} />

      <ProgressBar />

      {!correct && (
        <div>
          {LETTERS.map((string) => {
            return (
              <KeyboardGrid key={string}>
                {string.split("").map((el) => {
                  return (
                    <KeyButton
                      key={el}
                      letter={el}
                      pressFn={() => keyHandler(el)}
                      word={currentQuestion.word}
                    />
                  );
                })}
              </KeyboardGrid>
            );
          })}
        </div>
      )}

      {correct && <Correct handler={goNextHandler} />}
    </div>
  );
};

export default GameScreen;
