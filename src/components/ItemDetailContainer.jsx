import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [personajes, setPersonajes] = useState([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(res => setPersonajes(res.results))
      .catch(error => console.error("Error", error))

  }, [])


  return (
    <ItemDetail personajes={personajes} />
  )
}

export default ItemDetailContainer