import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar/SearchBar";
// import useAxios from "../hooks/useAxios";
import { getRandomMeal, getMealByName } from "../repositories/mealRepository";

const HomePage = () => {
  //const [searchQuery, setSearchQuery] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");
  // const { data, loading } = useAxios({
  //   repositoryFunction: searchQuery
  //     ? () => getMealByName({ name: searchQuery })
  //     : getRandomMeal,
  // });

  const handleSearchSubmit = (query: string) => {
    //setSearchQuery(query);
  };

  useEffect(() => {
    console.log("loading first time");
  }, []);
  return (
    <PageWraper>
      <SearchBar onSearchSubmit={handleSearchSubmit} isLoading={false} />
      {/* {data && <p>{data}</p>} */}
    </PageWraper>
  );
};

export default HomePage;

const PageWraper = styled.div`
  display: flex;
  flex-direction: table-column;
  min-height: 100vh;
`;
