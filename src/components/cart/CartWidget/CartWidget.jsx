import { useContext } from "react";
import { IconCart } from "../../../Icons/IconCart";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

export function CartWidget() {
  const { countItemsInCart } = useContext(CartContext)
  return (
    <>
      <Link to={'/cart'} className="flex flex-grow basis-0 justify-end">
        <div className="rounded-full flex gap-2 p-1 hover:bg-gray-500/10 transition-all duration-700 ease-in-out">
          <IconCart/>
          <span className="bg-mint rounded-full w-6 h-6 text-center text-gray-50">{countItemsInCart()}</span>
        </div>
      </Link>
    </>
  );
}
