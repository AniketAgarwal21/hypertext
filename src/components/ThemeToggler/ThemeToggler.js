import React, { useEffect, useState } from 'react'
import styles from "./ThemeToggler.module.css"

function ThemeToggler() {

    const [theme, setTheme] = useState()

    useEffect(() => {
        const ls = window.localStorage.getItem('theme')
        if (!ls) {
            setTheme('light')
            window.localStorage.setItem('theme', 'light')
        } else { 
            setTheme(ls) 
        }
    }, [])

    useEffect(() => {
        if (theme === 'light') {
            document.body.classList.remove('dark');
            document.querySelector(`.${styles.switch}`).classList.remove(styles.switchToggle)
        } else {
            document.body.classList.add('dark');
            document.querySelector(`.${styles.switch}`).classList.add(styles.switchToggle)
        }
    }, [theme])

    const switchToggle = (theme) => {
        if (theme === 'light') {
            setTheme('dark')
            window.localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light')
            window.localStorage.setItem('theme', 'light');
        }
    }

    return (
        <button onClick={() => switchToggle(theme)} className={styles.darkModeToggle}>
            <div className={`${styles.switch} ${styles.light}`}></div>
        </button>
    )
}

export default ThemeToggler
