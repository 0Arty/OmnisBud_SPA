import React from 'react';
import s from './Slider.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const Slider = ({ images }) => {

    const imagesArray = [
        '/images/masonry/1.jpg',
        '/images/masonry/2.jpg',
        '/images/masonry/3.png',
        '/images/masonry/4.png',
        '/images/masonry/5.png',
        '/images/masonry/6.jpg',
    ]
    return (
        <div className={s.box}>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                modules={[Navigation, Scrollbar]}
                navigation={true}
            >
                <SwiperSlide>
                    <div className={s.slide}>
                        <div
                            className={s.img}
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + imagesArray[0]})` }}
                        >

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={s.slide}>
                        <div
                            className={s.img}
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + imagesArray[1]})` }}
                        >

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={s.slide}>
                        <div
                            className={s.img}
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + imagesArray[2]})` }}
                        >

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={s.slide}>
                        <div
                            className={s.img}
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + imagesArray[3]})` }}
                        >

                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>


    );

}
export default Slider;
