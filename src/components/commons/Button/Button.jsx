import { IconBag } from "../../../Icons/IconBag";

export const Button = ({ onClick, stock, text, className }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={!stock}
    >
      {text}
      <IconBag/>
    </button>
  );
};
