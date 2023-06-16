import { useState } from "react";

export const ItemPreview = ({ images, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <figure
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={isHovered === false ? images[0] : images[1] } alt="" />
    </figure>
  );
};
