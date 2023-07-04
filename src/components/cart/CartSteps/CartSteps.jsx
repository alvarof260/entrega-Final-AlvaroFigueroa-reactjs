export const CartSteps = () => {
  return (
    <div>
      <h2 className="sr-only">Steps</h2>

      <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100 w-[700px]">
        <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
          <li className="flex items-center gap-2 bg-slate-50 p-2">
            <span className="h-6 w-6 rounded-full  bg-mint text-center text-[10px]/6 font-bold text-white">
              1
            </span>

            <span className="hidden sm:block"> Carrito </span>
          </li>

          <li className="flex items-center gap-2 bg-slate-50 p-2">
            <span className="h-6 w-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold">
              2
            </span>

            <span className="hidden sm:block"> Detalles de Pago </span>
          </li>

          <li className="flex items-center gap-2 bg-slate-50 p-2">
            <span className="h-6 w-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold">
              3
            </span>

            <span className="hidden sm:block"> Metodos de Pago </span>
          </li>
        </ol>
      </div>
    </div>
  );
};
