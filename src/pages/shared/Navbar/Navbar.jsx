import React, { useEffect, useState } from "react";
import Logo from "../../../components/Logo/Logo";
import { NavLink, useNavigate, Link } from "react-router-dom"; // Link যুক্ত করা হয়েছে
import useAuth from "../../../hooks/useAuth";
import { io } from "socket.io-client";
import { FaBell } from "react-icons/fa";
import { toast } from "react-hot-toast";
// import useAdmin from "../../../hooks/useAdmin"; // আপনার যদি এই হুকটি থাকে

const socket = io("http://localhost:3000");

const Navbar = () => {
  const [notifications, setNotifications] = useState([]);
  const { user, logOut } = useAuth();
  // const [isAdmin] = useAdmin(); // ডাটাবেস থেকে isAdmin চেক করার জন্য
  const isAdmin = true; // টেস্টিং এর জন্য আপাতত true রাখা হলো
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      socket.emit("join", user.email);

      const handleNotification = (data) => {
        setNotifications((prev) => [data, ...prev]);
        toast.success(data.message);
      };

      socket.on("notification", handleNotification);

      return () => {
        socket.off("notification", handleNotification);
      };
    }
  }, [user]);

  const handleLogOut = () => {
    logOut()
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/coverage">Coverage</NavLink>
      </li>
      <li>
        <NavLink to="/send_parcel">Send parcel</NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/rider">Be a Rider</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard/my-parcels">My parcel</NavLink>
        </li>
      )}
      {/* অ্যাডমিন ড্যাশবোর্ড লিংক */}
      {user && isAdmin && (
        <li>
          <NavLink
            to="/dashboard/admin-home"
            className="text-primary font-bold"
          >
            Admin Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm border-2 mt-4 rounded-2xl px-4 flex justify-between items-center">
      <div className="navbar-start w-auto">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl p-0">
          <Logo />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>

      <div className="navbar-end w-auto gap-3 flex items-center">
        {user ? (
          <div className="flex items-center gap-4">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <FaBell className="h-5 w-5 text-gray-600" />
                  {notifications.length > 0 && (
                    <span className="badge badge-sm badge-primary indicator-item">
                      {notifications.length}
                    </span>
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64 max-h-80 overflow-y-auto border"
              >
                <li className="menu-title font-bold text-gray-700">
                  Notifications
                </li>
                <div className="divider my-0"></div>
                {notifications.length === 0 ? (
                  <li className="p-4 text-center text-gray-400">
                    No new updates
                  </li>
                ) : (
                  notifications.map((n, i) => (
                    <li key={i} className="border-b last:border-0">
                      <p className="py-3 px-4 text-xs leading-relaxed">
                        {n.message}
                      </p>
                    </li>
                  ))
                )}
              </ul>
            </div>

            <button
              onClick={handleLogOut}
              className="btn btn-sm btn-error btn-outline hidden md:flex"
            >
              Log Out
            </button>

            <div className="avatar online">
              <div className="w-10 rounded-full border-2 border-primary">
                <img
                  src={
                    user?.photoURL ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/login" className="btn btn-sm md:btn-md btn-ghost">
              Log In
            </Link>
            <Link
              to="/rider"
              className="btn btn-sm md:btn-md btn-primary text-black"
            >
              Be A Rider
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
