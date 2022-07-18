import "./EmptyCart.css"
import {Link} from "react-router-dom"

function EmptyCart(){

    return(
        <main className="empty__main">
            <h2 className="empty__title">El carrito se encuentra vacio</h2>
            <Link to={"/"} className="empty__btn">Volver al inicio</Link>
        </main>
    )
}

export default EmptyCart;