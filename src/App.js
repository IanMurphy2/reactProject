import { Routes, Route } from "react-router-dom"
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from "./components/ItemDetailContainer"
import FraganciasHombre from "./components/FraganciasHombre";
import FraganciasMujer from "./components/FraganciasMujer"
import NotFound from "./components/NotFound";


function App() {
  return(
    <>

    <NavBar cantCarrito="8"/>

    <Routes>
      <Route exact path="/" element={<ItemListContainer />}></Route>
      <Route exact path="/fragancias" element={<ItemListContainer />}></Route>
      <Route path="/fragancias/:fraganciaId" element={<ItemDetailContainer />}></Route>
      <Route exact path="/hombre" element={<FraganciasHombre />}></Route>
      <Route exact path="/mujer" element={<FraganciasMujer />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>

    </>
    );
}

export default App;
