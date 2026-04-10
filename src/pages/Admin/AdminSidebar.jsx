import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaBoxOpen,
  FaTruckLoading,
  FaHeadset,
} from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-8 text-primary border-b border-gray-700 pb-4">
        Admin Panel
      </h2>

      <ul className="menu p-0 space-y-2">
        {/* Admin Home: Stats & Charts */}
        <li>
          <NavLink
            to="/dashboard/admin-home"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-colors ${isActive ? "bg-primary text-black" : "hover:bg-gray-800"}`
            }
          >
            <FaHome className="text-xl" />
            <span className="font-semibold">Admin Home</span>
          </NavLink>
        </li>

        {/* All Users: Add/Ban/Role Change */}
        <li>
          <NavLink
            to="/dashboard/all-users"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-colors ${isActive ? "bg-primary text-black" : "hover:bg-gray-800"}`
            }
          >
            <FaUsers className="text-xl" />
            <span className="font-semibold">All Users</span>
          </NavLink>
        </li>

        {/* All Parcels: Management */}
        <li>
          <NavLink
            to="/dashboard/all-parcels"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-colors ${isActive ? "bg-primary text-black" : "hover:bg-gray-800"}`
            }
          >
            <FaBoxOpen className="text-xl" />
            <span className="font-semibold">All Parcels</span>
          </NavLink>
        </li>

        {/* Delivery Monitoring */}
        <li>
          <NavLink
            to="/dashboard/monitoring"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-colors ${isActive ? "bg-primary text-black" : "hover:bg-gray-800"}`
            }
          >
            <FaTruckLoading className="text-xl" />
            <span className="font-semibold">Delivery Monitoring</span>
          </NavLink>
        </li>

        {/* Support/Complaints */}
        <li>
          <NavLink
            to="/dashboard/support"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-colors ${isActive ? "bg-primary text-black" : "hover:bg-gray-800"}`
            }
          >
            <FaHeadset className="text-xl" />
            <span className="font-semibold">Support/Complaints</span>
          </NavLink>
        </li>

        <div className="divider bg-gray-700 h-[1px] my-6"></div>

        {/* Shared Home Link */}
        <li>
          <NavLink
            to="/"
            className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg"
          >
            <FaHome /> Main Website
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;