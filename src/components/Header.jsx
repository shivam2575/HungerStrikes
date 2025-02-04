import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex m-2 p-2 justify-between items-center shadow-lg rounded-md">
      <div className="w-28 h-28">
        <img className="hover:cursor-pointer" src={LOGO_URL} />
      </div>
      <div className="m-2 p-2">
        <ul className="flex p-2">
          <li className="mx-4 px-2">
            Online status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="mx-4 px-2">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="mx-4 px-2">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="mx-4 px-2">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="mx-4 px-2">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="mx-4 px-2">Cart</li>
          <li className="mx-4 px-2">
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
