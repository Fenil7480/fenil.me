import Link from 'next/link'
import Logo from './logo'
import styles from '../styles/navbar.module.css'

const Navbar = () => {
    return (
        <nav className={`${styles.navbar} flex-row flex-start`} >
            <Logo />
            <ul className={`${styles.ul} flex-row flex-end`}>
                <li className={styles.li}>
                    <Link href="/#about">About</Link>
                </li>
                <li className={styles.li}>
                    <Link href="/#skills">Skills</Link>
                </li>
                <li className={styles.li}>
                    <Link href="/#projects">Projects</Link>
                </li>
                <li className={styles.li}>
                    <Link href="/#contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar