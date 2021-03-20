import React, { Component } from "react";
import "./App.css";

import Header from "./components/header/Header";
import Form from "./components/form/Form";

export default class App extends Component {
  state = {
    form_submitted: false,
  };

  // FUNCTIONS FOR MANIPULATING THE STATE

  render() {
    const { form_submitted } = this.state;
    return (
      <div className="App">
        {!form_submitted ? (
          <>
            <Header type="home" />
            <Form />
          </>
        ) : (
          <>
            <Header type="results" />
          </>
        )}
      </div>
    );
  }
}
