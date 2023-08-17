import { Link } from "react-router-dom"
import { ItemCount } from "./ItemCount"
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext"
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const ItemDetail = ({ item }) => {

  const { agregarAlCarrito } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
    cantidad < item.quantity && setCantidad(cantidad + 1)
  }

  return (
    <Container>
      <Row>
        <Col>
          <div className="container">
            <div className="producto producto-detalle">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.brand} />
                <Card.Body>
                  <Card.Title><h3 className="titulo">{item.product_name}</h3></Card.Title>
                  <Card.Text>
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="categoria">{item.category}</p>
                    <p className="precio">{item.price}</p>
                    <ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar} handleAgregar={() => { agregarAlCarrito(item, cantidad) }} />
                  </Card.Text>
                  <Link className="ver-mas" to={`/productos/`}>Volver</Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
