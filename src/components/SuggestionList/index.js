import React from "react";

import SuggestionCard from "../SuggestionCard";

import "../styles.css";

const SuggestionList = ({ list = [] }) => {
  const renderedList = list.map(s => {
    return (
      <SuggestionCard
        key={s.name}
        name={s.name}
        description={s.description}
        score={s.score}
      />
    );
  });

  return <div className="suggestion-container">{renderedList}</div>;
};

export default SuggestionList;
