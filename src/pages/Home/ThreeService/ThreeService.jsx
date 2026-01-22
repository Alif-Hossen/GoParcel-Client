import React from 'react';

import service1 from "../../../assets/service/service1.avif"
import service2 from "../../../assets/service/service4.avif"
import service3 from "../../../assets/service/service3.avif"

const ThreeService = () => {
    return (
        <div className='grid grid-cols-1 gap-5'>
            <div className='max-w-6xl mx-auto  flex gap-8 rounded-2xl bg-white'>
                <div className='flex gap-3 items-center'>
                    
                    <img className='lg:h-40 lg:w-60  rounded-2xl' src={service1} alt="" />
                    <div className=" h-30  border-r border-dashed border-gray-400"></div>
                </div>
                <div className='py-8'>
                    <h2 className='text-xl font-bold py-2'>Live Parcel Tracking</h2>
                    <p className=''>
                        Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.
                    </p>
                </div>

            </div>
            <div className='max-w-6xl mx-auto  flex gap-8 rounded-2xl bg-white'>
                <div className='flex lg:gap-8 items-center'>
                    
                    <img className='lg:h-40 lg:w-60 rounded-2xl' src={service2} alt="" />
                    <div className=" h-30  border-r border-dashed border-gray-400"></div>
                </div>
                <div className='py-8'>
                    <h2 className='text-xl font-bold py-2'>100% Safe Delivery</h2>
                    <p className=''>
                        We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.
                    </p>
                </div>

            </div>
            
            <div className='max-w-6xl mx-auto  flex gap-8 rounded-2xl bg-white'>
                <div className='flex  items-center'>
                    
                    <img className='lg:h-40 lg:w-60 rounded-2xl' src={service3} alt="" />
                    <div className=" h-30  border-r border-dashed border-gray-400"></div>
                </div>
                <div className='py-8'>
                    <h2 className='text-xl font-bold py-2'>24/7 Call Center Support</h2>
                    <p className=''>
                        Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.
                    </p>
                </div>

            </div>

        </div>
    );
};

export default ThreeService;