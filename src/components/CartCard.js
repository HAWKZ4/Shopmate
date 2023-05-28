import "./CartCard.css"

export const CartCard = ({ product }) => {
    const { name, image, price } = product;
    return (
        <div className="cartCard">
            <img src={image} alt={name} />
            <div className="productName" >
                {name}
            </div>
            <div className="productPrice">
                ${price}
            </div>
            <button>
                Remove
            </button>

        </div>
    )
}
