import "./ProductCard.css"


export const ProductCard = ({product}) => {
    const {name, image, price} = product;

    return (
        <div className="product">
            <img src={image} alt={name}/>
            <div className="name">
                <p>{name}</p>
            </div>
            <div className="action">
                <span>${price}</span>
                <button>Add To Cart</button>
            </div>
        </div>
    )
}
