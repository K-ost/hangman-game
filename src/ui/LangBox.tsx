import { JSX } from "react";
import { useAppStore } from "../store/useAppStore";
import { LangType } from "../types";

const LangBox = (): JSX.Element => {
  const { lang, setLang, screen } = useAppStore();
  const isOpacity = screen === "game" ? "25" : "100";
  const isBefore = screen === "game" ? "block" : "hidden";
  const btnClass = `bg-pink color-dark rounded-md w-[34px] mr-2 text-lg py-1 px-0 cursor-pointer`;

  const bgColorClass = (language: LangType): string =>
    lang === language ? "bg-pink text-white" : "bg-white text-dark";

  return (
    <div
      className={`ml-auto mr-2 lg:mr-8 relative opacity-${isOpacity} before:rounded-md before:top-0 before:right-0 before:left-0 before:bottom-0 before:z-10 before:absolute before:${isBefore}`}
    >
      <button
        onClick={() => setLang("en")}
        disabled={lang === "en"}
        className={`${btnClass} ${bgColorClass("en")}`}
      >
        En
      </button>
      <button
        onClick={() => setLang("ru")}
        disabled={lang === "ru"}
        className={`${btnClass} ${bgColorClass("ru")}`}
      >
        Ru
      </button>
    </div>
  );
};

export default LangBox;
