import React from "react";
import { Meal } from "../../interfaces/Meal";
import styled from "styled-components";

interface MealCardProps {
  meal: Meal;
  onClick: (id: string) => void;
}

const MealCard = ({ meal, onClick }: MealCardProps) => (
  <CardWrapper onClick={() => onClick(meal.idMeal)}>
    <CardImage background={meal.strMealThumb || ""} />
    <CardTextWrapper>
      <CardTitle id="mealName" data-test-id="mealNameText">
        {meal.strMeal}
      </CardTitle>
    </CardTextWrapper>
    <CardText id="mealOrigin" data-test-id="mealOriginText">
      {meal.strArea}
    </CardText>
  </CardWrapper>
);

export default MealCard;

const CardWrapper = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 250px 50px 50px;
  grid-template-areas: "image" "title" "text";
  border-radius: 20px;
  box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.9);
  cursor: pointer;
  :hover {
    background: #e9c46a;
  }
`;

const CardImage = styled.div<{ background: string }>`
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  background-size: cover;
`;

const CardTextWrapper = styled.div`
  grid-area: title;
  margin: 25px;
`;

const CardTitle = styled.h2`
  margin-top: 0px;
  font-size: 1.5rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0 auto;
  text-align: center;
  padding: 8px;
  background-clip: text;
  -webkit-background-clip: text;
`;

const CardText = styled.p`
  grid-area: "text";
  color: grey;
  font-size: 1rem;
  margin: 0 auto;
  padding: 16px;
  font-weight: 300;
`;
