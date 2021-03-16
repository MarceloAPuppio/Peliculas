import React, { useState } from "react";
import ListPeliculas from "../components/list-peliculas";
import SearchBar from "../components/search-bar";
const Home = ({ children }) => {
  const [results = [], setResults] = useState([]);
  const [submit, setSumit] = useState(false);

  const handleResults = (results) => {
    setResults(results);
    setSumit(true);
  };
  return (
    <React.Fragment>
      <SearchBar onResults={handleResults} />
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
