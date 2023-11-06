const WeatherIcon = ({ imageUrl, alt = "default alt", className }) => (
  <img className={className} src={imageUrl} alt={alt} />
);

export default WeatherIcon;
