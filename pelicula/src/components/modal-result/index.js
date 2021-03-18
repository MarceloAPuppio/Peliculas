import "./index.css";
import React, { useState, useEffect } from "react";

const ModalResult = ({ visible, onClose }) => {
  //   const [estado, setEstado] = useState(visible);
  //   useEffect(() => {
  //     setEstado(visible);
  //   });
  //   const handleclick = () => {
  //     setEstado(false);
  //   };
  if (visible === false) return null;
  return (
    <div className="modal-result-container">
      <div className="modal-result-header">
        <i class="fas fa-chevron-left" onClick={onClose}></i>{" "}
        <span>Descripción</span>
      </div>
      <div className="modal-result__img-container">
        <img
          src="https://m.media-amazon.com/images/M/MV5BYjg4ZjUzMzMtYzlmYi00YTcwLTlkOWUtYWFmY2RhNjliODQzXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"
          alt=""
        />
      </div>
      <div className="modal-result__card-info">
        <h2 className="card-info__title">SOY UN Maldito Modal</h2>
        <p className="card-info__director">Director</p>
        <div className="card-info__budget-container">
          <span>Drama</span>
          <span>comedia</span>
          <span>Terror</span>
          <span>Ciencia</span>
        </div>
      </div>
      <p className="card-info__sinopsis">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        minus incidunt veritatis error. Consequatur esse alias, architecto ullam
        voluptatem quam unde quos pariatur, tempore ex ad, illum eum? Aperiam,
        praesentium?
      </p>
      {/* con un before le pongo el title sinopsis, corta la bocha */}
    </div>
  );
};
export default ModalResult;
