import { useState, useEffect } from "react";
import { getProducts } from "../../Mocks/asyncMocks";
import { getProductByCategory } from "../../Mocks/asyncMocks";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const { productCategory } = useParams();
  useEffect(() => {
    const promiseAsync = productCategory ? getProductByCategory : getProducts;
    
    promiseAsync(productCategory)
      .then((response) => setProducts(response))
  }, [productCategory]);
  return (
    <section className="min-h-screen">
      <h2 className="font-bold text-4xl py-16 flex justify-center items-center">
        {greeting}
      </h2>
      <ItemList products={products}/>
    </section>
  );
}
