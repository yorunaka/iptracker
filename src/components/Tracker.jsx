import React from 'react'
import { useState } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

const Tracker = (props) => {
  const [searchValue, setSearchValue] = useState('')
  const {ipData} = props

  const {ip, location, isp} = ipData

  const handleSearchData = (value) => {
    setSearchValue(value)
  }

  const handleSearchButton = (e) => {
    props.value(searchValue)
  }
 
  return (
    <div className='pt-6 h-auto place-content-center' id='tracker'>
      <div className='text-4xl text-center font-bold text-white'>
        Track Here
      </div>
      <div className='grid justify-items-center py-4' id='inputFormContainer'>
          <input type="text" placeholder='Search for any IP address or domain' id="inputForm" className='w-1/2 py-2 px-2 rounded-md'
          value={searchValue}
          onChange={(e) => {
            handleSearchData(e.target.value)
          }}
          />
          <a href='' 
          onClick={handleSearchButton}>
            <div className='pt-3 pb-2 px-3 flex gap-2 bg-blue-500 rounded-b-md text-white hover:bg-blue-700/60'>
              <div>Search</div>
              <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/search--v1.png" alt="search--v1"/>            
            </div>
          </a>
      </div>
      { !ipData || !ipData.location ?  
    (
      <div className="text-center text-white py-10">
        <p className="text-2xl">Loading IP data...</p>
      </div>
    ) : (
      <div className='place-self-center pb-8'>
        <div id='IPinfoContainer' className='bg-white h-auto w-auto rounded-md grid gap-4 p-2'>
          <table className='table-auto'>
            <tbody className='text-pretty'>
              <tr>
                <td>
                  IP Address
                </td>
                <td className='px-2'>
                  :
                </td>
                <td className='proportional-nums'>
                  {ip}
                </td>
              </tr>
              <tr>
                <td>
                  Location
                </td>
                <td className='px-2'>
                  :
                </td>
                <td>
                  {location.city}
                </td>
              </tr>
              <tr>
                <td>
                  Timezone
                </td>
                <td className='px-2'>
                  :
                </td>
                <td>
                  UCT {location.timezone}
                </td>
              </tr>
              <tr>
                <td>
                  ISP
                </td>
                <td className='px-2'>
                  :
                </td>
                <td className=''>
                  {isp}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    )
  }
    </div>
  )
}

export default Tracker