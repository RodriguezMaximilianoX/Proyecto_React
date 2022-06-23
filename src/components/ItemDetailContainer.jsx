import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'

function ItemListContainer() {
  const [productos, setProductos] = useState ([]);

  useEffect (() => {
    fetch("./productos.json")
      .then((res) => res.json())
      .then(res => setProductos(res.results))
      .catch(error => console.error("Error", error))

  }, [])
  console.log(productos)

  return (
    <ItemDetail productos={productos} /> 
  )
}

export default ItemListContainer