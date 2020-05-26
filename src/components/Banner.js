import React from 'react'
import '../index.css'

const Banner = ({ slogan }) => {
  return (
    <div className='banner'>
      <div>
        <h1 className='text-banner'>{slogan}</h1>
      </div>
    </div>
  )
}

export default Banner
