import { Categories } from "../Categories/Categories"

export function NavBar(){
    const menuList = ['Computadoras','Notebooks','Accesorios']
    return(
        <nav className="navbar bg-platinum py-2 flex justify-evenly">
            <h1 className="text-2xl font-bold text-gray-700">
                <span className="text-mint">M</span>undo<span className="text-mint">G</span>amer.
            </h1>

            <Categories items={menuList}/>

        </nav>
    )
}

