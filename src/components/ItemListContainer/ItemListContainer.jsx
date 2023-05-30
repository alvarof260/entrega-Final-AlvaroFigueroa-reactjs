/* eslint-disable react/prop-types */
export function ItemListContainer ({greeting}) {
    return(
        <article>
            <h2 className="font-bold text-4xl h-screen flex justify-center items-center">{greeting}</h2>
        </article>
    )
}