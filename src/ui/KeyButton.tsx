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

const KeyButton = (props: KeyButtonProps): JSX.Element => {
  const { letter, pressFn } = props;
  const [pressed, setPressed] = useState(false);
  const { lettersCorrect, lang } = useAppStore();
  const isVowel = isVowelChecking(letter, lang);

  const iconClass =
    "block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30px] lg:w-[70px]";

  const keyClass = `${isVowel ? "bg-lightgreen" : "bg-white"}
  ${pressed ? "cursor-default opacity-15" : "cursor-pointer"}
  rounded-lg lg:rounded-2xl text-dark w-[32px] lg:w-[80px] h-[38px] lg:h-[68px] text-lg lg:text-4xl flex items-center justify-center  uppercase m-0.5 lg:m-1`;

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
