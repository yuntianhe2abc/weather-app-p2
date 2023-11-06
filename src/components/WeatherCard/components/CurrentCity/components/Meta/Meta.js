import MetaItem from "./components/MetaItem";
import humidity from "../Meta/assets/meta_icon/humidity.svg";
import airQuality from "../Meta/assets/meta_icon/PM2.5.svg";
import wind from "../Meta/assets/meta_icon/wind_speed.svg";
import somatosensory from "../Meta/assets/meta_icon/Somatosensory.svg";

const Meta = () => (
  <div className="flex justify-between bg-slate-50 rounded-2xl w-5/6 p-4">
    <MetaItem imageUrl={wind} value="9km/h" />
    <MetaItem imageUrl={humidity} value="85%" />
    <MetaItem imageUrl={airQuality} value="75ug" />
    <MetaItem imageUrl={somatosensory} value="26°" />
  </div>
);

export default Meta;
