import { JSX } from "react";
import { useAppStore } from "../store/useAppStore";
import styled from "styled-components";
import { SCORE_POINT } from "../constants";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <Table>
      <thead>
        <tr>
          <th>{t("stat.question")}</th>
          <th>{t("stat.mistakes")}</th>
          <th>{t("stat.score")}</th>
        </tr>
      </thead>
      <tbody>
        {questions.map((question, index) => (
          <tr key={index}>
            <td>{question.word}</td>
            <td>{question.mistakes}</td>
            <td>-</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={2}>{t("stat.total")}:</td>
          <td>{score}</td>
        </tr>
      </tfoot>
    </Table>
  );
};

export default Stat;
