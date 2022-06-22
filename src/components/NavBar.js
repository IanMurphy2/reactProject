import CartWidget from "./CartWidget";
import "./NavBar.css"

function NavBar({cantCarrito}){
    return(

        <header className="header">
        <a href="#" className="logo"> <img className="logo__pic" src="../assets/LogoPerfumeria.jpg" alt="Logo de la marca"/> </a>
        <nav className="header__nav">
        <a className="nav__btn" href="#">Hombre</a>
        <a className="nav__btn" href="#">Fragancias</a>
        <a className="nav__btn" href="#">Mujer</a>
        </nav>
        <CartWidget cantidad={cantCarrito}/>
        </header>

    )
}

export default NavBar;