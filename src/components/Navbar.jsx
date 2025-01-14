import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-blue-400/90 top-0 h-24 w-full'>
      <div className='grid grid-cols-2 h-full content-evenly text-white'>
        <div id='logo' className='text-4xl text-center font-bold'>
          TrackMe
        </div>
        <div className='content-center pr-16'>
          <ul className='flex justify-evenly text-2xl'>
            <li>
              <a href="#home" className='px-3 py-2 rounded-md hover:bg-blue-500'>Home</a>
            </li>
            <li>
              <a href="#about" className='px-3 py-2 rounded-md hover:bg-blue-500'>About</a>
            </li>
            <li>
              <a href="#tracker" className='px-3 py-2 rounded-md hover:bg-blue-500'>Track</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar