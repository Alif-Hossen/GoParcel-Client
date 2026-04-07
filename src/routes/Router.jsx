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
import AdminRoute from "./AdminRoute";
import AssignRiders from "../pages/Dashboard/AssignRiders/AssignRiders";
import RiderRoute from "./RiderRoute";
import AssignDeliveries from "../pages/Dashboard/AssignDeliveries/AssignDeliveries";

// Admin & Rider Pages (নতুন যোগ করা হয়েছে)
import AdminHome from "../pages/Admin/AdminHome";
import AllUsers from "../pages/Admin/AllUsers";
import AllParcels from "../pages/Admin/AllParcels";
import MyDeliveries from "../pages/Rider/MyDeliveries";
import MyReviews from "../pages/Rider/MyReviews";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
<<<<<<< HEAD
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
    ],
  },
=======
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>,

            },
            {
                path: '/rider',
                element: <PrivateRoute> <Rider></Rider> </PrivateRoute>,
                loader: () => fetch('/serviceCenter.json').then(res => res.json())

            },
            {
                path: "coverage",
                element: <Coverage></Coverage>,
                loader: () => fetch('/serviceCenter.json').then(res => res.json())
            },
            {
                path: "aboutUs",
                element: <AboutUs></AboutUs>
            },
            // {
            //     path: "rider",
            //     element: <BeARider></BeARider>
            // },
            {
                path: 'send_parcel',
                element: <PrivateRoute>  <SendParcel></SendParcel>  </PrivateRoute>,
                loader: () => fetch('/serviceCenter.json').then(res => res.json())
            }
        ]
    },
    {
        path: '/',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: 'my-parcels',
                element: <MyParcels></MyParcels>
            },
            {
                path: 'payment/:parcelId',
                element: <Payment></Payment>
            },
            {
                path: 'payment-history',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'payment-success',
                element: <PaymentSuccess></PaymentSuccess>
            },
            {
                path: 'payment-cancelled',
                element: <PaymentCancelled></PaymentCancelled>
            },

            // RIDERS ONLY ROUTES --> 
            {
                path: 'assigned-deliveries',
                element: <RiderRoute>
                    <AssignDeliveries></AssignDeliveries>
                </RiderRoute>
            },


            // ADMIN ONLY ROUTES --> 
            {
                path: 'approve-riders',
                element: <AdminRoute>
                    <ApproveRiders></ApproveRiders>
                </AdminRoute>
            },
            {
                path: 'assign-riders',
                element: <AdminRoute>
                    <AssignRiders></AssignRiders>
                </AdminRoute>
            },
            {
                path: 'users-management',
                element: <AdminRoute>
                    <UsersManagement></UsersManagement>
                </AdminRoute>
            }
        ]
    }
>>>>>>> other/main
]);
