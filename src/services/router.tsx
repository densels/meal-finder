import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MealPage from "../pages/MealPage";

export const ROUTES = {
  home: "/",
  mealPage: "meals/",
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "meals/:mealId",
    element: <MealPage />,
  },
]);
