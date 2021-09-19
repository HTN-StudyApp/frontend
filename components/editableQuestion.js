import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faCamera,
  faTrashAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";

import user from "../public/user.png";

export default function EditableQuestion({
  index,
  question,
  setQuestion,
  answers,
  setAnswers,
  deleteQuestion,
  canDelete,
}) {
  // let [choices, setChoices] = useState(["Answer...", "Answer...", "Answer...", "Answer..."])
  const [editAnswer, setEditAnswer] = useState(false);

  const setAnswer = (choice, idx) => {
    answers[idx] = choice;
    setAnswers([...answers]);
  };

  const deleteAnswer = (idx) => {
    answers.splice(idx, 1);
    setAnswers([...answers]);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mb-10">
      <div
        className="w-3/4 h-[36rem] relative group"
        style={{ perspective: "400rem" }}
      >
        <div
          className={`absolute flex flex-col inset-0 ${
            editAnswer ? "-rotate-y-180" : ""
          } duration-500`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className={"flex justify-between items-end"}>
            <div className={"flex items-baseline gap-4"}>
              <h2 className={"text-2xl mt-6"}>Question {index + 1}</h2>
              {canDelete && (
                <button onClick={() => deleteQuestion()}>
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className={"w-4 h-4 text-gray-500 hover:text-red-500"}
                  />
                </button>
              )}
            </div>
            <button onClick={() => setEditAnswer(true)}>Edit answers</button>
          </div>
          <div
            className={
              "mt-2 shadow-lg w-full flex-grow bg-white rounded-md flex items-center justify-center"
            }
          >
            <div className={"px-16 py-16 text-2xl w-full flex items-center"}>
              <span>{index + 1}. </span>
              <input
                type="text"
                value={question}
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
                className="text-2xl flex-grow border-0 focus:border-0 focus:outline-none focus:ring-0"
              />
            </div>
          </div>
        </div>
        <div
          className={`absolute inset-0 flex flex-col rotate-y-180 ${
            editAnswer ? "rotate-y-0" : ""
          } duration-500`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className={"flex justify-between items-end"}>
            <div className={"flex items-baseline gap-4"}>
              <h2 className={"text-2xl mt-6"}>Answer {index + 1}</h2>
              {canDelete && (
                <button onClick={() => deleteQuestion()}>
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className={"w-4 h-4 text-gray-500 hover:text-red-500"}
                  />
                </button>
              )}
            </div>
            <button onClick={() => setEditAnswer(false)}>Edit question</button>
          </div>
          <div
            className={
              "mt-2 shadow-lg w-full flex-grow bg-white rounded-md flex items-center justify-center"
            }
          >
            <div
              className={
                "px-16 py-16 text-2xl w-full flex flex-col justify-center"
              }
            >
              {answers.map((answer, idx) => (
                <div key={idx} className={"flex items-center"}>
                  <span>{String.fromCharCode("A".charCodeAt(0) + idx)}. </span>
                  <input
                    autoFocus
                    type="text"
                    value={answer.answer}
                    onChange={(e) => {
                      setAnswer(
                        { answer: e.target.value, correct: answer.correct },
                        idx
                      );
                    }}
                    className="text-2xl flex-grow border-0 focus:border-0 focus:outline-none focus:ring-0"
                  />
                  <button
                    className={
                      "text-base px-2 rounded-md " +
                      (answer.correct
                        ? "text-green-500 bg-green-100 hover:bg-green-200"
                        : "text-red-500 bg-red-100 hover:bg-red-200")
                    }
                    onClick={() => {
                      setAnswer(
                        { answer: answer.answer, correct: !answer.correct },
                        idx
                      );
                    }}
                  >
                    {answer.correct ? "Correct" : "Incorrect"}
                  </button>
                  <button onClick={() => deleteAnswer(idx)}>
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={
                        "ml-4 w-5 h-5 text-gray-400 hover:text-red-600"
                      }
                    />
                  </button>
                </div>
              ))}
            </div>
            <button
              className={"absolute right-4 bottom-4"}
              onClick={() => {
                setAnswers([...answers, { answer: "", correct: false }]);
              }}
            >
              Add answer
            </button>
          </div>
        </div>
        {/* <FontAwesomeIcon icon={faTrashAlt} className="w-8" /> */}
      </div>
      <div className={"mt-8"}>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCamera} className="w-6 text-gray-600 mx-2" />
          <span>or, take a picture of the question...</span>
        </div>
      </div>
    </div>
  );
}
