import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AssignDeliveries = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: parcels = [] } = useQuery({
        queryKey: ['parcels', user.email, 'driver_assigned'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/rider?riderEmail=${user.email}&deliverStatus=driver_assigned`)
            return res.data;
        }

    })

    return (
        <div>
            <h2 className="text-4xl">
                Parcels Pending Pickup: {parcels.length}
            </h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Confirm</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            parcels.map((parcel, index) => <tr key={parcel._id}>
                                <th>{index+1}</th>
                                <td>{parcel.parcelName}</td>
                                <td> 
                                    <button className='btn btn-primary text-black'>
                                        Accept
                                    </button>
                                    <button className='btn btn-warning text-black ms-2'>
                                        Reject
                                    </button>
                                </td>
                                <td>Blue</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AssignDeliveries;