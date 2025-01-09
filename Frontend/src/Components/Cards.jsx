import React from 'react'

function Cards({item}) {
    console.log(item)
  return (
    <>
    <div>
    <div className="card bg-base-100 w-92 p-3 shadow-xl mt-5 my-3 hover:scale-105 dark:bg-slate-900 dark:text-white dark:border duration-200">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline hover:bg-blue-500 hover:text-white duration-200 p-3 ">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards