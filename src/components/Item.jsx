import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

export const Item = ({ producto }) => {
  return (
    <div className='producto'>      
      <Card >
        <Card.Img variant="top" src={producto.brand} />
        <Card.Body>
          <Card.Title><h4>{producto.product_name}</h4></Card.Title>
          <Card.Text>
          <p>Precio: ${producto.price}</p>
          <p>Categoría: {producto.category}</p>
          </Card.Text>
          <Link className='ver-mas' to={`/item/${producto.id}`}>Ver más</Link>
        </Card.Body>
      </Card>
    </div>

  )
}
