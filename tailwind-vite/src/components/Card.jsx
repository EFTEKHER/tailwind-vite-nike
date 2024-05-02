import React from 'react'

const Card = ({item}) => {
  return (
    <div className={`${item.className}  flex flex-col flex-wrap lg:flex-row lg:flex-nowrap justify-between   max-w-lg cursor-pointer transform transition hover:scale-105 rounded-2xl shadow-2xl shadow-violet-500 p-10 m-6`}>
      <div className='p-8'>
      <div  className='text-2xl font-bold'>{item.title}</div>
      
     <div className='underline font-semibold underline-offset-4'>SHOP NOW +</div>
     <span className='text-2xl font-extrabold text-gray-600 mt-2'>৳{item.price*110}</span>
      </div>
    
    <div>
    <img src={item.src} className='h-60 w-80  animate-float'/>
    
    </div>

     
    </div>
  )
}

export default Card
