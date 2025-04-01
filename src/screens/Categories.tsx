import { JSX } from "react";
import data from "../../data.json";
import CatButton from "../ui/CatButton";
import { useAppStore } from "../store/useAppStore";
import styled from "styled-components";

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
  const { setCategory, setScreen } = useAppStore();

  const catPicker = (cat: string) => {
    setCategory(cat);
    setScreen("game");
  };

  return (
    <div className="fullWidth">
      <h1>Pick the category</h1>
      <Grid>
        {data.map((category) => (
          <CatButton
            key={category.id}
            img={category.image}
            name={category.category}
            handler={() => catPicker(category.category)}
          />
        ))}
      </Grid>
    </div>
  );
};

export default CategoriesScreen;
