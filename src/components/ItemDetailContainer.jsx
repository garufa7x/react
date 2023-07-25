import { useEffect, useState } from "react"
import { pedirDatosPorId } from "../helpers/pedirDatos"
import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom"


export const ItemDetailContainer = () => {
    const [item, setitem] = useState()
    const id = useParams().id;
    
    useEffect(() => {
      pedirDatosPorId (Number(id))
      .then((res) => {
        setitem(res);
      })
    }, [id])
    
  return (
    <div>
        {item && <ItemDetail item={item} />}
    </div>
  )
}
