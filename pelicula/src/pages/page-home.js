import React, { useState } from "react";
import ListPeliculas from "../components/list-peliculas";
import SearchBar from "../components/search-bar";
import Categories from "../components/categories";
import User from "../components/user";
const Home = ({ children }) => {
  const [results = [], setResults] = useState([]);
  const [submit, setSumit] = useState(false);

  const handleResults = (results) => {
    setResults(results);
    setSumit(true);
  };
  return (
    <React.Fragment>
      <User />
      <SearchBar onResults={handleResults} />
      <Categories />
      {results.length === 0 && submit === false && (
        <h2>Busca la película que quieras :)</h2>
      )}
      {results.length === 0 && submit === true && (
        <h2>No se encontraron películas que coincidan con tu búsqueda :(</h2>
      )}
      {results.length !== 0 && <ListPeliculas results={results} />}
    </React.Fragment>
  );
};
export default Home;
