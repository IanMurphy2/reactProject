import { useEffect, useState } from "react"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom"
import { getAllFragances } from "../services/firebase"

function ItemListContainer(){
   
    const [info, setInfo] = useState([])
    const { categoriaId } = useParams()

    // useEffect(() => {
    //     setInfo([])
    //     setTimeout(() => {
    //         fetch("data.json")
    //         .then((resp) => resp.json())
    //         .then((data) => setInfo(categoriaId ? data.filter(e => e.categoria === categoriaId) : data))
    //     }, 1000)
    // }, [categoriaId])

    useEffect(() => {
        getAllFragances(categoriaId).then(data => {
            setInfo(data)
        })
    }, [categoriaId])

    return(

        <main className="itemListContainer__main">
            <ItemList listadoProductos={info} />
        </main>

    )
}

export default ItemListContainer;