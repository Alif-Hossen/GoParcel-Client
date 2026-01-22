import React from 'react';

// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

// IMAGE
import wh1 from "../../../assets/weHelp/wehlp1.jpg"
import wh2 from "../../../assets/weHelp/wehlp2.webp"
import wh3 from "../../../assets/weHelp/wehlp3.webp"
import wh4 from "../../../assets/weHelp/wehlp4.jpg"
import wh5 from "../../../assets/weHelp/wehlp5.jpg"
import wh6 from "../../../assets/weHelp/wehlp6.png"
import wh7 from "../../../assets/weHelp/wehlp7.png"
import wh8 from "../../../assets/weHelp/wehlp8.png"
const WeHelped = () => {
    return (
        <div className=' max-w-6xl mx-auto my-20'>
            <p className="text-3xl font-bold mb-6 text-center text-secondary pb-4">
                We've helped thousands of sales teams
            </p>

            <Swiper
                // scrollbar={{ hide: false }}
                // modules={[Scrollbar]}
                className="mySwiper"
                slidesPerView={5}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                loop={true}
                modules={[Autoplay]}
                autoplay={
                    {
                        delay: 1500,
                        disableOnInteraction: false
                    }
                }


            >
                <SwiperSlide><img className='h-16 w-60  rounded-2xl' src={wh1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-16 w-60 rounded-2xl' src={wh2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-16 w-60 rounded-2xl' src={wh3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-16 w-60 rounded-2xl' src={wh4} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-16 w-60 rounded-2xl' src={wh5} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-16 w-60 rounded-2xl' src={wh6} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-16 w-60 rounded-2xl' src={wh7} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-16 w-60 rounded-2xl'  src={wh8} alt="" /></SwiperSlide>

            </Swiper>
            <div className='pt-14 border-b border-dashed '>
                
            </div>
        </div>
    );
};

export default WeHelped;
