import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AboutUs from "../pages/AboutUs/AboutUs";
import BeARider from "../pages/BeARider/BeARider";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/register/register";
import Rider from "../pages/Rider/Rider";
import PrivateRoute from "./PrivateRoute";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashboardLayout from "../layouts/DashboardLayout";

// Dashboard Pages
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../pages/Dashboard/Payment/PaymentCancelled";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import ApproveRiders from "../pages/Dashboard/ApproveRiders/ApproveRiders";
import UsersManagement from "../pages/Dashboard/UsersManagement/UsersManagement";
import AssignRiders from "../pages/Dashboard/AssignRiders/AssignRiders";
import AssignDeliveries from "../pages/Dashboard/AssignDeliveries/AssignDeliveries";

// Admin & Rider Pages
import AdminHome from "../pages/Admin/AdminHome";
import AllUsers from "../pages/Admin/AllUsers";
import AllParcels from "../pages/Admin/AllParcels";
import MyDeliveries from "../pages/Rider/MyDeliveries";
import MyReviews from "../pages/Rider/MyReviews";

// Route Protectors
import AdminRoute from "./AdminRoute";
import RiderRoute from "./RiderRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "coverage",
        element: <Coverage />,
        loader: () => fetch("/serviceCenter.json").then((res) => res.json()),
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "be_a_rider",
        element: <BeARider />,
      },
      {
        path: "send_parcel",
        element: (
          <PrivateRoute>
            <SendParcel />
          </PrivateRoute>
        ),
        loader: () => fetch("/serviceCenter.json").then((res) => res.json()),
      },
      {
        path: "rider",
        element: (
          <PrivateRoute>
            <Rider />
          </PrivateRoute>
        ),
        loader: () => fetch("/serviceCenter.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // --- Shared/User Routes ---
      {
        path: "my-parcels",
        element: <MyParcels />,
      },
      {
        path: "payment/:parcelId",
        element: <Payment />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "payment-success",
        element: <PaymentSuccess />,
      },
      {
        path: "payment-cancelled",
        element: <PaymentCancelled />,
      },

      // --- Admin Only Routes ---
      {
        path: "admin-home",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "all-parcels",
        element: (
          <AdminRoute>
            <AllParcels />
          </AdminRoute>
        ),
      },
      {
        path: "users-management",
        element: (
          <AdminRoute>
            <UsersManagement />
          </AdminRoute>
        ),
      },
      {
        path: "approve-riders",
        element: (
          <AdminRoute>
            <ApproveRiders />
          </AdminRoute>
        ),
      },
      {
        path: "assign-riders",
        element: (
          <AdminRoute>
            <AssignRiders />
          </AdminRoute>
        ),
      },

      // --- Rider Only Routes ---
      {
        path: "assigned-deliveries",
        element: (
          <RiderRoute>
            <AssignDeliveries />
          </RiderRoute>
        ),
      },
      {
        path: "my-deliveries",
        element: (
          <RiderRoute>
            <MyDeliveries />
          </RiderRoute>
        ),
      },
      {
        path: "my-reviews",
        element: (
          <RiderRoute>
            <MyReviews />
          </RiderRoute>
        ),
      },
    ],
  },
]);
