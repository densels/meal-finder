import React, { useState } from "react";

import styled from "styled-components";

interface SearchBarProps {
  onSearchSubmit: (searchString: string) => void;
  isLoading: boolean;
}
// TODO: Style button, SearchInput and add generic loading state
const SearchBar = ({ onSearchSubmit, isLoading }: SearchBarProps) => {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <SearchBarWrapper data-testid="search-bar-wrapper" action="">
      <SearchInput
        data-testid="search-input-field"
        id="searchbar"
        disabled={isLoading}
        onChange={handleInputChange}
        type="text"
        name={searchInput}
        placeholder="Search for meals..."
      />
      <SearchButton
        data-testid="search-input-button"
        disabled={isLoading}
        onClick={() => onSearchSubmit(searchInput)}
      >
        Search
      </SearchButton>
    </SearchBarWrapper>
  );
};

export default SearchBar;

const SearchBarWrapper = styled.form`
  display: flex;
  margin: 2.5em;
  padding: 1.5em;
  justify-content: center;
  max-width: 25em;
`;

const SearchButton = styled.button`
  width: auto;
  height: auto;
  border: 1px solid #be9d1a;
  background: #be9d1a;
  text-align: center;
  color: white;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
`;

const SearchInput = styled.input`
  width: 100%;
  border: 3px solid #be9d1a;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #000;
`;
