import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartProvider'

function Cards({item}) {
    const { addToCart } = useCart();
  return (
    <>
    <div className="p-3">
      <div className="card bg-white dark:bg-slate-800 w-full md:w-92 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 dark:border dark:border-slate-700 overflow-hidden group">
        <Link to={`/book/${item._id}`}>
          <figure className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-900 cursor-pointer">
            <img
              src={item.image || "https://via.placeholder.com/300"}
              alt={item.name}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
          </figure>
        </Link>
        <div className="card-body p-6">
          <h2 className="card-title text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100 flex justify-between">
            {item.name}
            <div className="badge bg-pink-100 text-pink-700 border-none dark:bg-pink-900/30 dark:text-pink-300 text-xs py-3 px-3">{item.category}</div>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">{item.title}</p>
          <div className="card-actions flex justify-between items-center mt-6">
            <div className="text-lg font-bold text-violet-600 dark:text-violet-400">${item.price === 0 ? "Free" : item.price}</div>
            {item.availableQuantity > 0 ? (
              <button 
                onClick={() => addToCart(item)}
                className="btn btn-sm bg-slate-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 hover:text-white dark:bg-slate-700 dark:hover:from-pink-600 dark:hover:to-violet-600 dark:text-slate-200 border-none rounded-full px-6 transition-all duration-300"
              >
                Add to Cart
              </button>
            ) : (
              <button disabled className="btn btn-sm bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 border-none rounded-full px-6">
                Out of Stock
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cards