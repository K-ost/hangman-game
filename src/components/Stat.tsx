import { JSX } from "react";
import { useAppStore } from "../store/useAppStore";
import styled from "styled-components";
import { SCORE_POINT } from "../constants";

const Table = styled.table`
  border-collapse: collapse;
  margin: 40px auto;
  max-width: 700px;
  width: 100%;
  th,
  td {
    border: 1px solid var(--color-grey);
    padding: 8px 16px;
    text-align: left;
  }
  tfoot td {
    font-weight: 500;
    font-size: 18px;
  }
`;

const Stat = (): JSX.Element => {
  const { questions, score } = useAppStore();
  return (
    <Table>
      <thead>
        <tr>
          <th>Question</th>
          <th>Mistakes</th>
          <th>Scores</th>
        </tr>
      </thead>
      <tbody>
        {questions.map((question, index) => (
          <tr key={index}>
            <td>{question.word}</td>
            <td>{question.mistakes}</td>
            <td>{question.word.length * SCORE_POINT}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={2}>Total score:</td>
          <td>{score}</td>
        </tr>
      </tfoot>
    </Table>
  );
};

export default Stat;
