import { ItemPreview } from "../ItemPreview/ItemPreview";
import { ItemCount } from "../../detail/ItemCount/ItemCount";
import { Price } from "../Price/Price";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
export const Item = (props) => {
  const {images,name,stock, price, currentPrice, id} = props
  const { addItemToCart } = useContext(CartContext)
  const handleOnAdd = (quantity) => {
    const item = {id, name, price, stock}
    addItemToCart(item, quantity)
  };
  return (
    <div className="border-slate-300 bg-white border rounded p-2 max-w-[340px] max-h-[500px]">
      <Link to={`/item/${id}`} className="cursor-pointer">
        <ItemPreview className="w-[320px] h-[320px] relative" images={images}/>
      </Link>
        <div className="flex gap-4 flex-col">
          <h2 title={name} className="text-black font-bold pb-4 h-[26px] overflow-hidden">{name}</h2>
          <Price price={price} currentPrice={currentPrice}/>
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
        </div>
    </div>
  );
};
