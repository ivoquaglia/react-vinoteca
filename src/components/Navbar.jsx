import logo from "../icons e imagenes/1Borcelle.png"
import heart from "../icons e imagenes/heart.svg"
import carrito from "../icons e imagenes/carrito.svg"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <>
            <header className="header-container">
                <nav className="nav1-container">
                    <div className="nav1-logo">
                        <NavLink className="logo" to="/">
                            <img className="nav1-foto" src={logo} alt="logo" />
                        </NavLink>
                    </div>
                    <ul className="nav1-ul">
                        <li className="nav1-li">
                            <a className="nav1-a-fav nav1-a" href="">
                                <img className="favorito" src={heart} alt="favorito" />
                            </a>
                            <a className="nav1-a-carrito nav1-a" href="">
                                <img className="carrito" src={carrito} alt="carrito" />
                            </a>
                            <a className="nav1-a-inicio nav1-a" href="">Inicio Sesion</a>
                        </li>
                    </ul>
                </nav>

                <nav className="nav2-container">
                    <ul className="nav2-ul">
                        <li className="nav2-li">
                            <NavLink className="nav2-a" to="/tienda">Tienda</NavLink>
                            <NavLink className="nav2-a" to="/blog">Blog</NavLink>
                            <NavLink className="nav2-a" to="/nosotros">Nosotros</NavLink>
                            <NavLink className="nav2-a" to="/contacto">Contacto</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
