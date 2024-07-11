import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"

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
            setProducts(response)
        })
        .catch((error)=>{setError(error)})
        .finally(()=>setLoading(false))

    },[])
    return {products,error,loading}
}
function Route(){
    const [cart,setCart]=useState(null);
    const {products,error,loading}=useProducts();
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
            <Outlet context={[products,cart,setCart]}/>
        </div>
    )
}
export default Route