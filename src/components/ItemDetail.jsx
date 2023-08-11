import { Link } from "react-router-dom"
import { ItemCount } from "./ItemCount"
import { useState } from "react";


export const ItemDetail = ({ item }) => {

  const [cantidad, setCantidad] =useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad (cantidad -1)
  }

  const handleSumar = () => {
    cantidad < item.quantity && setCantidad(cantidad +1)
  }

  const handleAgregar = () => {
    console.log ({...item, cantidad});
  }

  return (
    <div className="container">
      <div className="producto producto-detalle">
      <img src={item.brand} alt="" />
      <div>
        <h3 className="titulo">{item.product_name}</h3>
        <p className="descripcion">{item.descripcion}</p>
        <p className="categoria">{item.category}</p>
        <p className="precio">{item.price}</p>
        <ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar} handleAgregar={handleAgregar} />
        <Link className="ver-mas" to={`/productos/`}>Volver</Link>
      </div>
      </div>
    </div>
  )
}
