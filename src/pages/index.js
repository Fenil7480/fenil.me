import Head from 'next/head'
import About from '../components/about'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Contact from '../components/contact'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        {/* title with length between 30-60 characters */}
        <title>Fenil Patel | Portfolio site of web developer</title>

        {/* description with length between 130-160 characters */}
        <meta name="description" content="Personal portfolio website of Fenil Patel. Fenil Patel is a Web Developer specializing in Frontend development. Looking for a  full-time job." />

        {/* robots meta tag */}
        <meta name="robots" content="index, follow" />

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link rel="icon" href='favicon.png' />
      </Head>

      <main className={styles.main}>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
