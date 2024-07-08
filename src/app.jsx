import Footer from "./footer"
import Header from "./header"
import { Link, Outlet } from "react-router-dom"

const App=()=>{
    return(<>
        <Header/>
        <div className="nav">
            <button><Link to={"/home"}>Home</Link></button>
            <button><Link to={"/products"}>Products</Link></button>
        </div>
        <div className="content">
            <Outlet/>
        </div>
        <Footer/>
        </>

    )
}
export default App