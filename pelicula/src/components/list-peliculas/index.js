import React, { useState } from "react";
import CardPelicula from "../card-peliculas";

const ListPeliculas = ({ results }) => {
  return results.map((pelicula) => {
    return <CardPelicula parameters={pelicula} />;
  });
};

export default ListPeliculas;
