import { useContext } from "react";
import CartContext from "../context/cartContext";
import "./Cart.css"
import CartItem from "./CartItem"

function Cart(){

    const context = useContext(CartContext)
    // console.log(context.removeFromCart)
return(

    <main className="mainCart">
        {context.cart.map(e => <CartItem 
        key={e.item.id} 
        id={e.item.id} 
        foto={e.item.foto} 
        titulo={e.item.titulo} 
        cant={e.cantidad} 
        removeFromCart={context.removeFromCart}
        /> )}
        <button className="BorrarCarrito__btn" onClick={context.clearCart}>Borrar Carrito</button>
    </main>

    )
}

export default Cart;