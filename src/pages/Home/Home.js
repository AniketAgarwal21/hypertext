import React, { useEffect } from 'react'
// import styles from "./Home.module.css"
import './Home.css'
import Typewriter from 'typewriter-effect';

function Home() {

    useEffect(() => {
        const ls = window.localStorage.getItem('theme')
        if (!ls) {
            document.querySelector('.r2d2').classList.add('darkr2d2')
        } else if (ls === 'light') {
            document.querySelector('.r2d2').classList.remove('darkr2d2')
        } else {
            document.querySelector('.r2d2').classList.add('darkr2d2')
        }
    }, [])

    return (
        <div id="home">
            <div className="circle">
            </div>
            <div id="section1">
                <h2>
                    Everyone's favorite astromech droid. <br /><br />
                    <Typewriter
                        options={{
                            strings: ["Bleep Boop Boop Beep", "(BB-8 Beeps excitedly)"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h2>
                <video autoPlay muted loop>
                    <source src={process.env.PUBLIC_URL + "/videos/homebg.mp4"} type="video/mp4" />
                </video>
                <center>
                    <h1 className="r2d2">
                        R2 <br /> D2
                    </h1>
                </center>
            </div>


        </div>
    )
}

export default Home
