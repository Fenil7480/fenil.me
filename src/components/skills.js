import React from 'react'
import Skill from './skill'
import styles from '../styles/skills.module.css'

const Skills = () => {
    return (
        <div id='skills' className={styles.skills}>
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.skillsContainer}>
                <Skill name="HTML" value="90%" />
                <Skill name="CSS" value="80%" />
                <Skill name="Bootstrap" value="90%" />
                <Skill name="Tailwind" value="85%" />
                <Skill name="Javascript" value="70%" />
                <Skill name="JQuery" value="65%" />
                <Skill name="React" value="70%" />
                <Skill name="Angular" value="60%" />
                <Skill name="Next" value="70%" />
                <Skill name="Node" value="60%" />
                <Skill name="Git & Github" value="70%" />
                <Skill name="SEO" value="75%" />
            </div>
        </div>
    )
}

export default Skills