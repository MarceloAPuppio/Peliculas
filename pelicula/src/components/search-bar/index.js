import React, { useState } from "react";
import './index.css'

const SearchBar = ({ onResults }) => {
  const [APIKEY] = useState("c421f06a");
  const [busqueda, setBusqueda] = useState("");
  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies(busqueda);
    setBusqueda("");
  };
  const fetchMovies = async (pelicula) => {
    let data = await fetch(
      `http://www.omdbapi.com/?apikey=${APIKEY}&s=${pelicula}`
    );
    let { Search } = await data.json();
    onResults(Search);
  };
  return (
    <div className="searchBar-container">
    <form onSubmit={handleSubmit} autoComplete="false">
      <input type="text" onChange={handleChange} value={busqueda} />
      <button>Buscar</button>
      <h1>{busqueda}</h1>
    </form>
    </div>
  );
};

export default SearchBar;
