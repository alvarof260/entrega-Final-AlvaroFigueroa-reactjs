import { createContext, useState } from "react";

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addItemToCart = (item, quantity) => {
    const updateQuantity = (item, quantity) => {
      const itemInCart = cart.find((i) => i.item.id === item.id);
      
      quantity + itemInCart.quantity >= item.stock
        ? (itemInCart.quantity = item.stock)
        : (itemInCart.quantity += quantity);

      setCart((prev) =>
        prev.filter((i) => i.item.id !== item.id).concat(itemInCart)
      );
    };

    const isInCart = (itemId) => {
      return cart.some((i) => i.item.id === itemId);
    };
    isInCart(item.id)
      ? updateQuantity(item, quantity)
      : setCart((prev) => [...prev, { item, quantity }]);
  };

  const removeCart = (itemId) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItemFromCart = (itemId) => {
    const filtered = cart.filter((i) => i.item.id !== itemId);
    setCart(filtered);
  };

  const countItemsInCart = () => {
    const countItems = cart.reduce((acc, item)=>acc + item.quantity,0)
    return countItems
  }

  const totalMount = () => {
    const total = cart.reduce((acc, item)=> acc + item.item.price * item.quantity,0)
    return total
  }



  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeCart,
        clearCart,
        removeItemFromCart,
        countItemsInCart,
        totalMount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
