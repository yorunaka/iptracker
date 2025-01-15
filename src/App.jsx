import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tracker from './components/Tracker'
import Footer from './components/Footer'

const App = (props) => {
  const [value, setValue] = useState('')
  const [data, setData] = useState([])

  const handleSearchQuery = (query) => {
    if (query != null){
      setValue(query)
      getApiData(query)
    }
  }

  const getApiData = async (ipAddress = '197.210.78.172') => {
    try {
      const apiKey = import.meta.env.VITE_APIKEY
      const req = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`)
      const result = req.data
      setData(result)
    } catch(error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getApiData(value)
  }, [])

  return (
    <div className='bg-blue-300 top-0 h-full w-full'>
      <Navbar />
      <Hero />
      <Tracker ipData={data} searchValue={handleSearchQuery}/>
      <Footer />
    </div>
  )
}

export default App