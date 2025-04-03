import { JSX } from "react";
import Button from "../ui/Button";
import icon from "../assets/check.svg";

type CorrectProps = {
  handler: () => void;
};

const Correct = ({ handler }: CorrectProps): JSX.Element => {
  return (
    <div>
      <h2 className="d-flex justify-content-center align-center">
        Correct <img src={icon} alt="" style={{ width: 34, marginLeft: 10 }} />
      </h2>
      <div className="d-flex justify-content-center">
        <Button onClick={handler}>Go next &rarr;</Button>
      </div>
    </div>
  );
};

export default Correct;
