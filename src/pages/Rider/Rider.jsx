import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useLoaderData } from 'react-router';

const Rider = () => {

    const { register,
        handleSubmit,
        control,
    } = useForm();

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const serviceCenters = useLoaderData();
    const regionsDuplicate = serviceCenters.map(c => c.region);
    const regions = [...new Set(regionsDuplicate)];

    const districtsByRegion = (region) => {
        const regionDistricts = serviceCenters.filter(c => c.region === region);
        const districts = regionDistricts.map(d => d.district);
        return districts;
    }

    const senderRegion = useWatch({ control, name: 'senderRegion' });


    const handleRiderApplication = data => {
        console.log(data);
    }




    return (
        <div>
            <h2 className="text-4xl text-primary">Be A Rider</h2>
            <form onSubmit={handleSubmit(handleRiderApplication)} className='mt-12 p-4 text-black'>

                {/* TO COLUMN --> */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>

                    {/* SENDER DETAILS -->  */}

                    <fieldset className="fieldset">

                        <h4 className="text-2xl font-bold">
                            Rider Details
                        </h4>

                        {/* SENDER NAME --> */}
                        <label className="label"> Sender Name </label>

                        <input type="text" {...register('senderName')}
                            defaultValue={user?.displayName}
                            className="input w-full" placeholder="Sender Name" />

                        {/* SENDER EMAIL --> */}
                        <label className="label"> Sender Email </label>

                        <input type="text" {...register('senderEmail', { required: true })}
                            defaultValue={user?.email}
                            className="input w-full" placeholder="Sender Email" />

                        {/* {
                            errors.senderEmail?.type === 'required' &&
                            <p className='text-red-500'> Email Require For Secure parcel </p>
                        } */}


                        {/* SENDER REGION  */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Sender Regions </legend>

                            <select {...register('senderRegion')} defaultValue="Pick a region" className="select">
                                <option disabled={true}>Pick a region</option>

                                {
                                    regions.map((r, i) => <option key={i} value={r} >
                                        {r}
                                    </option>
                                    )
                                }

                            </select>
                        </fieldset>


                        {/* SENDER DISTRICTS -->  */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Sender Districts </legend>

                            <select {...register('senderDistrict')} defaultValue="Pick a district" className="select">
                                <option disabled={true}>Pick a district</option>

                                {
                                    districtsByRegion(senderRegion).map((r, i) => <option key={i} value={r} >
                                        {r}
                                    </option>
                                    )
                                }

                            </select>
                        </fieldset>

                        {/* SENDER PHONE -->  */}
                        <label className="label mt-4"> Sender Phone No </label>

                        <input type="phone" {...register('senderAddress')} className="input w-full" placeholder="Sender Phone No" />

                        {/* SENDER PICKUP INSTRUCTION -->  */}
                        <label className="label mt-4"> Pickup Instruction  </label>

                        <textarea type="text" {...register('pickUp')} className="input w-full h-20" placeholder="Pickup Instruction" />

                    </fieldset>

                    {/* RECEIVER DETAILS -->  */}


                    <fieldset className="fieldset">

                        <h4 className="text-2xl font-bold">
                            Receiver Details
                        </h4>

                        {/* RECEIVER NAME --> */}
                        <label className="label"> Receiver Name </label>

                        <input type="text" {...register('receiverName')} className="input w-full" placeholder="Receiver Name" />

                        {/* RECEIVER EMAIL --> */}
                        <label className="label"> Receiver Email </label>

                        <input type="text" {...register('receiverEmail')} className="input w-full" placeholder="Receiver Email" />


                        {/* RECEIVER REGION --> */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Receiver Regions </legend>

                            <select {...register('receiverRegion')} defaultValue="Pick a region" className="select">
                                <option disabled={true}>Pick a region</option>

                                {
                                    regions.map((r, i) => <option key={i} value={r} >
                                        {r}
                                    </option>
                                    )
                                }

                            </select>
                        </fieldset>



                        {/* RECEIVER PHONE -->  */}
                        <label className="label mt-4"> Receiver Phone No </label>

                        <input type="phone" {...register('receiverAddress')} className="input w-full" placeholder="Receiver Phone No" />

                    </fieldset>

                </div>

                <input type="submit" className='btn btn-primary text-black mt-8' value=" Send parcel " />

            </form>
        </div>
    );
};

export default Rider;