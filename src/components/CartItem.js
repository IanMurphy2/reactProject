import "./CartItem.css"
import {Link} from "react-router-dom"

function CartItem({foto, titulo, cant, precio, removeFromCart, id, stock}){

return(
    <>
    <main className="CartItem__main">
        <img className="CartItem__img" src={foto} alt={titulo}/>
        <Link to={`/fragancias/${id}`} className="titulocarrito__link"><h1 className="titulocarro">{titulo}</h1></Link>
        {cant > stock ? <div className="cant__div"> <h3 className="cant__title">Cantidad: {stock}</h3> <h4 className="card__marca">Se ha limitado su compra a : {stock} por falta de stock</h4> </div> : <h3 className="cant__title">Cantidad: {cant}</h3>}
        <h3 className="cant__title">{precio}</h3>
        <button className="EliminarDelCarrito__btn" onClick={() => removeFromCart(id)}>Eliminar</button>
    </main>
    </>
    )
}

export default CartItem;