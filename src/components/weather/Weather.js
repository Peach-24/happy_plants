import React from "react";
import "./styles.css";

export default function Weather({
  daySelected,
  current_weather,
  forecast_weather,
}) {
  console.log(forecast_weather);
  if (daySelected === "today") {
    return (
      <>
        {/* <div id="current-weather">
          <h4>Today</h4>
          <p>{current_weather.condition.text}</p>
          <img src={current_weather.condition.icon} />
        </div> */}

        <div id="weather-info">
          <p>{current_weather.condition.text}</p>
          <img src={current_weather.condition.icon} />
          <p>Chance of rain: {forecast_weather[1].day.daily_chance_of_rain}</p>
        </div>
      </>
    );
  } else if (daySelected === "tomorrow") {
    return (
      <div id="weather-info">
        <p>{forecast_weather[1].day.condition.text}</p>
        <img src={forecast_weather[1].day.condition.icon} />
        <p>Chance of rain: {forecast_weather[1].day.daily_chance_of_rain}</p>
      </div>
    );
  } else if (daySelected === "day_after") {
    return (
      <div id="weather-info">
        <p>{forecast_weather[2].day.condition.text}</p>
        <img src={forecast_weather[2].day.condition.icon} />
        <p>Chance of rain: {forecast_weather[2].day.daily_chance_of_rain}</p>
      </div>
    );
  }
}
