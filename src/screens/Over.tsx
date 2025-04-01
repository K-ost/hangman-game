import { JSX } from "react";
import NewGameBtn from "../components/NewGameBtn";

const OverScreen = (): JSX.Element => {
  return (
    <div className="app-center">
      <div>
        <h1>GAME OVER</h1>
        <NewGameBtn />
      </div>
    </div>
  );
};

export default OverScreen;
