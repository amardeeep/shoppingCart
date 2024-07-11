import { useOutletContext } from "react-router-dom"

function Products(){
    const [products,setCart]=useOutletContext();
    console.log(products)
    return (
        <div>
            Product Content
            <ul>
                <li>{products.map(item=>{
                    console.log(item)
                    return(
                        <div key={item.id}>
                            <h3>{item.title}</h3>
                            <p>{item.descirption}</p>
                            <p>{item.price}</p>
                            <button onClick={()=>{
                                setCart(cart=>{
                                    return[
                                        ...cart,
                                        {item}
                                    ]
                                })
                            }}>Add to Cart</button>
                            <button>Remove from Cart</button>
                        </div>
                    )
                })}</li>
            </ul>
        </div>
    )
}
export default Products