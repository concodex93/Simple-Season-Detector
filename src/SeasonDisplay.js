import React from 'react';

const getSeason = (latitude, month) => {
  // Is summer
  if (month > 2 && month < 9) {
    return latitude > 0 ? 'summer' : 'winter';
    // Is winter
  } else {
    return latitude > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  const currentSeason = getSeason(props.latitude, new Date().getMonth());
  return (
    <div>
      <h1>
        {currentSeason === 'summer'
          ? "It's summer! Hit the beach!"
          : "Burr winter is coming, it's cold!"}
      </h1>
    </div>
  );
};

export default SeasonDisplay;
