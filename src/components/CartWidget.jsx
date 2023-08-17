import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext';


export const CartWidget = () => {

  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <Link className="menu-link" to="/carrito"><i className="bi bi-cart-fill"></i> <span className="numero">{cantidadEnCarrito()}</span></Link>

    </div>
  )
}
