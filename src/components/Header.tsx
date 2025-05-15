import { JSX } from "react";
import { useAppStore } from "../store/useAppStore";
import LangBox from "../ui/LangBox";
import { useTranslation } from "react-i18next";

const Header = (): JSX.Element => {
  const { score } = useAppStore();
  const { t } = useTranslation();

  return (
    <header className="flex items-center mb-8 py-2 lg:mb-16 lg:py-6">
      <h1 className="text-2xl lg:text-4xl uppercase font-medium m-0">Hangman</h1>
      <LangBox />
      <div className="flex items-center text-lg">
        {t("header.score")}:{" "}
        <div className="bg-white rounded-lg text-dark font-medium py-1 px-4 ml-2">
          {score}
        </div>
      </div>
    </header>
  );
};

export default Header;
