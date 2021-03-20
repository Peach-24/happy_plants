import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import Header from "./components/header/Header";
import Form from "./components/form/Form";

import fetchLatLng from "./api/api_calls";

const weatherApiKey = `8941fff33a9f4798b7d175917211903`;
// http://api.weatherapi.com/v1/forecast.json?key=8941fff33a9f4798b7d175917211903&days=3&q=53.379088,-2.342925

export default class App extends Component {
  state = {
    form_submitted: false,
    postcode: "",
  };

  fetchLatLng = (postcode) => {
    if (!postcode) {
      return "";
    } else {
      return axios
        .get(`http://api.postcodes.io/postcodes/${postcode}`)
        .then((res) => {
          let resultObj = {
            lat: res.data.result.latitude,
            lng: res.data.result.longitude,
          };
          console.log(resultObj);
          this.setState({ postcode: postcode });
          return resultObj;
        })
        .catch((err) => {
          console.log(`Error: Invalid Postcode`);
          return `Error: Invalid Postcode`;
        });
    }
  };

  fetchWeather = (postcode) => {
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
  };

  // FUNCTIONS FOR MANIPULATING THE STATE

  render() {
    const { form_submitted } = this.state;
    return (
      <div className="App">
        {!form_submitted ? (
          <>
            <Header type="home" />
            <Form fetchWeather={this.fetchWeather} />
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
