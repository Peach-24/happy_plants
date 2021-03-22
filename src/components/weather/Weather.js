import React from "react";
import "./styles.css";

import Happiness from "../happiness/Happiness";

export default function Weather({
  daySelected,
  current_weather,
  forecast_weather,
  selections,
}) {
  const displayWeatherData = (daySelected) => {
    const dayRef = {
      today: 0,
      tomorrow: 1,
      day_after: 2,
    };
    return (
      <>
        <div id="weather-info">
          <div id="weather-info-left">
            <p>{current_weather.condition.text}</p>
            <img alt="weather-icon" src={current_weather.condition.icon} />
          </div>
          <div id="weather-info-right">
            <p className="weather-stats">
              <strong>
                {forecast_weather[dayRef[daySelected]].day.daily_chance_of_rain}
              </strong>{" "}
              - Chance of rain
            </p>
            <p className="weather-stats">
              <strong>{forecast_weather[dayRef[daySelected]].day.uv}</strong> -
              UV level
            </p>
            <p className="weather-stats">
              <strong>
                {forecast_weather[dayRef[daySelected]].day.avgtemp_c}
              </strong>{" "}
              - Avg temp
            </p>
            <p className="weather-stats">
              <strong>
                {forecast_weather[dayRef[daySelected]].day.avghumidity}
              </strong>{" "}
              - Humidity
            </p>
          </div>
        </div>
        <Happiness
          selections={selections}
          forecast_weather={forecast_weather}
          daySelected={daySelected}
        />
      </>
    );
  };

  return displayWeatherData(daySelected);
}
