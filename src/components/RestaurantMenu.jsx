import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResMenuList from "./ResMenuList";

const RestauratMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const { itemCatagory } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(itemCatagory);

  return (
    <div className="flex flex-col border w-6/12 mx-auto my-2 p-2 justify-center items-center">
      <div className="rounded-2xl border m-2 p-2 bg-amber-500 shadow-2xl">
        <div className="m-2 p-2 rounded-2xl bg-white">
          <h1 className="text-center font-bold text-2xl m-2">{name}</h1>
          <h3>
            ⭐️ {avgRatingString} stars - &#40;
            <span>{totalRatingsString}&#41;</span>
          </h3>
          <h5>{costForTwoMessage}</h5>
          <h5>{sla.slaString}</h5>
          <p>{cuisines.join(", ")}</p>
        </div>
      </div>

      <div>
        <ul>
          {itemCatagory.map((item) => (
            <li key={item.card?.card?.catagoryId}>
              <ResMenuList />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestauratMenu;
