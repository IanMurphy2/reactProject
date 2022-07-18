import React, { useEffect, useState } from "react";

export const CartContext = React.createContext({})

const {Provider} = CartContext

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [cantTot, setCantTot] = useState(0)
    const [precioTot, setPrecioTot] = useState(0)

    const clearCart = () => {
        setCart([])
    }

    useEffect(() => {
        let totalProduct = 0
        let totalPrice = 0
        cart.map(e => {
            totalProduct += e.cantidad
            totalPrice += e.cantidad * parseInt(e.item.precio.slice(1))
        })
        setCantTot(totalProduct)
        setPrecioTot(totalPrice)
    }, [cart])

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
        const newCart = cart.filter(e => e.item.id !== id)
        setCart(newCart)
    }

    const isInCart = (id) => {
        return cart.some(e => e.item.id === id)
    }

    const context = {
        cart,
        clearCart,
        addToCart,
        removeFromCart,
        cantTot,
        precioTot
    }

    return(
        <Provider value={context}>
            {children}
        </Provider>
    )

}


export default CartContext;