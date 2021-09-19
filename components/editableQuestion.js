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

export default function EditableQuestion({ index }) {
  let [question, setQuestion] = useState("Question here...");
  // let [choices, setChoices] = useState(["Answer...", "Answer...", "Answer...", "Answer..."])
  let [choices, setChoices] = useState([
    { answer: "answer choice 1", correct: false },
  ]);
  const [editAnswer, setEditAnswer] = useState(false);

  const setAnswer = (choice, idx) => {
    choices[idx] = choice;
    setChoices([...choices]);
  };

  const deleteAnswer = (idx) => {
    choices.splice(idx, 1);
    setChoices([...choices]);
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
            <h2 className={"text-2xl mt-6"}>Question {index + 1}</h2>
            <button onClick={() => setEditAnswer(true)}>Edit answer</button>
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
            <h2 className={"text-2xl mt-6"}>Answer {index + 1}</h2>
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
              {choices.map((choice, idx) => (
                <div key={idx} className={"flex items-center"}>
                  <span>{String.fromCharCode("A".charCodeAt(0) + idx)}. </span>
                  <input
                    autoFocus
                    type="text"
                    value={choice.answer}
                    onChange={(e) => {
                      setAnswer(
                        { answer: e.target.value, correct: choice.correct },
                        idx
                      );
                    }}
                    className="text-2xl flex-grow border-0 focus:border-0 focus:outline-none focus:ring-0"
                  />
                  <button
                    className={
                      "text-base px-2 rounded-md " +
                      (choice.correct
                        ? "text-green-500 bg-green-100 hover:bg-green-200"
                        : "text-red-500 bg-red-100 hover:bg-red-200")
                    }
                    onClick={() => {
                      setAnswer(
                        { answer: choice.answer, correct: !choice.correct },
                        idx
                      );
                    }}
                  >
                    {choice.correct ? "Correct" : "Incorrect"}
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
                setChoices([...choices, { answer: "", correct: false }]);
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
