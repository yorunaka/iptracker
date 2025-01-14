import React from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

const Tracker = (props) => {
  return (
    <div className='pt-6 h-auto place-content-center' id='tracker'>
      <div className='text-4xl text-center font-bold text-white'>
        Track Here
      </div>
      <div className='grid justify-items-center py-4' id='inputFormContainer'>
          <input type="text" placeholder='Search for any IP address or domain' id="inputForm" className='w-1/2 py-2 px-2 rounded-md' />
          <a href='' >
            <div className='pt-3 pb-2 px-3 flex gap-2 bg-blue-500 rounded-b-md text-white hover:bg-blue-700/60'>
              <div>Search</div>
              <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/search--v1.png" alt="search--v1"/>            
            </div>
          </a>
      </div>
      <div className='place-self-center pb-8'>
        <div id='IPinfoContainer' className='bg-white h-auto w-auto rounded-md grid gap-4 p-2'>
          <div className='flex gap-5'>
            IP Address
            <div>
              {props.ip}
            </div>
          </div>
          <div className='flex gap-5'>
            Location
            <div>
              {props.city}
            </div>
          </div>
          <div className='flex gap-5'>
            Timezone
            <div>
              UTC+ {props.timezone}
            </div>
          </div>
          <div className='flex gap-5'>
            ISP
            <div>
              {props.isp}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tracker