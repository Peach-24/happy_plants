import React, { useState, useEffect } from "react";
import "./styles.css";

import { generatePlantAdvice } from "../../utils/utils";

export default function Happiness({
  selections,
  forecast_weather,
  daySelected,
}) {
  const [loaded, setLoaded] = useState(false);
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      let adviceText = generatePlantAdvice(
        selections,
        forecast_weather,
        daySelected
      );
      setAdvice(adviceText);
      setLoaded(true);
    }
    return () => (mounted = false);
  }, [forecast_weather, selections, daySelected]);

  return (
    <>
      {loaded ? (
        <div id="happiness-results">
          {!selections.needs_rainfall && !selections.needs_sunshine ? (
            <>
              <h3>Let's keep your plants happy</h3>
              <p id="no-required-weather-message" className="advice-block">
                Your plants are healthy at the moment but check out the weather
                forecast to see if they need watering or if they can go outside
                for some sunlight.
              </p>
            </>
          ) : (
            <>
              <div id="your-plants-need">
                <p>Your plants need: </p>
                {selections.needs_rainfall ? <p>💧 Rain</p> : <p></p>}
                {selections.needs_sunshine ? <p> 🌞 Sun</p> : <p></p>}
              </div>
              <p className="advice-block">{advice}</p>
            </>
          )}
        </div>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}
