import React from 'react';

import customerSay from "../../../assets/customer-top.png";
import customer1 from "../../../assets/customer/customer1.avif";
import customer2 from "../../../assets/customer/customer2.avif";
import customer3 from "../../../assets/customer/customer3.avif";
import customer4 from "../../../assets/customer/customer4.avif";
import customer5 from "../../../assets/customer/customer5.avif";
import customer6 from "../../../assets/customer/customer6.avif";
import customer7 from "../../../assets/customer/customer7.avif";
import customer8 from "../../../assets/customer/customer8.avif";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const CustomerSay = () => {
  const customers = [
    customer1, customer2, customer3, customer4,
    customer5, customer6, customer7, customer8
  ];

  return (
    <div className="py-20">

      {/* Top Image */}
      <div className="flex justify-center mb-6">
        <img src={customerSay} alt="Customer Say" />
      </div>

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-secondary">
          What our customers are saying
        </h1>
        <p className="text-sm text-gray-700 pt-4">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro.
          <br />
          Achieve proper alignment, reduce pain, and strengthen your body with ease!
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {customers.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-6 p-6 my-8 bg-white rounded-2xl shadow-lg">
              
              <p className="text-gray-700 text-sm leading-relaxed">
                A posture corrector works by providing support and gentle alignment
                to your shoulders, back, and spine, encouraging you to maintain
                proper posture throughout the day.
              </p>

              <div className="border-b border-dashed border-green-900"></div>

              <div className="flex gap-4 items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={img}
                  alt="Customer"
                />
                <div>
                  <h2 className="text-lg font-bold text-secondary">
                    John Wick
                  </h2>
                  <p className="text-sm text-gray-600">
                    Senior Product Designer
                  </p>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerSay;
