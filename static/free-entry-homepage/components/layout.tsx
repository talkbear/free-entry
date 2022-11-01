import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";

export default function Layout({ children, title = 'This is the default title' }) {
  return (
    <div className="mx-auto container px-4">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="A free speed up tool, 免费加速器，日本" />
      </Head>

      <header className="header">
        <Link href="/">Home</Link>
      </header>
      {children}
      <footer></footer>
    </div>
  )
}
