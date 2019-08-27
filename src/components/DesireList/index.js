import React from "react";

const DesireList = ({ desires, onSetDesire }) => {
  return (
    <div className="column">
      <h3>Desires</h3>
      <form>
        {desireArr.map(d => {
          return (
            <div>
              <label>
                <input
                  type="radio"
                  value={d}
                  key={d}
                  name="desires"
                  className={chosenDesire === d ? "selected" : ""}
                  checked={() => onSetDesire(d)}
                />
                {d}
              </label>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default DesireList;
