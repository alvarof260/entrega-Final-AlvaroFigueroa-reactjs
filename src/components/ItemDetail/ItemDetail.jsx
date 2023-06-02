import { ItemPreview } from "../ItemPreview/ItemPreview"

export const ItemDetail = ({id, name, category, brand, images, description, price, currentPrice, stock}) => {
    return(
        <article>
            <ItemPreview images={images[0]}/>
        </article>
    )
}