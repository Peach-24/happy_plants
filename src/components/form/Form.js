import React, { useState } from "react";
import "./styles.css";

export default function Form({
  fetchWeather,
  postcode_error,
  setWeatherNeedsInState,
}) {
  return (
    <>
      <form id="postcode-form">
        <label htmlFor="postcode-input">
          <input id="postcode-input" placeholder="Enter postcode" />
        </label>
        <p id="needs-desc">What are your plants hoping for?</p>
        <div className="plants-need-option">
          <label htmlFor="needs-rainfall">
            Rainfall
            <input type="checkbox" id="needs-rainfall" />
            🌧
          </label>
        </div>
        <div className="plants-need-option">
          <label htmlFor="needs-sunshine">
            Sunshine
            <input type="checkbox" id="needs-sunshine" />
            🌞
          </label>
        </div>
        <button
          id="submit-postcode"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setWeatherNeedsInState({
              needs_rainfall: document.getElementById("needs-rainfall").checked,
              needs_sunshine: document.getElementById("needs-sunshine").checked,
            });
            fetchWeather(document.getElementById("postcode-input").value);
          }}
        >
          Go
        </button>
        <p>{postcode_error}</p>
      </form>
    </>
  );
}
