import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/header'
import Footer from '../components/footer'
import Preview from '../components/main-preview'

export default function Index() {
  return (
    <div >
      <Head>
        <title>Study App</title>
        <meta name="description" content="HTN Study App" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />

      <main style={{ marginTop: "60px", minHeight: "100vh" }}>
        <Preview />
      </main>

      <Footer />
    </div>
  )
}
