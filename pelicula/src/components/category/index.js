import "./index.css";
import React from "react";

const Category = ({ emoji, title }) => {
  return (
    <div className="category-container">
      <span className="category__emoji">{emoji}</span>
      <span className="category__title">{title}</span>
    </div>
  );
};
export default Category;
