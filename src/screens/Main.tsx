import { JSX } from "react";
import { useAppStore } from "../store/useAppStore";
import Button from "../ui/Button";

const MainScreen = (): JSX.Element => {
  const setScreen = useAppStore((state) => state.setScreen);

  return (
    <div>
      <Button onClick={() => setScreen("categories")}>New game</Button>
    </div>
  );
};

export default MainScreen;
