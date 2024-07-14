
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Cart(){
    const location=useLocation();
    const products=location.state;
    let total=0;
    for(let product of products){
        total=total+product.quantity*product.price;
    }
    return (
        <div>
            Cart Content
            <ul>
                <li>{products&&products.map(item=>{
                    if(item.quantity>=1){
                        return (
                            <div key={item.id} >
                                <h3 >{item.title}</h3>
                                <p>{item.quantity}</p>
                                
                            </div>
                        )
                    }
                })}</li>
            </ul>
            <p>Total : {total}</p>
            <Link to={'/checkout'}><button>Check Out</button></Link>
        </div>
    )
}
export default Cart