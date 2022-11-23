import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { getMealById } from "../repositories/mealRepository";
import MealCard from "../components/MealCard/MealCard";

const MealPage = () => {
  const { mealId } = useParams();
  console.log("mealID", mealId);
  const { data, loading } = useAxios({
    repositoryFunction: getMealById,
    props: mealId,
  });

  return (
    <div>
      {loading && <p>Loading data</p>}
      {data && (
        <MealCard
          meal={data.meals[0]}
          onClick={() => console.log("clicked on item")}
        />
      )}
    </div>
  );
};

export default MealPage;
