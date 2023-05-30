import { ItemPreview } from "../ItemPreview/ItemPreview";
import { ItemCount } from "../ItemCount/ItemCount";
export const Item = (props) => {
  const {images,name,stock} = props
  
  return (
    <article className="border-slate-300 bg-white border rounded p-2 max-w-[340px] max-h-[500px]">
      <ItemPreview images={images}/>
      <div>
        <h2 title={name} className="text-black font-bold pb-4 h-[26px] overflow-hidden">{name}</h2>
        <ItemCount initial={1} stock={stock} onAdd={(quantity)=> console.log(`Cantidad agregada:${quantity}`)}/>
      </div>
    </article>
  );
};
