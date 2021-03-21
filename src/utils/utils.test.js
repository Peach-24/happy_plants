const {
  isValidPostcode,
  generatePlantAdvice,
  trimForecastData,
} = require("./utils.js");
const forecast_weather_data = require("./forecast_weather.json");

describe("isValidPostcode", () => {
  it("returns false for invalid UK postcode", () => {
    expect(isValidPostcode("llllf")).toBe(false);
  });
  it("returns true for valid UK postcode", () => {
    expect(isValidPostcode("WA15 9BA")).toBe(true);
    expect(isValidPostcode("WA159BA")).toBe(true);
    expect(isValidPostcode("wa159ba")).toBe(true);
  });
});

describe("trimForecastData", () => {
  it("returns an empty obj when passed an empty array", () => {
    const input = [];
    expect(trimForecastData(input)).toBe({});
  });
  it("returns only the chance of rain, avg temp, UV level, humidity", () => {
    const input = forecast_weather_data;
    const expectedOutput = {
      avgtemp_c: 7.3,
      daily_chance_of_rain: "0",
      uv: 3,
      avghumidity: 80,
    };
    expect(trimForecastData(input)).toBe(expectedOutput);
  });
});

describe("generatePlantAdvice", () => {
  it("returns an empty string when passed no arguments / undefined", () => {
    expect(generatePlantAdvice()).toBe("");
  });
  it("returns an empty string when selections are both false", () => {
    const selections = { needs_rainfall: false, needs_sunshine: false };
    const forecast_weather = forecast_weather_data;
    expect(generatePlantAdvice(selections, forecast_weather)).toBe("");
  });
});
