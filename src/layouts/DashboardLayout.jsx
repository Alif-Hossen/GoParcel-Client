<<<<<<< HEAD
import React from "react";
import { CiDeliveryTruck, CiSettings } from "react-icons/ci";
import {
  FaCreditCard,
  FaHome,
  FaUsers,
  FaBoxOpen,
  FaTruckLoading,
  FaHeadset,
} from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { NavLink, Outlet } from "react-router"; // react-router-dom হলে সেটা ব্যবহার করবেন
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin"; // আপনার বানানো কাস্টম হুক

const DashboardLayout = () => {
  const { user } = useAuth();
  // ধরা যাক আপনার কাছে একটি useAdmin হুক আছে যা isAdmin স্ট্যাটাস দেয়
  const [isAdmin, isAdminLoading] = useAdmin();
=======
import React from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';
import { FaCreditCard, FaTasks } from 'react-icons/fa';
import { FaMotorcycle, FaUser } from 'react-icons/fa6';
import { TbTruckDelivery } from 'react-icons/tb';
import { Link, NavLink, Outlet } from 'react-router';
import useRole from '../hooks/useRole';
import { RiEBikeFill } from 'react-icons/ri';

const DashboardLayout = () => {

    const { role } = useRole();

    return (
        <div>
            <div className="drawer lg:drawer-open max-w-7xl mx-auto">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Navbar */}
                    <nav className="navbar w-full bg-base-300">
                        <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            {/* Sidebar toggle icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                        </label>
                        <div className="px-4"> Go Parcel Dashboard </div>
                    </nav>
                    {/* Page content here */}
                    <Outlet></Outlet>
>>>>>>> other/main

  if (isAdminLoading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans">
      <div className="drawer lg:drawer-open max-w-[1600px] mx-auto shadow-sm">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

<<<<<<< HEAD
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
=======
                <div className="drawer-side is-drawer-close:overflow-visible">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                        {/* Sidebar content here */}
                        <ul className="menu w-full grow">
                            {/* List item */}
                            <li>
                                <Link to="/" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                    {/* Home icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                                    <span className="is-drawer-close:hidden">Homepage</span>
                                </Link>
                            </li>

                            {/* OUR DASHBOARD LINKS  */}

                            <li>
                                <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="MyParcels" to="/dashboard/my-parcels">
                                    <TbTruckDelivery />
                                    <span className="is-drawer-close:hidden">My Parcels</span>

                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Payment-history" to="/dashboard/payment-history">
                                    <FaCreditCard />
                                    <span className="is-drawer-close:hidden">
                                        Payment History
                                    </span>

                                </NavLink>
                            </li>
                            {
                                role === 'rider' && <>
                                    <li>
                                        <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Assigned Deliveries" to="/dashboard/assigned-deliveries">
                                            <FaTasks />
                                            <span className="is-drawer-close:hidden">
                                                Assigned Deliveries
                                            </span>

                                        </NavLink>
                                    </li>
                                </>
                            }


                            {/* ADMIN ONLY LINKS --> */}

                            {
                                role === 'admin' && <>
                                    <li>
                                        <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Users Management" to="/dashboard/users-management">
                                            <FaUser />
                                            <span className="is-drawer-close:hidden">
                                                Users Management
                                            </span>

                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Approve Riders" to="/dashboard/approve-riders">
                                            <FaMotorcycle />
                                            <span className="is-drawer-close:hidden">
                                                Approve Riders
                                            </span>

                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Assign Riders" to="/dashboard/assign-riders">
                                            <RiEBikeFill />
                                            <span className="is-drawer-close:hidden">
                                                Assign Riders
                                            </span>

                                        </NavLink>
                                    </li>
                                </>
                            }


                            {/* List item */}
                            <li>
                                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                                    {/* Settings icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                                    <span className="is-drawer-close:hidden">Settings</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
>>>>>>> other/main
            </div>
            <div className="flex-1 px-2 font-bold text-slate-800 text-lg">
              GoParcel
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
                {isAdmin ? "Admin Dashboard" : "User Menu"}
              </p>

              {/* --- ADMIN ROUTES --- */}
              {isAdmin ? (
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
                      to="/dashboard/all-users"
                      className={({ isActive }) =>
                        `flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all ${isActive ? "bg-[#CAEB66] text-slate-950 shadow-md" : "hover:bg-[#f3fcd4]"}`
                      }
                    >
                      <FaUsers className="text-lg" /> <span>All Users</span>
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
                  <li>
                    <NavLink
                      to="/dashboard/monitoring"
                      className={({ isActive }) =>
                        `flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all ${isActive ? "bg-[#CAEB66] text-slate-950 shadow-md" : "hover:bg-[#f3fcd4]"}`
                      }
                    >
                      <FaTruckLoading className="text-lg" />{" "}
                      <span>Monitoring</span>
                    </NavLink>
                  </li>
                </>
              ) : (
                /* --- USER ROUTES --- */
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
                    {user?.displayName || "Guest"}
                  </p>
                  <p className="text-[10px] font-medium text-slate-500 uppercase truncate">
                    {isAdmin ? "Admin" : "User"}
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
