import React from "react";
import { useRouteError } from "react-router";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>OOPS..!!!</h1>
      <h3>Something went wrong..!!</h3>
      <h4>
        {err.status}: {err.statusText}
      </h4>
      <p>{err.data}</p>
    </div>
  );
};
export default Error;
