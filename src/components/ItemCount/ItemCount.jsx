import { useState } from "react";
import { Button } from "../commons/button/Button";
export const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);
  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-row items-center gap-2">
      <label htmlFor="Quantity" className="sr-only">
        {" "}
        Quantity{" "}
      </label>

      <div className="flex items-center border border-gray-200 rounded w-28">
        <button
          type="button"
          className="w-10 h-10 leading-10 text-mint transition hover:opacity-75"
          onClick={decrement}
        >
          -
        </button>

        <input
          type="number"
          id="Quantity"
          value={quantity}
          onChange={() => onAdd(quantity)}
          className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
        />

        <button
          type="button"
          className="w-10 h-10 leading-10 text-mint transition hover:opacity-75"
          onClick={increment}
        >
          +
        </button>
      </div>
      <Button onClick={() => onAdd(quantity)} stock={stock} text="Agregar al Carrito" className={"border rounded p-2 w-full flex justify-center items-center gap-1 hover:bg-mint hover:text-white  transition-all ease-linear duration-500"}/>
    </div>
  );
};
