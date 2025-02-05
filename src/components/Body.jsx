import RestaurantCard from "./ReastaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  let [listOfRestaurant, setListOfRestaurant] = useState([]);
  let [filteredList, setFilteredList] = useState([]);
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    try {
      const response = await fetch(SWIGGY_API);
      if (!response.ok) {
        throw new Error("Error while fetching all restaurant list");
      }
      const jsonData = await response.json();
      setListOfRestaurant(
        jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredList(
        jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return (
      <h1>
        Looks's like your internet is off!!! Please check your internet
        connection.
      </h1>
    );
  return filteredList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-2 p-2">
      <div className="m-2 p-2 flex justify-evenly items-center">
        <div className="m-2 p-2">
          <input
            className="border p-1 rounded-lg"
            value={searchText}
            onChange={(e) => {
              console.log(searchText);
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="p-1 mx-2 bg-amber-500 hover:bg-amber-300 cursor-pointer rounded-lg"
            onClick={() => {
              console.log(
                "inside onClick callback function with searchText:",
                searchText
              );
              const filteredList = listOfRestaurant.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="border border-gray-300 cursor-pointer hover:bg-gray-200 rounded-2xl  p-2 mx-2"
            onClick={() => {
              let filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredList(filteredList);
            }}
          >
            Top rated restaurant
          </button>
          <button className="border border-gray-300 cursor-pointer hover:bg-gray-200 rounded-2xl  p-2 mx-2">
            Filter 2
          </button>
          <button className="border border-gray-300 cursor-pointer hover:bg-gray-200 rounded-2xl  p-2 mx-2">
            Filter 3
          </button>
          <button className="border border-gray-300 cursor-pointer hover:bg-gray-200 rounded-2xl  p-2 mx-2">
            Filter 4
          </button>
          <button className="border border-gray-300 cursor-pointer hover:bg-gray-200 rounded-2xl  p-2 mx-2">
            Filter 5
          </button>
          <button className="border border-gray-300 cursor-pointer hover:bg-gray-200 rounded-2xl  p-2 mx-2">
            Filter 6
          </button>
        </div>
      </div>
      <div className="m-2 p-2 flex flex-wrap justify-evenly">
        {filteredList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
