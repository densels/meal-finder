import React from "react";
import { Meal } from "../../interfaces/Meal";
import styled from "styled-components";

interface MealCardProps {
  meal: Meal;
  onClick: (id: string) => void;
}

const MealCard = ({ meal, onClick }: MealCardProps) => (
  <CardWrapper onClick={() => onClick(meal.idMeal)}>
    <img src={meal.strMealThumb || ""} alt="meal thumbnail" />
    <label id="mealName" data-test-id="mealNameText">
      {meal.strMeal}
    </label>
    <label id="mealOrigin" data-test-id="mealOriginText">
      {meal.strArea}
    </label>
  </CardWrapper>
);

export default MealCard;

const CardWrapper = styled.li``;
