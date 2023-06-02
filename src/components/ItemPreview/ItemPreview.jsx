export const ItemPreview = ({images, className}) => { 
  return (
    <figure>
      <img className={className} src={images[0]} alt=""/>
    </figure>
  );
};
