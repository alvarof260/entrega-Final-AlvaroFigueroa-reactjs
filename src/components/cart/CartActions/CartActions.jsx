import { IconBack } from "./../../../Icons/IconBack";
import { IconXMark } from "./../../../Icons/IconXMark";
import { IconCart } from "./../../../Icons/IconCart";
import { Link } from "react-router-dom";

export const CartActions = ({ totalMount, cleanCart }) => {
  return (
    <div className="flex flex-row w-[950px] justify-between">
      <div className="flex flex-row items-center flex-grow gap-2">
        <Link
          to={"/"}
          className="border rounded p-2 w-76 h-10 flex justify-center items-center gap-1 hover:bg-mint  hover:text-white  transition-all ease-linear duration-500"
        >
          <IconBack /> Seguir Comprando
        </Link>
        <button
          className="border rounded p-2 w-48 flex justify-center items-center gap-1 hover:bg-red-500  hover:text-white  transition-all ease-linear duration-500"
          onClick={() => {
            cleanCart();
          }}
        >
          <IconXMark /> Limpiar Carrito
        </button>
      </div>
      <div className="flex flex-row items-center flex-grow gap-2">
        <Link 
         to={"/checkout"} 
         className="border rounded p-2 w-96 flex justify-center items-center gap-1 hover:bg-mint hover:text-white  transition-all ease-linear duration-500 disabled" 
        >
          <IconCart /> Detalles de Pago
        </Link>

        <div className="w-full text-center">
          <span className="text-center">
            $ {Number(totalMount()).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};
