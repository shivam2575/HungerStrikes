import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestauratMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(MENU_API + resId);
    const jsonData = await response.json();
    const info = jsonData?.data;
    console.log(info);
    setResInfo(info);
  };

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

  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h3>
        {avgRatingString} stars - &#40;<span>{totalRatingsString}&#41;</span>
      </h3>
      <h5>{costForTwoMessage}</h5>
      <h5>{sla.slaString}</h5>
      <p>{cuisines.join(", ")}</p>
      <div>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - ${item.card.info.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestauratMenu;
