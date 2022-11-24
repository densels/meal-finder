import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import HomePage from "./pages/HomePage";
import mockAxios from "jest-mock-axios";

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
test("renders Home page and calls the API", () => {
  mockAxios.get.mockResolvedValue({
    data: {
      meals: [meal("1")],
    },
  });
  render(<HomePage />);
  const searchButton = screen.getByText("Search");
  expect(searchButton).toBeInTheDocument();
  expect(mockAxios.get).toBeCalledTimes(1);
});

test("types in search query and renders results", () => {
  mockAxios.get.mockResolvedValue({
    data: {
      meals: [meal("1")],
    },
  });
  render(<HomePage />);
  const searchButton = screen.getByText("Search");
  expect(searchButton).toBeInTheDocument();
  expect(mockAxios.get).toBeCalledTimes(1);

  const input = screen.getByTestId("search-input-field");
  fireEvent.change(input, { target: { value: "curry" } });
  expect(input.value).toBe("curry");
  fireEvent.click(searchButton);
});
