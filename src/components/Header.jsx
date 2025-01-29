import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-items">
            Online status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="nav-items">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="nav-items">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="nav-items">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="nav-items">Cart</li>
          <li className="nav-items">
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
