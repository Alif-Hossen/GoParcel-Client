import React from 'react';

const RiderDashboardHome = () => {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Rider Panel</h1>
                    <p className="text-green-600 font-medium">● Online & Ready to Deliver</p>
                </div>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm">Go Offline</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-blue-500 text-center">
                    <p className="text-gray-500 text-sm">Today's Deliveries</p>
                    <h3 className="text-3xl font-bold">12</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-green-500 text-center">
                    <p className="text-gray-500 text-sm">Today's Earnings</p>
                    <h3 className="text-3xl font-bold">৳1,540</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-yellow-500 text-center">
                    <p className="text-gray-500 text-sm">Average Rating</p>
                    <h3 className="text-3xl font-bold">4.9⭐</h3>
                </div>
            </div>

            <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-2xl mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-orange-800 uppercase tracking-wider">Current Active Task</h2>
                    <span className="bg-orange-200 text-orange-800 text-xs px-2 py-1 rounded">In Progress</span>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div>
                        <p className="text-sm text-gray-600">Pick-up: <span className="text-gray-900 font-medium">Dhanmondi 32</span></p>
                        <p className="text-sm text-gray-600">Drop-off: <span className="text-gray-900 font-medium">Mirpur 10, Block-D</span></p>
                    </div>
                    <div className="flex gap-2">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-medium shadow-md">Call Customer</button>
                        <button className="bg-green-600 text-white px-6 py-2 rounded-xl font-medium shadow-md">Complete Delivery</button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                    <h2 className="font-bold text-gray-700">Nearby Delivery Requests</h2>
                </div>
                <div className="p-4 space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                        <div>
                            <p className="font-bold">#GP-1092 - 2.5km away</p>
                            <p className="text-sm text-gray-500">Earn: ৳85.00</p>
                        </div>
                        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm">Accept</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RiderDashboardHome;