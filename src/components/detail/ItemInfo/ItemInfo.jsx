import { Price } from "../../store/Price/Price";
export const ItemInfo = ({
  name,
  price,
  currentPrice,
  stock,
  category,
  brand,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-3xl w-[350px]" title={name}>
        {name}
      </h2>
      <div className="flex flex-row gap-2">
        <span className="bg-mint text-white rounded-full px-1">{category}</span>
        <span className="bg-mint text-white rounded-full px-1">{brand}</span>
      </div>
      <div>
        <p>Precio del producto:</p>
        <Price price={price} currentPrice={currentPrice} />
      </div>
      <div>
        <p>
          Stock Disponible: <span>{stock}</span>
        </p>
      </div>
    </div>
  );
};
