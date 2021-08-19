import React, { useEffect } from 'react'
import './Card.css'

function Card({name, content, image, position}) {
    
    useEffect(() => {
        const ls = window.localStorage.getItem('theme')
        if (!ls) {
            document.querySelectorAll('.cards').forEach(e => e.classList.add('darkCard'))
        } else if(ls === 'light') { 
            document.querySelectorAll('.cards').forEach(e => e.classList.remove('darkCard'))
        } else {
            document.querySelectorAll('.cards').forEach(e => e.classList.add('darkCard'))
        }
    }, [])

    return (
        <div class={`cards ${position}`}>
            <div class="review">
                <h2>{name}</h2><br />
                <h6>
                    "{content}"
                </h6>
            </div>
            <img src={`${process.env.PUBLIC_URL}/images/${image}`} alt={name} />
        </div>
    )
}

export default Card
