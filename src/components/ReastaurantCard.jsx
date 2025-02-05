import { IMAGE_API } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  const { slaString } = sla;
  return (
    <div className="w-60 mx-2 p-1 hover:shadow-lg rounded-2xl hover:scale-90 transition-transform duration-300 cursor-pointer">
      <div>
        <img
          className="rounded-2xl w-58 h-48 m-1 p-1"
          alt="res-logo"
          src={IMAGE_API + cloudinaryImageId}
        />
      </div>
      <div className="m-1 p-1">
        <p className="p-1 font-bold text-lg font-sans">{name}</p>
        <p className="p-1 font-light text-md font-sans text-black">
          ⭐️ {avgRating} • {slaString}
        </p>
        <p className="p-1 font-light text-sm font-sans text-gray-600">
          {cuisines.join(", ")}
        </p>
        <h5></h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
