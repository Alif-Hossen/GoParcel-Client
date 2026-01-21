import React from 'react';
import { LiaTruckPickupSolid } from 'react-icons/lia';

const HowItWork = () => {
    return (
        <div className='bg-blue-300 max-w-6xl mx-auto my-16 px-2'>
            <h1 className='py-4 text-4xl font-bold'>How It Works</h1>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-1 lg:gap-6 md:gap-4 gap-2'>
                <div>
                    <div className='border rounded-xl p-2 my-2'>
                        <div>
                            <LiaTruckPickupSolid />
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
                    <div className='border rounded-xl'>
                        <div>
                            <LiaTruckPickupSolid />
                        </div>
                        <div>
                            <h1>Booking Pick & Drop</h1>
                            <p>
                                From personal packages to business shipments — we deliver on time, every time.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='border rounded-xl'>
                        <div>
                            <LiaTruckPickupSolid />
                        </div>
                        <div>
                            <h1>Booking Pick & Drop</h1>
                            <p>
                                From personal packages to business shipments — we deliver on time, every time.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='border rounded-xl'>
                        <div>
                            <LiaTruckPickupSolid />
                        </div>
                        <div>
                            <h1>Booking Pick & Drop</h1>
                            <p>
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