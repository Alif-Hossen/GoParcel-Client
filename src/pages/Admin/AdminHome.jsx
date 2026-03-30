// src/pages/Admin/AdminHome.jsx
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaUsers, FaBox, FaDollarSign } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-8">Welcome Back, Admin!</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="stat shadow-lg bg-white rounded-xl p-6 border-b-4 border-blue-500">
          <div className="stat-figure text-blue-500">
            <FaUsers size={30} />
          </div>
          <div className="stat-title font-semibold">Total Users</div>
          <div className="stat-value text-blue-600">{stats.users}</div>
        </div>
        <div className="stat shadow-lg bg-white rounded-xl p-6 border-b-4 border-green-500">
          <div className="stat-figure text-green-500">
            <FaBox size={30} />
          </div>
          <div className="stat-title font-semibold">Total Bookings</div>
          <div className="stat-value text-green-600">{stats.parcels}</div>
        </div>
        <div className="stat shadow-lg bg-white rounded-xl p-6 border-b-4 border-yellow-500">
          <div className="stat-figure text-yellow-500">
            <FaDollarSign size={30} />
          </div>
          <div className="stat-title font-semibold">Total Revenue</div>
          <div className="stat-value text-yellow-600">{stats.revenue} TK</div>
        </div>
      </div>

      {/* Simple Analytics Chart */}
      <div className="bg-white p-6 rounded-xl shadow-lg h-80">
        <h3 className="text-xl font-bold mb-4">Booking Analytics</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={stats.chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminHome;
