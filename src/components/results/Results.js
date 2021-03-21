import React, { useState } from "react";
import "./styles.css";

import Weather from "../weather/Weather";
import Happiness from "../happiness/Happiness";

export default function Results({
  current_weather,
  forecast_weather,
  location_data,
  selections,
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
          <tbody>
            <tr>
              <td>
                <label htmlFor="today">
                  <p>Today</p>
                  <input
                    type="radio"
                    className="day-option today"
                    name="day-option"
                    value="today"
                    checked={state.day === "today"}
                    onChange={handleChange}
                  ></input>
                </label>
              </td>
              <td>
                <label htmlFor="tomorrow">
                  <p>Tomorrow</p>
                  <input
                    type="radio"
                    className="day-option tomorrow"
                    name="day-option"
                    value="tomorrow"
                    checked={state.day === "tomorrow"}
                    onChange={handleChange}
                  ></input>
                </label>
              </td>
              <td>
                <label htmlFor="day_after">
                  <p>Day after</p>
                  <input
                    type="radio"
                    className="day-option day_after"
                    name="day-option"
                    value="day_after"
                    checked={state.day === "day_after"}
                    onChange={handleChange}
                  ></input>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="weather-breakdown">
        <h4>
          {location_data.name}, {location_data.region}
        </h4>
        <Weather
          daySelected={state.day}
          current_weather={current_weather}
          forecast_weather={forecast_weather.forecastday}
          selections={selections}
        />
        <div id="happy-breakdown">
          <Happiness
            selections={selections}
            forecast_weather={forecast_weather.forecastday}
          />
        </div>
      </div>
    </div>
  );
}
