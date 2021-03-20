import React from "react";
import "./styles.css";

export default function Form({ fetchWeather, postcode_error }) {
  return (
    <>
      <form id="postcode-form">
        <input id="postcode-input" placeholder="Enter postcode" />
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
