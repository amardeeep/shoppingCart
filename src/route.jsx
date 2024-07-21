import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import router from './rout.module.css'

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
        <div  className={router.router}>
            <div className={router.header}>
                <h2 className="title">Merchant Aisle </h2>
                <div className={router.nav}>
                    <Link className={router.link} to={'/home'}> <h3>Home</h3> </Link>
                    <Link className={router.link} to={"/products"} state={products} ><h3>Products</h3></Link>
                    <Link className={router.link} to={"/cart"} state={products} ><h3>Cart {itemInCart}</h3></Link>
                </div>
            </div>
            <div className={router.outlet}>
                <Outlet context={[products,setProducts]}/>
            </div>
            <div className="footer">
                    <ul>
                        <li>Made By : deetsy454</li>
                        <li>Sources</li>
                    </ul>
            </div>
        </div>
    )
}
export default Route