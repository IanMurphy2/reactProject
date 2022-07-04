import ItemDetail from "./ItemDetail"


function ItemDetailContainer( {id, descripcion} ){

    return(

        <ItemDetail key={id} descripcion={descripcion} />

    )

}

export default ItemDetailContainer;