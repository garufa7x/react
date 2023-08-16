import React, { useState, useEffect } from 'react'
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Firebase/config";

export const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const categoria = useParams().category;
  const [titulo, setTitulo] = useState('Productos'); 
  
  useEffect(() => {
    const productosRef = collection(db, "productos");
    const q = categoria ? query(productosRef, where("category", "==", categoria)) : productosRef;

    getDocs(q)
        .then((resp) => {

          setProductos(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
          )
        })
  }, [categoria])
  
  return (
    <div>
        <ItemList productos={productos} titulo={titulo} />
    </div>
  )
}

