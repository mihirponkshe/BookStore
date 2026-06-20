import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import api from '../api/axiosInstance';
import { useAuth } from '../context/AuthProvider';
import { Link } from 'react-router-dom';

function Orders() {
  const [authUser] = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!authUser) {
        setLoading(false);
        return;
      }
      try {
        const res = await api.get(`/order/${authUser._id}`);
        setOrders(res.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [authUser]);

  if (!authUser) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center dark:bg-slate-900">
          <div className="text-center">
            <h2 className="text-2xl font-bold dark:text-white mb-4">Please login to view your orders</h2>
            <button onClick={() => document.getElementById("my_modal_3").showModal()} className="btn bg-pink-500 text-white hover:bg-pink-600">Login</button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen max-w-screen-2xl container mx-auto md:px-20 px-4 pt-24 pb-12">
        <h1 className="text-4xl font-extrabold text-slate-800 dark:text-white mb-8">
          My <span className="text-pink-500">Orders</span>
        </h1>

        {loading ? (
          <div className="flex justify-center py-20"><span className="loading loading-spinner loading-lg text-pink-500"></span></div>
        ) : orders.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 dark:bg-slate-800 rounded-xl border dark:border-slate-700">
            <h2 className="text-2xl text-slate-600 dark:text-slate-400 mb-4">You haven't placed any orders yet.</h2>
            <Link to="/course">
              <button className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 py-2 rounded-md hover:shadow-lg transition-all duration-300">
                Browse Books
              </button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order._id} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border dark:border-slate-700">
                <div className="flex justify-between items-center mb-4 border-b dark:border-slate-700 pb-4">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Order Placed: {new Date(order.createdAt).toLocaleDateString()}</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">Order ID: {order._id}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-slate-800 dark:text-white">Total: ${order.totalAmount.toFixed(2)}</p>
                    <span className="badge badge-success badge-sm mt-1">{order.status}</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border dark:border-slate-700">
                      <img src={item.image || "https://via.placeholder.com/100"} alt={item.name} className="w-16 h-20 object-cover rounded-md" />
                      <div>
                        <h3 className="font-semibold text-sm dark:text-white line-clamp-1">{item.name}</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Qty: {item.quantity}</p>
                        <p className="text-sm font-medium text-pink-500">${item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Orders;
