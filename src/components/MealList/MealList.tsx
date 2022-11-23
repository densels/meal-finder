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
    <div>
      <ul>
        {items &&
          items.map((item, index) => (
            <MealCard key={index} meal={item} onClick={handleItemClick} />
          ))}
      </ul>
    </div>
  );
};

export default MealList;
