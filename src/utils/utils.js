const isValidPostcode = (postcode) => {
  const regex = /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/;
  return regex.test(postcode);
};

const trimForecastData = (forecast_data) => {
  // code here
};

const generatePlantAdvice = (selections, forecast_weather) => {
  // code here
};

module.exports = {
  isValidPostcode,
  trimForecastData,
  generatePlantAdvice,
};
