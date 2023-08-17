import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  }

  return (
    <div className='container'>
      <h1 className='main-title'>Carrito</h1>
      {
        carrito.map((prod) => (
          <div key={prod.id}>
            <br />
            <h3>{prod.product_name}</h3>
            <p>Precio unitario: ${prod.price}</p>
            <p>Precio total: ${prod.price * prod.cantidad}</p>
            <p>Cantidad: {prod.cantidad}</p>
            <br />
          </div>
        ))
      }
      {
        carrito.length > 0 ?
          <div className='vaciar-finalizar'>
            <h2>Total de la compra: ${precioTotal()}</h2>
            <button className='vaciar' onClick={handleVaciar}>Vaciar</button>
            <button className='finalizar'><Link to='/checkout'>Finalizar compra</Link></button>
          </div> :
          <h2>El carrito está vacío</h2>
      }
    </div>
  )
}
export default Carrito
