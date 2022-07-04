import {useState} from "react"
import "../components/Item.css"
import ItemCount from "./ItemCount.js";
import ItemDetailContainer from "./ItemDetailContainer";

function Item({id, titulo, marca, foto, precio, stock, descripcion}){



    const [mostrar, setMostrar] = useState(false);

    const detalles = () => {
        setMostrar(!mostrar)
    }

    return(

        <section className="card">
            <h2 className="card__title">{titulo}</h2>
            <h3 className="card__marca">{marca}</h3>
            <img className="card__foto" onClick={detalles} src={foto} height="250" alt="" />
            {mostrar === true ? <ItemDetailContainer descripcion={descripcion} /> : <h3 className="card__marca">Toca en la imagen para ver mas</h3>}
            <h2 className="card__precio">{precio}</h2>
            <ItemCount stock={stock} inicial={1} />
            <h3 className="card__marca">stock disponible: {stock}</h3>
        </section>

    )
}

export default Item;