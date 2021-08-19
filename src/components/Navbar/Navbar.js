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
                <li><Link to={`${process.env.PUBLIC_URL}/`}>home</Link></li>
                <li><Link to={`${process.env.PUBLIC_URL}/whoami`}>whoami</Link></li>
                <li><Link to={`${process.env.PUBLIC_URL}/buyme`}>buyme</Link></li>
                <li><Link to={`${process.env.PUBLIC_URL}/testimonials`}>testimonials</Link></li>
                <li><Link to={`${process.env.PUBLIC_URL}/gallery`}>gallery</Link></li>
                <ThemeToggler />
            </ul>
        </nav>

        // style={backgroundolor: white !important}
        // <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light" >
        //     <div className="container-fluid">
        //         <a className="navbar-brand" href="#">
        //             Hypertext
        //         </a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarContent">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <a className="nav-link active" href="#">About</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Services</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Testimonials</a>
        //                 </li>
        //             </ul>
        //             <ul className="navbar-nav">
        //                 <li className="nav-item">
        //                     <a className="nav-link active" href="#">Sign Up</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Login</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default Navbar
