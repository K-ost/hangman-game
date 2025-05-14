import { JSX, useState } from "react";
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

// const Button = styled.button<{ $pressed: PressedType; $vowel: boolean }>`
//   @media screen and (max-width: 750px) {
//     border-radius: 8px;
//     width: 32px;
//     height: 38px;
//     font-size: 16px;
//     line-height: 20px;
//   }
// `;

const KeyButton = (props: KeyButtonProps): JSX.Element => {
  const { letter, pressFn } = props;
  const [pressed, setPressed] = useState(false);
  const { lettersCorrect, lang } = useAppStore();
  const isVowel = isVowelChecking(letter, lang);

  const iconClass =
    "block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70px]";
  const keyClass = `${
    isVowel ? "bg-lightgreen" : "bg-white"
  } rounded-lg text-dark w-[80px] h-[68px] text-4xl flex items-center justify-center cursor-pointer uppercase m-0.5 lg:m-1`;

  console.log(keyClass);

  const keyHandler = () => {
    pressFn();
    setPressed(true);
  };

  return (
    <div className="relative">
      <button onClick={keyHandler} className={keyClass} disabled={pressed}>
        {letter}
      </button>
      {pressed && lettersCorrect.includes(letter) && (
        <img src={ok} alt="" className={iconClass} />
      )}
      {pressed && !lettersCorrect.includes(letter) && !isVowel && (
        <img src={times} alt="" className={iconClass} />
      )}
    </div>
  );
};

export default KeyButton;
