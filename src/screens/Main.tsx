import { JSX } from "react";
import NewGameBtn from "../components/NewGameBtn";

const MainScreen = (): JSX.Element => {
  return (
    <div className="text-center">
      <NewGameBtn />
    </div>
  );
};

export default MainScreen;
