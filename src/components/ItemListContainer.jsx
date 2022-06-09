import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

function ItemListContainer() {

  const [personajes, setPersonajes] = useState([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(res => setPersonajes(res.results))
      .catch(error => console.error("Error", error))

  }, [])
  console.log(personajes)

  return (
    <ItemList personajes={personajes} /> 
  )
}

export default ItemListContainer