import { useOutletContext } from "react-router-dom"


function Products(){
    const [products,setProducts]=useOutletContext();
    function handleAdd(productid){
        const nextProducts=[]
        for(let prod of products){
            if(prod.id==productid){
                prod.quantity++
            }
            nextProducts.push(prod)
        }
        setProducts(nextProducts)
    }
    function handleRemove(productid){
        const nextProducts=[]
        for(let prod of products){
            if(prod.id==productid){
                if(prod.quantity!==0){prod.quantity--}
            }
            nextProducts.push(prod)
        }
        setProducts(nextProducts)
    }
    
    return (
        <div>
            Product Content
            <ul>
                <li>{products.map(product=>{
                    return(
                        <div key={product.id}>
                            <h3>{product.title}</h3>
                            <p>{product.descirption}</p>
                            <p>{product.price} $</p>
                            <button onClick={()=>{handleAdd(product.id)}}>Add to Cart</button>
                            <button onClick={()=>{handleRemove(product.id)}}>Remove from Cart</button>
                        </div>
                    )
                })}</li>
            </ul>
        </div>
    )
}
export default Products