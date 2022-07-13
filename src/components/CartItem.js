import "./CartItem.css"

function CartItem({foto, titulo, cant, removeFromCart, id}){
   

return(
    <>
    <main className="CartItem__main">
        <img className="CartItem__img" src={foto} alt={titulo}/>
        <h1 className="titulocarro">{titulo}</h1>
        <span>Cantidad: {cant}</span>
        <button className="EliminarDelCarrito__btn" onClick={() => removeFromCart(id)}>Eliminar</button>
    </main>
    </>
    )
}

export default CartItem;