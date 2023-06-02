import { Price } from "../Price/Price";
export const ItemInfo = ({ name, price, currentPrice, stock }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-3xl w-[350px]">{name}</h2>
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
