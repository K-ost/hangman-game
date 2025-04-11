import { JSX } from "react";
import NewGameBtn from "../components/NewGameBtn";
import Stat from "../components/Stat";
import { useTranslation } from "react-i18next";

const OverScreen = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("screen.over.title")}</h1>
      <div className="text-center">
        <NewGameBtn />
      </div>
      <Stat />
    </div>
  );
};

export default OverScreen;
