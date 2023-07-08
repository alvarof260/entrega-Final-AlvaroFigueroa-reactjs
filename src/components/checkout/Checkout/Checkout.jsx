import { CheckoutForm } from "../CheckoutForm/CheckoutForm";
import { useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase/firebaseconfig";

export const Checkout = () => {
  const { cart, totalMount, clearCart } = useContext(CartContext);
  const [order, setOrder] = useState(null);

  console.log(totalMount())

  const createOrder = async ({ name, email, phone }) => {
    try {
      const objOrder = {
        buyer: { name, email, phone },
        items: cart,
        total: Number(totalMount()),
      };

      const orderRef = collection(db, "Orders");

      addDoc(orderRef, objOrder).then((docRef) => {
        const orderId = docRef.id;
        setOrder(orderId);
        clearCart();
      });
    } catch (error) {
      console.error("Error al guardar la orden:", error);
    }
  };

  if (order) {
    return <h1 className="h-screen text-mint text-2xl font-bold text-center">Orden guardada correctamente con ID:{order}</h1>;
  }
  return (
    <div className="h-screen">
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};
