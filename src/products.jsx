import { useOutletContext } from "react-router-dom"

function Products(){
    const [products,,setCart]=useOutletContext();
    return (
        <div>
            Product Content
            <ul>
                <li>{products.map(item=>{
                    return(
                        <div key={item.id}>
                            <h3>{item.title}</h3>
                            <p>{item.descirption}</p>
                            <p>{item.price}</p>
                            <button onClick={()=>{
                                setCart(cart=>{
                                    return[
                                        ...cart,
                                        {item,quantity:0}
                                    ]
                                })
                            }}>Add to Cart</button>
                            <button >Remove from Cart</button>
                        </div>
                    )
                })}</li>
            </ul>
        </div>
    )
}
export default Products