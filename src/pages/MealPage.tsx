import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const MealPage = () => {
  const { mealId } = useParams();
  console.log("meal id", mealId);
  return <div>MealPage{mealId}</div>;
};

export default MealPage;
