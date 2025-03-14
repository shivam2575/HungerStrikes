import { useContext } from "react";
import { IMAGE_API } from "../utils/constants";
import Usercontext from "../utils/Usercontext";

const RestaurantCard = (props) => {
  const { username } = useContext(Usercontext);
  const { resData } = props;
  console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  const { slaString } = sla;
  return (
    <div className="bg-white w-60 mx-2 p-1 hover:shadow-lg rounded-2xl hover:scale-90 transition-transform duration-300 cursor-pointer">
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
        <h5>{username}</h5>
      </div>
    </div>
  );
};

export const RestaurantCardWithOffer = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="bg-gray-300 rounded-2xl m-2 p-2">
        <label className="bg-black text-white absolute rounded-lg m-1 p-1 z-40">
          CLOSED NOW
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
