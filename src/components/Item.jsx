import React from 'react'

export const Item = ({producto}) => {
  return (
    <div className='producto'>
        <img src={producto.brand} alt="" />
        <dir>
            <h4>{producto.product_name}</h4>
            <p>Precio: ${producto.price}</p>
            <p>Categoría: {producto.category}</p>
            <a className='ver-mas' href={`/item/${producto.id}`}>Ver más</a>
            
        </dir>

    </div>
  )
}
