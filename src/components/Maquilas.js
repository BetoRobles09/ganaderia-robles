import React from 'react'
import img from './imgs/maquilas.jpg'

const Products = ({ title, text }) => {
  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-sm'>
          <img className='img-products' src={img} alt='borregos' />
        </div>
        <div className='col-sm mt-5'>
          <h3 className='text-title'>{title}</h3>
          <hr className='line' />
          <p className='sub-text-products'>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Products
