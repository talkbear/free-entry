import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function HelpIndex() {

  return (
    <Layout>
      <Head>
        <title>Help</title>
      </Head>
      <h1>Help Index</h1>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
    </Layout>
  )
}

