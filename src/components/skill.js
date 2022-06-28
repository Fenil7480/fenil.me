import React from 'react'
import styles from '../styles/skill.module.css'

const Skill = ({ name, value }) => {
    return (
        <div className={styles.skill}>
            <div className='flex flex-row flex-space-between'>
                <h4 className={styles.font}>{name}</h4>
                <h5 className={styles.font}>{value}</h5>
            </div>
            <input className={styles.input} style={{ "width": value }} type="range" min='0' max='100' />
        </div>
    )
}

export default Skill