import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import { CartTable } from "../CartTable/CartTable";
import { CartSteps } from "../CartSteps/CartSteps";

export const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <section className="h-screen px-56 my-40 flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold text-center">Carrito de Compras</h1>
      <CartSteps />
      <CartTable cart={cart} />
    </section>
  );
};
