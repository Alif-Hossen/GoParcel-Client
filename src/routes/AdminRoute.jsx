<<<<<<< HEAD
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <span className="loading loading-dots loading-lg text-primary"></span>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
=======
import React from 'react';
import useAuth from '../hooks/useAuth';
import Loading from '../components/Loading/Loading';
import useRole from '../hooks/useRole';
import Forbidden from '../components/Forbidden/Forbidden';

const AdminRoute = ({children}) => {

    const {  loading } =useAuth();
    const { role, roleLoading } = useRole();

    if(loading || roleLoading) {
        return <Loading></Loading>
    }

    if(role !== 'admin') {
        return <Forbidden></Forbidden>
    }

    return children;
};

export default AdminRoute;
>>>>>>> other/main
