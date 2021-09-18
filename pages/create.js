import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/header'
import Footer from '../components/footer'

export default function Create() {
    return (
        <div >
            <Head>
                <title>Study App</title>
                <meta name="description" content="HTN Study App" />
                <link rel="icon" href="/logo.png" />
            </Head>

            <Header />

            

            <Footer />
        </div>
    )
}
