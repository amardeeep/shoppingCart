
import { useLocation } from "react-router-dom";

function Cart(){
    const location=useLocation();
    const arraycart=location.state;
    console.log(arraycart)
    return (
        <div>
            Cart Content
            <ul>
                <li>{arraycart&&arraycart.map(item=>{
                    return (
                    <h3 key={item.item.id}>{item.item.title}</h3>)
                })}</li>
            </ul>
        </div>
    )
}
export default Cart