import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

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

    const riderRegion = useWatch({ control, name: 'region' });


    const handleRiderApplication = data => {
        console.log(data);
        axiosSecure.post('/riders', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application has been submitted. We will reach to you in 145 days",
                        showConfirmButton: false,
                        timer: 2500

                    });
                }
            })
    }




    return (
        <div>
            <h2 className="text-4xl text-primary">Be A Rider</h2>
            <form onSubmit={handleSubmit(handleRiderApplication)} className='mt-12 p-4 text-black'>

                {/* TO COLUMN --> */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>

                    {/* RIDER DETAILS -->  */}

                    <fieldset className="fieldset">

                        <h4 className="text-2xl font-bold">
                            Rider Details
                        </h4>

                        {/*  NAME --> */}
                        <label className="label"> Your Name </label>

                        <input type="text" {...register('name')}
                            defaultValue={user?.displayName}
                            className="input w-full" placeholder="Sender Name" />

                        {/*  EMAIL --> */}
                        <label className="label"> Your Email </label>

                        <input type="text" {...register('email', { required: true })}
                            defaultValue={user?.email}
                            className="input w-full" placeholder="Sender Email" />

                        {/* SENDER REGION  */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend"> Regions </legend>

                            <select {...register('region')} defaultValue="Pick a region" className="select">
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
                            <legend className="fieldset-legend"> Districts </legend>

                            <select {...register('district')} defaultValue="Pick a district" className="select">
                                <option disabled={true}>Pick a district</option>

                                {
                                    districtsByRegion(riderRegion).map((r, i) => <option key={i} value={r} >
                                        {r}
                                    </option>
                                    )
                                }

                            </select>
                        </fieldset>

                        {/* SENDER ADDRESS  */}
                        <label className="label mt-4"> Your Address </label>

                        <input type="text" {...register('address')} className="input w-full" placeholder="Your Address" />

                        {/* SENDER PHONE -->  */}
                        <label className="label mt-4"> Your Phone No </label>

                        <input type="phone" {...register('phone')} className="input w-full" placeholder="Your Phone No" />


                    </fieldset>



                    {/* RECEIVER DETAILS -->  */}


                    <fieldset className="fieldset">

                        <h4 className="text-2xl font-bold">
                            More Details
                        </h4>

                        {/* RECEIVER NAME --> */}
                        <label className="label"> Driving License </label>

                        <input type="text" {...register('license')} className="input w-full" placeholder="Driving License" />

                        {/* RECEIVER EMAIL --> */}
                        <label className="label"> NID </label>

                        <input type="text" {...register('nid')} className="input w-full" placeholder="NID" />

                        {/* BIKE INFORMATION -->  */}
                        <label className="label mt-4"> Bike Information </label>

                        <input type="phone" {...register('bike')} className="input w-full" placeholder="Bike Information" />

                    </fieldset>

                </div>

                <input type="submit" className='btn btn-primary text-black mt-8' value=" Apply as a Rider " />

            </form>
        </div>
    );
};

export default Rider;