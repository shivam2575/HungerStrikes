import { Sum } from "../Sum";

test("should calculate the sum of two numbers", () => {
  const res = Sum(3, 4);

  //assertion
  expect(res).toBe(7);
});
