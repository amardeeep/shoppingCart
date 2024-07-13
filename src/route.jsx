import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"


const useProducts=()=>{
    const [products,setProducts]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((response)=>{
            if(response.status>=400){
                throw new Error("Server Error !")
            }
            
            return response.json();
            
        })
        .then((response)=>{
            setProducts(response.map(item=>{
                item.quantity=0
                return {
                    item
                }
            }))
        })
        .catch((error)=>{setError(error)})
        .finally(()=>setLoading(false))

    },[])
    return {products,error,loading,setProducts}
}
function Route(){
    //const [cart,setCart]=useState([]);
    const {products,error,loading,setProducts}=useProducts();
    if(loading){
        return(
            <p>Loading...</p>
        )
    }
    if(error){
        return (
            <p>A network error has occured !</p>
        )
    }
    return (
        <div>
            <h2>Route Content</h2>
            <Link to={"/products"} state={products} ><h3>Products</h3></Link>
            <Link to={"/cart"} state={products} ><h3>Cart</h3></Link>
            <Outlet context={[products,setProducts]}/>
        </div>
    )
}
export default Route