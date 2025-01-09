import RestaurantCard from "./ReastaurantCard";
import { resList } from "../utils/dummyData";
import { useState } from "react";

const Body = () => {
  let [listOfRestaurant, setListOfRestaurant] = useState(resList);
  return (
    <div className="body">
      <div className="search">
        <button
          className="top-rated-btn"
          onClick={() => {
            let filteredList = listOfRestaurant.filter(
              (res) => res.info.rating.rating_text > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
