import React from "react";

export default function Weather({ current_weather, forecast_weather }) {
  return (
    <div>
      <h1>Weather Report</h1>
      <p>{forecast_weather.toString()}</p>
    </div>
  );
}
