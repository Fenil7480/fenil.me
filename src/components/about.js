import React from 'react'
import Navbar from './navbar'
import Intro from './intro'
import styles from '../styles/about.module.css'

const About = () => {
    return (
        <div className={styles.about}>
            <Navbar />
            <Intro />
        </div>
    )
}

export default About