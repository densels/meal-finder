import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Meal } from "../../interfaces/Meal";
import MealCard from "../MealCard/MealCard";
import { ROUTES } from "../../services/router";

interface MealListProps {
  items: Meal[];
}
const MealList = ({ items }: MealListProps) => {
  const navigate = useNavigate();
  const handleItemClick = (id: string) => {
    console.log("clicked on single meal", id);
    navigate(`${ROUTES.mealPage}${id}`);
  };

  return (
    <MealsGrid>
      {items &&
        items.map((item, index) => (
          <MealCard key={index} meal={item} onClick={handleItemClick} />
        ))}
    </MealsGrid>
  );
};

export default MealList;

const MealsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 350px));
  grid-auto-columns: minmax(250px, auto);
  gap: 16px;
  @media (max-width: 950px) {
    grid-template-columns: repeat(2, minmax(300px, 350px));
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, minmax(300px, 350px));
  }
`;
