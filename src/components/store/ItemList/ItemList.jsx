import { Item } from "../Item/Item"
export const ItemList = ({products}) => {
    return (
        <section className="flex flex-row items-center justify-center flex-wrap gap-4 px-56 my-16">
            {products.map(product => <Item key={product.id} {...product}/>)}
        </section>
    )
}