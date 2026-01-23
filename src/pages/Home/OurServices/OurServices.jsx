import React from 'react';
import srv1 from "../../../assets/ourServices/service1.avif"
import srv2 from "../../../assets/ourServices/service2.avif"
import srv3 from "../../../assets/ourServices/service3.avif"
import srv4 from "../../../assets/ourServices/service4.avif"
import srv5 from "../../../assets/ourServices/service5.avif"
import srv6 from "../../../assets/ourServices/service6.avif"

const OurServices = () => {
    return (
        <div className='bg-secondary rounded-2xl p-12'>
            <div className='text-white text-center py-6'>
                <h1 className="text-4xl font-bold">
                    Our Services
                </h1>
                <p className="text-l py-4 text center ">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.
                </p>
            </div>

            {/* 3 COL */}
            <div className='grid lg:grid-cols-3 grid-cols-2 gap-4 rounded-2xl'>

                <div className='border bg-white hover:bg-primary rounded-2xl my-4 p-4'>
                    <div className='flex justify-center my-4'>
                        <img className='w-24 h-24 rounded-full' src={srv1} alt="" />
                    </div>
                    <div className='text-center py-2'>
                        <h1 className="text-2xl font-bold">Express & Standard <br /> Delivery</h1>
                        <div className=''>
                            <p className="text-lg py-2">
                                We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='border bg-white hover:bg-primary rounded-2xl my-4 p-4'>
                    <div className='flex justify-center my-4'>
                        <img className='w-24 h-24 rounded-full' src={srv2} alt="" />
                    </div>
                    <div className='text-center py-2'>
                        <h1 className="text-2xl font-bold">Nationwide Delivery</h1>
                        <div className=''>
                            <p className="text-lg py-2">
                                We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='border bg-white hover:bg-primary rounded-2xl my-4 p-4'>
                    <div className='flex justify-center my-4'>
                        <img className='w-24 h-24 rounded-full' src={srv3} alt="" />
                    </div>
                    <div className='text-center py-2'>
                        <h1 className="text-2xl font-bold">Fulfillment Solution</h1>
                        <div className=''>
                            <p className="text-lg py-2">
                                We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='border bg-white hover:bg-primary rounded-2xl my-4 p-4'>
                    <div className='flex justify-center my-4'>
                        <img className='w-24 h-24 rounded-full' src={srv4} alt="" />
                    </div>
                    <div className='text-center py-2'>
                        <h1 className="text-2xl font-bold">Cash on Home Delivery</h1>
                        <div className=''>
                            <p className="text-lg py-2">
                                We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='border bg-white hover:bg-primary rounded-2xl my-4 p-4'>
                    <div className='flex justify-center my-4'>
                        <img className='w-24 h-24 rounded-full' src={srv5} alt="" />
                    </div>
                    <div className='text-center py-2'>
                        <h1 className="text-2xl font-bold">Corporate Service / Contract In Logistics</h1>
                        <div className=''>
                            <p className="text-lg py-2">
                                We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='border bg-white hover:bg-primary rounded-2xl my-4 p-4'>
                    <div className='flex justify-center my-4'>
                        <img className='w-24 h-24 rounded-full' src={srv6} alt="" />
                    </div>
                    <div className='text-center py-2'>
                        <h1 className="text-2xl font-bold">Parcel Return</h1>
                        <div className=''>
                            <p className="text-lg py-2">
                                We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default OurServices;