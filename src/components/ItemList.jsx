import React from 'react'
import { Item } from './Item'

export const ItemList = ( {productos, titulo} ) => {
  return (
    <div className='container'>
        <h2 className='main-title'>{titulo}</h2>
        <div className='productos'>
            {productos.map((producto) => <Item producto={producto} key={producto.id} />)}
        </div>
    </div>
  )
}
