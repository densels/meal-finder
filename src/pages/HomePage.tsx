import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MealList from "../components/MealList/MealList";
import SearchBar from "../components/SearchBar/SearchBar";
import useAxios from "../hooks/useAxios";
import { getMeals } from "../repositories/mealRepository";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, loading } = useAxios({
    repositoryFunction: getMeals,
    props: searchQuery,
  });

  const handleSearchSubmit = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    console.log("loading first time");
  }, []);
  return (
    <PageWraper>
      <SearchBar onSearchSubmit={handleSearchSubmit} isLoading={loading} />
      {data && <p>{data.meals[0].idMeal}</p>}
      {data && <MealList items={data?.meals} />}
    </PageWraper>
  );
}

const PageWraper = styled.div`
  display: flex;
  flex-direction: table-column;
  min-height: 100vh;
`;
