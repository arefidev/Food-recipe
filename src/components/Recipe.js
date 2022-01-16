import React from "react";

export default function Recipe({ title, image, ingredients }) {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <img src={image} alt="recipes" />
      <ul style={{ listStyle: "none" }}>
        {ingredients.map((element) => (
          <li>- {element.text}</li>
        ))}
      </ul>
    </div>
  );
}
