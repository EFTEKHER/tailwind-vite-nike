import React from 'react'

const Grouppeer = () => {
  return (
    <div className="group border-2 bg-white p-6 hover:bg-sky-500 mt-10">
        <p className="text-slate-500 group-hover:bg-red-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          possimus exercitationem debitis hic quaerat. Odio tempore voluptatibus
          nulla facilis nam cupiditate mollitia saepe ipsam!
        </p>
        <p className="text-slate-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur,
          asperiores.
        </p>
        <p className="text-slate-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur,
          asperiores.
        </p>

        <div className="bg-pink-700  flex flex-col">
          <div className="order-3 h-16 w-16 peer/green bg-green-800"></div>
          <div className="order-4 h-16 w-16 peer/yello bg-yellow-200"></div>
          <p className="order-1 hidden peer-hover/green:block">you hover green</p>
          <p className="order-2 hidden peer-hover/yello:block">you hover yellow</p>
        </div>
      </div>
  )
}

export default Grouppeer
