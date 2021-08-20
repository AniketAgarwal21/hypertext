import React from 'react'
import styles from './Whoami.module.css'
import Typewriter from 'typewriter-effect';


function Whoami() {

    return (
        <main className={`${styles.container}`}>
            <div className={`${styles.whoamiImage}`}>
                <img src={process.env.PUBLIC_URL + '/images/whoami.png'} alt="" />
            </div>
            <div className={`${styles.whoamiContent} contentStyle`}>
                <div className="titleStyle">
                    <Typewriter
                        options={{
                            strings: ["Hello, I'm R2D2 ...", "How are you?"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                R2D2 is an R2-series astromech droid manufactured by Industrial Automaton with masculine programming. A smart, spunky droid who can serve a multitude of masters over his long lifetime, R2-D2 has never been given a full memory wipe nor has he ever received new programming, with these factors resulting in an adventurous and independent attitude.Various of his models have been included in pivotal moments of galactic history, their bravery and ingenuity has saved the galaxy on numerous occasions. They have showed great bravery in rescuing their masters and their friends from many perils.
            </div>
        </main>
    )
}

export default Whoami
