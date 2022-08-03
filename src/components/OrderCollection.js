import { useEffect, useState } from "react"
import "./OrderCollection.css"
import { SetNewOrder } from "../services/firebase"
import Swal from 'sweetalert2'

function OrderCollection({cartItems, precioTot, clearCart}){

    const [name, setName] = useState("")
    const [phone, setPhone] = useState(0)
    const [mail, setMail] = useState("")
    const[orderId, setOrderId] = useState()

    let items = []
    cartItems.map(e => items.push({id: e.item.id, title: e.item.titulo, price: e.item.precio}))

    const formHandler = (event) => {
        event.preventDefault()
        const buyer = {name: name, telefono: phone, mail: mail}

        const order = {buyer: buyer, items: items, date: new Date(), total: precioTot}

    const addDoc = SetNewOrder(order)
        addDoc.then(({id}) => setOrderId(id))
        
    }

    useEffect(() => {
        orderId && (
        Swal.fire({
            title: "Su numero de orden es: " + orderId,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        )
        orderId && clearCart()
    }, [orderId])
    
    return(

        <main className="OC__main">
            <form className="main__form" id="OC_form" onSubmit={formHandler}>
                <label className="OC__label" htmlFor="formName">Nombre: </label>
                <input type="text" id="formName" name="formName" className="OC__input" onChange={(e) => setName(e.target.value)} required />
                <label className="OC__label" htmlFor="formNumber">Telefono: </label>
                <input type="number" id="formNumber" name="formNumber" className="OC__input" onChange={(e) => setPhone(e.target.value)} required />
                <label className="OC__label" htmlFor="formMail">Email: </label>
                <input type="mail" id="formMail" name="formMail" className="OC__input" onChange={(e) => setMail(e.target.value)} required />
                <input type="submit" value="Finalizar Compra" className="Enviar__btn"/>
            </form>
        </main>

    )

}

export default OrderCollection;