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

// Admin & Rider Pages (নতুন যোগ করা হয়েছে)
import AdminHome from "../pages/Admin/AdminHome";
import AllUsers from "../pages/Admin/AllUsers";
import AllParcels from "../pages/Admin/AllParcels";
import MyDeliveries from "../pages/Rider/MyDeliveries";
import MyReviews from "../pages/Rider/MyReviews";

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
        path: "be_a_rider", // ইউআরএল কনফ্লিক্ট এড়াতে নাম পরিবর্তন করা হয়েছে
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
      // --- User Routes ---
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
        element: <AdminHome />,
      },
      {
        path: "all-users",
        element: <AllUsers />,
      },
      {
        path: "all-parcels",
        element: <AllParcels />,
      },

      // --- Rider Only Routes ---
      {
        path: "my-deliveries",
        element: <MyDeliveries />,
      },
      {
        path: "my-reviews",
        element: <MyReviews />,
      },
    ],
  },
]);
