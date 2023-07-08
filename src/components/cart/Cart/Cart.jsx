import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { CartTable } from "../CartTable/CartTable";
import { CartSteps } from "../CartSteps/CartSteps";
import { CartActions } from "../CartActions/CartActions";

export const Cart = () => {
  const { cart, totalMount, clearCart } = useContext(CartContext);

  return (
    <section className="my-[350px] flex flex-col items-center gap-4 justify-center">
      <h1 className="text-3xl font-bold text-center">Carrito de Compras</h1>
      <CartSteps />
      {cart.length === 0 ? (<h2>No hay productos en el carrito</h2>)   :<CartTable cart={cart} />}
      <CartActions totalMount={totalMount} cleanCart={clearCart}/>
    </section>
  );
};
