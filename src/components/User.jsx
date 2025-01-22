import { useState } from "react";

const User = ({ name, location }) => {
  const [userId, setUserId] = useState(0);
  return (
    <div className="user-card border pad-5 mar-5">
      <h1>User Info - functional</h1>
      <h2>User id: {userId}</h2>
      <h3>Name: {name} functional</h3>
      <h3>Location: {location}</h3>
      <h3>Github: shivam2575</h3>
    </div>
  );
};
export default User;
