import { useState, useEffect } from "react";
import { getProducts } from "../../../Mocks/asyncMocks";
import { getProductByCategory } from "../../../Mocks/asyncMocks";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { productCategory } = useParams();
  useEffect(() => {
    const promiseAsync = productCategory ? getProductByCategory : getProducts;
    
    promiseAsync(productCategory)
      .then((response) => setProducts(response))
  }, [productCategory]);
  return (
    <section className="min-h-screen">
      <ItemList products={products}/>
    </section>
  );
}
