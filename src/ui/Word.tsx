import { JSX } from "react";
import styled from "styled-components";
import { useAppStore } from "../store/useAppStore";

type WordProps = {
  word: string;
};

const Row = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`;
const Letter = styled.div<{ $opened: boolean }>`
  align-items: center;
  background: var(--color-blue);
  border: 1px solid var(--color-white);
  border-radius: 24px;
  display: flex;
  font-size: 58px;
  height: 120px;
  justify-content: center;
  line-height: 40px;
  margin: 0 4px;
  opacity: ${(props) => (props.$opened ? 1 : 0.25)};
  text-transform: uppercase;
  width: 90px;
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

const Word = (props: WordProps): JSX.Element => {
  const { word } = props;
  const { lettersCorrect } = useAppStore();

  return (
    <Row>
      {word.split("").map((letter, index) => (
        <Letter key={index} $opened={lettersCorrect.includes(letter)}>
          <span>{letter}</span>
        </Letter>
      ))}
    </Row>
  );
};

export default Word;
