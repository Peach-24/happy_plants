import React from "react";
import "./styles.css";

export default function Header({ type, reset }) {
  return (
    <div>
      {type === "home" ? (
        <>
          <h1>Happy Plants</h1>
          <p id="subtitle">Weather tool for your garden</p>
        </>
      ) : (
        <>
          <div id="nav-header">
            <p onClick={() => reset()}>Happy Plants</p>
            <button id="reset-button" onClick={() => reset()}>
              Reset
            </button>
          </div>
        </>
      )}
    </div>
  );
}
