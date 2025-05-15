import { JSX } from "react";
import Button from "../ui/Button";
import icon from "../assets/check.svg";

type CorrectProps = {
  handler: () => void;
};

const Correct = ({ handler }: CorrectProps): JSX.Element => {
  return (
    <div>
      <div className="flex justify-center items-center mb-8 text-2xl">
        Correct <img src={icon} alt="" className="w-[34px] ml-4" />
      </div>
      <div className="flex justify-center">
        <Button onClick={handler}>Go next &rarr;</Button>
      </div>
    </div>
  );
};

export default Correct;
