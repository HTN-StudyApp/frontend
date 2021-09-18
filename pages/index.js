import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/header'
import Footer from '../components/footer'
import Preview from '../components/preview'

export default function Index() {
  return (
    <div >
      <Head>
        <title>Study App</title>
        <meta name="description" content="HTN Study App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main style={{ marginTop: "60px" }}>
        <Preview />
        <Preview />
        <Preview />
        <Preview />
        <Preview />
        <Preview />
        <Preview />
        <h1>hi</h1>
      </main>

      <Footer />
    </div>
  )
}
