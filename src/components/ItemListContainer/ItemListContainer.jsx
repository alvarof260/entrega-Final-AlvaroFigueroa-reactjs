/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { getProducts } from "../../Mocks/asyncMocks";
import { Item } from "../Item/Item"
export function ItemListContainer({ greeting }) {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    getProducts().then((response) => setproducts(response));
  }, []);
  console.log(products)
  return (
    <article>
      <h2 className="font-bold text-4xl h-screen flex justify-center items-center">
        {greeting}
      </h2>
      {products.map(product=><Item key={product.id} {...product}/>)}
      
    </article>
  );
}
