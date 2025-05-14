import { JSX } from "react";
import { useAppStore } from "../store/useAppStore";
import { ATTEMPTS_NUMBER } from "../constants";

const ProgressBar = (): JSX.Element => {
  const { lettersWrong } = useAppStore();

  const rangeWidth = (100 / ATTEMPTS_NUMBER) * (ATTEMPTS_NUMBER - lettersWrong.length);
  const count = ATTEMPTS_NUMBER - lettersWrong.length;
  const bg =
    count >= 5 ? "bg-success" : count < 5 && count > 2 ? "bg-yellow" : "bg-danger";

  return (
    <div className="flex justify-center mb-6 lg:mb-12">
      <div className="bg-white rounded-full p-[5px] h-[26px] lg:h-[40px] w-[100%] max-w-[380px]">
        <div
          className={`rounded-full h-[20px] lg:h-[30px] transition-[width] duration-200 linear ${bg}`}
          style={{ width: rangeWidth + "%" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
