import React from 'react'
import { IoIosArrowDown } from "react-icons/io"; 
const Select = ({title,options}) => {
  return (
    <div className='relative'>
<select defaultValue={""} className='w-24 appearance-none border border-gray-300 p-4'>
<option value="" disabled >{title}</option>
{
    options.map(option=><option key={option}>{option}</option>)
}
</select>
<div className='flex-center absolute inset-y-0 right-0 pr-3 pointer-events-none'>
<IoIosArrowDown/>
</div>
    </div>
  )
}

export default Select
