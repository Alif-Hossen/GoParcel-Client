import React from 'react';
import { LiaTruckPickupSolid } from 'react-icons/lia';

import howWork1 from "../../../assets/HowWorks/order1.avif"
import howWork2 from "../../../assets/HowWorks/order2.avif"
import howWork3 from "../../../assets/HowWorks/order3.avif"
import howWork4 from "../../../assets/HowWorks/order4.avif"

const HowItWork = () => {
    return (
        <div className=' max-w-6xl mx-auto my-16 px-2'>
            <h1 className='py-4 text-2xl lg:text-4xl font-bold'>How It Works</h1>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-1 lg:gap-6 md:gap-4 gap-2  '>
                <div>
                    <div className=' bg-white rounded-xl p-2 my-2'>
                        <div>
                            <img className='h-20 w-30 rounded-2xl   ' src={howWork1} alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold py-2'>
                                Place Your Order
                            </h1>
                            <p className='text-lg'>
                                Create a delivery request in seconds by entering pickup and drop-off details. Choose the parcel type, preferred delivery option.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' bg-white rounded-xl p-2 my-2'>
                        <div>
                            <img className='h-20 w-30 rounded-2xl ' src={howWork2} alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold py-2'>
                                We Pick It Up
                            </h1>
                            <p className='text-lg'>
                                Our verified delivery partners collect your parcel from your doorstep at the scheduled time, ensuring safe handling from the very beginning.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' bg-white rounded-xl p-2 my-2'>
                        <div>
                            <img className='h-20 w-30 rounded-2xl ' src={howWork3} alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold py-2'>
                                Track in Real Time
                            </h1>
                            <p className='text-lg'>
                                Monitor your parcel’s journey with live tracking and instant status updates through the app, SMS, or email—so you’re always informed.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' bg-white rounded-xl p-2 my-2'>
                        <div>
                            <img className='h-20 w-30 rounded-2xl ' src={howWork4} alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold py-2'>
                                Delivered Safely
                            </h1>
                            <p className='text-lg'>
                                Your parcel is delivered securely to the destination. Receive confirmation upon successful delivery and enjoy a smooth, hassle-free experience.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>


        </div>
    );
};

export default HowItWork;