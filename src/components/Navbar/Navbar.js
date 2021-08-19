import React from 'react'
import styles from "./Navbar.module.css"
import ThemeToggler from './../ThemeToggler/ThemeToggler';
import { Link } from 'react-router-dom';

function Navbar() {

    const toggleHamburger = (e) => {
        const hamburger = document.querySelector(`.${styles.hamburger}`);
        const navLinks = document.querySelector(".navLinks");
        const links = document.querySelectorAll(".navLinks li");

        navLinks.classList.toggle(styles.open);
        links.forEach(link => {
            link.classList.toggle(styles.fade);
        });

        //Hamburger Animation
        hamburger.classList.toggle(styles.toggle);
    }

    return (
        <nav>
            <div className={styles.logo}>
                {/* <img src={process.env.PUBLIC_URL + '/images/sample-logo.jpg'} alt="Logo" /> */}
            </div>
            <div className={`${styles.hamburger} hamburger`} onClick={toggleHamburger}>
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
                <div className={styles.line3}></div>
            </div>
            <ul className={`${styles.navLinks} navLinks`}>
                <li><Link to="/">home</Link></li>
                <li><Link to="/whoami">whoami</Link></li>
                <li><Link to="/buyme">buyme</Link></li>
                <li><Link to="/testimonials">testimonials</Link></li>
                <li><Link to="/gallery">gallery</Link></li>
                <ThemeToggler />
            </ul>
        </nav> 
    )
}

export default Navbar
