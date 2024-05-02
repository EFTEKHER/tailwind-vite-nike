import React from 'react'

const Theme = () => {
  return (
    <div className="relative max-w-xl mx-auto mt-20">
    <img className="h-25 w-100 object-cover rounded-md" src="https://images.unsplash.com/photo-1680725779155-456faadefa26" alt="Random image"/>
    <div className="absolute inset-0 bg-gradient-to-l from-electric-violet-300 to-electric-violet-400 opacity-30 rounded-md"></div>
    <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-xl font-bold">Get Lost in Mountains</p>
    </div>
</div>
  )
}

export default Theme
