import React, { createContext, useState, useContext } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const updateSearchQuery = (query) => {
    setSearchQuery(query);
  };

  const updateSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        searchResults,
        updateSearchQuery,
        updateSearchResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
