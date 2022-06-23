import { createContext, useState } from "react";
export const MiContexto = createContext({});


export default function CartContext({children}) {
    const [cart, setCart] = useState([]);

    // Metodo Some -> esta en ItemDetail -> devuelve un valor boolean -> detecta si el producto a agregar ya esta en el carrito o no
    const isInCart = (id) => {
        return cart.some(x => x.id === id)
    }

    // ItemDetail -> se encarga de agregar el producto seleccionado al cart sin pisar a los agregados anteriormente, si esta duplicado solo aumenta la cantidad
    const addItem = (item, count) => {
        const newItem = {
            ...item,
            count
        }

        if (isInCart(newItem.id)) {
            const findProduct = cart.find(x => x.id === newItem.id)
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart]
            auxArray[productIndex].count += count
            setCart(auxArray)
        }
        else{
            setCart([...cart], newItem)
        }
    }

    // vaciar el carrito por completo -> en Cart con un boton
    const emptyCart = () => {
        setCart([])
    }

    // Metodo Filter -> se encarga, en funcion del ID, de retornar un nuevo array sin el producto seleccionado
    const deleteItem = (id) => {
        return cart.filter(x => x.id !== id)
    }

    // Metodo Reduce -> se usa en CartWidget -> retorna la cantidad de unidades de nuestro state cart
    const getItemQty = () => {
        return cart.reduce((acc, x) => acc += x.count, 0)
    }

    // Metodo Reduce -> se usa en Cart -> retorna el precio total del carrito
    const getItemPrice = () => {
        return cart.reduce((acc, x) => acc += x.count * x.precio, 0)
    }
    
    return (
        <MiContexto.Provider value={{cart, isInCart, addItem, emptyCart, deleteItem, getItemQty, getItemPrice}}>
            {children}
        </MiContexto.Provider>
    );
}
