import { useState } from "react";

export const useQuantity = ({initial, stock}) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
     if(stock > quantity) setQuantity(quantity + 1)
  } 

  const decrement = () => {
    if(quantity > initial)  setQuantity(quantity - 1)
  }

  return {quantity, setQuantity, increment, decrement}
};
