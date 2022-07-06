import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

function ItemDetailContainer(){

    
    const [info, setInfo] = useState([])
    const { fraganciaId } = useParams()

    useEffect(() => {
        setTimeout(() => {
            fetch("../data.json")
            .then((resp) => resp.json())
            .then((data) => setInfo(data.find(e => e.id == fraganciaId)))
        }, 1000)
    },[])

    return(

        <>
            {info.length !== 0 && <ItemDetail productDetail={info} />}
        </>

    )

}

export default ItemDetailContainer;