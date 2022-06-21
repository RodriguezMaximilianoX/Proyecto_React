import React from 'react'
import Item from './Item'
import ItemCount from './ItemCount'

const ItemDetail = ({personajes}) => {
  return (
    <div>
        {personajes?.map(personaje => <Item key={personaje.id} personaje={personaje} />)}
        <ItemCount />
    </div>
  )
}

export default ItemDetail 