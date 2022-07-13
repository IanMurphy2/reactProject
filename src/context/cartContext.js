import React, { createContext, useState } from "react";

export const CartContext = React.createContext({})

const {Provider} = CartContext

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const clearCart = () => {
        setCart([])
    }

    const addToCart = (item, cantidad) => {
        if(isInCart(item.id)){
            const newCart = [...cart]
            newCart.forEach(e => {
                if(e.item.id === item.id){ e.cantidad += cantidad }
            });
        setCart(newCart)
        }else{
        setCart(
            [
                ...cart,
                {
                    item: item,
                    cantidad: cantidad
                }
            ]
            )
        }
    }

    const removeFromCart = (id) => {
        const newCart = [...cart].filter(e => e.item.id !== id)
        setCart(newCart)
    }

    const isInCart = (id) => {
        return cart.find(e => e.item.id === id)
    }

    const context = {
        cart,
        clearCart,
        addToCart,
        removeFromCart
    }

    return(
        <Provider value={context}>
            {children}
        </Provider>
    )

}


export default CartContext;