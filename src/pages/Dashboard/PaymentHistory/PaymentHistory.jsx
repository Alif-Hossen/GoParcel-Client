import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    enabled: !!user?.email, // ইউজার ইমেইল থাকলে তবেই কোয়েরি চলবে
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      // ডাটা অ্যারে কি না তা নিশ্চিত করা
      return Array.isArray(res.data) ? res.data : [];
    },
  });

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6">
        Payment History: <span className="text-primary">{payments.length}</span>
      </h2>

      <div className="overflow-x-auto shadow-lg rounded-xl border border-gray-100">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="bg-gray-50">
            <tr className="text-gray-700">
              <th>#</th>
              <th>Parcel Name</th>
              <th>Amount</th>
              <th>Paid Time</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {payments.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-10 text-gray-400">
                  No payment history found.
                </td>
              </tr>
            ) : (
              payments.map((payment, index) => (
                <tr key={payment._id}>
                  <th>{index + 1}</th>
                  <td className="font-semibold">
                    {payment.parcelName || "N/A"}
                  </td>
                  <td className="text-green-600 font-bold">
                    ${payment.amount}
                  </td>
                  <td className="text-sm">
                    {payment.date || payment.paidAt || "N/A"}
                  </td>
                  <td className="text-sm font-mono text-blue-600">
                    {payment.transactionId}
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

export default PaymentHistory;
