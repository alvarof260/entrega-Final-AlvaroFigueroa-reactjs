import { useState, useEffect } from "react";
import { getProductById } from "../../Mocks/asyncMocks";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [product, setProducts] = useState(null);

  useEffect(() => {
    getProductById("NOT2396")
      .then((response) => setProducts(response))
  }, []);
  console.log(product);
  return (
    <section>
      <ItemDetail  {...product} />
    </section>
  );
};
