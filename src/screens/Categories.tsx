import { JSX } from "react";
import data from "../../data.json";
import CatButton from "../ui/CatButton";
import { useAppStore } from "../store/useAppStore";
import { useTranslation } from "react-i18next";
import Title from "../ui/Title";

const CategoriesScreen = (): JSX.Element => {
  const { setCategory, setScreen, lang } = useAppStore();
  const { t } = useTranslation();

  const catPicker = (cat: string) => {
    setCategory(cat);
    setScreen("game");
  };

  return (
    <div>
      <Title>{t("screen.cats.title")}</Title>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {data.map((category) => (
          <CatButton
            key={category.id}
            img={category.image}
            name={category.category[lang]}
            handler={() => catPicker(category.category[lang])}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesScreen;
