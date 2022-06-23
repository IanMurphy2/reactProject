import "./ItemListContainer.css"
import Card from "./Card.js";
import { useEffect, useState} from "react"

function ItemListContainer(){
   
    const [info, setInfo] = useState([])

    useEffect(() => {
        setTimeout(() => {
            fetch("data.json").then((resp) => resp.json()).then((data) => setInfo(data))
        }, 2000)

    }, [])
    
    return(

        <main className="ItemListContainer">

        {info.map(producto => <Card titulo={producto.titulo} marca={producto.marca} foto={producto.foto} precio={producto.precio} stock={producto.stock} />)}
        
        </main>
    )
}

export default ItemListContainer;