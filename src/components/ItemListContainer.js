import { useEffect, useState } from "react"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom"

function ItemListContainer(){
   
    const [info, setInfo] = useState([])
    const { categoriaId } = useParams()
    
    useEffect(() => {
        setTimeout(() => {
            fetch("data.json")
            .then((resp) => resp.json())
            .then((data) => setInfo(categoriaId ? data.filter(e => e.categoria === categoriaId) : data))
        }, 1000)
    }, [])

    return(

        <main>
            <ItemList listadoProductos={info} />
        </main>

    )
}

export default ItemListContainer;