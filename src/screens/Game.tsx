import { JSX, useEffect, useMemo } from "react";
import { useAppStore } from "../store/useAppStore";
import {
  ATTEMPTS_NUMBER,
  LETTERS,
  MAXIMUM_QUESTIONS,
  VOWELS,
  LETTERS_RU,
  VOWELS_RU,
} from "../constants";
import Word from "../ui/Word";
import ProgressBar from "../ui/ProgressBar";
import useQuestion from "../hooks/useQuestion";
import Keyboard from "../components/Keyboard";
import Correct from "../components/Correct";
import { checkCorrectAnswer } from "../utils";
import data from "../../data.json";
import { useTranslation } from "react-i18next";
import Title from "../ui/Title";

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
    lang,
  } = useAppStore();
  const { t } = useTranslation();

  const currentKeyboard = lang === "en" ? LETTERS : LETTERS_RU;

  const {
    correct,
    question: currentQuestion,
    setCorrect,
    setUpdate,
    questionsLength,
  } = useQuestion({ data });

  const isCorrectAnswer = useMemo(
    () => checkCorrectAnswer(currentQuestion, lettersCorrect, lang),
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
        word: currentQuestion[lang],
      });
      setScreen("over");
    }

    if (questions.length === MAXIMUM_QUESTIONS - 1 && isCorrectAnswer) {
      setQuestions({
        mistakes: lettersCorrect.length,
        word: currentQuestion[lang],
      });
      setScreen("win");
    }
  }, [lettersCorrect, lettersWrong, currentQuestion]);

  const keyHandler = (char: string) => {
    if (currentQuestion) {
      const vowelsKeys = lang === "en" ? VOWELS : VOWELS_RU;
      const isVowel = vowelsKeys.includes(char);
      const isChar = currentQuestion[lang].includes(char);
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
      word: currentQuestion[lang],
    });
  };

  return (
    <>
      <Title>{t("screen.game.title", { title: pickedCategory })}</Title>

      <div className="text-center mb-8">
        Question: {questions.length + 1} / {MAXIMUM_QUESTIONS}
      </div>

      <Word word={currentQuestion[lang]} />

      <ProgressBar />

      {!correct && (
        <Keyboard
          currentQuestion={currentQuestion[lang]}
          keyHandler={keyHandler}
          currentKeyboard={currentKeyboard}
        />
      )}

      {correct && <Correct handler={goNextHandler} />}
    </>
  );
};

export default GameScreen;
