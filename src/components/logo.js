import React from 'react'
import Link from 'next/link';
import styles from '../styles/logo.module.css';

const Logo = () => {
    return (
        <i className={styles.logo}><Link href="http://fenil.me" rel="noopener noreferrer">fenil.me</Link></i>
    )
}

export default Logo