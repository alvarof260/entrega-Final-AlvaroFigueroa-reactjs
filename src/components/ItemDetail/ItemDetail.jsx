import { ItemPreview } from "../ItemPreview/ItemPreview"
import { ItemInfo } from "../ItemInfo/ItemInfo"
import { ProductDescription } from "../ProductDescription/ProductDescription"

export const ItemDetail = ({id, name, category, brand, images = [], description, price, currentPrice, stock}) => {
    return(
        <article className="h-screen px-60 justify-center">
            <div className="flex justify-center gap-8 border ">
                <ItemPreview className="w-[600px] rounded" images={images}/>
                <ItemInfo name={name} price={price} currentPrice={currentPrice} stock={stock}/>
            </div>
            <footer>
                <ProductDescription description={description}/>
            </footer>
        </article>
    )
}