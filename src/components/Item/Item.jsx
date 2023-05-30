import { ItemPreview } from "../ItemPreview/ItemPreview";
export const Item = (props) => {
  const {images,name,stock} = props
  
  return (
    <article className="border-slate-300 bg-white border rounded p-2 max-w-[340px] max-h-[500px]">
      <ItemPreview images={images}/>
      <div>
        <h2 title={name} className="text-black font-bold pb-4 h-[26px] overflow-hidden">{name}</h2>
        <span>quedan {stock} productos </span>
        <div className="flex justify-between items-center py-2">
          <span className="text-mint">$2500</span>
          <button className="bg-mint text-white transition-all ease-in duration-300 p-1 rounded hover:bg-opac">comprar</button>
        </div>
      </div>
    </article>
  );
};
