import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

export default function Cart() {

    const {cart, getItemPrice, deleteItem} = useContext(CartContext)

  return (
    <>
        {
            cart.lenght > 0 ?
            <div>
                <table>
                    <thead>
                        <tr>
                            <th scope='col'>Item</th>
                            <th scope='col'>Imagen</th>
                            <th scope='col'>Cantidad</th>
                            <th scope='col'>Precio</th>
                            <th scope='col'>Eliminar</th>
                            <th scope='col'>Total</th>
                        </tr>

                        {cart.map((item, index) => {return(
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td><img src={item.image}></img></td>
                            <td>{item.count}</td>
                            <td>{item.price}</td>
                            <td><button onClick={() => deleteItem(item.id)} type="button">Eliminar</button></td>
                            <td>${item.price * item.count}</td>
                        </tr>)})}
                    </thead>
                    <thead>
                        <tr>
                            <th scope='row'colSpan={2}>Precio total:</th>
                            <td colSpan={4}>${getItemPrice()}</td>
                        </tr>
                    </thead>
                </table>
            </div>
            :
            <div>El Carrito esta vacio</div>
        }
    </> 
  )
}