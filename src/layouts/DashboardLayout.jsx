import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import {
  FaCreditCard,
  FaHome,
  FaUsers,
  FaBoxOpen,
  FaTruckLoading,
  FaTasks,
  FaMotorcycle,
  FaUser,
} from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { RiEBikeFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const DashboardLayout = () => {
  const { user } = useAuth();
  // role based logic using useRole hook
  const [role, isRoleLoading] = useRole();

  if (isRoleLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-dots loading-lg text-[#CAEB66]"></span>
      </div>
    );
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans">
      <div className="drawer lg:drawer-open max-w-[1600px] mx-auto shadow-sm">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col">
          {/* Mobile Navbar */}
          <div className="lg:hidden navbar bg-white border-b border-base-200 px-4">
            <div className="flex-none">
              <label
                htmlFor="my-drawer-4"
                className="btn btn-square btn-ghost text-slate-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 font-bold text-slate-800 text-lg">
              GoParcel Dashboard
            </div>
          </div>

          {/* Page Content Holder */}
          <div className="p-4 md:p-8 w-full">
            <main className="bg-white rounded-3xl min-h-[calc(100vh-100px)] p-6 md:p-8 border border-base-100 shadow-sm">
              <Outlet />
            </main>
          </div>
        </div>

        {/* Sidebar */}
        <div className="drawer-side z-30">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex flex-col min-h-full bg-white text-slate-700 w-64 md:w-72 border-r border-base-100">
            {/* Branding Section */}
            <div className="p-8 mb-4 border-b border-base-100">
              <div className="flex items-center gap-3.5">
                <div className="bg-[#CAEB66] p-3 rounded-2xl shadow-inner">
                  <CiDeliveryTruck className="text-2xl text-slate-900" />
                </div>
                <h1 className="text-2xl font-black text-slate-950 tracking-tight">
                  Go<span className="text-black">Parcel</span>
                </h1>
              </div>
            </div>

            {/* Navigation Menu */}
            <ul className="menu px-4 grow gap-2.5 text-[15px] font-medium">
              <p className="text-[11px] uppercase font-bold text-slate-400 ml-4 mb-2 tracking-[0.15em]">
                {role ? `${role} Dashboard` : "Menu"}
              </p>

              {/* --- ADMIN ONLY ROUTES --- */}
              {role === "admin" && (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/admin-home"
                      className={({ isActive }) =>
                        `flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all ${isActive ? "bg-[#CAEB66] text-slate-950 shadow-md" : "hover:bg-[#f3fcd4]"}`
                      }
                    >
                      <FaHome className="text-lg" /> <span>Admin Home</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/users-management"
                      className={({ isActive }) =>
                        `flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all ${isActive ? "bg-[#CAEB66] text-slate-950 shadow-md" : "hover:bg-[#f3fcd4]"}`
                      }
                    >
                      <FaUser className="text-lg" />{" "}
                      <span>Users Management</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/all-parcels"
                      className={({ isActive }) =>
                        `flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all ${isActive ? "bg-[#CAEB66] text-slate-950 shadow-md" : "hover:bg-[#f3fcd4]"}`
                      }
                    >
                      <FaBoxOpen className="text-lg" /> <span>All Parcels</span>
                    </NavLink>
                  </li>
                </>
              )}

              {/* --- RIDER ONLY ROUTES --- */}
              {role === "rider" && (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/assigned-deliveries"
                      className={({ isActive }) =>
                        `flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all ${isActive ? "bg-[#CAEB66] text-slate-950 shadow-md" : "hover:bg-[#f3fcd4]"}`
                      }
                    >
                      <FaTasks className="text-lg" /> <span>My Deliveries</span>
                    </NavLink>
                  </li>
                </>
              )}

              {/* --- USER ONLY ROUTES --- */}
              {role === "user" && (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/my-parcels"
                      className={({ isActive }) =>
                        `flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all ${isActive ? "bg-[#CAEB66] text-slate-950 shadow-md" : "hover:bg-[#f3fcd4]"}`
                      }
                    >
                      <TbTruckDelivery className="text-xl" />{" "}
                      <span>My Parcels</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/payment-history"
                      className={({ isActive }) =>
                        `flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all ${isActive ? "bg-[#CAEB66] text-slate-950 shadow-md" : "hover:bg-[#f3fcd4]"}`
                      }
                    >
                      <FaCreditCard className="text-lg" /> <span>Payments</span>
                    </NavLink>
                  </li>
                </>
              )}

              <div className="my-6 mx-4 border-t border-base-100"></div>

              {/* --- SHARED ROUTES --- */}
              <li>
                <NavLink
                  to="/"
                  className="flex items-center gap-4 px-5 py-3.5 rounded-2xl hover:bg-[#f3fcd4] transition-all"
                >
                  <FaHome className="text-lg" /> <span>Homepage</span>
                </NavLink>
              </li>
            </ul>

            {/* Bottom User Profile */}
            <div className="p-5 mt-auto border-t border-base-100 bg-[#fafafa]">
              <div className="flex items-center gap-3.5 bg-white p-3 rounded-2xl shadow-inner border border-base-100">
                <div className="avatar">
                  <div className="w-11 rounded-full ring ring-[#CAEB66] ring-offset-2">
                    <img
                      src={
                        user?.photoURL ||
                        "https://api.dicebear.com/8.x/notionists/svg?seed=Hasan"
                      }
                      alt="user"
                    />
                  </div>
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm font-bold text-slate-950 truncate">
                    {user?.displayName || "Guest User"}
                  </p>
                  <p className="text-[10px] font-medium text-slate-500 uppercase truncate">
                    {role || "No Role"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
