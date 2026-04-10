import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [userRole, isRoleLoading] = useRole();
  const location = useLocation();

  // লোডিং অবস্থায় থাকলে স্পিনার বা লোডিং কম্পোনেন্ট দেখাবে
  if (loading || isRoleLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-dots loading-lg text-primary"></span>
      </div>
    );
  }

  // ইউজার যদি লগইন থাকে এবং তার রোল যদি 'admin' হয়
  if (user && userRole === "admin") {
    return children;
  }

  // অ্যাডমিন না হলে হোম পেজে রিডাইরেক্ট করবে
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
