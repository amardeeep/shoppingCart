import { useOutletContext } from "react-router-dom"
import style from './product.module.css'

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
        <div className={style.product}>
            {products.map(product=>{
                    return(
                        <div className={style.prod} key={product.id}>
                            <h3 className={style.textaligncenter}>{product.title}</h3>
                            <div className={style.imagediv}>
                            <img src={product.image} className={style.img} />
                            </div>
                            <p >Price Per Unit : {product.price} $</p>
                            <nav className={style.divbtn}><button className={style.btn} onClick={()=>{handleAdd(product.id)}}>Add to Cart</button>
                            <button className={style.btn} onClick={()=>{handleRemove(product.id)}}>Remove from Cart</button></nav>
                        </div>
                    )
                })} 
        </div>
    )
}
export default Products