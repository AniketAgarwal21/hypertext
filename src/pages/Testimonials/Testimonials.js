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
            name: "Poe Dameron",
            content: "A brilliant droid. R2D2 saved my life. Granted, he seems a little too arrogant about it, I wouldn't trade him for any other droid.",
            image: "poe-dam.png",
            position: "second"
        },
        {
            name: "Han Solo",
            content: "A brilliant droid. R2D2 saved my life. Granted, he seems a little too arrogant about it, I wouldn't trade him for any other droid.",
            image: "hans.png",
            position: "first"
        },
        {
            name: "Rey Skywalker",
            content: "A brilliant droid. R2D2 saved my life. Granted, he seems a little too arrogant about it, I wouldn't trade him for any other droid.",
            image: "rey.png",
            position: "first"
        },
        {
            name: "Obi Wan",
            content: "now this... this is the droid you are looking for",
            image: "obi-wan.png",
            position: "second"
        },
        {
            name: "C-3PO",
            content: "That R2 unit is in prime condition, it is a real bargain... and a good friend too",
            image: "c-3po.png",
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
                    }}
                />
            </div>
            <div id="testimonials">
                {testimonials.map(e => <Card name={e.name} content={e.content} image={e.image} position={e.position} />)}
            </div>
        </>
    )
}

export default Testimonials
