import { useEffect, useState } from "react"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom"

function ItemListContainer(){
   
    const [info, setInfo] = useState([])
    const { categoriaId } = useParams()
    
    useEffect(() => {
        setInfo([])
        setTimeout(() => {
            fetch("data.json")
            .then((resp) => resp.json())
            .then((data) => setInfo(categoriaId ? data.filter(e => e.categoria === categoriaId) : data))
        }, 1000)
    }, [categoriaId])

    return(

        <main className="itemListContainer__main">
            <ItemList listadoProductos={info} />
            {/* {loading && <p className="itemListContainer__loading">loremasdasdasdasdasdasdasdasdasdasdasd</p>} */}
        </main>

    )
}

export default ItemListContainer;