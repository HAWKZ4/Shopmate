import { useCart } from "../context/CartContext";
import "./CartCard.css"

export const CartCard = ({ product }) => {
    const { name, image, price } = product;

    const { removeFromCart } = useCart()
    return (
        <div className="cartCard">
            <img src={image} alt={name} />
            <div className="productName" >
                {name}
            </div>
            <div className="productPrice">
                ${price}
            </div>
            <button onClick={() => removeFromCart(product)}>Remove</button>

        </div>
    )
}
