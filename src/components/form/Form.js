import React from "react";
import "./styles.css";

export default function Form({ fetchWeather, postcode_error }) {
  return (
    <>
      <form id="postcode-form">
        <label for="postcode-input">
          <input id="postcode-input" placeholder="Enter postcode" />
        </label>
        <p id="needs-desc">What are your plants hoping for?</p>
        <div className="plants-need-option">
          <label for="needs-rainfall">
            Rainfall
            <input type="checkbox" id="needs-rainfall" />
            🌧
          </label>
        </div>
        <div className="plants-need-option">
          <label for="needs-sunshine">
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
