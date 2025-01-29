import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  //fetch data using resId
  const fetchData = async () => {
    const response = await fetch(MENU_API + resId);
    const jsonData = await response.json();
    const info = jsonData?.data;
    console.log(info);
    setResInfo(info);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return resInfo;
};
export default useRestaurantMenu;
