import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

test("should render header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const btnElement = screen.getByRole("button");

  expect(btnElement).toBeInTheDocument();
});

test("should render header component with logo image", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const logoImg = screen.getByRole("img");
  expect(logoImg).toBeInTheDocument();
});

test("should render header component with logout button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const btnElement = screen.getByRole("button", { name: "Login" });

  fireEvent.click(btnElement);

  const logoutBtn = screen.getByRole("button", { name: "Logout" });

  expect(logoutBtn).toBeInTheDocument();
});

test("should render header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const groceryElement = screen.getByText("Grocery");

  expect(groceryElement).toBeInTheDocument();
});
