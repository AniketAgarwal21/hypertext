import React from 'react'
import styles from './Slider.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';

SwiperCore.use([Autoplay, Pagination, Navigation]);


function Slider() {
    return (
        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
            "delay": 5000,
            "disableOnInteraction": false
        }} pagination={{
            "clickable": true
        }} navigation={true} className="mySwiper">
            <SwiperSlide>
                <video className={styles.slideImg} autoPlay muted loop>
                    <source src={process.env.PUBLIC_URL + "/videos/slide1.mp4"} />
                </video>
                <h2 className={styles.slideContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vero corporis fugit. Fugiat, rem. Dicta, quaerat. Aut, quisquam.</h2>
            </SwiperSlide>
            <SwiperSlide>
                <video className={styles.slideImg} autoPlay muted loop>
                    <source src={process.env.PUBLIC_URL + "/videos/slide1.mp4"} />
                </video>
                <h2 className={styles.slideContent}>Slide 2</h2>
            </SwiperSlide>
            <SwiperSlide>
                <video className={styles.slideImg} autoPlay muted loop>
                    <source src={process.env.PUBLIC_URL + "/videos/slide1.mp4"} />
                </video>
                <h2 className={styles.slideContent}>Slide 3</h2>
            </SwiperSlide>
            <SwiperSlide>
                <video className={styles.slideImg} autoPlay muted loop>
                    <source src={process.env.PUBLIC_URL + "/videos/slide1.mp4"} />
                </video>
                <h2 className={styles.slideContent}>Slide 4</h2>
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider
