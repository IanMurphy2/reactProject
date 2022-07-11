import { Routes, Route } from "react-router-dom"
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from "./components/ItemDetailContainer"
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";


function App() {
  return(
    <>

    <NavBar cantCarrito="8"/>

    <Routes>
      <Route exact path="/:categoriaId" element={<ItemListContainer />}></Route>
      <Route exact path="/" element={<ItemListContainer />}></Route>
      <Route path="/fragancias/:fraganciaId" element={<ItemDetailContainer />}></Route>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>

    </>
    );
}

export default App;
