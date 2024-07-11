import { useOutletContext } from "react-router-dom"

function Cart(){
    const[cart]=useOutletContext();
    return (
        <div>
            Cart Content
            <ul>
                <li>{cart.map(item=>{
                    <h3>{item.title}</h3>
                })}</li>
            </ul>
        </div>
    )
}
export default Cart