import Header from '../components/header'
import Footer from '../components/footer'

import PlaneSketch from '../sketches/planeSketch';

export default function Demo({ }) {

    let questions = [
        {
            question: "Color of the sky?",
            choices: ["yellow", "blue", "red", "green"],
            correct: 1
        }
    ]

    return (
        <div style={{ overflowX: "hidden" }}>
            <Header />
            <main style={{ marginTop: "60px", minHeight: "90vh" }}>
                <PlaneSketch questions={questions} />
            </main>
            <Footer />
        </div>
    );
};