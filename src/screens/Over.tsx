import { JSX } from "react";
import NewGameBtn from "../components/NewGameBtn";
import Stat from "../components/Stat";
import { useTranslation } from "react-i18next";
import Title from "../ui/Title";

const OverScreen = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div>
      <Title>{t("screen.over.title")}</Title>
      <div className="text-center">
        <NewGameBtn />
      </div>
      <Stat />
    </div>
  );
};

export default OverScreen;
