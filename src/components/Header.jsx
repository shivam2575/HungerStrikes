import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex m-2 p-2 justify-between items-center shadow-lg rounded-md">
      <div className="w-25 h-25">
        <img className="hover:cursor-pointer object-contain" src={LOGO_URL} />
      </div>
      <div className="m-2 p-2">
        <ul className="flex p-2">
          <li className="mx-4 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
            Online status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="mx-4 p-2 hover:bg-gray-200 rounded-md">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="mx-4 p-2 hover:bg-gray-200 rounded-md">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="mx-4 p-2 hover:bg-gray-200 rounded-md">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="mx-4 p-2 hover:bg-gray-200 rounded-md">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="mx-4 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
            Cart
          </li>
          <li className="mx-4 p-2 bg-amber-500  hover:bg-amber-300 cursor-pointer rounded-md">
            <button
              className="login-btn"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
