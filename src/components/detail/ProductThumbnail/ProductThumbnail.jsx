export const ProductThumbnail = ({ className, images, alt = "", title }) => {
  return (
    <figure className={className}>
      <img src={images} alt={alt} title={title} />
    </figure>
  );
};
