import CurrentCity from "./components/CurrentCity";
import Forecast from "./components/Forecast";
import OtherCities from "./components/OtherCities";
import SearchBar from "./components/SearchBar";

const WeatherCard = () => (
  <div className="w-4/5 h-4/5 mx-auto rounded-3xl bg-white overflow-hidden shadow-blue-800 grid grid-cols-6 grid-rows-6">
    <div className="row-span-6 col-span-2 border-8 rounded-3xl bg-gradient-to-r from-sky-500 to-indigo-500  relative">
      <CurrentCity />
    </div>
    <div className="row-span-3 col-span-4 border-8 m-6">
      <Forecast />
    </div>
    <div className="row-span-1 col-span-4 border-8 m-6">
      <SearchBar />
    </div>
    <div className="row-span-2 col-span-4 border-8 m-6">
      <OtherCities />
    </div>
  </div>
);

export default WeatherCard;
