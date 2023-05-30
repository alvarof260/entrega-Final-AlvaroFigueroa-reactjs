import { Item } from "../Item/Item"
export const ItemList = ({products}) => {
    return (
        <section className="">
            {products.map(product => <Item key={product.id} {...product}/>)}
        </section>
    )
}