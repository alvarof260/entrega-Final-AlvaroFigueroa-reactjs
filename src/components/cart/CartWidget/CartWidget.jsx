import { IconCart } from "../../../Icons/IconCart";
export function CartWidget() {
  return (
    <>
      <div className="flex flex-grow basis-0 justify-end">
        <div className="hover:bg-slate-300 rounded-full flex gap-2 p-1">
          <IconCart/>
          <span className="bg-mint rounded-full px-1.5 text-gray-50">0</span>
        </div>
      </div>
    </>
  );
}
