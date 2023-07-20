import { useEffect, useState } from "react"
import { pedirDatosPorId } from "../helpers/pedirDatos"
import { ItemDetail } from "./ItemDetail"


export const ItemDetailContainer = ({itemId}) => {
    const [item, setitem] = useState()
    
    useEffect(() => {
      pedirDatosPorId (itemId)
      .then((res) => {
        setitem(res);
      })
    }, [itemId])
    
  return (
    <div>
        {item && <ItemDetail item={item} />}
    </div>
  )
}
