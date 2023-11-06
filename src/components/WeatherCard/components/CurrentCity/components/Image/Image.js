const Image = ({ imageUrl, alt = "Image Description", className }) => {
  return <img src={imageUrl} alt={alt} className={className} />;
};
export default Image;
