import { useState } from "react";
import { ProductThumbnail } from "../../detail/ProductThumbnail/ProductThumbnail";

export const ItemPreview = ({ images, className, alt = "", title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ProductThumbnail 
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        images={images[0]}
        alt={alt}
        title={title}
      /> 
      <ProductThumbnail 
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        images={images[1]}
        alt={alt}
        title={title}
      />
    </div>
  );
};
