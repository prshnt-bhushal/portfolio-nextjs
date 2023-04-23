import Head from 'next/head'
import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'


export default function Home() {
  return (
    <>
      <Head>
        <title>Prashant Bhushal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  )
}
