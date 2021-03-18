import React, { useState } from "react";
import ReactDom from "react-dom";
import "./index.css";
import "../modal-result";
import ModalResult from "../modal-result";
const CardPelicula = ({ parameters }) => {
  const { Poster, Title, Year } = parameters;
  const [estado, setEstado] = useState(false);
  const handleClick = () => {
    setEstado(!estado);
  };
  return (
    <React.Fragment>
      <div className="card-pelicula-container" onClick={handleClick}>
        <div className="card-pelicula__img-container">
          <img src={Poster} alt="" className="card-pelicula__img" />
        </div>
        <h1 className="card-pelicula__title">{Title}</h1>
        <h4 className="card-pelicula__subtitle">{Year}</h4>
      </div>
      {ReactDom.createPortal(
        <ModalResult visible={estado} onClose={handleClick} />,
        document.getElementById("teleport")
      )}
    </React.Fragment>
  );
};
export default CardPelicula;
