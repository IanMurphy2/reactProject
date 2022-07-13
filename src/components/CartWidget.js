import "./CartWidget.css"
import { Link } from "react-router-dom";

function CartWidget({cantidad}){
    return(

        <div className="cart__div">
        <Link to={"/cart"} className="cart__btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg>
        </Link>
        <h2>{cantidad}</h2>
        </div>

    )
}

export default CartWidget;