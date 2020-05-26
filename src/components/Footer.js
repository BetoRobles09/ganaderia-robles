import React from 'react'
import Logo from './imgs/logo.png'

const Footer = () => {
  return (
    <footer className='page-footer font-small unique-color-dark pt-4'>
      <div className='container'>
        <div className='row text-center py-2'>
          <div className='col-sm'>
            <img className='logo' src={Logo} alt='logo' />
          </div>
          <div className='col-sm'>
            <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='btn btn-outline-white btn-rounded fa fa-facebook'> Sígenos en Facebook</a>
          </div>
        </div>
      </div>
      <div className='footer-copyright text-center py-3'>
        © 2020 Copyright:
      </div>
    </footer>
  )
}

export default Footer
