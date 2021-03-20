import React from "react";

export default function Form({ fetchWeather, postcode_error }) {
  return (
    <>
      <form>
        <input id="postcode-input" placeholder="Enter your postcode" />
        <button
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
