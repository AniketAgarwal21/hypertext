import React, { useEffect, useState } from 'react'
import './Slider.css'

function Slider() {

    const [slideIndex, setSlideIndex] = useState(0)

    useEffect(() => {
        // console.log(document.getElementsByClassName("mySlides"));
        document.querySelectorAll(".mySlides").forEach((slide, i) => {
            if (slideIndex === i) {
                slide.style.display = "block"
            } else {
                slide.style.display = "none"
            }
        });
    }, [slideIndex])

    const plusSlides = (val) => {

        if (slideIndex + val > document.querySelectorAll(".mySlides").length - 1) {
            setSlideIndex(0)
            return
        }

        if (slideIndex + val < 0) {
            setSlideIndex(document.querySelectorAll(".mySlides").length - 1)
            return
        }

        setSlideIndex(slideIndex + val)
    }

    return (
        <div className="slidecontainer">
            <div className="mySlides">
                <video className="slideVid" autoPlay muted loop src={`${process.env.PUBLIC_URL}/videos/slide1.mp4`} type="video/mp4"></video>
                <div className="slideContent">
                    R2D2 will help you fight your battles against evil. Indeed he is a beauty with brains.
                </div>
            </div>

            <div className="mySlides">
                <video className="slideVid" autoPlay muted loop src={`${process.env.PUBLIC_URL}/videos/slide2.mp4`} type="video/mp4"></video>
                <div className="slideContent">
                    Ability to respond in an emergency like an accidental fire on your ship? Check.
                </div>
            </div>

            <div className="mySlides">
                <video className="slideVid" autoPlay muted loop src={`${process.env.PUBLIC_URL}/videos/slide3.mp4`} type="video/mp4"></video>
                <div className="slideContent">
                    Zapping your enemies with a perfect aim? Check.
                </div>
            </div>

            <div className="mySlides">
                <video className="slideVid" autoPlay muted loop src={`${process.env.PUBLIC_URL}/videos/slide4.mp4`} type="video/mp4"></video>
                <div className="slideContent">
                    R2D2 models always succeed in saving their owners’ lives with or without the help of their equipment at hand.
                </div>
            </div>
            <button className="prev" onClick={() => plusSlides(-1)}>❮</button>
            <button className="next" onClick={() => plusSlides(1)}>❯</button>


        </div>
    )
}

export default Slider
