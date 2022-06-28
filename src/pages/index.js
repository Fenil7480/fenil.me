import Head from 'next/head'
import Image from 'next/image'
import About from '../components/about'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Contact from '../components/contact'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fenil Patel | Portfolio </title>
        <meta name="description" content="Personal portfolio website of Fenil Patel. Fenil Patel is interested in becoming Web Developer. Looking for full-time jobs as a Web Developer | Frontend Developer | Javascript Developer | React Developer" />
        <link rel="icon" href="/favicon.ico" />
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
