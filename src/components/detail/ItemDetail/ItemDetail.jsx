import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { ItemInfo } from "../ItemInfo/ItemInfo";
import { ProductDescription } from "../ProductDescription/ProductDescription";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IconCart } from "../../../Icons/IconCart"
import { ProductThumbnail } from "../ProductThumbnail/ProductThumbnail"

export const ItemDetail = ({
  id,
  name,
  category,
  brand,
  images = [],
  description,
  price,
  currentPrice,
  stock,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItemToCart } = useContext(CartContext)
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
    const item = {id, name, price, stock}
    addItemToCart(item, quantity)
  };
  return (
    <article className="h-screen w-screen px-60 flex flex-row gap-4 justify-center items-center">
      <ProductThumbnail className="w-[600px] rounded" images={images[0]} />
      <div className="flex flex-col justify-center gap-8">
        <ItemInfo
          name={name}
          price={price}
          currentPrice={currentPrice}
          stock={stock}
          category={category}
          brand={brand}
        />
        <ProductDescription description={description} />
        {quantityAdded > 0 ? (
          <Link
            to={"/cart"}
            className={
              "border rounded p-2 w-full flex justify-center items-center gap-1 hover:bg-mint hover:text-white  transition-all ease-linear duration-500"
            }
          >
            Ir al Carrito <IconCart/>
          </Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
        )}
      </div>
    </article>
  );
};
