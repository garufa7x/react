import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../Firebase/config';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Checkout = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const [pedidoId, setPedidoId] = useState("");

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })
    }
    if (pedidoId) {
        return (
            <Container>
                <Row>
                    <Col>
                        <div className="container">
                            <h1 className="main-title">¡Gracias por tu compra!</h1>
                        </div>                        
                        <p className='npedido'>Tu número de pedido es: {pedidoId}</p>                        
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <div className="container">
            <h1 className="main-title">Finaliza tu compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
                <button className="enviar" type="submit">Comprar</button>
            </form>
        </div>
    )
}
