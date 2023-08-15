import React from 'react'
import { Link } from 'react-router-dom'

export const CartWidget = ({cantidad}) => {

    return (
    <div>
      <Link className="menu-link" to="/carrito"><i className="bi bi-cart"></i> {cantidad}</Link>
       
    </div>
  )
}
