import React from 'react'
import styles from '../styles/projects.module.css'
import Project from './project'

const Projects = () => {
    return (
        <div id='projects' className={styles.projects}>
            <h2 className={styles.projectTitle}>Projects</h2>
            <Project />
        </div>
    )
}

export default Projects