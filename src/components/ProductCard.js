import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const { name, price, image, id } = product;

  const { cartList, addToCart, removeFromCart } = useCart()

  const [inTheCart, setInTheCart] = useState(false)

  useEffect(() => {
    const isItInCartlist = cartList.find(cartItem => cartItem.id === id)

    if (isItInCartlist) {
      setInTheCart(true)
    } else {
      setInTheCart(false)
    }

  }, [cartList, id])


  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>

        {inTheCart ? (<button className="remove" onClick={() => removeFromCart(product)}>Remove</button>) : (<button onClick={() => addToCart(product)}>Add To Cart</button>)}

      </div>
    </div >
  )
}
