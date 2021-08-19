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
                R2-D2, was an R2-series astromech droid manufactured by Industrial Automaton with masculine programming. A smart, spunky and reliable droid who would serve a multitude of masters over his lifetime, R2-D2 was never given a full memory wipe, apart from a partial wipe of select information by Cad Bane during the senate hostage crisis, nor did he ever receive new programming, with these factors resulting in an adventurous and independent attitude. Often finding himself in pivotal moments in galactic history, his bravery and ingenuity saved the galaxy on numerous occasions.
                <br />
                <br />
                R2-D2 has served Padmé Amidala, Anakin Skywalker, and Luke Skywalker in turn, showing great bravery in rescuing his masters and their friends from many perils. A skilled starship mechanic and fighter pilot's assistant, he has an unlikely but enduring friendship with the fussy protocol droid C-3PO.
            </div>
        </main>
    )
}

export default Whoami
