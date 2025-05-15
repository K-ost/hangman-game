import { JSX } from "react";
import KeyButton from "../ui/KeyButton";

type KeyboardProps = {
  currentKeyboard: string[];
  keyHandler: (el: string) => void;
  currentQuestion: string;
};

const Keyboard = (props: KeyboardProps): JSX.Element => {
  const { currentKeyboard, currentQuestion, keyHandler } = props;
  return (
    <div>
      {currentKeyboard.map((string, index) => (
        <div key={index} className="flex flex-wrap justify-center -mx-4 lg:m-0">
          {string.split("").map((el) => {
            return (
              <KeyButton
                key={el}
                letter={el}
                pressFn={() => keyHandler(el)}
                word={currentQuestion}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
