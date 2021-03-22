const isValidPostcode = (postcode) => {
  const regex = /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/;
  return regex.test(postcode);
};

const trimForecastData = (forecast_data) => {
  if (forecast_data.length === 0 || forecast_data === undefined) return [];
  let trimmedDaysData = [];

  forecast_data.forEach((date) => {
    trimmedDaysData.push({
      avghumidity: date.day.avghumidity,
      avgtemp_c: date.day.avgtemp_c,
      daily_chance_of_rain: date.day.daily_chance_of_rain,
      uv: date.day.uv,
    });
  });
  return trimmedDaysData;
};

const generatePlantAdvice = (selections, forecast_weather, daySelected) => {
  if (!selections && !forecast_weather) return "";
  const trimmedForecast = trimForecastData(forecast_weather);
  let finalStr = "";

  const dayRef = {
    today: 0,
    tomorrow: 1,
    day_after: 2,
  };

  if (selections.needs_rainfall) {
    if (trimmedForecast[dayRef[daySelected]].daily_chance_of_rain === "0") {
      finalStr += "There'll be no rain today. Make sure to water those plants!";
    } else {
      finalStr +=
        "There's a good chance of rain today so you don't need to water your plants if they're outside.";
    }
  }
  if (selections.needs_sunshine) {
    if (trimmedForecast[dayRef[daySelected]].uv < 2) {
      finalStr +=
        " Hardly any sun today. Hopefully there will be more sun on its way next week. ";
    } else if (trimmedForecast[dayRef[daySelected]].uv === 2) {
      finalStr +=
        " There will be some sun today but not much. No need to worry about your plants getting too hot.";
    } else if (trimmedForecast[dayRef[daySelected]].uv === 3) {
      finalStr +=
        " There should be a good amount of sun today. Just what your plants need to grow big and strong.";
    } else if (trimmedForecast[dayRef[daySelected]].uv > 3) {
      finalStr +=
        " There is sun, sun, sun today. Make sure those plants are hydrated and you've put your suncream on.";
    }
  }
  return finalStr;
};

module.exports = {
  isValidPostcode,
  trimForecastData,
  generatePlantAdvice,
};
