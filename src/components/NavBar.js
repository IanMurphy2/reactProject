import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css"

function NavBar({cantCarrito}){
    return(

        <header className="header">
            <NavLink to="/" className="logo"> <img className="logo__pic" src="../assets/LogoPerfumeria.jpg" alt="Logo de la marca"/> </NavLink>
            <nav className="header__nav">
                <NavLink to={"/hombre"} className="nav__btn">Hombre</NavLink>
                <NavLink to={"/"} className="nav__btn">Fragancias</NavLink>
                <NavLink to={"/mujer"} className="nav__btn">Mujer</NavLink>
            </nav>
            <CartWidget cantidad={cantCarrito}/>
        </header>

    )
}

export default NavBar;