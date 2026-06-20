import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import api from '../api/axiosInstance';
import { useCart } from '../context/CartProvider';

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await api.get(`/book`); // Assuming get all books or specific by ID if route supports
        const foundBook = res.data.find(b => b._id === id);
        setBook(foundBook);
      } catch (error) {
        console.error("Error fetching book:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center dark:bg-slate-900">
          <span className="loading loading-spinner loading-lg text-pink-500"></span>
        </div>
        <Footer />
      </>
    );
  }

  if (!book) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center dark:bg-slate-900">
          <h2 className="text-2xl font-bold dark:text-white">Book not found</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28 pb-12">
        <Link to="/course" className="text-pink-500 hover:text-pink-600 flex items-center gap-2 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Books
        </Link>

        <div className="flex flex-col md:flex-row gap-12 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border dark:border-slate-700">
          <div className="w-full md:w-1/3 flex justify-center">
            <img src={book.image || "https://via.placeholder.com/300"} alt={book.name} className="w-full max-w-sm rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" />
          </div>

          <div className="w-full md:w-2/3 space-y-6">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <span className="badge badge-secondary">{book.category}</span>
                <div className="flex items-center text-yellow-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 text-slate-600 dark:text-slate-300 font-semibold">{book.rating || 4.5}</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-2">{book.name}</h1>
              <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">by {book.author || 'Unknown Author'}</p>
            </div>

            <div className="prose dark:prose-invert">
              <h3 className="text-xl font-semibold dark:text-white">Description</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {book.description || "Escape into new worlds with this amazing book. We offer a curated collection of literary masterpieces, hidden gems, and contemporary bestsellers. Find your perfect story today and immerse yourself in an unforgettable journey of words and imagination."}
              </p>

              <div className="mt-6 flex items-center gap-2">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Availability:</span>
                {book.availableQuantity > 0 ? (
                  <span className="text-green-600 dark:text-green-400 font-medium">{book.availableQuantity} in stock</span>
                ) : (
                  <span className="text-red-500 font-medium">Out of stock</span>
                )}
              </div>
            </div>

            <div className="pt-6 border-t dark:border-slate-700 flex items-center justify-between">
              <span className="text-4xl font-extrabold text-pink-500">${book.price}</span>
              {book.availableQuantity > 0 ? (
                <button
                  onClick={() => addToCart(book)}
                  className="btn bg-gradient-to-r from-pink-500 to-violet-500 text-white border-none hover:from-pink-600 hover:to-violet-600 px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-pink-500/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Add to Cart
                </button>
              ) : (
                <button disabled className="btn bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400 border-none px-8 py-3 rounded-full text-lg cursor-not-allowed">
                  Out of Stock
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BookDetail;
