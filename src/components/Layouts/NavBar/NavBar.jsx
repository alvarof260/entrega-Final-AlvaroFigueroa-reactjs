import { Categories } from "../../Categories/Categories";
import { CartWidget } from "../../CartWidget/CartWidget";

export function NavBar() {
  const menuList = ["Computadoras", "Notebooks", "Accesorios"];
  return (
    <nav className="navbar py-2 px-60 flex justify-evenly items-center border-b border-gray-200">
      <h1 className="text-2xl font-bold text-gray-700 flex-grow basis-0">
        <span className="text-mint">M</span>undo
        <span className="text-mint">G</span>amer.
      </h1>

      <Categories items={menuList} />
      <CartWidget />
    </nav>
  );
}
