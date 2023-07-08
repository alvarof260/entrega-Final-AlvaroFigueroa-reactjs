import { IconXCircle } from "../../../Icons/IconXCircle"
import { CartContext } from "../../../context/CartContext"
import { useContext } from "react"
export const CartItem = (props) => {
    const { item, quantity } = props
    const { removeItemFromCart } = useContext(CartContext)
    return(
        <tr className="border-b">
            <td className="px-2">
                <button onClick={()=>{
                    removeItemFromCart(item.id)}
                    }>
                    <IconXCircle colors={"text-red-500"}/>
                </button>
            </td>
            <td className="text-center">
                {item.name}
            </td>
            <td className="text-center">
                $ {Number(item.price).toLocaleString()}
            </td>
            <td className="text-center">
                {quantity}
            </td>
        </tr>       
    )
}