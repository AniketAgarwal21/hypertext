import React from 'react'
import './Testimonials.css'
import Card from './../../components/Card/Card';
import Typewriter from 'typewriter-effect';

function Testimonials() {

    const testimonials = [
        {
            name: "Luke Skywalker",
            content: "A brilliant droid. R2D2 saved my life. Granted, he seems a little too arrogant about it, I wouldn't trade him for any other droid.",
            image: "luke.png",
            position: "first"
        },
        {
            name: "Obi Wan",
            content: "A life-saving bot with great versatility?Well, of course I know him. He's R2D2.",
            image: "obi-wan.png",
            position: "second"
        },
        {
            name: "C-3PO",
            content: "That R2 unit is in prime condition, it is a real bargain... and a good friend too",
            image: "c-3po.png",
            position: "first"
        },
        {
            name: "Rey Skywalker",
            content: "People kept telling me that R2D2 is the best droid you could have. They were absolutely right.",
            image: "rey.png",
            position: "first"
        },
        {
            name: "Poe Dameron",
            content: "R2D2 is a companionable and fun droid with more brains than most people I've met.",
            image: "poe-dam.png",
            position: "second"
        },
        {

            name: "Han Solo",
            content: "Hokey religions and ancient weapons are no match for a droid like R2D2 at your side.",
            image: "hans.png",
            position: "first"
        }
    ]

    return (
        <>
            <div className="quote">
                <Typewriter
                    options={{
                        strings: ['"It takes months to find a customer, and seconds to lose one"', "See how I have helped my owners"],
                        autoStart: true,
                        loop: true,
                        delay: 40,
                        deleteSpeed: 30
                    }}
                />
            </div>
            <div id="testimonials">
                {testimonials.map((e, i) => <Card key={i} name={e.name} content={e.content} image={e.image} position={e.position} />)}
            </div>
        </>
    )
}

export default Testimonials
