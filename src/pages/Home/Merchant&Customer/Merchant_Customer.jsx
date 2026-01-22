import React from 'react';

import beAMerchant from "../../../assets/be-a-merchant-bg.png"
import merchantLocation from "../../../assets/location-merchant.png"

const Merchant_Customer = () => {
    return (
        <>
            <div className='border-t border-dashed max-w-5xl mx-auto mt-16'>

            </div>
            <div className='max-w-6xl mx-auto border bg-secondary rounded-2xl py-12 relative my-15 px-8'>

                <div className='flex justify-between'>
                    <div className='pt-10'>
                        <h1 className='text-white text-3xl font-bold'>
                            Merchant and Customer Satisfaction <br /> is Our First Priority
                        </h1>
                        <p className='text-white py-4'>
                            We offer the lowest delivery charge with the highest value along <br /> with 100% safety of your product. Pathao courier delivers your <br /> parcels in every corner of Bangladesh right on time.
                        </p>
                        <div className='flex gap-4'>
                            <button className='btn btn-primary text-black rounded-4xl'>Become a Merchant</button>
                            <button className='btn text-primary border-primary bg-secondary rounded-4xl'>Earn with ZapShift Courier</button>
                        </div>
                    </div>

                    <div className=' '>
                        <img className='h-60 w-100' src={merchantLocation} alt="" />
                    </div>
                </div>

                <div className='absolute top-0 left-20 '>
                    <img src={beAMerchant} alt="" />
                </div>

            </div>
        </>
    );
};

export default Merchant_Customer;