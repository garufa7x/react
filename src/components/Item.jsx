import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({producto}) => {
  return (
    <div className='producto'>
        <img src={producto.brand} alt="" />
        <div>
            <h4>{producto.product_name}</h4>
            <p>Precio: ${producto.price}</p>
            <p>Categoría: {producto.category}</p>
            <Link className='ver-mas' to={`/item/${producto.id}`}>Ver más</Link>
            
        </div>

    </div>
  )
}
