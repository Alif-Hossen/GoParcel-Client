import React from 'react';

const AdminDashboardHome = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-5 rounded-lg shadow">
                    <h3 className="text-gray-500">Total Parcels</h3>
                    <p className="text-2xl font-bold">1,250</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow">
                    <h3 className="text-gray-500">Active Riders</h3>
                    <p className="text-2xl font-bold">45</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow">
                    <h3 className="text-gray-500">Pending Orders</h3>
                    <p className="text-2xl font-bold">12</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow border-l-4 border-green-500">
                    <h3 className="text-gray-500">Total Revenue</h3>
                    <p className="text-2xl font-bold">$5,400</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b">
                            <th className="py-2">ID</th>
                            <th className="py-2">Customer</th>
                            <th className="py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="py-2">#GP102</td>
                            <td className="py-2">Alif</td>
                            <td className="py-2 text-blue-500 font-medium">In Transit</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboardHome;