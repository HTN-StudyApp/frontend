import Head from "next/head";
import Image from "next/image";

import Header from "../components/header";
import Footer from "../components/footer";

import { useState } from "react";
import EditableQuestion from "../components/editableQuestion";
export default function Create() {
  let [setName, setSetName] = useState("Untitled Set");
  const [questionNum, setQuestionNum] = useState(0);
  const [questions, setQuestions] = useState(["Question here..."]);
  const [answers, setAnswers] = useState([
    [{ answer: "answer 1", correct: false }],
  ]);

  return (
    <div className={"bg-gray-100"}>
      <Head>
        <title>Study App</title>
        <meta name="description" content="HTN Study App" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />

      <main
        style={{ marginTop: "60px", minHeight: "100vh" }}
        className="flex flex-col items-center"
      >
        <input
          type="text"
          value={setName}
          onChange={(e) => setSetName(e.currentTarget.value)}
          className="bg-transparent outline-none border-0 focus:ring-0 focus:outline-none text-5xl w-3/4"
        />

        <div className={"w-full flex items-center px-28"}>
          {questionNum > 0 && (
            <button
              className={"w-10 h-10 shadow-md rounded-full bg-white"}
              onClick={() => {
                setQuestionNum(questionNum - 1);
              }}
            >
              &larr;
            </button>
          )}
          <EditableQuestion
            question={questions[questionNum]}
            setQuestion={(newq) => {
              questions[questionNum] = newq;
              setQuestions([...questions]);
            }}
            answers={answers[questionNum]}
            setAnswers={(newa) => {
              answers[questionNum] = newa;
              setAnswers([...answers]);
            }}
            key={questionNum}
            index={questionNum}
            deleteQuestion={() => {
              questions.splice(questionNum, 1);
              setQuestions([...questions]);
              answers.splice(questionNum, 1);
              setAnswers([...answers]);
              setQuestionNum(questionNum === 0 ? 0 : questionNum - 1);
            }}
            canDelete={questions.length > 1}
          />
          {questionNum < questions.length - 1 ? (
            <button
              className={"w-10 h-10 shadow-md rounded-full bg-white"}
              onClick={() => {
                setQuestionNum(questionNum + 1);
              }}
            >
              &rarr;
            </button>
          ) : (
            <button
              className={"w-10 h-10 shadow-md rounded-full bg-white"}
              onClick={() => {
                setQuestionNum(questionNum + 1);
                setQuestions([...questions, ""]);
                setAnswers([...answers, [{ answer: "", correct: false }]]);
              }}
            >
              +
            </button>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
