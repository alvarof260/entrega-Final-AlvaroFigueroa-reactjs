import { IconCart } from "../../../Icons/IconCart";
export function CartWidget() {
  return (
    <>
      <div className="flex flex-grow basis-0 justify-end gap-2 items-center px-2">
        <IconCart/>
        <span className="bg-mint rounded-full px-1.5 text-gray-50">0</span>
      </div>
    </>
  );
}
