import { JSX } from "react";
import data from "../../data.json";
import CatButton from "../ui/CatButton";
import { useAppStore } from "../store/useAppStore";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
`;

const CategoriesScreen = (): JSX.Element => {
  const { setCategory, setScreen, lang } = useAppStore();
  const { t } = useTranslation();

  const catPicker = (cat: string) => {
    setCategory(cat);
    setScreen("game");
  };

  return (
    <div className="fullWidth">
      <h1>{t("screen.cats.title")}</h1>
      <Grid>
        {data.map((category) => (
          <CatButton
            key={category.id}
            img={category.image}
            name={category.category[lang]}
            handler={() => catPicker(category.category[lang])}
          />
        ))}
      </Grid>
    </div>
  );
};

export default CategoriesScreen;
