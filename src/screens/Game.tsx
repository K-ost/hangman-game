import { JSX, useEffect } from "react";
import { useAppStore } from "../store/useAppStore";
import { ATTEMPTS_NUMBER, LETTERS, MAXIMUM_QUESTIONS } from "../constants";
import Word from "../ui/Word";
import KeyButton from "../ui/KeyButton";
import ProgressBar from "../ui/ProgressBar";
import useQuestion from "../hooks/useQuestion";
import { KeyboardGrid } from "../components/Keyboard";
import Correct from "../components/Correct";
import clickAudio from "../assets/sounds/click.mp3";
import correctAudio from "../assets/sounds/correct.mp3";
import failureAudio from "../assets/sounds/failure.mp3";

const clickSound = new Audio(clickAudio);
const correctSound = new Audio(correctAudio);
const failureSound = new Audio(failureAudio);

const GameScreen = (): JSX.Element => {
  const {
    pickedCategory,
    setLetter,
    lettersWrong,
    lettersCorrect,
    setScreen,
    resetWord,
    resetGame,
    setQuestions,
    questions,
  } = useAppStore();

  const {
    correct,
    question: currentQuestion,
    setCorrect,
    setUpdate,
    questionsLength,
  } = useQuestion();

  if (questionsLength === 0) return <h3>There're no questions in this category yet.</h3>;

  useEffect(() => {
    if (
      !!currentQuestion.word.length &&
      currentQuestion.word.split("").every((l) => lettersCorrect.includes(l) || l === " ")
    ) {
      setCorrect(true);
      correctSound.play();
    }

    if (lettersWrong.length >= ATTEMPTS_NUMBER) {
      resetGame();
      setScreen("over");
      failureSound.play();
    }

    if (questions.length === MAXIMUM_QUESTIONS) {
      resetGame();
      setScreen("over");
    }
  }, [lettersCorrect, lettersWrong, currentQuestion]);

  const keyHandler = (char: string) => {
    if (currentQuestion) {
      clickSound.play();
      setLetter(char, currentQuestion.word.includes(char) ? "correct" : "wrong");
    }
  };

  const goNextHandler = () => {
    setCorrect(false);
    setUpdate(true);
    resetWord();
    setQuestions(currentQuestion.word);
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
              <KeyboardGrid>
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
