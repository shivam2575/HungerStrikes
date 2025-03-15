import { render, screen } from "@testing-library/react";
import RestaurantCard, { RestaurantCardWithOffer } from "../ReastaurantCard";
import "@testing-library/jest-dom";
import { MOCK_DATA, MOCK_DATA_CLOSED } from "../mocks/resCardMock";

test("should render Restaurant Card component", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});

test("should render Closed Restaurant Card component", () => {
  const OfferCard = RestaurantCardWithOffer(RestaurantCard);

  render(<OfferCard resData={MOCK_DATA_CLOSED} />);

  const name = screen.getByText("CLOSED NOW");

  expect(name).toBeInTheDocument();
});
