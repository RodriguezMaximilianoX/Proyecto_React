import React from 'react'
import { useContext } from 'react'
import CartContext from '../context/CartContext'
import Item from './Item'
import ItemCount from './ItemCount'

const ItemDetail = ({productos}) => {

  const {isInCart, addItem} = useContext(CartContext)

  const onAdd = (count) => {
    alert(`Cantidad de productos ${count}`)
    isInCart(productos.id)
    addItem(productos, count)
  }

  return (
    <div>
        {productos?.map(producto => <Item key={producto.id} producto={producto} />)}
        <ItemCount count={onAdd} />
    </div>
  )
}

export default ItemDetail 