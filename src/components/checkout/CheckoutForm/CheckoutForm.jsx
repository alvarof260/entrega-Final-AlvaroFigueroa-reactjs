import { useState } from "react";

export const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const confirmForm = (e) => {
    e.preventDefault();

    const checkoutData = { name, email, phone };
    onConfirm(checkoutData);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={confirmForm}
        className="flex flex-col w-96 gap-4"
      >
        <label htmlFor="name" className="font-bold text-mint">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="rounded-md border-2 border-l-slate-400"
        />
        <label htmlFor="ema" className="font-bold text-mint">Email</label>
        <input
          type="email"
          name="email"
          id="ema"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="rounded-md border-2 border-l-slate-400"
        />
        <label htmlFor="num" className="font-bold text-mint">Numero de Celular</label>
        <input
          type="text"
          name="number"
          id="num"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          className="rounded-md border-2 border-l-slate-400"
        />
        <input type="submit" value="Generar Orden" className="border rounded p-2 w-76 h-10 flex justify-center items-center gap-1 hover:bg-mint  hover:text-white  transition-all ease-linear duration-500"/>
      </form>
    </div>
  );
};
