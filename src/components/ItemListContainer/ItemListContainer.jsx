/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { getProducts } from "../../Mocks/asyncMocks";
import { ItemList } from "../ItemList/ItemList";
export function ItemListContainer({ greeting }) {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    getProducts().then(response => setproducts(response));
  }, []);
  return (
    <article>
      <h2 className="font-bold text-4xl h-screen flex justify-center items-center">
        {greeting}
      </h2>
      <ItemList products={products}/>
    </article>
  );
}
