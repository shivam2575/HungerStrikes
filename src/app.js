import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import Shimmer from "./components/Shimmer";
import Usercontext from "./utils/Usercontext";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "shivam",
      password: "123",
    };
    setUserName(data.name);
  }, []);
  return (
    <Usercontext.Provider value={{ username: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Usercontext.Provider>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/HungerStrikes",
    element: <AppLayout />,
    children: [
      {
        index: true, // This makes it the default route inside "/HungerStrikes"
        element: <Body />,
      },
      {
        path: "about", // Remove leading `/`
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
