import { useEffect, useState } from "react"
import Item from "./item"

const Products=()=>{
    const [products,setProducts]=useState(null)
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=10')
        .then(res=>res.json())
        .then(res=>setProducts(res))
    },[])
    return (
        <div className="products" >
            <ul>
                {products&&products.map((product)=>{return <Item key={product.id} title={product.title} category={product.category} description={product.description} />})}
            </ul>
        </div>
    )
}
export default Products