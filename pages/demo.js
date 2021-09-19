import Header from '../components/header'
import Footer from '../components/footer'

import PlaneSketch from '../sketches/planeSketch';

function Demo({ }) {

    let questions = [
        {
            question: "Color of the sky?",
            choices: ["yellow", "blue", "red", "green"],
            correct: 1
        },
        {
            question: "Color of the sky?",
            choices: ["yellow", "blue", "red", "green"],
            correct: 1
        },
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
                <button onClick={() => {

                    postData('http://localhost:3000/api/db/set', {
                        email: "ongzz@gmail.com", name: "Untitled SEt", questions: [
                            {
                                question: "Color of the sky?",
                                choices: ["yellow", "blue", "red", "green"],
                                correct: 1
                            },
                            {
                                question: "Color of the sky?",
                                choices: ["yellow", "blue", "red", "green"],
                                correct: 1
                            },
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
                }}>clcikme</button>
                <PlaneSketch questions={questions} />
            </main>
            <Footer />
        </div>
    );
};

// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}


// Demo.getInitialProps = async (ctx) => {
//     const res = await fetch('https://api.github.com/repos/vercel/next.js')
//     const json = await res.json()
//     return { stars: json.questions }
// }

export default Demo