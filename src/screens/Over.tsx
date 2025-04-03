import { JSX } from "react";
import NewGameBtn from "../components/NewGameBtn";
import Stat from "../components/Stat";

const OverScreen = (): JSX.Element => {
  return (
    <div>
      <h1>GAME OVER</h1>
      <div className="text-center">
        <NewGameBtn />
      </div>
      <Stat />
    </div>
  );
};

export default OverScreen;
