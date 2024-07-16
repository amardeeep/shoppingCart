import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import home from './home.module.css'

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
            const nextResponse=[];
            for(let respon of response){
                   respon.quantity=0,
                   nextResponse.push(respon) 
            }
            setProducts(nextResponse)
        })
        .catch((error)=>{setError(error)})
        .finally(()=>setLoading(false))

    },[])
    return {products,error,loading,setProducts}
}
function Route(){
    let itemInCart=0;
    const {products,error,loading,setProducts}=useProducts();
    if(products){
        for(let product of products){
            if(product.quantity>0){
                itemInCart++
            }
        }
    }
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
        <div >
            <div className={home.navigation}>
            <h2>Merchant Aisle </h2>
            <Link to={'/home'}> <h3>Home</h3> </Link>
            <Link to={"/products"} state={products} ><h3>Products</h3></Link>
            <Link to={"/cart"} state={products} ><h3>Cart {itemInCart}</h3></Link>
            </div>
            <Outlet context={[products,setProducts]}/>
        </div>
    )
}
export default Route