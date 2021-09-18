import Link from 'next/link'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faCamera, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { useState, useEffect } from 'react'

import user from '../public/user.png'

export default function EditableQuestion({ index }) {

    let [question, setQuestion] = useState("Question here...");
    // let [choices, setChoices] = useState(["Answer...", "Answer...", "Answer...", "Answer..."])
    let [choices, setChoices] = useState([0, 1, 2, 3])
    let [correct, setCorrect] = useState(0)

    return (
        <div className="flex items-center justify-center w-full mb-10">
            <div className="w-3/4">

                <div className="flex items-center">
                    <FontAwesomeIcon icon={faCamera} className="w-8 mx-2" />
                    <span>or, take a picture of the question...</span>
                </div>

                <div className="flex justify-between text-xl">
                    <div>
                        <span>{index + 1}. </span>
                        <input type="text" value={question}
                            onChange={(e) => {
                                setQuestion(e.target.value)
                            }}
                            className="focus:outline-none"></input>
                    </div>
                    {/* <FontAwesomeIcon icon={faTrashAlt} className="w-8" /> */}
                </div>

                <div className="flex flex-wrap justify-center items-center">
                    {choices.map((choice, i) => (
                        <div key={`${choice} ${correct}`}
                            style={{ backgroundColor: i == correct ? "green" : "red" }}
                            className="m-2 rounded-lg w-96 h-16 flex items-center justify-center"
                            onDoubleClick={() => setCorrect(i)}
                        >
                            <input autoFocus type="text" value={choice}
                                onChange={(e) => {
                                    let updates = choices;
                                    updates[i] = e.target.value;
                                    setChoices([...updates])
                                }}
                                className="bg-transparent focus:outline-none"></input>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
