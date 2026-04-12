import React from 'react';

const UserDashboardHome = () => {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Welcome back, User!</h1>
                <p className="text-gray-500">Track and manage your parcels easily.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center cursor-pointer hover:bg-blue-700 transition">
                    <span className="text-3xl mb-2">📦</span>
                    <h3 className="font-semibold">Book New Parcel</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                    <p className="text-gray-500 text-sm">Active Shipments</p>
                    <h3 className="text-3xl font-bold text-gray-800">03</h3>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                    <p className="text-gray-500 text-sm">Total Spent</p>
                    <h3 className="text-3xl font-bold text-gray-800">$120.50</h3>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                    <h2 className="font-bold text-gray-700">Recent Orders</h2>
                    <button className="text-blue-600 text-sm font-medium">View All</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-gray-400 uppercase text-xs">
                            <tr>
                                <th className="px-6 py-4">Order ID</th>
                                <th className="px-6 py-4">Receiver</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Cost</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr>
                                <td className="px-6 py-4 font-medium">#GP-9921</td>
                                <td className="px-6 py-4">John Doe</td>
                                <td className="px-6 py-4">
                                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
                                        Processing
                                    </span>
                                </td>
                                <td className="px-6 py-4">$15.00</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium">#GP-9850</td>
                                <td className="px-6 py-4">Jane Smith</td>
                                <td className="px-6 py-4">
                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                                        Delivered
                                    </span>
                                </td>
                                <td className="px-6 py-4">$12.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default UserDashboardHome;