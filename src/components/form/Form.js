import React from "react";
import { fetchLatLng } from "../../api/api_calls";

export default function Form({ fetchWeather }) {
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
      </form>
    </>
  );
}
