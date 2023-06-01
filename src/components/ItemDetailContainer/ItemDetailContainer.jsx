import { useState, useEffect } from "react";
import { getProductById } from "../../Mocks/asyncMocks";

export const ItemDetailContainer = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProductById("NOT1825")
      .then((response) => setProducts(response));
  }, []);
  return(
    <section>
        
    </section>
  ) 
};
