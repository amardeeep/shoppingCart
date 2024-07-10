import { Link, Outlet } from "react-router-dom"
import { useState } from "react"

const App=()=>{
    const [products,setProducts]=useState(null)
    const [cartItems,setCartItems]=useState(null)
    return(<>
        <div className="header">
            <h1>Name of Website</h1>
            <button> <Link to={"/cart"}>Cart</Link></button>
        </div>  
        <div className="nav">
            <button><Link to={"/home"}>Home</Link></button>
            <button><Link to={"/products"}>Products</Link></button>
        </div>
        <div className="content">
            <Outlet context={[products,setProducts,cartItems,setCartItems]}/>
        </div>
        <div className="footer">
            <p>Made By <a href="https://github.com/amardeeep/shoppingCart">Deetsy454</a></p>
        </div>
        </>

    )
}
export default App