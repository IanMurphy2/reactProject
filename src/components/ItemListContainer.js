import { useEffect, useState} from "react"
import ItemList from "./ItemList";

function ItemListContainer(){
   
    const [info, setInfo] = useState([])

    useEffect(() => {
        setTimeout(() => {
            fetch("data.json")
            .then((resp) => resp.json())
            .then((data) => setInfo(data))
        }, 2000)
    }, [])
    
    return(

        <main>
        <ItemList listadoProductos={info} />
        </main>
    )
}

export default ItemListContainer;