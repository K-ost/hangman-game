import { useAppStore } from "../store/useAppStore";
import { getRandomQuestion } from "../utils";
import { Category, Question } from "../types";
import React, { useEffect, useState } from "react";

type UseQuestionProps = {
  data: Category[];
};

type useQuestionReturn = {
  question: Question;
  correct: boolean;
  setCorrect: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  questionsLength: number;
};

const useQuestion = (props: UseQuestionProps): useQuestionReturn => {
  const { data } = props;
  const { pickedCategory, questions, lang } = useAppStore();
  const [correct, setCorrect] = useState(false);
  const [update, setUpdate] = useState(false);
  const [question, setQuestion] = useState<Question>({
    en: "",
    ru: "",
  });
  const catQuestions = data.find(
    (cat) => cat.category[lang] === pickedCategory
  )!.questions;

  useEffect(() => {
    const newQuestion = getRandomQuestion(catQuestions, questions, lang);
    setQuestion(newQuestion);
    setUpdate(false);
  }, [update]);

  return {
    question,
    correct,
    setCorrect,
    setUpdate,
    questionsLength: catQuestions.length,
  };
};

export default useQuestion;
