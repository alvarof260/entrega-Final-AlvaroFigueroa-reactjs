import { IconXCircle } from "../../../Icons/IconXCircle"
import { CartContext } from "../../../context/cartContext"
import { useContext } from "react"
export const CartItem = (props) => {
    const { item, quantity } = props
    const { removeItemFromCart } = useContext(CartContext)
    return(
        <tr className="border-b">
            <td className="px-2">
                <button onClick={()=>{
                    const itemId = item.id
                    removeItemFromCart(itemId)}
                    }>
                    <IconXCircle colors={"text-red-500"}/>
                </button>
            </td>
            <td className="text-center">
                {item.name}
            </td>
            <td className="text-center">
                {item.price}
            </td>
            <td className="text-center">
                {quantity}
            </td>
        </tr>       
    )
}