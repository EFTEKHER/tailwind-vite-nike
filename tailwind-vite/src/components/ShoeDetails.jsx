
import React from 'react'
import nike1 from "../assets/n1-min.png"
import Select from './Select';
import {QTY,SIZES} from "./constant"

const ShoeDetails = () => {
  return (
    <div className='flex flex-col lg:flex-row-reverse space-y-2' id="Home">
   
    <div className='flex-1 '>
    {/*img*/}
   <div className='h-full flex-center  bg-gradient-to-br  from-[#f67737] via-[#7d93e2]  to-[#65da72] lg:-mt-24 lg:ml-20 rounded-lg shadow-2xl shadow-violet-400 '>
   <img src={nike1} className='w-full h-full animate-float' alt="" />
   
   </div>
    </div>
      <div className='flex-1 space-y-6' id="About">
         {/*details*/}
      <div className='text-4xl font-black md:text-9xl'>
      
      Nike Air max 270
      </div>
      <div className='font-medium text-gray-500 md:text-xl'>
      {
        "It's time to turn heads with Nike Air Max 270. Combining retro aesthetic and futuristic technology, Air Max 270 takes reference from the Air Max 93 and Air Max 180."
      }
      </div>
      <div className='flex space-x-4'>
      <div className='text-3xl font-extrabold md:text-6xl'>
      ৳ 10500
      </div>
      <Select title={"QTY"} options={QTY}/>
      <Select title={"SIZE"} options={SIZES}/>
      
      </div>
         {/*shoe buttons and link*/}
      <div className='space-x-4'>
      <button className='btn-press-utilities h-10 w-40 lg:h-14 lg:w-40 bg-black text-white hover:bg-gray-900 active:bg-gray-700 rounded-sm'>Add to bag</button>
      <a href="#" className='text-lg font-bold underline underline-offset-4'>view details</a>
      
      </div>
      </div>

    </div>
  )
}

export default ShoeDetails;
