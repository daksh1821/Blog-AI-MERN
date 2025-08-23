import React from 'react'

export default function Newsletter() {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>
      <h1 className='md:text-4xl text-2xl font-semibold'>Never Miss A <span className='text-primary'>Blog</span> !</h1>
      <p className='md:text-lg text-gray-500/70 pb-8'>Subscribe to get the latest blog, new tech, and exclusive news</p>
      <form className='flex items-center justify-between max-w-2xl w-full md:h-13 h-12'>
        <input className='border border-gray-300 rounded-md h-full border-r-0 ouline-none w-full rounded-r-none px-3 text-gray-500' type="text" placeholder='Enter your email id' required></input>
        <button type='submit' className='bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'>Subscribe</button>
      </form>
    </div>
  )
}
