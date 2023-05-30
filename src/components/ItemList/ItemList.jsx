import { Item } from "../Item/Item"
export const ItemList = ({products}) => {
    return (
        <section className="flex flex-row flex-wrap gap-4 px-40 mb-5">
            {products.map(product => <Item key={product.id} {...product}/>)}
        </section>
    )
}