import { JSX, useEffect } from "react";
import { useAppStore } from "../store/useAppStore";
import { ATTEMPTS_NUMBER, LETTERS, MAXIMUM_QUESTIONS } from "../constants";
import Word from "../ui/Word";
import KeyButton from "../ui/KeyButton";
import ProgressBar from "../ui/ProgressBar";
import useQuestion from "../hooks/useQuestion";
import { KeyboardGrid } from "../components/Keyboard";
import Correct from "../components/Correct";

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

  const { correct, question: currentQuestion, setCorrect, setUpdate } = useQuestion();

  useEffect(() => {
    if (
      !!currentQuestion.word.length &&
      currentQuestion.word.split("").every((l) => lettersCorrect.includes(l))
    ) {
      setCorrect(true);
    }

    if (lettersWrong.length >= ATTEMPTS_NUMBER) {
      resetGame();
      setScreen("over");
    }

    if (questions.length === MAXIMUM_QUESTIONS) {
      resetGame();
      setScreen("over");
    }
  }, [lettersCorrect, lettersWrong, currentQuestion]);

  const keyHandler = (char: string) => {
    if (currentQuestion) {
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
    <div>
      <h2>Category: {pickedCategory}</h2>

      <h3>
        {currentQuestion.hint} - {currentQuestion.word}
      </h3>

      <Word word={currentQuestion.word} />

      <ProgressBar />

      {!correct && (
        <KeyboardGrid>
          {LETTERS.split("").map((el) => (
            <KeyButton
              key={el}
              letter={el}
              pressFn={() => keyHandler(el)}
              word={currentQuestion.word}
            />
          ))}
        </KeyboardGrid>
      )}

      {correct && <Correct handler={goNextHandler} />}
    </div>
  );
};

export default GameScreen;
