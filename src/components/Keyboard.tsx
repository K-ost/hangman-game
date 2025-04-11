import { JSX } from "react";
import styled from "styled-components";
import KeyButton from "../ui/KeyButton";

type KeyboardProps = {
  currentKeyboard: string[];
  keyHandler: (el: string) => void;
  currentQuestion: string;
};

export const KeyboardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 750px) {
    margin: 0 -10px;
  }
  & > div {
    margin: 3px 5px;
    @media screen and (max-width: 750px) {
      margin: 2px;
    }
  }
`;

const Keyboard = (props: KeyboardProps): JSX.Element => {
  const { currentKeyboard, currentQuestion, keyHandler } = props;
  return (
    <div>
      {currentKeyboard.map((string, index) => (
        <KeyboardGrid key={index}>
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
        </KeyboardGrid>
      ))}
    </div>
  );
};

export default Keyboard;
