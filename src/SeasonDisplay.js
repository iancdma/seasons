import React from "react";
import './SeasonDisplay.css';

class SeasonDisplay extends React.Component {
  state = {};

  render() {
    const season = getSeason(this.props.latitude, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];

    return (
      <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}></i>
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`}></i>
      </div>
    );
  }
}

const getSeason = (lat, month) => {
  if (month >= 3 && month <= 8) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const seasonConfig = {
  winter: {
    text: 'Burr, it is chilly.',
    iconName: 'snowflake'
  },
  summer: {
    text: 'Let\'s hit the beach!',
    iconName: 'sun'
  }
}

export default SeasonDisplay;
