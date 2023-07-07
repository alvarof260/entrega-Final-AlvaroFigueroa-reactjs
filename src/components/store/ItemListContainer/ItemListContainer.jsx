import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from "../../../firebase/firebaseconfig";

export function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { productCategory } = useParams();
  useEffect(() => {
    /*const promiseAsync = productCategory ? getProductByCategory : getProducts;
    
    promiseAsync(productCategory)
      .then((response) => setProducts(response))*/
    
    const itemsRef = productCategory 
    ? query(collection(db,"Items"), where("category", "==", productCategory))
    : collection(db,"Items")
    getDocs(itemsRef)
      .then(response => setProducts(response.docs.map(doc=>({id: doc.id, ...doc.data()}))))
  }, [productCategory]);
  return (
    <section className="min-h-screen">
      <ItemList products={products}/>
    </section>
  );
}
