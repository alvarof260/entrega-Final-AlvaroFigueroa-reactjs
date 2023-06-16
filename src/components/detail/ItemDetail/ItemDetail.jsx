import { ItemPreview } from "../../store/ItemPreview/ItemPreview";
import { ItemInfo } from "../ItemInfo/ItemInfo";
import { ProductDescription } from "../ProductDescription/ProductDescription";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({
  name,
  category,
  brand,
  images = [],
  description,
  price,
  currentPrice,
  stock,
}) => {
  return (
    <article className="h-screen w-screen px-60 flex flex-row gap-4 justify-center items-center">
      <ItemPreview className="w-[600px] rounded" images={images} />
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
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(quantity) => console.log(`Cantidad agregada:${quantity}`)}
        />
      </div>
    </article>
  );
};
