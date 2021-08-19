import React, { useEffect, useState } from 'react'
import styles from "./ThemeToggler.module.css"

function ThemeToggler() {

    const [theme, setTheme] = useState()

    useEffect(() => {
        const ls = window.localStorage.getItem('theme')
        if (!ls) {
            setTheme('dark')
            window.localStorage.setItem('theme', 'dark')
        } else { 
            setTheme(ls) 
        }
    }, [])
    
    // #section1 h1{
    //     background: black;
    //     color: white;
    //     mix-blend-mode: darken;
    // }
    
    useEffect(() => {
        if (theme === 'light') {
            document.body.classList.remove('dark');
            document.querySelector('.r2d2')?.classList.remove('darkr2d2')
            document.querySelectorAll('.cards').forEach(e => e.classList.remove('darkCard'))
            document.querySelector('nav').style.backgroundColor = 'white'
            document.querySelector(`.${styles.switch}`).classList.remove(styles.switchToggle)
            document.querySelector(`.${styles.darkModeToggle}`).style.backgroundColor = 'black'    
        } else {
            document.body.classList.add('dark');
            document.querySelector('.r2d2')?.classList.add('darkr2d2')
            document.querySelectorAll('.cards').forEach(e => e.classList.add('darkCard'))
            document.querySelector('nav').style.backgroundColor = '#131418'
            document.querySelector('nav').style.backgroundColor = '#000'
            document.querySelector(`.${styles.switch}`).classList.add(styles.switchToggle)
            document.querySelector(`.${styles.darkModeToggle}`).style.backgroundColor = 'white'
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
