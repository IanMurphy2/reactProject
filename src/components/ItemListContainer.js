import { useEffect, useState } from "react"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom"
import { getAllFragances } from "../services/firebase"

import { getFirestore, collection, getDocs, getDoc, doc, query, where, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpMv6RCPtBaxHI8sFQik-gFh7CM3PJT9w",
  authDomain: "perfumerie-f8c33.firebaseapp.com",
  projectId: "perfumerie-f8c33",
  storageBucket: "perfumerie-f8c33.appspot.com",
  messagingSenderId: "42293026768",
  appId: "1:42293026768:web:ede5ade92665547ca223d5"
};


function ItemListContainer(){
   
    const [info, setInfo] = useState([])
    const [infonew, setInfonew] = useState([])
    const { categoriaId } = useParams()

    // useEffect(() => {
    //     setInfonew([])
    //         fetch("data.json")
    //         .then((resp) => resp.json())
    //         .then((data) => setInfonew(data))
    // }, [])

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