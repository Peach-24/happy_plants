const axios = require("axios");
// `http://api.postcodes.io/postcodes/${postcode}`)

const fetchLatLng = (postcode) => {
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
        return resultObj;
      })
      .catch((err) => {
        console.log(`Error: Invalid Postcode`);
        return `Error: Invalid Postcode`;
      });
  }
};

const fetchWeather = () => {};

module.exports = {
  fetchLatLng,
};
