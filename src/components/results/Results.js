import React, { useState } from "react";
import "./styles.css";

import Weather from "../weather/Weather";

export default function Results({
  current_weather,
  forecast_weather,
  location_data,
}) {
  const [state, setState] = useState({
    day: "today",
  });

  function handleChange(e) {
    setState({ day: e.target.value });
  }

  return (
    <div>
      <h1>Weather Report</h1>
      <div id="date-selection">
        <label htmlFor="today">
          Today
          <input
            type="radio"
            id="today"
            name="day-option"
            value="today"
            checked={state.day === "today"}
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor="tomorrow">
          <input
            type="radio"
            id="female"
            name="day-option"
            value="tomorrow"
            checked={state.day === "tomorrow"}
            onChange={handleChange}
          ></input>
          Tomorrow
        </label>
        <label htmlFor="day_after">
          <input
            type="radio"
            id="day_after"
            name="day-option"
            value="day_after"
            checked={state.day === "day_after"}
            onChange={handleChange}
          ></input>
          Day after
        </label>
      </div>
      <div id="location-info">
        <h3>
          {location_data.name}, {location_data.region}
        </h3>
      </div>
      <Weather
        daySelected={state.day}
        current_weather={current_weather}
        forecast_weather={forecast_weather}
      />
    </div>
  );
}
