import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import "./ProductCard.css"


export const ProductCard = ({ product }) => {
    const { id, name, image, price } = product;

    const { cartList, addToCart, removeFromCart } = useCart()

    const [itemFound, setItemFound] = useState(false)

    useEffect(() => {
        const cartItemFound = cartList.find(cartItem => cartItem.id === id);

        if (cartItemFound) {
            setItemFound(true)
        } else {
            setItemFound(false)
        }

    }, [cartList, id])


    return (
        <div className="product">
            <img src={image} alt={name} />
            <div className="name">
                <p>{name}</p>
            </div>
            <div className="action">
                <span>${price}</span>
                {itemFound ? (<button className="remove" onClick={() => removeFromCart(product)}>Remove</button>) : (<button onClick={() => addToCart(product)}>Add To Cart</button>)}

            </div>
        </div>
    )
}
