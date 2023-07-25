

export const ItemDetail = ({item}) => {
  return (
    <div className="container">
        <div className="producto-detalle"></div>
        <img src={item.brand} alt="" />
        <div>
          <h3 className="titulo">{item.product_name}</h3>
          <p className="descripcion">{item.descripcion}</p>
          <p className="categoria">{item.category}</p>
          <p className="precio">{item.price}</p>
        </div>

    </div>
  )
}
