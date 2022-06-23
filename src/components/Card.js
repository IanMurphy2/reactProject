import "../components/Card.css"
import ItemCount from "./ItemCount.js";

function Card({titulo, marca, foto, precio, stock}){

    return(

        <section className="card">
        <h2 className="card__title">{titulo}</h2>
        <h3 className="card__marca">{marca}</h3>
        <img className="card__foto" src={foto} height="250" alt="" />
        <h2 className="card__precio">{precio}</h2>
        <ItemCount stock={stock}/>
        
    </section>

    )
}

export default Card;