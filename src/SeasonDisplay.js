import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: "Let's go to the beach!",
    iconName: 'sun'
  },
  winter: {
    text: "Burr, it's cold!",
    iconName: 'snowflake'
  }
};

const getSeason = (latitude, month) => {
  // Is summer
  if (month > 2 && month < 9) {
    return latitude > 0 ? 'summer' : 'winter';
    // Is winter
  } else {
    return latitude > 0 ? 'winter' : 'summer';
  }
};

// Component
const SeasonDisplay = props => {
  const currentSeason = getSeason(props.latitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[currentSeason];
  return (
    <div className={`season-display ${currentSeason}`}>
      <i className={`${iconName} icon-left icon massive`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon-right icon massive`} />
    </div>
  );
};

export default SeasonDisplay;
