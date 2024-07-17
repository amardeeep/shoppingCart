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
        <div className='grid'>
            {products.map(product=>{
                    return(
                        <div className="product" key={product.id}>
                            <h3 className="centre">{product.title}</h3>
                            <img src={product.image} className="centre rem15" />
                            <p className="centre">Price Per Unit : {product.price} $</p>
                            <nav className="spread_between"><button className="button" onClick={()=>{handleAdd(product.id)}}>Add to Cart</button>
                            <button className="button" onClick={()=>{handleRemove(product.id)}}>Remove from Cart</button></nav>
                        </div>
                    )
                })} 
        </div>
    )
}
export default Products