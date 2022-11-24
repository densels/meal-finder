import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MealPage from "./pages/MealPage";
import mockAxios from "jest-mock-axios";
import { MemoryRouter } from "react-router-dom";

afterEach(() => {
  // cleaning up the mess left behind the previous test
  mockAxios.reset();
});

const meal = (id) => {
  return {
    idMeal: id,
    strMeal: "Thai curry",
    strMealThumb: "",
    strArea: "Thai",
  };
};
test("renders Meal page and calls the API", () => {
  mockAxios.get.mockResolvedValue({
    data: {
      meals: [meal("1")],
    },
  });
  const route = "/meals/1";
  render(
    <MemoryRouter initialEntries={[route]}>
      <MealPage />
    </MemoryRouter>
  );
  const mealPage = screen.getByTestId("meal-page-wrapper");

  expect(mealPage).toBeInTheDocument();

  expect(mockAxios.get).toBeCalledTimes(1);
});
