import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className='bg-blue-300 top-0 h-screen w-full'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App