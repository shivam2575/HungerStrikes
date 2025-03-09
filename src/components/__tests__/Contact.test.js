import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("render contact component on screen", () => {
  test("should render contact page heading on screen", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("should render contact page button on screen", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("should render contact page inputs on screen", () => {
    render(<Contact />);

    const inputs = screen.getAllByRole("textbox");

    //Assertion
    expect(inputs).toBeInTheDocument();
  });
});
