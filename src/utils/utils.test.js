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
    expect(trimForecastData(input)).toEqual([]);
  });
  it("returns only the chance of rain, avg temp, UV level, humidity, for each of the three days", () => {
    const input = forecast_weather_data;
    const expectedOutput = [
      {
        avghumidity: 80,
        avgtemp_c: 7.3,
        daily_chance_of_rain: "0",
        uv: 3,
      },
      {
        avghumidity: 77,
        avgtemp_c: 7.8,
        daily_chance_of_rain: "0",
        uv: 2,
      },
      {
        avghumidity: 69,
        avgtemp_c: 8.6,
        daily_chance_of_rain: "0",
        uv: 2,
      },
    ];
    expect(trimForecastData(input)).toEqual(expectedOutput);
    expect(trimForecastData(input)[0]).toHaveProperty("avghumidity");
    expect(trimForecastData(input)[0]).toHaveProperty("avgtemp_c");
    expect(trimForecastData(input)[0]).toHaveProperty("daily_chance_of_rain");
    expect(trimForecastData(input)[0]).toHaveProperty("uv");
  });
});

describe("generatePlantAdvice", () => {
  it("returns an empty string when passed no arguments / undefined", () => {
    expect(generatePlantAdvice()).toBe("");
  });
  it("returns an empty string when selections are both false", () => {
    const selections = { needs_rainfall: false, needs_sunshine: false };
    const forecast_weather = forecast_weather_data;
    const daySelected = "today";
    expect(generatePlantAdvice(selections, forecast_weather, daySelected)).toBe(
      ""
    );
  });
  it("returns just one sentence when only one selection is true", () => {
    const selections = { needs_rainfall: true, needs_sunshine: false };
    const forecast_weather = forecast_weather_data;
    const daySelected = "today";
    expect(generatePlantAdvice(selections, forecast_weather, daySelected)).toBe(
      "Doesn't look like there will be any rain. Make sure to water those plants!"
    );
    const selections2 = { needs_rainfall: false, needs_sunshine: true };
    expect(
      generatePlantAdvice(selections2, forecast_weather, daySelected)
    ).toBe(
      " There should be a good amount of sun. Just what your plants need to grow big and strong."
    );
  });
});
