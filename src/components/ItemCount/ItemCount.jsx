import { useState } from "react";
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
          defaultValue={quantity}
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
      <button
        className="border rounded p-2 w-full flex justify-center items-center gap-1 hover:bg-mint hover:text-white  transition-all ease-linear duration-500"
        onClick={() => onAdd(quantity)}
        disabled={!stock}
      >
        Agregar al Carrito
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </button>
    </div>
  );
};
