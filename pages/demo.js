import { useState } from 'react'

import useUser from '../lib/useUser'
import postData, { server } from '../lib/postData'

import Header from '../components/header'
import Footer from '../components/footer'

import PlaneSketch from '../sketches/planeSketch';

function Demo({ setData }) {

    const { user, loading, signInWithGoogle, logout } = useUser();

    const [open, setOpen] = useState(false)
    const [finalPoints, setFinalPoints] = useState(0)

    function onFinish(points) {
        setOpen(true)
        
        let { email } = user;
        postData(`${server}/api/db/add-points`, { email, points, finishedSet: 'ycmo92wzr' })
        setFinalPoints(points)
    }

    // let questions = [
    //     {
    //         question: "Color of the sky?",
    //         choices: ["yellow", "blue", "red", "green"],
    //         correct: 1
    //     },
    //     {
    //         question: "Color of the sky?",
    //         choices: ["yellow", "blue", "red", "green"],
    //         correct: 1
    //     },
    //     {
    //         question: "Color of the sky?",
    //         choices: ["yellow", "blue", "red", "green"],
    //         correct: 1
    //     }
    // ]

    return (
        <div style={{ overflowX: "hidden" }}>
            <Header />
            <main style={{ marginTop: "60px", minHeight: "90vh" }}>

                {open && <div
                    className="w-full h-full absolute isolate z-50 flex justify-center items-center">
                    <div className="rounded-lg bg-white w-3/4 h-1/2 flex flex-col justify-center items-center">
                        <h1 className="font-bold text-4xl">Congrats, {user.displayName}!</h1>
                        <br />
                        <p className="text-2xl">You just finished <b>{setData.name}</b> and got <b>{finalPoints} points!</b></p>
                    </div>
                </div>}
                {/* <button onClick={() => {

                    postData('http://localhost:3000/api/db/add-set', {
                        email: "ongzz@gmail.com", name: "Mock Set", publicSet: true, questions: [
                            {
                                question: "Color of the sky?",
                                choices: ["yellow", "blue", "red", "green"],
                                correct: 1
                            }
                        ]
                    })
                        .then(data => {
                            console.log(data); // JSON data parsed by `data.json()` call
                        });
                }}>test add set</button> */}
                <PlaneSketch questions={setData.questions} onFinish={onFinish} />
            </main>
            <Footer />
        </div>
    );
};


Demo.getInitialProps = async (ctx) => {
    const res = await fetch(`${server}/api/db/get-set/ycmo92wzr`)
    const json = await res.json()
    console.log(json)
    return { setData: json }
}

export default Demo