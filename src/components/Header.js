import "./Header.css"
import Logo from "../assets/logo.png"
import { Link, NavLink } from "react-router-dom"


export const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="logo">
                <img src={Logo} alt="Logo" />
                <span>Shopping Cart</span>
            </Link>
            <div className="navigation">
                <NavLink className="link" to="/" end>Home</NavLink>
                <NavLink className="link" to="/cart">Cart</NavLink>
            </div>
            <div>
                <Link className="items" to="/cart">Cart : 2</Link>
            </div>

        </header>
    )
}
