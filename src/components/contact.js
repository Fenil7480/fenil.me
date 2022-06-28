import React from 'react'
import styles from '../styles/contact.module.css'
import Socials from './socials'

const Contact = () => {
    return (
        <div className={`${styles.contact} flex-col`}>
            <h2 className={styles.title}>Get In Touch</h2>
            <p className={styles.info}>I'm currently looking for a full-time job position as a front-end web developer. if you have something for me or just want to say hello, consider dropping a mail or connecting me via social handles. I will get back to you soon.</p>
            <a href="mailto:7fenilpatel@gmail.com" target="_blank"><button className={styles.button}> Say Hello</button></a>
            <Socials />
        </div >
    )
}

export default Contact