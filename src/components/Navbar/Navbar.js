import React from 'react'
import styles from "./Navbar.module.css"
import ThemeToggler from './../ThemeToggler/ThemeToggler';

function Navbar() {

    const toggleHamburger = (e) => {
        const hamburger = document.querySelector(".hamburger");
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
                <li><a href="/">Home</a></li>
                <li><a href="/">Solutions</a></li>
                <li><a href="/">Products</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Contact Us</a></li>
                {/* <li><button className={styles.loginButton} href="#">Login</button></li>
                <li><button className={styles.joinButton} href="#">Join</button></li> */}
                <ThemeToggler />
            </ul>
        </nav>
    )
}

export default Navbar
