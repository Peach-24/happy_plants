import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Results from "./components/results/Results";

import { isValidPostcode } from "./utils/utils";

const weatherApiKey = `8941fff33a9f4798b7d175917211903`;

export default class App extends Component {
  state = {
    form_submitted: false,
    postcode: "",
    postcode_error: "",
    current_weather: {},
    forecast_weather: {},
    location_data: {},
    needs_rainfall: false,
    needs_sunshine: false,
  };

  reset = () => {
    this.setState({
      form_submitted: false,
      postcode: "",
      postcode_error: "",
      current_weather: {},
      forecast_weather: {},
      location_data: {},
      needs_rainfall: false,
      needs_sunshine: false,
    });
  };

  fetchWeather = (postcode) => {
    if (!postcode) {
      return "";
    } else if (!isValidPostcode(postcode)) {
      this.setState({ postcode_error: "Error: Invalid Postcode" });
    } else {
      return axios
        .get(`http://api.postcodes.io/postcodes/${postcode}`)
        .then((res) => {
          let latLng = {
            lat: res.data.result.latitude,
            lng: res.data.result.longitude,
          };

          return latLng;
        })
        .then((latLng) => {
          axios
            .get(
              `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&days=3&q=${latLng.lat},${latLng.lng}`
            )
            .then((res) => {
              this.setState({
                current_weather: res.data.current,
                forecast_weather: res.data.forecast,
                location_data: res.data.location,
                form_submitted: true,
              });
              return res.data;
            });
        });
    }
  };

  setWeatherNeedsInState = (selections) => {
    this.setState({
      needs_rainfall: selections.needs_rainfall,
      needs_sunshine: selections.needs_sunshine,
    });
  };

  render() {
    const {
      form_submitted,
      postcode_error,
      current_weather,
      forecast_weather,
      location_data,
    } = this.state;

    return (
      <div id="App">
        <div id="background">
          {!form_submitted ? (
            <div className="main-container home">
              <Header type="home" />
              <Form
                fetchWeather={this.fetchWeather}
                setWeatherNeedsInState={this.setWeatherNeedsInState}
                postcode_error={postcode_error}
              />
            </div>
          ) : (
            <div className="main-container results">
              <Header type="results" reset={this.reset} />
              <Results
                current_weather={current_weather}
                forecast_weather={forecast_weather}
                location_data={location_data}
                selections={{
                  needs_rainfall: this.state.needs_rainfall,
                  needs_sunshine: this.state.needs_sunshine,
                }}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
