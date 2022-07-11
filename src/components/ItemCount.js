import "./ItemCount.css"
import { useState } from "react"

function ItemCount({ stock, inicial, onAdd }){

    const [num, setNum] = useState(inicial);

    const suma = () => {
        if(num < stock) 
        setNum(num + 1)
    }

    const resta = () => {
        if(num > inicial){
        setNum(num - 1)
        }
    }

return(

    <section className="card__seccionCompra">
    <div className="card__cant">
        <button className="card__btn" onClick={resta}>-</button>
        <span className="card__cant__num">{num}</span>
        <button className="card__btn" onClick={suma}>+</button>
    </div>
    {stock === "0"? <button className="AgregarAlCarrito__btn not-allowed">Fuera de stock</button> : <button onClick={onAdd} className="AgregarAlCarrito__btn">Agregar al Carrito</button>}
    </section>

    )
}

export default ItemCount;