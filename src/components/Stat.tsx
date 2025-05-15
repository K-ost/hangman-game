import { JSX } from "react";
import { useAppStore } from "../store/useAppStore";
import { useTranslation } from "react-i18next";

const Stat = (): JSX.Element => {
  const { questions, score } = useAppStore();
  const { t } = useTranslation();

  return (
    <table className="w-full mx-auto my-8 max-w-[700px]">
      <thead>
        <tr>
          <th className="border py-2 px-4">{t("stat.question")}</th>
          <th className="border py-2 px-4">{t("stat.mistakes")}</th>
          <th className="border py-2 px-4">{t("stat.score")}</th>
        </tr>
      </thead>
      <tbody>
        {questions.map((question, index) => (
          <tr key={index}>
            <td className="border py-2 px-4">{question.word}</td>
            <td className="border py-2 px-4">{question.mistakes}</td>
            <td className="border py-2 px-4">-</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td className="border py-2 px-4 text-xl font-medium" colSpan={2}>
            {t("stat.total")}:
          </td>
          <td className="border py-2 px-4 text-xl font-medium">{score}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Stat;
