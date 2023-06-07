
export function Categories({ items }) {
  return (
    <nav>
      <ul className="rounded-lg flex items-center justify-center gap-1">
        {items.map((item) => {
          return (
            <li key={`menu-${item}`}>
              <a
                className="text-gray-800 font-medium hover:bg-gray-500/10 hover:rounded-lg hover:p-2 p-2 transition-all duration-700 ease-in-out rounded-lg"
                href=""
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
