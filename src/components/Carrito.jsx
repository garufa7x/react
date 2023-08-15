import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

export const Carrito = () => {

    const {carrito} = useContext (CartContext)

  return (
    <div>Carrito</div>
  )
}
