import { JSX } from "react";
import NewGameBtn from "../components/NewGameBtn";

const WinScreen = (): JSX.Element => {
  return (
    <div className="app-center">
      <div>
        <h1>You win</h1>
        <NewGameBtn />
      </div>
    </div>
  );
};

export default WinScreen;
