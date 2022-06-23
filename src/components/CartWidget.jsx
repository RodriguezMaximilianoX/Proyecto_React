import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from '../context/CartContext';

export default function CartWidget() {

  const {getItemQty} = useContext(CartContext)

  return (
    <>
    <ShoppingCartIcon />
    <span className='num'>{getItemQty()}</span>
    </>
  )
}
