import { Link } from "react-router-dom"
import { ItemCount } from "./ItemCount"


export const ItemDetail = ({ item }) => {
  return (
    <div className="container">
      <div className="producto producto-detalle">
      <img src={item.brand} alt="" />
      <div>
        <h3 className="titulo">{item.product_name}</h3>
        <p className="descripcion">{item.descripcion}</p>
        <p className="categoria">{item.category}</p>
        <p className="precio">{item.price}</p>
        <ItemCount />
        <Link className="ver-mas" to={`/productos/`}>Volver</Link>
      </div>
      </div>
    </div>
  )
}
