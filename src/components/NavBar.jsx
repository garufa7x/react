import React from 'react'
import { CartWidget } from './CartWidget'       

export const NavBar = () => {
  return (
    <nav className='navbar'>      
        <a href='#' className='logo'><h1>AgusShop</h1></a>
        <ul className='menu'>
          <li><a className='menu-link' href="#">Inicio</a></li>
          <li><a className='menu-link' href="#">Productos</a></li>
          <li><a className='menu-link' href="#">Nostros</a></li>
          <li><a className='menu-link' href="#">Contacto</a></li>
          <li><CartWidget cantidad={5} /></li>
          
        </ul>
      
    </nav>
  )
}
