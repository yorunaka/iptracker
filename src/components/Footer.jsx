import React from 'react'

const Footer = () => {
  return (
    <div className='pt-4 h-fit bg-sky-200'>
      <div className='text-white text-4xl font-bold text-center'>
        Know Us More.
      </div>
      <div className='pt-4 grid grid-flow-row grid-cols-2 justify-items-center h-full gap-x-56'>
        <div className='place-self-end'>
          <ul className='grid gap-2'>
            <li>
              Address
            </li>
            <li>
              Email
            </li>
            <li>
              Number
            </li>
          </ul>
        </div>
        <div className='place-self-start'>
          <ul className='grid gap-2'>
            <li>
              Lorem, ipsum.
            </li>
            <li>
              loremipsum@email.com
            </li>
            <li>
              +62 000 0000
            </li>
          </ul>
        </div>
      </div>
      <div className='mt-12 bg-sky-300 h-8 text-white text-center place-content-center'>
        Made with Love - Yorunaka
      </div>
    </div>
  )
}

export default Footer