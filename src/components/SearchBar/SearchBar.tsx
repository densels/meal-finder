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
    <div>
      <input
        id="searchbar"
        disabled={isLoading}
        onChange={handleInputChange}
        type="text"
        name={searchInput}
        placeholder="Search for meals..."
      />
      <button
        id="submit"
        type="button"
        disabled={isLoading}
        onClick={() => onSearchSubmit(searchInput)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
