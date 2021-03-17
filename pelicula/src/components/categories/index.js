import "./index.css";
import React, { useState } from "react";
import Category from "../category";

const Categories = () => {
  return (
    <div className="categories-container">
      <Category emoji="😱" title="Terror" />
      <Category emoji="🥰" title="Amor" />
      <Category emoji="🤪" title="Comedia" />
      <Category emoji="🥺" title="Drama" />
    </div>
  );
};

export default Categories;
