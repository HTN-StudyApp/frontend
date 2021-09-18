import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/header'
import Footer from '../components/footer'

import { useState, useEffect } from 'react';
import EditableQuestion from '../components/editableQuestion';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Create() {

    let [setName, setSetName] = useState("Untitled Set");
    let [questions, setQuestions] = useState(1);

    return (
        <div >
            <Head>
                <title>Study App</title>
                <meta name="description" content="HTN Study App" />
                <link rel="icon" href="/logo.png" />
            </Head>

            <Header />

            <main style={{ marginTop: "60px", minHeight: "100vh" }}
                className="flex flex-col items-center"
            >
                <input type="text" value={setName}
                    onChange={e => setSetName(e.currentTarget.value)}
                    className="focus:outline-none text-5xl w-3/4"></input>

                {new Array(questions).fill(0).map((x, i) => (
                    <EditableQuestion key={`${i} ${questions}`} index={i} />
                ))}

                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-10"
                    onClick={() => setQuestions(questions + 1)}>
                    <FontAwesomeIcon icon={faPlus} className="m-2" />
                </div>

            </main>

            <Footer />
        </div>
    )
}
