import React, { useEffect, useState } from 'react'
// import styles from './Slider.module.css'
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
        // <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
        //     "delay": 5000,
        //     "disableOnInteraction": false
        // }} pagination={{
        //     "clickable": true
        // }} navigation={true} className="mySwiper">
        //     <SwiperSlide>
        //         <video className={styles.slideImg} autoPlay muted loop>
        //             <source src={process.env.PUBLIC_URL + "/videos/slide1.mp4"} />
        //         </video>
        //         <h2 className={styles.slideContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vero corporis fugit. Fugiat, rem. Dicta, quaerat. Aut, quisquam.</h2>
        //     </SwiperSlide>
        //     <SwiperSlide>
        //         <video className={styles.slideImg} autoPlay muted loop>
        //             <source src={process.env.PUBLIC_URL + "/videos/slide1.mp4"} />
        //         </video>
        //         <h2 className={styles.slideContent}>Slide 2</h2>
        //     </SwiperSlide>
        //     <SwiperSlide>
        //         <video className={styles.slideImg} autoPlay muted loop>
        //             <source src={process.env.PUBLIC_URL + "/videos/slide1.mp4"} />
        //         </video>
        //         <h2 className={styles.slideContent}>Slide 3</h2>
        //     </SwiperSlide>
        //     <SwiperSlide>
        //         <video className={styles.slideImg} autoPlay muted loop>
        //             <source src={process.env.PUBLIC_URL + "/videos/slide1.mp4"} />
        //         </video>
        //         <h2 className={styles.slideContent}>Slide 4</h2>
        //     </SwiperSlide>
        // </Swiper>



        <div className="slidecontainer">
            <div className="mySlides">
                <video autoPlay muted loop src={`${process.env.PUBLIC_URL}/videos/slide1.mp4`} type="video/mp4" style={{ "width": "100%" }}></video>
            </div>

            <div className="mySlides">
                <video autoPlay muted loop src={`${process.env.PUBLIC_URL}/videos/slide1.mp4`} type="video/mp4" style={{ "width": "100%" }}></video>
            </div>

            <div className="mySlides">
                <video autoPlay muted loop src={`${process.env.PUBLIC_URL}/videos/slide1.mp4`} type="video/mp4" style={{ "width": "100%" }}></video>
            </div>

            <div className="mySlides">
                <video autoPlay muted loop src={`${process.env.PUBLIC_URL}/videos/slide1.mp4`} type="video/mp4" style={{ "width": "100%" }}></video>
            </div>

            <div className="mySlides">
                <video autoPlay muted loop src={`${process.env.PUBLIC_URL}/videos/slide1.mp4`} type="video/mp4" style={{ "width": "100%" }}></video>
            </div>

            <div className="mySlides">
                <video autoPlay muted loop src={`${process.env.PUBLIC_URL}/videos/slide1.mp4`} type="video/mp4" style={{ "width": "100%" }}></video>
            </div>

            <button className="prev" onClick={() => plusSlides(-1)}>❮</button>
            <button className="next" onClick={() => plusSlides(1)}>❯</button>


        </div>

    )
}

export default Slider
