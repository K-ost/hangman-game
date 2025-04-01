import { JSX } from "react";
import styled from "styled-components";
import { useAppStore } from "../store/useAppStore";

type WordProps = {
  word: string;
};

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px 0;
`;
const Letter = styled.div<{ $opened: boolean }>`
  align-items: center;
  background: var(--color-blue);
  border: 1px solid var(--color-white);
  border-radius: 18px;
  display: flex;
  font-size: 52px;
  height: 110px;
  justify-content: center;
  line-height: 60px;
  margin: 0 4px 12px;
  opacity: ${(props) => (props.$opened ? 1 : 0.25)};
  text-transform: uppercase;
  width: 80px;
  span {
    display: ${(props) => (props.$opened ? "block" : "none")};
  }
  @media screen and (max-width: 750px) {
    border-radius: 8px;
    font-size: 24px;
    line-height: 28px;
    height: 48px;
    margin: 0 2px;
    width: 36px;
  }
`;
const Space = styled.div`
  width: 48px;
  @media screen and (max-width: 750px) {
    width: 20px;
  }
`;

const Word = (props: WordProps): JSX.Element => {
  const { word } = props;
  const { lettersCorrect } = useAppStore();

  return (
    <Row>
      {word.split("").map((letter, index) => {
        if (letter === " ") {
          return <Space key={index} />;
        }
        return (
          <Letter key={index} $opened={lettersCorrect.includes(letter)}>
            <span>{letter}</span>
          </Letter>
        );
      })}
    </Row>
  );
};

export default Word;
