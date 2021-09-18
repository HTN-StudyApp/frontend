import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/header'
import Footer from '../components/footer'

import { useState, useEffect } from 'react';
import EditableQuestion from '../components/editableQuestion';
import Test from '../components/test';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faCamera, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default function Create() {

    let [setName, setSetName] = useState("Untitled Set");

    let [questions, setQuestions] = useState([
        { question: "Question here...", choices: [0, 1, 2, 3], answer: 0 }
    ]);

    const handleQuestionChange = (newQuestions) => {
        setQuestions(newQuestions)
        console.log("new!", questions)
    }

    // useEffect(() =>  console.log("effect", questions) , [questions])

    return (
        <div >
            <Head>
                <title>Study App</title>
                <meta name="description" content="HTN Study App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main style={{ marginTop: "60px", minHeight: "100vh" }}>

                <input type="text" value={setName}
                    onChange={e => setSetName(e.currentTarget.value)}
                    className="focus:outline-none"></input>

                {questions.map((question, index) => (
                    <EditableQuestion key={`${question.question}`} question={question} index={index}
                        allQuestions={questions}
                        // updateQuestions={handleQuestionChange} /> 
                        updateQuestions={handleQuestionChange} /> 
                ))}

                {/* {arr.map((e, i) => (
                    <Test key={e} value={e} onChange={handleChange} values={values} index={i} />
                ))}

                {values.map(v => (
                    <p key={v}>{v}</p>
                ))}

                <p>{values[1]}</p> */}

            </main>

            <Footer />
        </div>
    )
}
