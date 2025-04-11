import { JSX, useState } from "react";
import styled from "styled-components";
import { useAppStore } from "../store/useAppStore";
import ok from "../assets/check.svg";
import times from "../assets/times.svg";
import { isVowelChecking } from "../utils";

type KeyButtonProps = {
  letter: string;
  pressFn: () => void;
  word: string;
};

type PressedType = "correct" | "incorrect" | "default";

const BTN_WIDTH = 80;
const BTN_HEIGHT = 68;

const Wrapper = styled.div`
  position: relative;
  img {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 70px;
    @media screen and (max-width: 750px) {
      width: 32px;
    }
  }
`;

const Button = styled.button<{ $pressed: PressedType; $vowel: boolean }>`
  background: var(--color-${(props) => (props.$vowel ? "lightgreen" : "white")});
  border-radius: 24px;
  color: var(--color-dark);
  width: ${BTN_WIDTH}px;
  height: ${BTN_HEIGHT}px;
  font-size: 34px;
  line-height: 40px;
  position: relative;
  text-transform: uppercase;
  @media screen and (max-width: 750px) {
    border-radius: 8px;
    width: 32px;
    height: 38px;
    font-size: 16px;
    line-height: 20px;
  }
`;

const KeyButton = (props: KeyButtonProps): JSX.Element => {
  const { letter, pressFn } = props;
  const [pressed, setPressed] = useState(false);
  const { lettersCorrect, lang } = useAppStore();
  const isVowel = isVowelChecking(letter, lang);

  const keyHandler = () => {
    pressFn();
    setPressed(true);
  };

  return (
    <Wrapper>
      <Button
        onClick={keyHandler}
        disabled={pressed}
        $pressed={
          pressed
            ? lettersCorrect.includes(letter)
              ? "correct"
              : "incorrect"
            : "default"
        }
        $vowel={isVowel}
      >
        {letter}
      </Button>
      {pressed && lettersCorrect.includes(letter) && <img src={ok} alt="" />}
      {pressed && !lettersCorrect.includes(letter) && !isVowel && (
        <img src={times} alt="" />
      )}
    </Wrapper>
  );
};

export default KeyButton;
