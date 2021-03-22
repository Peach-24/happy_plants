import React from "react";
import "./styles.css";

import Happiness from "../happiness/Happiness";

export default function Weather({
  daySelected,
  current_weather,
  forecast_weather,
  selections,
}) {
  if (daySelected === "today") {
    return (
      <>
        <div id="weather-info">
          <div id="weather-info-left">
            <p>{current_weather.condition.text}</p>
            <img alt="weather-icon" src={current_weather.condition.icon} />
          </div>
          <div id="weather-info-right">
            <p className="weather-stats">
              <strong>{forecast_weather[0].day.daily_chance_of_rain}</strong> -
              Chance of rain
            </p>
            <p className="weather-stats">
              <strong>{forecast_weather[0].day.avgtemp_c}</strong> - Avg temp
            </p>
            <p className="weather-stats">
              <strong>{forecast_weather[0].day.uv}</strong> - UV level
            </p>
            <p className="weather-stats">
              <strong>{forecast_weather[0].day.avghumidity}</strong> - Humidity
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
  } else if (daySelected === "tomorrow") {
    return (
      <>
        <div id="weather-info">
          <div id="weather-info-left">
            <p>{forecast_weather[1].day.condition.text}</p>
            <img
              alt="weather-icon"
              src={forecast_weather[1].day.condition.icon}
            />
          </div>
          <div id="weather-info-right">
            <p className="weather-stats">
              <strong>{forecast_weather[1].day.daily_chance_of_rain}</strong> -
              Chance of rain
            </p>
            <p className="weather-stats">
              <strong>{forecast_weather[1].day.avgtemp_c}</strong> - Avg temp
            </p>
            <p className="weather-stats">
              <strong>{forecast_weather[1].day.uv}</strong> - UV level
            </p>
            <p className="weather-stats">
              <strong>{forecast_weather[1].day.avghumidity}</strong> - Humidity
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
  } else if (daySelected === "day_after") {
    return (
      <>
        <div id="weather-info">
          <div id="weather-info-left">
            <p>{forecast_weather[2].day.condition.text}</p>
            <img
              alt="weather-icon"
              src={forecast_weather[2].day.condition.icon}
            />
          </div>
          <div id="weather-info-right">
            <p className="weather-stats">
              <strong>{forecast_weather[2].day.daily_chance_of_rain}</strong> -
              Chance of rain
            </p>
            <p className="weather-stats">
              <strong>{forecast_weather[2].day.avgtemp_c}</strong> - Avg temp
            </p>
            <p className="weather-stats">
              <strong>{forecast_weather[2].day.uv}</strong> - UV level
            </p>
            <p className="weather-stats">
              <strong>{forecast_weather[2].day.avghumidity}</strong> - Humidity
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
  }
}
