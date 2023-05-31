import "./Header.css"
import Logo from "../assets/logo.png"
import { Link, NavLink } from "react-router-dom"
import { useCart } from "../context/CartContext"


export const Header = () => {

    const { cartList } = useCart()

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
                <Link className="items" to="/cart">Cart : {cartList.length}</Link>
            </div>

        </header>
    )
}
