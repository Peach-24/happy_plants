import React, { useState } from "react";
import "./styles.css";

import Weather from "../weather/Weather";
import Happiness from "../happiness/Happiness";

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
      <div className="date-options">
        <table>
          <tr>
            <td>
              <label htmlFor="today">
                <input
                  type="radio"
                  className="day-option today"
                  name="day-option"
                  value="today"
                  checked={state.day === "today"}
                  onChange={handleChange}
                ></input>
                <p>Today</p>
              </label>
            </td>
            <td>
              <label htmlFor="tomorrow">
                <input
                  type="radio"
                  className="day-option tomorrow"
                  name="day-option"
                  value="tomorrow"
                  checked={state.day === "tomorrow"}
                  onChange={handleChange}
                ></input>
                <p>Tomorrow</p>
              </label>
            </td>
            <td>
              <label htmlFor="day_after">
                <input
                  type="radio"
                  className="day-option day_after"
                  name="day-option"
                  value="day_after"
                  checked={state.day === "day_after"}
                  onChange={handleChange}
                ></input>
                <p>Day after</p>
              </label>
            </td>
          </tr>
        </table>
      </div>
      <div id="location-info">
        <h3>
          {location_data.name}, {location_data.region}
        </h3>
      </div>
      <div id="results-breakdown">
        <Weather
          daySelected={state.day}
          current_weather={current_weather}
          forecast_weather={forecast_weather.forecastday}
        />
        <Happiness />
      </div>
    </div>
  );
}
