import Image from "../../../Image";
const MetaItem = ({ imageUrl, value, alt = "Image Description" }) => {
  return (
    <div className="flex flex-col justify-center">
      <Image imageUrl={imageUrl} value={value} alt={alt} />
      {value}
    </div>
  );
};

export default MetaItem;
