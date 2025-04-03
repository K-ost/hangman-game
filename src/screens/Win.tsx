import { JSX } from "react";
import NewGameBtn from "../components/NewGameBtn";
import Stat from "../components/Stat";

const WinScreen = (): JSX.Element => {
  return (
    <div>
      <h1>You win</h1>
      <div className="text-center">
        <NewGameBtn />
      </div>
      <Stat />
    </div>
  );
};

export default WinScreen;
