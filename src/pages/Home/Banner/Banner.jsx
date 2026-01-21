import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import bannerImg1 from "../../../assets/banner/banner1.png"
import bannerImg2 from "../../../assets/banner/banner2.png"
import bannerImg3 from "../../../assets/banner/banner3.png"
import { FaArrowUp } from 'react-icons/fa6';


const Banner = () => {
    return (
        <div className='border-2 my-4 rounded-2xl'>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
            >
                <div className='relative'>
                    <img src={bannerImg1} />
                    <div className='absolute lg:bottom-14 md:bottom-4 bottom-2 lg:left-4 md:left-12 left-2 lg:ml-14  '>
                        
                        <div className='flex lg:gap-8  gap-4 ml-4'>
                            <div className='flex items-center '>
                                <button className='btn  rounded-2xl'>Track Your Parcel</button>
                                <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center">
                                    <FaArrowUp
                                        className="rotate-45 text-primary text-base"
                                    />
                                </div>

                            </div>
                            <button className='btn rounded-xl'>
                                Be A Rider
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={bannerImg2} />
                    <div className='absolute lg:bottom-16 md:bottom-4 bottom-2 lg:left-4 md:left-12 left-2 lg:ml-14  '>
                        
                        <div className='flex lg:gap-8  gap-4 ml-4'>
                            <div className='flex items-center '>
                                <button className='btn  rounded-2xl'>Track Your Parcel</button>
                                <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center">
                                    <FaArrowUp
                                        className="rotate-45 text-primary text-base"
                                    />
                                </div>

                            </div>
                            <button className='btn rounded-xl'>
                                Be A Rider
                            </button>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <img src={bannerImg3} />
                    <div className='absolute lg:bottom-20 md:bottom-4 bottom-2 lg:left-4 md:left-12 left-2 lg:ml-14  '>
                        
                        <div className='flex lg:gap-8  gap-4 ml-4'>
                            <div className='flex items-center '>
                                <button className='btn  rounded-2xl'>Track Your Parcel</button>
                                <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center">
                                    <FaArrowUp
                                        className="rotate-45 text-primary text-base"
                                    />
                                </div>

                            </div>
                            <button className='btn rounded-xl'>
                                Be A Rider
                            </button>
                        </div>
                    </div>
                </div>

            </Carousel>
        </div>
    );
};

export default Banner;