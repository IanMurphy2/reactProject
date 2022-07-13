import { Routes, Route } from "react-router-dom"
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from "./components/ItemDetailContainer"
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import {CartProvider} from "./context/cartContext"


function App() {
  return(
    <>
    <CartProvider>
      <NavBar cantCarrito="8"/>
      <Routes>
        <Route exact path="/:categoriaId" element={<ItemListContainer />} />
        <Route exact path="/" element={<ItemListContainer />} />
        <Route path="/fragancias/:fraganciaId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartProvider>
    </>
    );
}

export default App;
