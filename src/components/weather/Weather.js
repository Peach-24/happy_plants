import React from "react";
import "./styles.css";

export default function Weather({
  daySelected,
  current_weather,
  forecast_weather,
}) {
  console.log(daySelected);
  return <div id="weather-info"></div>;
}
