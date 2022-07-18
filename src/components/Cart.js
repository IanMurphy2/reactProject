import { useContext } from "react";
import CartContext from "../context/cartContext";
import "./Cart.css"
import CartItem from "./CartItem"
import EmptyCart from "./EmptyCart";

function Cart(){

    const context = useContext(CartContext)

return(

    <main className="mainCart">
        {context.cart.map(e => <CartItem 
        key={e.item.id} 
        id={e.item.id} 
        foto={e.item.foto} 
        titulo={e.item.titulo} 
        cant={e.cantidad}
        precio={e.item.precio}
        stock={e.item.stock} 
        removeFromCart={context.removeFromCart}
        /> )}
        <h1>{context.cantTot} producto{context.cantTot !== 1 && "s"}, el precio total es: ${context.precioTot}</h1>
        {context.cart[0] &&  <button className="BorrarCarrito__btn" onClick={context.clearCart}>Borrar Carrito</button>}
        {!context.cart[0] &&  <EmptyCart />}
    </main>

    )
}

export default Cart;