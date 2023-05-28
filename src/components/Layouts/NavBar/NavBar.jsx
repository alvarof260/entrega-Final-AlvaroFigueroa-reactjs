import { Categories } from "../Categories/Categories"
import { CartWidget } from "../CartWidget/CartWidget"
export function NavBar(){
    const menuList = ['Computadoras','Notebooks','Accesorios']
    return(
        <nav className="navbar py-2 flex justify-evenly border-b border-gray-200">
            <div className="flex gap-2">
                <h1 className="text-2xl font-bold text-gray-700">
                    <span className="text-mint">M</span>undo<span className="text-mint">G</span>amer.
                </h1>
                
                <Categories items={menuList}/>
            </div>
            <CartWidget/>
        </nav>
    )
}

