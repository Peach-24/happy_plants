import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import Header from "./components/header/Header";
import Form from "./components/form/Form";

import fetchLatLng from "./api/api_calls";
import { isValidPostcode } from "./utils/utils";

const weatherApiKey = `8941fff33a9f4798b7d175917211903`;

export default class App extends Component {
  state = {
    form_submitted: false,
    postcode: "",
    postcode_error: "",
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
          console.log(latLng);
          return latLng;
        })
        .then((latLng) => {
          const weather = axios
            .get(
              `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&days=3&q=${latLng.lat},${latLng.lng}`
            )
            .then((res) => {
              console.log(res.data);
              return res.data;
            });
        });
    }
  };

  render() {
    const { form_submitted, postcode_error } = this.state;
    return (
      <div className="App">
        {!form_submitted ? (
          <>
            <Header type="home" />
            <Form
              fetchWeather={this.fetchWeather}
              postcode_error={postcode_error}
            />
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
