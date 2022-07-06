import Item from "./Item";
import "./ItemList.css"

function ItemList({ listadoProductos }){

    return(

        <main className="ItemList">

            {listadoProductos.map(producto => 
                <Item 
                    key={producto.id} 
                    id={producto.id} 
                    titulo={producto.titulo} 
                    marca={producto.marca} 
                    foto={producto.foto} 
                    precio={producto.precio} 
                    stock={producto.stock} 
                    descripcion={producto.descripcion} 
                    />)
            }
        
        </main>
        
    )


}

export default ItemList;