import "./index.css";
import React, { useState } from "react";

const User = () => {
  return (
    <div className="user-container">
      <h1 className="user__regards">Hola, Pepe</h1>
      <picture>
        <img
          className="user__photo"
          src="https://img.icons8.com/cotton/2x/gender-neutral-user--v1.png"
          alt="imagen de usuario deslogueado color gris"
        />
      </picture>
    </div>
  );
};

export default User;
