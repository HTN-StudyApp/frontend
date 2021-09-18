import Link from 'next/link'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faCamera, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { useEffect } from 'react'

import user from '../public/user.png'

export default function EditableQuestion({ question, index, allQuestions, updateQuestions }) {

    const handleQuestionRename = (e) => {
        let updates = allQuestions;
        updates[index].question = e.target.value.split(". ")[1];
        console.log(updates)
        updateQuestions(updates)
    }

    // useEffect(() =>  console.log(questions) , [questions])

    return (
        <div className="flex items-center justify-center">
            <div>
                <Image src={user} width={500} height={400} />
            </div>
            <div className="">

                <div className="flex items-center">
                    <FontAwesomeIcon icon={faCamera} className="w-8" />
                    <span>or, take a picture of the question...</span>
                </div>

                <div className="flex justify-between text-xl">
                    <input type="text" value={`${index + 1}. ${question.question}`}
                        onChange={handleQuestionRename}
                        className="focus:outline-none"></input>

                    <FontAwesomeIcon icon={faTrashAlt} className="w-8" />
                </div>

                <div className="flex flex-wrap justify-center items-center">
                    {question.choices.map((choice, i) => (
                        <div key={choice}
                            style={{ width: "40%", backgroundColor: i == index ? "green" : "red" }}
                            className="m-2 rounded-lg text-center"
                        >{choice}</div>
                    ))}
                </div>

            </div>
        </div>
    )
}
