import React from 'react';
import styles from '../styles/intro.module.css';
// import resume from 'FenilPatel_Dev.pdf'

const Intro = () => {
  return (
    <section id='about' className={styles.intro}>
      <h3 className={styles.hello}>Hello, My name is</h3>
      <h1 className={styles.fenil}>Fenil Patel</h1>
      <h3 className={styles.des}>I make awesome things for web!</h3>
      <h4 className={styles.about}>
        I&apos; m a web developer and software developer. Currently studying web
        designing and development at Conestoga college. I like building single
        page applications using React & Next.js
      </h4>
      <a href='Fenil Patel Resume.pdf' target='_blank'>
        <button className={styles.button}>Resume</button>
      </a>
    </section>
  );
};

export default Intro;
