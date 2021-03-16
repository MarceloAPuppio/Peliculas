import React, { useState } from "react";
import CardPelicula from "../card-peliculas";
import "./index.css";

const ListPeliculas = ({ results }) => {
  return (
    <div className="list-peliculas-container">
      {results.map((pelicula) => {
        return <CardPelicula parameters={pelicula} />;
      })}
    </div>
  );
};

export default ListPeliculas;
