import { useState } from 'react'

import useUser from '../../lib/useUser'
import postData, { server } from '../../lib/postData'

import Header from '../../components/header'
import Footer from '../../components/footer'

import PlaneSketch from '../../sketches/planeSketch';

function Set({ setData }) {

    const { user, loading, signInWithGoogle, logout } = useUser();

    const [open, setOpen] = useState(false)
    const [finalPoints, setFinalPoints] = useState(0)

    function onFinish(points) {
        setOpen(true)
        
        let { email } = user;
        postData(`${server}/api/db/add-points`, { email, points, finishedSet: 'ycmo92wzr' })
        setFinalPoints(points)
    }

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
                <PlaneSketch questions={setData.questions} onFinish={onFinish} />
            </main>
            <Footer />
        </div>
    );
};


Set.getInitialProps = async (ctx) => {
    let setID = ctx.query.set;
    const res = await fetch(`${server}/api/db/get-set/${setID}`)
    const json = await res.json()
    console.log(json)
    return { setData: json }
}

export default Set