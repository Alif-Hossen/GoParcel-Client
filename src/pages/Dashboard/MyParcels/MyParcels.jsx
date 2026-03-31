import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { CiEdit } from "react-icons/ci";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: parcels = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["myParcels", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });

  if (isLoading)
    return <span className="loading loading-dots loading-lg"></span>;

  // Delete Handler
  const handleParcelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire("Deleted!", "Parcel has been removed.", "success");
          }
        });
      }
    });
  };

  const handlePayment = async (parcel) => {
    try {
      const paymentInfo = {
        cost: parcel.cost,
        parcelId: parcel._id,
        senderEmail: parcel.senderEmail,
        parcelName: parcel.parcelName,
      };

      // এপিআই রুটটি সার্ভারের সাথে মিলিয়ে "/create-checkout-session" করা হয়েছে
      const res = await axiosSecure.post(
        "/create-checkout-session",
        paymentInfo,
      );

      if (res.data?.url) {
        window.location.replace(res.data.url); // স্ট্রাইপ পেজে পাঠিয়ে দেবে
      }
    } catch (error) {
      console.error("Payment Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "পেমেন্ট গেটওয়ে লোড হতে সমস্যা হচ্ছে। সার্ভার চেক করুন!",
      });
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        All Of My Parcels: {parcels.length}
      </h2>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="table table-zebra w-full">
          <thead className="bg-gray-100">
            <tr>
              <th>#</th>
              <th>Parcel Name</th>
              <th>Cost</th>
              <th>Delivery Date</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost} TK</td>

                <td>
                  {parcel.deliveryDate ? (
                    <span className="font-bold text-green-600">
                      {new Date(parcel.deliveryDate).toLocaleDateString()}
                    </span>
                  ) : (
                    <span className="text-red-500 font-semibold">N/A</span>
                  )}
                </td>

                {/* Delivery Status */}
                <td>
                  <span className="badge badge-ghost capitalize">
                    {parcel.deliveryStatus || "Pending"}
                  </span>
                </td>

                {/* Payment Column */}
                <td>
                  {parcel.paymentStatus === "paid" ? (
                    <span className="text-green-600 font-bold">Paid</span>
                  ) : (
                    <button
                      onClick={() => handlePayment(parcel)}
                      className="btn btn-xs btn-primary text-black"
                    >
                      Pay Now
                    </button>
                  )}
                </td>

                {/* Actions Column */}
                <td className="flex gap-2">
                  <button className="btn btn-square btn-sm hover:bg-primary">
                    <FaMagnifyingGlass title="Details" />
                  </button>

                  {/* পেইড হলে এডিট/ডিলিট করা যাবে না */}
                  {parcel.paymentStatus !== "paid" && (
                    <>
                      <button className="btn btn-square btn-sm hover:bg-info">
                        <CiEdit title="Edit" />
                      </button>
                      <button
                        onClick={() => handleParcelDelete(parcel._id)}
                        className="btn btn-square btn-sm hover:bg-error"
                      >
                        <FaRegTrashAlt title="Delete" />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
