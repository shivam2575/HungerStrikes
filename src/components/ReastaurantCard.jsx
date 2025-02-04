import { IMAGE_API } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  const { slaString } = sla;
  return (
    <div className="w-8 h-8">
      <img className="" alt="res-logo" src={IMAGE_API + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{slaString}</h5>
      <h5>{avgRating} stars</h5>
      <h6>{costForTwo}</h6>
    </div>
  );
};

export default RestaurantCard;
