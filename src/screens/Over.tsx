import { JSX } from "react";
import Button from "../ui/Button";
import { useAppStore } from "../store/useAppStore";

const OverScreen = (): JSX.Element => {
  const { setScreen } = useAppStore();

  return (
    <div className="app-center">
      <div>
        <h1>GAME OVER</h1>
        <Button onClick={() => setScreen("categories")}>New game</Button>
      </div>
    </div>
  );
};

export default OverScreen;
