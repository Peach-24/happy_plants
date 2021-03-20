import React from "react";
import "./styles.css";

export default function Header({ type, reset }) {
  return (
    <div>
      {type === "home" ? (
        <>
          <h1>Happy Plants</h1>
          <p>Weather tool for your garden </p>{" "}
        </>
      ) : (
        <>
          <nav id="nav-header">
            <p>Happy Plants</p>
            <button onClick={() => reset()}>Reset</button>
          </nav>
        </>
      )}
    </div>
  );
}
