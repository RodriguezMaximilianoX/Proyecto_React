import React, { useState } from 'react'

const ItemCount = ({initial, max, onAdd}) => {
    const [count, setCount] = useState(initial)
    
    const sumar = () =>{
        count < max ? setCount(count + 1) : alert("No puedes agregar mas productos al carrito")
    }

    const restar = () =>{
        count > initial ? setCount(count - 1) : alert("No puedes quitar mas productos")
    }

    const reset = () =>{
        setCount(initial)
    }
  
    return (
    <div>
        <p>{count}</p>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={() => {onAdd(count); reset()}}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount