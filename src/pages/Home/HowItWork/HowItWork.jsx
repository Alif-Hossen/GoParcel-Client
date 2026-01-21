import React from 'react';
import { LiaTruckPickupSolid } from 'react-icons/lia';
import delivery1 from "../../../assets/HowWorks/delivery.avif"

const HowItWork = () => {
    return (
        <div className=' max-w-6xl mx-auto my-16 px-2'>
            <h1 className='py-4 text-2xl lg:text-4xl font-bold'>How It Works</h1>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-1 lg:gap-6 md:gap-4 gap-2'>
                <div>
                    <div className=' bg-white rounded-xl p-2 my-2'>
                        <div>
                            <img className='h-16 rounded-2xl' src={delivery1} alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold py-2'>
                                Booking Pick & Drop
                            </h1>
                            <p className='text-lg'>
                                From personal packages to business shipments — we deliver on time, every time.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' bg-white rounded-xl p-2 my-2'>
                        <div>
                            <img className='h-16 rounded-2xl' src={delivery1} alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold py-2'>
                                Booking Pick & Drop
                            </h1>
                            <p className='text-lg'>
                                From personal packages to business shipments — we deliver on time, every time.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' bg-white rounded-xl p-2 my-2'>
                        <div>
                            <img className='h-16 rounded-2xl' src={delivery1} alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold py-2'>
                                Booking Pick & Drop
                            </h1>
                            <p className='text-lg'>
                                From personal packages to business shipments — we deliver on time, every time.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' bg-white rounded-xl p-2 my-2'>
                        <div>
                            <img className='h-16 rounded-2xl' src={delivery1} alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold py-2'>
                                Booking Pick & Drop
                            </h1>
                            <p className='text-lg'>
                                From personal packages to business shipments — we deliver on time, every time.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>


        </div>
    );
};

export default HowItWork;