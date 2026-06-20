import React from 'react';
import { useCart } from '../context/CartProvider';
import { useAuth } from '../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import api from '../api/axiosInstance';
import toast from 'react-hot-toast';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const [authUser] = useAuth();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (!authUser) {
      toast.error("Please login to checkout");
      document.getElementById("my_modal_3").showModal();
      return;
    }

    try {
      const orderData = {
        userId: authUser._id,
        items: cartItems.map(item => ({
          bookId: item._id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image
        })),
        totalAmount
      };

      const res = await api.post("/order", orderData);
      if (res.status === 201) {
        toast.success("Order placed successfully!");
        clearCart();
        navigate("/orders");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to place order");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen max-w-screen-2xl container mx-auto md:px-20 px-4 pt-24 pb-12">
        <h1 className="text-4xl font-extrabold text-slate-800 dark:text-white mb-8">
          Shopping <span className="text-pink-500">Cart</span>
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl text-slate-600 dark:text-slate-400 mb-4">Your cart is empty</h2>
            <Link to="/course">
              <button className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 py-2 rounded-md hover:shadow-lg transition-all duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center justify-between border-b dark:border-slate-700 py-4">
                  <div className="flex items-center gap-4">
                    <img src={item.image || "https://via.placeholder.com/150"} alt={item.name} className="w-20 h-28 object-cover rounded-md" />
                    <div>
                      <h3 className="font-semibold text-lg dark:text-white">{item.name}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{item.category}</p>
                      <p className="text-pink-500 font-bold mt-2">${item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border dark:border-slate-700 rounded-md">
                      <button onClick={() => updateQuantity(item._id, item.quantity - 1)} className="px-3 py-1 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-white">-</button>
                      <span className="px-3 py-1 dark:text-white">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item._id, item.quantity + 1)} 
                        className="px-3 py-1 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={item.quantity >= item.availableQuantity}
                      >
                        +
                      </button>
                    </div>
                    <button onClick={() => removeFromCart(item._id)} className="text-red-500 hover:text-red-700 font-medium">Remove</button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border dark:border-slate-700">
                <h3 className="text-xl font-bold dark:text-white mb-4">Order Summary</h3>
                <div className="flex justify-between mb-2 text-slate-600 dark:text-slate-300">
                  <span>Subtotal</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4 text-slate-600 dark:text-slate-300">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <hr className="dark:border-slate-700 my-4" />
                <div className="flex justify-between mb-6 text-lg font-bold dark:text-white">
                  <span>Total</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-pink-500 to-violet-500 text-white py-3 rounded-md hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
