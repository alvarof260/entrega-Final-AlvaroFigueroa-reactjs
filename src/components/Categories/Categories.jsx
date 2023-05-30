/* eslint-disable react/prop-types */
export function Categories({ items }) {
  return (
    <ul className="rounded-lg flex gap-2 items-center justify-center">
      {items.map((item) => {
        return (
          <li key={`menu-${item}`}>
            <a
              className="text-gray-800 font-medium hover:text-gray-50 hover:bg-mint hover:rounded-lg hover:p-2 p-2 transition-all duration-700 ease-in-out rounded-lg"
              href=""
            >
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
