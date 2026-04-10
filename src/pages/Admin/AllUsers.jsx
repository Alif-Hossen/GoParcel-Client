import { useQuery } from "@tanstack/react-query";

import Swal from "sweetalert2"; // আমি alert এর বদলে Swal ব্যবহারের পরামর্শ দেব
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  // ডাটা ফেচ করা
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // --- এই ফাংশনটি এখানে যোগ করুন ---
  const handleMakeAdmin = (user) => {
    axiosSecure
      .patch(`/users/admin/${user._id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch(); // টেবিল রিফ্রেশ করবে
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is now an Admin!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Manage All Users</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full border">
          <thead className="bg-[#CAEB66] text-black">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {/* যদি ইউজার অ্যাডমিন হয় তবে লেখা দেখাবে, নাহলে বাটন */}
                  {user.role === "admin" ? (
                    <span className="badge badge-success font-bold">Admin</span>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-sm bg-[#CAEB66] hover:bg-[#b8d65a] text-black"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs text-red-500 underline">
                    Ban User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
