import { useContext, useState } from "react";
import {CartContext} from "../context/cartContext"
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount"
import "./ItemDetail.css"
import Swal from 'sweetalert2'

function ItemDetail( {productDetail} ){

    const [purchaseCompleted, setPurchaseCompleted] = useState(true)
    const {addToCart} = useContext(CartContext)

    const onAdd = (num) => {
        setPurchaseCompleted(false)
        addToCart(productDetail, num)
        
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Se agrego al carrito correctamente'
          })
    }

    return(

        <main className="itemdetail">
            <div className="itemdetail__imagenes">
                <img className="itemdetail__img" src={productDetail.foto} alt={productDetail.titulo} />
            </div>
            <aside className="itemdetail__info">
                <div className="itemdetail__info__header">
                    <h1 className="itemdetail__info__titulo">{productDetail.titulo}</h1>
                    <h2 className="itemdetail__info__marca">{productDetail.marca}</h2>
                </div>
                <p className="itemdetail__info__desc">{productDetail.descripcion}</p>
                <div className="itemdetail__info__compra">
                    {purchaseCompleted ? <ItemCount onAdd={onAdd} stock={productDetail.stock} inicial={1} /> : <Link to="/cart" className="irAlCarrito__btn">Ir al Carrito</Link>}
                    <h3 className="card__marca">stock disponible: {productDetail.stock}</h3>
                    <span className="itemdetail__info__precio">{productDetail.precio}</span>
                </div>
            </aside>        
        </main>
    
    )

}

export default ItemDetail;