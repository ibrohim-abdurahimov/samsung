import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Hero.scss"
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { Scrollbar, Autoplay, Navigation } from 'swiper/modules';
import rasm1 from "../../assets/hero1.jpg"
import rasm2 from "../../assets/hero2.jpg"
import rasm3 from "../../assets/hero3.jpg"
import rasm4 from "../../assets/hero4.jpg"
import rasm5 from "../../assets/hero5.jpg"

const Hero = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <section className='hero'>
            <div className="container">
                <Swiper
                    loop={true}
                    scrollbar={{
                        hide: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Scrollbar, Autoplay, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={rasm1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={rasm2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={rasm3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={rasm4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={rasm5} alt="" />
                    </SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </section>
    )
}

export default Hero