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
import CompleteDeliveries from "../pages/Dashboard/CompleteDeliveries/CompleteDeliveries";
import ParcelTrack from "../pages/ParcelTrack/ParcelTrack";

export const router = createBrowserRouter([
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
                path: 'parcel-track/:trackingId',
                element: <ParcelTrack></ParcelTrack>
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
            {
                path: 'completed-deliveries',
                element: <RiderRoute>
                    <CompleteDeliveries></CompleteDeliveries>
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
]);



