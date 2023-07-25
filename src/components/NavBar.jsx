import React from 'react'
import { CartWidget } from './CartWidget'       
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='navbar'>      
        <Link to='/' className='logo'><h1>AgusShop</h1></Link>
        <ul className='menu'>
          <li><Link className='menu-link' to="/">Inicio</Link></li>
          <li><Link className='menu-link' to="/productos">Productos</Link></li>
          <li><Link className='menu-link' to="/productos/bakery">Panaderia</Link></li>
          <li><Link className='menu-link' to="/productos/meat">Carnes</Link></li>
          <li><Link className='menu-link' to="/productos/dairy">Lacteos</Link></li>
          <li><Link className='menu-link' to="/productos/vegetables">Vegetales</Link></li>
          <li><Link className='menu-link' to="/nosotros">Nostros</Link></li>
          <li><Link className='menu-link' to="/contacto">Contacto</Link></li>
          <li><CartWidget cantidad={5} /></li>
          
        </ul>
      
    </nav>
  )
}
