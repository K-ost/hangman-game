import { JSX } from "react";
import { useAppStore } from "../store/useAppStore";

type WordProps = {
  word: string;
};

const Word = (props: WordProps): JSX.Element => {
  const { word } = props;
  const { lettersCorrect } = useAppStore();

  const letterClass = `align-center bg-blue border border-white rounded-md lg:rounded-xl flex items-center text-lg lg:text-6xl justify-center mx-0.5 lg:mx-1 uppercase h-[48px] lg:h-[110px] w-[36px] lg:w-[80px]`;

  return (
    <div className="flex flex-wrap justify-center mb-4">
      {word.split(" ").map((word, wIndex) => {
        return (
          <div key={wIndex} className="flex mb-4 lg:mb-8">
            {word.split("").map((letter, index) => {
              const isOpen = lettersCorrect.includes(letter);
              return (
                <div
                  key={index}
                  className={`${letterClass} ${isOpen ? "opacity-100" : "opacity-25"}`}
                >
                  <span className={isOpen ? "block" : "hidden"}>{letter}</span>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Word;
