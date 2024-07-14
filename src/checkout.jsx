import { Link } from "react-router-dom"
function Checkout(){
    return(
        <div>
            <p>Your Transaction was succesful. Thank you for using our service .</p>
            <p>Missed something. Go back and checkout some other products.</p>
            <Link to="/products" ><h3>Products</h3></Link>
            <Link to="/home" ><h3>Home</h3></Link>
        </div>
    )
}
export default Checkout