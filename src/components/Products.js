import React from 'react'
import img from './imgs/products.jpg'

const Products = ({ title, text }) => {
  return (
    <div className='container' id='products'>
      <div className='row mt-4'>
        <div className='col-sm'>
          <h3 className='text-title'>{title}</h3>
          <hr className='line' />
          <p className='sub-text-products'>{text}</p>
        </div>
        <div className='col-sm'>
          <img className='img-products' src={img} alt='borregos' />
        </div>
      </div>
    </div>
  )
}

export default Products
