import { GiShoppingBag } from "react-icons/gi"; 
 
import React, { useState } from 'react'
import NikeLogo from "../assets/nike-logo.svg?react"
import {RxHamburgerMenu} from "react-icons/rx"

const Nav = () => {
    const  ROUTES=["Home","About","Products","Pricing","Contact"]
    
    const [mobileView,setMobileView]=useState(false)
  return (
    <nav className='relative z-20 flex justify-between flex-wrap'>
    {/**Logo**/ }
    <a href="#">
    <NikeLogo className='h-20 w-20'/>
    </a>
    {/**Burger Button**/}
{
  /*
  <button onClick={()=>{
    let length= value.length;

   const item= document.querySelector('#menu');
   if(item.classList.contains('hidden'))
   {
    item.classList.remove('hidden');
    item.classList.add('block');
   }
   else{
    item.classList.remove('block');
    item.classList.add('hidden');
   }
 
}}  className='hover:bg-gray-100 lg:p-4 p-2 focus:ring-2 focus:ring-gray-200 rounded-lg lg:hidden'>
<RxHamburgerMenu size={25}/>
</button>
  */ 
}



  <button onClick={()=>setMobileView(!mobileView)} className='hover:bg-gray-100 lg:p-4 p-2 focus:ring-2 focus:ring-gray-200 rounded-lg lg:hidden'>
<RxHamburgerMenu size={25}/>
</button>
      {
        /*Menu list*/
      }
      <div className={`w-full lg:w-auto  lg:block  ${!mobileView &&"hidden"} `} id="menu" >
      <ul className='  flex flex-col lg:flex-row lg:ml-4 lg:space-x-8 bg-gray-50  lg:bg-transparent text-lg border-gray-100 rounded p-4 e'>
      {
        ROUTES.map((route,i)=>{
            return <a href={`#${route}`} key={route}><li className={`py-2 px-3 cursor-pointer rounded ${i===0?"bg-blue-500 text-white lg:bg-transparent lg:text-gray-500": "hover:bg-gray-100"} ${(i==3||i==4)&& "lg:text-white hover:bg-gray-500"}`} >{route}</li></a>
        })
      }
      </ul>
      
      </div>

      {/*Cart Button */ }

     <div className="fixed bottom-4 left-4 lg:static lg:mr-3 lg:mt-4">
     
     <div className="btn-press-utilities bg-slate-200 flex-center   rounded-full w-12 h-12 shadow-2xl cursor-pointer">
      <GiShoppingBag className="h-8 w-8"/> 
      </div>
     </div>
    </nav>

  )
}

export default Nav
