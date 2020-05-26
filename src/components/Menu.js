import React from 'react'
import '../index.css'
import Logo from './imgs/logo.png'

const Menu = () => {
  return (
    <nav className='navbar navbar-light navbar-expand-md bg-faded justify-content-center'>
      <img src={Logo} alt='logo' className='logo' />
      <div className='navbar-collapse collapse w-100' id='collapsingNavbar3'>
        <ul className='nav navbar-nav ml-auto w-100 justify-content-end'>
          <li className='nav-item'>
            <a className='nav-link' href='#start'><span className='text-menu'>Inicio</span></a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#products'><span className='text-menu'>Productos y Maquilas</span></a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#us'><span className='text-menu'>Nosotros</span></a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu
