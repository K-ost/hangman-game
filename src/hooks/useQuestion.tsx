import { useAppStore } from "../store/useAppStore";
import { getRandomQuestion } from "../utils";
import data from "../../data.json";
import { Question } from "../types";
import React, { useEffect, useState } from "react";

type useQuestionReturn = {
  question: Question;
  correct: boolean;
  setCorrect: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
};

const useQuestion = (): useQuestionReturn => {
  const { pickedCategory, questions } = useAppStore();
  const [correct, setCorrect] = useState(false);
  const [update, setUpdate] = useState(false);
  const [question, setQuestion] = useState<Question>({
    hint: "",
    word: "",
  });
  const catQuestions = data.find((cat) => cat.category === pickedCategory)!.questions;

  useEffect(() => {
    const newQuestion = getRandomQuestion(catQuestions, questions);
    setQuestion(newQuestion);
    setUpdate(false);
  }, [update]);

  return {
    question,
    correct,
    setCorrect,
    setUpdate,
  };
};

export default useQuestion;
