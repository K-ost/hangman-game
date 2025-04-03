import { JSX } from "react";
import Button from "../ui/Button";
import { useAppStore } from "../store/useAppStore";

const NewGameBtn = (): JSX.Element => {
  const { setScreen, resetScore } = useAppStore();

  const newGameHandler = () => {
    setScreen("categories");
    resetScore();
  };

  return <Button onClick={newGameHandler}>New game</Button>;
};

export default NewGameBtn;
