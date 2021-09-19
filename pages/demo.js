import Header from '../components/header'
import Footer from '../components/footer'

import PlaneSketch from '../sketches/planeSketch';

function Demo({ questions }) {

    return (
        <div style={{ overflowX: "hidden" }}>
            <Header />
            <main style={{ marginTop: "60px", minHeight: "90vh" }}>
                <PlaneSketch questions={questions.questions} />
            </main>
            <Footer />
        </div>
    );
};

Demo.getInitialProps = async (ctx) => {
    const dev = process.env.NODE_ENV !== 'production';
    const server = dev ? 'http://localhost:3000' : 'https://your_deployment.server.com';

    const res = await fetch(`${server}/api/db/get-set/ycmo92wzr`)
    const json = await res.json()
    // console.log(json)
    return { questions: json }
}

export default Demo