import { useContext, useState } from "react";
import CartContext from "../context/cartContext";
import "./Cart.css"
import CartItem from "./CartItem"
import EmptyCart from "./EmptyCart";
import OrderCollection from "./OrderCollection"

function Cart(){

    const context = useContext(CartContext)
    const [terminarCompra, setTerminarCompra] = useState(false)
    const [terminarCompraBtn, setTerminarCompraBtn] = useState(true)

    const terminarCompraHandler = () => {
        setTerminarCompra(true)
        setTerminarCompraBtn(false)
    }

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
        {context.cart[0] && terminarCompraBtn && <button onClick={terminarCompraHandler} className="BorrarCarrito__btn">Terminar Compra</button>}
        {terminarCompra && context.cart[0] && <OrderCollection cartItems={context.cart} clearCart={context.clearCart} cantTot={context.cantTot} precioTot={context.precioTot}/>}
    </main>

    )
}

export default Cart;