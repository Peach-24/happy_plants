import React from "react";
import "./styles.css";

export default function Happiness({ selections, forecast_weather }) {
  return (
    <div id="happiness-results">
      {!selections.needs_rainfall && !selections.needs_sunshine ? (
        <>
          <h3>Let's keep your plants happy</h3>
          <p id="no-required-weather-message">
            Your plants are healthy at the moment but check out the weather
            forecast to see if they need watering or if they can go outside for
            some sunlight.
          </p>
        </>
      ) : (
        <>
          <div id="your-plants-need">
            <p>
              Your plants need:
              {selections.needs_rainfall ? <p>💧 Rain</p> : <p></p>}
              {selections.needs_sunshine ? <p> 🌞 Sun</p> : <p></p>}
            </p>
          </div>
          <p id="advice-block">{}</p>
        </>
      )}
    </div>
  );
}
