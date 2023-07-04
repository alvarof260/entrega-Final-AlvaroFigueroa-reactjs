import { createContext, useState } from "react";

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addItemToCart = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { item, quantity }]);
    } else {
      console.error("NO SE PUEDE AGREGAR MAS O NO ANDA");
    }
  };

  const isInCart = (itemId) => {
    return cart.some((i) => i.id === itemId);
  };

  const removeCart = (itemId) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItemFromCart = (itemId) => {
    const filtered = cart.filter((i) => i.id !== itemId);
    console.log(filtered);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        isInCart,
        removeCart,
        clearCart,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
