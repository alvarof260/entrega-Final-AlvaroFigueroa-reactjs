import { useState } from "react";
import { ProductThumbnail } from "../../detail/ProductThumbnail/ProductThumbnail";

export const ItemPreview = ({ images, className, alt = "", title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {!isHovered ? <ProductThumbnail 
        className={className}
        images={images[0]}
        alt={alt}
        title={title}
      /> : 
      <ProductThumbnail 
        className={className}
        images={images[1]}
        alt={alt}
        title={title}
      />}
    </div>
  );
};
