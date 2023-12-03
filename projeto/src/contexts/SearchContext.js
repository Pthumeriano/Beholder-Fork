import { createContext, useContext, useState } from "react";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must be used within a SearchContextProvider");
  }

  const { search, setSearch } = context;
  return { search, setSearch };
};
