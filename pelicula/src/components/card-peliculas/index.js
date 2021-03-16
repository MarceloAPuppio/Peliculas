import React, { useState } from "react";
import "./index.css";
const CardPelicula = ({ parameters }) => {
  const { Poster, Title, Year } = parameters;
  return (
    <React.Fragment>
      <div className="card-pelicula-container">
        <div className="card-pelicula__img-container">
          <img src={Poster} alt="" className="card-pelicula__img" />
        </div>
        <h1 className="card-pelicula__title">{Title}</h1>
        <h4 className="card-pelicula__subtitle">{Year}</h4>
      </div>
    </React.Fragment>
  );
};
export default CardPelicula;
