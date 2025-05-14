import { JSX } from "react";
import { useAppStore } from "../store/useAppStore";
import { ATTEMPTS_NUMBER } from "../constants";

// const Bar = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 0 0 60px;
//   @media screen and (max-width: 750px) {
//     margin: 0 0 30px;
//   }
// `;
// const BarLine = styled.div`
//   background: var(--color-white);
//   border-radius: 20px;
//   height: 40px;
//   max-width: 380px;
//   padding: 5px;
//   width: 100%;
//   @media screen and (max-width: 750px) {
//     height: 26px;
//     padding: 3px;
//   }
// `;
// const BarRange = styled.div<{ $width: number; $count: number }>`
//   background: var(
//     --color-${({ $count }) => ($count >= 5 ? "success" : $count < 5 && $count > 2 ? "yellow" : "danger")}
//   );
//   border-radius: 20px;
//   height: 30px;
//   transition: all 200ms linear;
//   width: ${(props) => props.$width}%;
//   @media screen and (max-width: 750px) {
//     height: 20px;
//   }
// `;

const ProgressBar = (): JSX.Element => {
  const { lettersWrong } = useAppStore();

  return (
    <div>
      <div>
        <div
        // $width={(100 / ATTEMPTS_NUMBER) * (ATTEMPTS_NUMBER - lettersWrong.length)}
        // $count={ATTEMPTS_NUMBER - lettersWrong.length}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
