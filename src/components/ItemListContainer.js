import "./ItemListContainer.css"
import Card from "./Card.js";

function ItemListContainer(){
    return(

        <main className="ItemListContainer">

        <Card titulo="Dylan Blue" marca="Versace" foto="./assets/dylanBlueEDT.webp" precio="$15000" stock="5" />

        </main>
    )
}

export default ItemListContainer;