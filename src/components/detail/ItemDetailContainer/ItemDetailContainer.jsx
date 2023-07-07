import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseconfig";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const itemIdRef = doc(db, "Items", productId);
    getDoc(itemIdRef).then((response) => {
      const newItem = {
        id: response.id,
        ...response.data(),
      };
      setProduct(newItem);
    });
    /*getProductById(productId)
      .then((response) => setProduct(response))*/
  }, [productId]);
  return (
    <section>
      <ItemDetail {...product} />
    </section>
  );
};
