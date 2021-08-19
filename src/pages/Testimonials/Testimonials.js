import React from 'react'
import './Testimonials.css'
import Card from './../../components/Card/Card';

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
            name: "Luke Skywalker",
            content: "A brilliant droid. R2D2 saved my life. Granted, he seems a little too arrogant about it, I wouldn't trade him for any other droid.",
            image: "luke.png",
            position: "second"
        },
        {
            name: "Poe Dameron",
            content: "A brilliant droid. R2D2 saved my life. Granted, he seems a little too arrogant about it, I wouldn't trade him for any other droid.",
            image: "poe-dam.png",
            position: "first"
        }
    ]

    return (
        <>
            <div className="quote">"A satisfied customer is the best business strategy"</div>
            <div id="testimonials">
                {testimonials.map(e => <Card name={e.name} content={e.content} image={e.image} position={e.position} />)}
            </div>
        </>
    )
}

export default Testimonials
