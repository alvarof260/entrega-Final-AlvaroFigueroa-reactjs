import { useState, useEffect } from "react";
import { getProducts } from "../../Mocks/asyncMocks";
import { ItemList } from "../ItemList/ItemList";

export function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(response => setProducts(response));
  }, []);
  return (
    <section>
      <h2 className="font-bold text-4xl py-16 flex justify-center items-center">
        {greeting}
      </h2>
      <ItemList products={products}/>
    </section>
  );
}
