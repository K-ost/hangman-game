import { JSX } from "react";
import { useAppStore } from "../store/useAppStore";

const LangBox = (): JSX.Element => {
  const { lang, setLang, screen } = useAppStore();
  const isOpacity = screen === "game" ? "100" : "25";
  const isBefore = screen === "game" ? "block" : "none";
  const btnClass = `color-dark rounded-md w-[32px] mr-2 text-lg py-4 px-6`;

  return (
    <div
      className={`ml-auto mr-8 relative opacity-${isOpacity} before:rounded-md before:top-0 before:right-0 before:left-0 before:bottom-0 before:z-10 before:absolute before:${isBefore}`}
    >
      <button
        onClick={() => setLang("en")}
        disabled={lang === "en"}
        className={btnClass}
        // $active={lang === "en"}
      >
        En
      </button>
      <button
        onClick={() => setLang("ru")}
        disabled={lang === "ru"}
        className={btnClass}
        // $active={lang === "ru"}
      >
        Ru
      </button>
    </div>
  );
};

export default LangBox;
