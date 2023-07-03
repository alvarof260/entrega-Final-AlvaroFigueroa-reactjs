import { IconXCircle } from "../../../Icons/IconXCircle"

export const CartItem = (props) => {
    const { item, quantity } = props
    return(
        <tr>
            <td>
                <button onClick={()=>{console.log("clickeaste!")}}>
                    <IconXCircle colors={"text-red-500"}/>
                </button>
            </td>
            <td>
                {item.name}
            </td>
            <td>
                {item.price}
            </td>
            <td>
                {quantity}
            </td>
        </tr>       
    )
}