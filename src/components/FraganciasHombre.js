import { useEffect, useState } from "react"
import ItemList from "./ItemList";

function FraganciasHombre(){
   
    const [info, setInfo] = useState([])

    useEffect(() => {
        setTimeout(() => {
            fetch("data.json")
            .then((resp) => resp.json())
            .then((data) => setInfo(data.filter(e => e.categoria === "hombre")))
        }, 1000)
    }, [])

    return(

        <main>
        <ItemList listadoProductos={info} />
        </main>
    )
}

export default FraganciasHombre;