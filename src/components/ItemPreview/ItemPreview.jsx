export const ItemPreview = ({images}) => { 
  return (
    <figure className="w-[320px]">
      <img src={images[0]} alt=""/>
    </figure>
  );
};
