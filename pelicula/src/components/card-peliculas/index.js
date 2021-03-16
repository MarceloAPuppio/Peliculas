import React, { useState } from "react";

const CardPelicula = ({ parameters }) => {
  const { Poster, Title, Year } = parameters;
  return (
    <React.Fragment>
      <img src={Poster} alt="" />
      <h1>{Title}</h1>
      <h4>{Year}</h4>
    </React.Fragment>
  );
};
export default CardPelicula;
