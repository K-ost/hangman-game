import { JSX } from "react";
import Button from "../ui/Button";
import { useAppStore } from "../store/useAppStore";
import { useTranslation } from "react-i18next";

const NewGameBtn = (): JSX.Element => {
  const { setScreen, resetScore, resetWord } = useAppStore();
  const { t } = useTranslation();

  const newGameHandler = () => {
    setScreen("categories");
    resetScore();
    resetWord();
  };

  return <Button onClick={newGameHandler}>{t("screen.main.btn")}</Button>;
};

export default NewGameBtn;
