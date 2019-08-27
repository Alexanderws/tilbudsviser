import React from "react";

import "../styles.css";

const SuggestionCard = ({ name, description, score }) => {
  return (
    <div className="card">
      <div className="row">
        <h4 className="card__title">{name}</h4>
        <div className="card__score">{score}</div>
      </div>
      <p className="card__description">{description}</p>
    </div>
  );
};

export default SuggestionCard;
