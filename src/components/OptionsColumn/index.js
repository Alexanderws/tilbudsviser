import React from "react";

import { desireList, limitationList } from "../../services/ServicesStore";

const OptionsColumn = ({
  activeDesire,
  limitations,
  onDesireChange,
  onLimitationChange
}) => {
  const desireChoices = (
    <div>
      <h3>ØNSKER</h3>
      <ul className="list">
        {desireList.map(desire => {
          return (
            <li key={desire}>
              <div className="input-toggle">
                <label>
                  <input
                    type="radio"
                    value={desire}
                    name="desires"
                    checked={activeDesire === desire}
                    onChange={onDesireChange}
                  />
                  {desire}
                </label>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );

  const limitationChoices = (
    <div>
      <h3>HINDRINGER</h3>
      <ul className="list">
        {limitations.map(limitation => {
          return (
            <li key={limitation.id}>
              <div className="input-toggle">
                <label className={limitation.disabled ? "disabled" : ""}>
                  <input
                    type="checkbox"
                    value={limitation.name}
                    disabled={limitation.disabled}
                    checked={limitation.selected}
                    name="limitations"
                    onChange={() => onLimitationChange(limitation)}
                  />
                  {limitation.name}
                </label>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <div className="choice-column">
      {desireChoices}
      {limitationChoices}
    </div>
  );
};

export default OptionsColumn;
