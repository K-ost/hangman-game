import { JSX } from "react";
import Button from "../ui/Button";
import { useAppStore } from "../store/useAppStore";

const NewGameBtn = (): JSX.Element => {
  const setScreen = useAppStore((state) => state.setScreen);

  const newGameHandler = () => {
    setScreen("categories");
  };

  return <Button onClick={newGameHandler}>New game</Button>;
};

export default NewGameBtn;
