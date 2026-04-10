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
    return (
      <div className="flex justify-center items-center min-h-50">
        <span className="loading loading-dots loading-lg text-primary"></span>
      </div>
    );

  // Delete Handler
  const handleParcelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
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

  // Stripe Payment Handler
  const handlePayment = async (parcel) => {
    try {
      const paymentInfo = {
        cost: parcel.cost,
        parcelId: parcel._id,
        senderEmail: parcel.senderEmail,
        parcelName: parcel.parcelName,
      };

      const res = await axiosSecure.post(
        "/create-checkout-session",
        paymentInfo,
      );

      if (res.data?.url) {
        window.location.replace(res.data.url);
      }
    } catch (error) {
      console.error("Payment Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Payment gateway error. Please try again later!",
      });
    }
  };

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">My Parcels: {parcels.length}</h2>
      </div>

      <div className="overflow-x-auto shadow-2xl rounded-2xl border border-gray-100">
        <table className="table table-zebra w-full">
          <thead className="bg-primary text-black">
            <tr>
              <th>#</th>
              <th>Parcel Name</th>
              <th>Cost</th>
              <th>Delivery Date</th>
              <th>Status</th>
              <th>Payment</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-10 text-gray-500">
                  No parcels found.
                </td>
              </tr>
            ) : (
              parcels.map((parcel, index) => (
                <tr key={parcel._id}>
                  <th>{index + 1}</th>
                  <td className="font-medium">{parcel.parcelName}</td>
                  <td className="font-bold">{parcel.cost} TK</td>
                  <td>
                    {parcel.deliveryDate ? (
                      new Date(parcel.deliveryDate).toLocaleDateString()
                    ) : (
                      <span className="text-red-400">N/A</span>
                    )}
                  </td>
                  <td>
                    <span
                      className={`badge badge-sm font-semibold capitalize ${
                        parcel.deliveryStatus === "delivered"
                          ? "badge-success"
                          : "badge-ghost"
                      }`}
                    >
                      {parcel.deliveryStatus || "pending"}
                    </span>
                  </td>
                  <td>
                    {parcel.paymentStatus === "paid" ? (
                      <span className="text-green-600 font-bold flex items-center gap-1">
                        ✅ Paid
                      </span>
                    ) : (
                      <button
                        onClick={() => handlePayment(parcel)}
                        className="btn btn-xs btn-primary font-bold"
                      >
                        Pay Now
                      </button>
                    )}
                  </td>
                  <td className="flex justify-center gap-2">
                    <button className="btn btn-square btn-sm bg-blue-50 text-blue-600 border-none hover:bg-blue-100">
                      <FaMagnifyingGlass size={14} />
                    </button>

                    {/* Only allow edit/delete if NOT paid */}
                    {parcel.paymentStatus !== "paid" && (
                      <>
                        <button className="btn btn-square btn-sm bg-orange-50 text-orange-600 border-none hover:bg-orange-100">
                          <CiEdit size={18} />
                        </button>
                        <button
                          onClick={() => handleParcelDelete(parcel._id)}
                          className="btn btn-square btn-sm bg-red-50 text-red-600 border-none hover:bg-red-100"
                        >
                          <FaRegTrashAlt size={14} />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
