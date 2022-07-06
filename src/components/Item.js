import "../components/Item.css"
import ItemCount from "./ItemCount.js";
import { Link } from "react-router-dom"

function Item({id, titulo, marca, foto, precio, stock}){

    return(

        <section className="card">
            <h2 className="card__title">{titulo}</h2>
            <h3 className="card__marca">{marca}</h3>
            <Link to={`/fragancias/${id}`}> <img className="card__foto" src={foto} height="250" alt={titulo} /> </Link> 
            <h3 className="card__marca">Toca en la imagen para ver mas</h3>
            <h2 className="card__precio">{precio}</h2>
            <ItemCount stock={stock} inicial={1} />
            <h3 className="card__marca">stock disponible: {stock}</h3>
        </section>

    )
}

export default Item;