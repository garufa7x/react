import React from 'react'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const NavBar = () => {
  return (
    <Container>
      <Row>
        <Col>
          <nav className='navbar'>
            <Link to='/' className='logo'><h1>AgusShop</h1></Link>
            <ul className='menu'>              
              <li><Link className='menu-link' to="/productos">Productos</Link></li>
              <li><Link className='menu-link' to="/productos/panaderia">Panaderia</Link></li>
              <li><Link className='menu-link' to="/productos/carnes">Carnes</Link></li>
              <li><Link className='menu-link' to="/productos/lacteos">Lacteos</Link></li>
              <li><Link className='menu-link' to="/productos/vegetales">Vegetales</Link></li>              
              <li><Link className='menu-link' to="/contacto">Contacto</Link></li>
              <li><CartWidget /></li>
            </ul>
          </nav>
        </Col>
      </Row>
    </Container>

  )
}
