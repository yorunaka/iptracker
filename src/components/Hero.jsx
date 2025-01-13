import React from 'react'
import background from '../img/bg.jpg'

const Hero = () => {
  return (
    <div className='p-16 h-auto' style={{backgroundImage: `url(${background})`}}>
      <div className='grid grid-rows-2 gap-4 text-pretty text-white'>
        <div className='text-5xl font-extrabold'>
          Discover the World Behind Any<br/>
          <span className='text-6xl pt-8'>
             IP Address            
          </span>
        </div>
        <div className='text-md'>
          Unlock insights about any IP address in seconds. Instantly retrieve location data, ISP details, and display the exact location on an interactive map. Perfect for developers, cybersecurity enthusiasts, and businesses needing accurate IP intelligence.
        </div>
      </div>
    </div>
  )
}

export default Hero