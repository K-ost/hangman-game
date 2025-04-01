import { JSX } from "react";
import Button from "../ui/Button";

type CorrectProps = {
  handler: () => void;
};

const Correct = ({ handler }: CorrectProps): JSX.Element => {
  return (
    <div>
      <h2>Correct</h2>
      <div className="d-flex justify-content-center">
        <Button onClick={handler}>Go next &rarr;</Button>
      </div>
    </div>
  );
};

export default Correct;
