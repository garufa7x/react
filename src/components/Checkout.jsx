import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../Firebase/config';

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
            <div className="container">
                <h1 className="main-title">¡Gracias por tu compra!</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }

    return (
        <div><div className="container">
            <h1 className="main-title">Finaliza tu compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>

                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

                <button className="enviar" type="submit">Comprar</button>

            </form>
        </div></div>
    )
}
