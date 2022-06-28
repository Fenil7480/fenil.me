import React from 'react'
import Logo from './logo'
import styles from '../styles/navbar.module.css'

const Navbar = () => {
    return (
        <nav className={`${styles.navbar} flex-row flex-start`} >
            <Logo />
            <ul className={`${styles.ul} flex-row flex-end`}>
                <li className={styles.li}>
                    <a href="#">About</a>
                </li>
                <li className={styles.li}>
                    <a href="#">Skills</a>
                </li>
                <li className={styles.li}>
                    <a href="#">Projects</a>
                </li>
                <li className={styles.li}>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar