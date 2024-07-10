import { useEffect } from "react"
import Item from "./item"
import { useOutletContext } from "react-router-dom"

const Products=()=>{
    const [products,setProducts]=useOutletContext();
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=10')
        .then(res=>res.json())
        .then(res=>setProducts(res.map((item)=>{
            return item
        })))
    },[setProducts])
    return (
        <div className="products" >
            <ul>
                {products&&products.map((product)=>{return <Item key={product.id} id={product.id} image={product.image} title={product.title} category={product.category} description={product.description} inCart={product.inCart} />})}
            </ul>
        </div>
    )
}
export default Products