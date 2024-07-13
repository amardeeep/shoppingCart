import { useOutletContext } from "react-router-dom"

function Products(){
    const [products,setProducts]=useOutletContext();
    console.log(products)
    const handleAddToCart=()=>{
        setProducts(prevProducts=>{

        })
    }
    return (
        <div>
            Product Content
            <ul>
                <li>{products.map(item=>{
                    return(
                        <div key={item.item.id}>
                            <h3>{item.item.title}</h3>
                            <p>{item.item.descirption}</p>
                            <p>{item.item.price}</p>
                            <button >Add to Cart</button>
                            <button >Remove from Cart</button>
                        </div>
                    )
                })}</li>
            </ul>
        </div>
    )
}
export default Products