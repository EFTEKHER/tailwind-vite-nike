import React from 'react'

const Dark = () => {
  return (
    <div >
      <div className='flex h-screen items-center justify-center'>

       <div className='rounded-lg bg-white p-6 shadow-lg dark:bg-indigo-950 dark:text-[white]'>
       <h2 className='text-2xl font-semibold text-gray-800 dark:text-[white]'> Card Title</h2>
       <p className='mt-2 text-gray-600 dark:text-white' >This is the main content of the card </p>
       <p className='mt-2 text-gray-400 dark:text-white'>Subtext or addition information goes here </p>
       <button onClick={()=>{
        document.documentElement.classList.toggle('dark')
       }}
        className='mt-4 rounded bg-indigo-500 px-4 py-2 font-semibold text:white hover:bg-indigo-600 dark:text-white'>Button</button>
       
       </div>
      </div>
    </div>
  )
}

export default Dark
