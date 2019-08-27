import React, { useState, useEffect } from "react";

import SuggestionList from "../SuggestionList";
import OptionsColumn from "../OptionsColumn";

import {
  limitationList,
  desireLimitationRelationList
} from "../../services/ServicesStore";
import { getElligibleServices } from "../../services/RecommendationService";
import "../styles.css";

const App = () => {
  const [userDesire, setDesire] = useState("kleMeg");
  const [userLimitations, setLimitations] = useState(
    limitationList.map(limit => {
      return { id: limit, name: limit, selected: false, disabled: true };
    })
  );

  const handleDesireChange = event => {
    setDesire(event.target.value);
  };

  const handleLimitationsChange = newLimitation => {
    setLimitations(prevState => {
      return prevState.map(limitation => {
        if (limitation.id === newLimitation.id) {
          return { ...limitation, selected: !limitation.selected };
        } else {
          return limitation;
        }
      });
    });
  };

  useEffect(() => {
    setLimitations(prevState => {
      console.log(
        "desireLimitationRelationList: ",
        desireLimitationRelationList[userDesire],
        " userDesire: ",
        userDesire
      );
      return prevState.map(limitation => {
        if (desireLimitationRelationList[userDesire].includes(limitation.id)) {
          return { ...limitation, disabled: false };
        } else {
          return { ...limitation, disabled: true, selected: false };
        }
      });
    });
  }, [userDesire]);

  return (
    <div className="row">
      <OptionsColumn
        activeDesire={userDesire}
        limitations={userLimitations}
        onDesireChange={handleDesireChange}
        onLimitationChange={handleLimitationsChange}
      />
      <SuggestionList
        list={getElligibleServices(userDesire, userLimitations)}
      />
    </div>
  );
};

export default App;
