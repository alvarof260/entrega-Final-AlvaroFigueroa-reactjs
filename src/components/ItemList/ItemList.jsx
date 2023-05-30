import { Item } from "../Item/Item"
export const ItemList = ({products}) => {
    return (
        <section className="flex flex-row flex-wrap justify-between gap-4 px-40">
            {products.map(product => <Item key={product.id} {...product}/>)}
        </section>
    )
}