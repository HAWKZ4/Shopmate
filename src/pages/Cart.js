import { CartCard } from "../components/CartCard"
import { useTitle } from "../hooks/useTitle"
import { useCart } from "../context/CartContext"
import "./Cart.css"



export const Cart = () => {
  useTitle("Cart")
  const {cartList, total } = useCart()
  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {cartList.length} / ${total}</h1>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}

      </section>
    </main>

  )
}
