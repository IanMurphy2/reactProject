import "./ItemDetail.css"
import ItemCount from "./ItemCount"

function ItemDetail( {productDetail} ){

    return(

        <main className="itemdetail">
            <div className="itemdetail__imagenes">
                <img className="itemdetail__img" src={productDetail.foto} alt={productDetail.titulo} />
            </div>
            <aside className="itemdetail__info">
                <div className="itemdetail__info__header">
                    <h1 className="itemdetail__info__titulo">{productDetail.titulo}</h1>
                    <h2 className="itemdetail__info__marca">{productDetail.marca}</h2>
                </div>
                <p className="itemdetail__info__desc">{productDetail.descripcion}</p>
                <div className="itemdetail__info__compra">
                    <ItemCount stock={productDetail.stock} inicial={1} />
                    <span className="itemdetail__info__precio">{productDetail.precio}</span>
                </div>
            </aside>        
        </main>
    
    )

}

export default ItemDetail;