import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllParcels = () => {
  const axiosSecure = useAxiosSecure();

  const { data: allParcels = [], refetch } = useQuery({
    queryKey: ["all-parcels"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-parcels");
      return res.data;
    },
  });

  const handleUpdateDate = (parcel, selectedDate) => {
    const updateData = {
      deliveryDate: selectedDate,
      userEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };

    axiosSecure
      .patch(`/parcels/update-date/${parcel._id}`, updateData)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire("Success!", "Date assigned and notified.", "success");
        }
      });
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        All Parcels: {allParcels.length}
      </h2>

      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="table w-full">
          {/* Table Head */}
          <thead className="bg-[#CAEB66] text-black">
            <tr>
              <th>#</th>
              <th>User's Name</th>
              <th>Phone</th>
              <th>Booking Date</th>
              <th>Delivery Date</th>
              <th>Cost</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {allParcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.senderPhone}</td>
                <td>
                  {parcel.bookingDate
                    ? new Date(parcel.bookingDate).toLocaleDateString()
                    : "N/A"}
                </td>
                <td>
                  <input
                    type="date"
                    onChange={(e) => handleUpdateDate(parcel, e.target.value)}
                    className="input input-bordered input-sm"
                  />
                </td>

                <td className="font-bold text-blue-600">
                  ${parcel.price || parcel.cost || 0}
                </td>
                <td>
                  <span className="badge badge-ghost">
                    {parcel.deliveryStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllParcels;
