import React from 'react'
import background from '../img/bg.jpg'

const Hero = () => {
  return (
    <div>
      <div className='p-16 h-auto' style={{backgroundImage: `url(${background})`}} id='home'>
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
      <div className='bg-blue-600/40'>
        <div className='pt-8 text-white text-center font-bold text-4xl'>
          What do they tell about us?
        </div>
        <div className='pt-4 pb-8 grid grid-flow-col gap-8 justify-center ' id='cardContainer'>
          <div class="card text-center">
            <img class="card-img-top h-16 " src="https://avatar.iran.liara.run/public/boy" alt="" />
            <div class="card-body">
              <h4 class="card-title">Title</h4>
              <p class="card-text">Body</p>
            </div>
          </div>          
          <div class="card text-center">
            <img class="card-img-top h-16 " src="https://avatar.iran.liara.run/public/boy" alt="" />
            <div class="card-body">
              <h4 class="card-title">Title</h4>
              <p class="card-text">Body</p>
            </div>
          </div>
          <div class="card text-center">
            <img class="card-img-top h-16 " src="https://avatar.iran.liara.run/public/boy" alt="" />
            <div class="card-body">
              <h4 class="card-title">Title</h4>
              <p class="card-text">Body</p>
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Hero