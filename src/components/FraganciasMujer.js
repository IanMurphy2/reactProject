import { useEffect, useState } from "react"
import ItemList from "./ItemList";

function FraganciasMujer(){
   
    const [info, setInfo] = useState([])

    useEffect(() => {
        setTimeout(() => {
            fetch("data.json")
            .then((resp) => resp.json())
            .then((data) => setInfo(data.filter(e => e.categoria === "mujer")))
        }, 1000)
    }, [])

    return(

        <main>
        <ItemList listadoProductos={info} />
        </main>
    )
}

export default FraganciasMujer;