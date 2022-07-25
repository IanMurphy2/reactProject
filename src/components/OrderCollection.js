import { useState } from "react"
import "./OrderCollection.css"
import { SetNewOrder } from "../services/firebase"

function OrderCollection({cartItems, precioTot}){

    const [name, setName] = useState("")
    const [phone, setPhone] = useState(0)
    const [mail, setMail] = useState("")
    const[orderId, setOrderId] = useState("")

    let items = []
    cartItems.map(e => items.push({id: e.item.id, title: e.item.titulo, price: e.item.precio}))

    const formHandler = (event) => {
        event.preventDefault()
        const buyer = {name: name, telefono: phone, mail: mail}

        const order = {buyer: buyer, items: items, date: new Date(), total: precioTot}

    const addDoc = SetNewOrder(order)
        addDoc.then(({id}) => setOrderId(id))
        alert(orderId)
    }

    return(

        <main className="OC__main">
            <form className="main__form" id="OC_form">
                <label htmlFor="formName">Nombre: </label>
                <input type="text" id="formName" name="formName" onChange={(e) => setName(e.target.value)} />
                <label htmlFor="formNumber">Telefono: </label>
                <input type="number" id="formNumber" name="formNumber" onChange={(e) => setPhone(e.target.value)} />
                <label htmlFor="formMail">Email: </label>
                <input type="mail" id="formMail" name="formMail" onChange={(e) => setMail(e.target.value)} />
            </form>
            <button className="Enviar__btn" onClick={formHandler} form="OC_form" value="submit">Enviar</button>
        </main>

    )

}

export default OrderCollection;