import { useState, useEffect } from "react";
import { getProductById } from "../../../Mocks/asyncMocks";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const {productId} = useParams()

  useEffect(() => {
    getProductById(productId)
      .then((response) => setProduct(response))
  }, [productId]);
  return (
    <section>
      <ItemDetail  {...product} />
    </section>
  );
};
