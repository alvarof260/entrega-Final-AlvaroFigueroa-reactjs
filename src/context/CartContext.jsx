import { createContext, useState } from "react";

export const CartContext = createContext({cart:[]});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart)

  const addItemToCart = (item, quantity) => {
    if(!isItemInCart(item.id)){ 
      setCart([...cart, {item,quantity}])
      console.log("paso!!!")
    }else{
      console.error("NO SE PUEDE AGREGAR MAS O NO ANDA")
    }
  };

  const isItemInCart = (itemId) => {
    return cart.some(i=>i.id === itemId)
  }
  return (
    <CartContext.Provider value={{cart, setCart , addItemToCart, isItemInCart}}>
      {children}
    </CartContext.Provider>
  );
};
