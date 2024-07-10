import { useOutletContext } from "react-router-dom"

const Item=({title,price,category,description,image,id})=>{
    const [setCartItems]=useOutletContext()
    return (
        <div className="item">
            <h2 role="heading">{title}</h2>
            <img src={image} alt="Some Image" />
            <p>{price}</p>
            <p>Category : {category}</p>
            <p>{description}</p>
            <button onClick={()=>{
                console.log("clicked")
                setCartItems(prevCart=> {
                    return [
                        ...prevCart,
                        {
                            title,
                            price,
                            image,
                            id
                        }
                    ]
                })
            }}>Add to cart </button>
        </div>
    )
}

export default Item