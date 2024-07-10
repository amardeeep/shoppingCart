import { useOutletContext } from "react-router-dom"
import CartItem from "./cartItem"
const Cart=()=>{
    const [cartItems]=useOutletContext()
    return <div>
        <ul>
        {cartItems&&cartItems.map(cartItem=>{return <CartItem key={cartItem.id} name={cartItem.title} />
        })}
        </ul>
    </div>
}
export default Cart