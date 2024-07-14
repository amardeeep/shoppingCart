
import { useLocation } from "react-router-dom";

function Cart(){
    const location=useLocation();
    const products=location.state;
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
        </div>
    )
}
export default Cart