import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MealList from "../components/MealList/MealList";
import SearchBar from "../components/SearchBar/SearchBar";
import useAxios from "../hooks/useAxios";
import { getMeals } from "../repositories/mealRepository";

const mealTimerProps = ["breakfast", "lunch", "dinner"];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, loading } = useAxios({
    repositoryFunction: getMeals,
    props: searchQuery,
  });

  const handleSearchSubmit = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {}, []);

  return (
    <PageWraper data-testid="home-page-wrapper">
      <div>
        <PageTitle data-testid="home-page-title">
          What's for{" "}
          {mealTimerProps[Math.floor(Math.random() * mealTimerProps.length)]}...
        </PageTitle>
        <SearchBar onSearchSubmit={handleSearchSubmit} isLoading={loading} />
      </div>
      {data && <MealList items={data?.meals} />}
    </PageWraper>
  );
}

const PageWraper = styled.div`
  width: 100vw;
  height: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* overflow: hidden; */
`;

const PageTitle = styled.h2`
  color: #e9c46a;
`;
