import React, { useEffect, useState } from 'react'
import './Slider.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';

SwiperCore.use([Autoplay, Pagination, Navigation]);


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
        if (val > document.getElementsByClassName("mySlides").length) {
            setSlideIndex(0)
            return
        }

        if (val < 0) {
            setSlideIndex(document.getElementsByClassName("mySlides").length - 1)
            return
        }

        setSlideIndex(slideIndex + val)
    }

    return (
        <div className="slidecontainer">
            <div className="mySlides">
                <video className="slideVid" autoPlay muted loop src={`${process.env.PUBLIC_URL}/videos/slide1.mp4`} type="video/mp4"></video>
            </div>

            <div className="mySlides">
                <video className="slideVid" autoPlay muted loop src={`${process.env.PUBLIC_URL}/videos/slide1.mp4`} type="video/mp4"></video>
            </div>

            <div className="mySlides">
                <video className="slideVid" autoPlay muted loop src={`${process.env.PUBLIC_URL}/videos/slide1.mp4`} type="video/mp4"></video>
            </div>

            <div className="mySlides">
                <video className="slideVid" autoPlay muted loop src={`${process.env.PUBLIC_URL}/videos/slide1.mp4`} type="video/mp4"></video>
            </div>

            <div className="mySlides">
                <video className="slideVid" autoPlay muted loop src={`${process.env.PUBLIC_URL}/videos/slide1.mp4`} type="video/mp4"></video>
            </div>

            <div className="mySlides">
                <video className="slideVid" autoPlay muted loop src={`${process.env.PUBLIC_URL}/videos/slide1.mp4`} type="video/mp4"></video>
            </div>

            <button className="prev" onClick={() => plusSlides(-1)}>❮</button>
            <button className="next" onClick={() => plusSlides(1)}>❯</button>


        </div>
    )
}

export default Slider
